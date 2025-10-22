# Zulqarnain Ali - Portfolio Website

This is a frontend-only Next.js project for a professional portfolio website for "Zulqarnain Ali", a Video Editor & Graphic Designer. It is built with React and Tailwind CSS and is designed to be easily connected to a Firebase backend.

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd my-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project by copying the example file:
    ```bash
    cp .env.local.example .env.local
    ```
    You will need to fill in the values in `.env.local` when you connect to Firebase. For now, the mock API will work without them.

### Running the Development Server

To start the development server, run:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Environment Variables on Vercel

When you connect this project to a real Firebase backend, you will need to add your environment variables to your Vercel project settings:

1.  Go to your project's dashboard on Vercel.
2.  Navigate to the "Settings" tab and then "Environment Variables".
3.  Add the client-side variables (prefixed with `NEXT_PUBLIC_`).
4.  For the `FIREBASE_SERVICE_ACCOUNT`, which is a JSON key file, it is highly recommended to encode the file content to a Base64 string and store it as a single environment variable. You can then decode it in your serverless functions.

## Connecting to a Firebase Backend

This project uses mock API endpoints. To connect to a real Firebase backend, you'll need to do the following:

### 1. Firebase Project Setup

- Create a new project on the [Firebase Console](https://console.firebase.google.com/).
- Set up Firebase Authentication (e.g., Email/Password).
- Set up Firestore as your database.
- Set up Firebase Storage to host your images and videos.

### 2. Client-Side (Frontend) Integration

You'll need a Firebase configuration object. You can find this in your Firebase project settings.

- **Install the Firebase SDK:** `npm install firebase`
- **Create a Firebase utility file:** e.g., `lib/firebase.js`

```javascript
// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // ... other config
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

- **Update the login page (`pages/login.js`)** to use Firebase Authentication:

```javascript
// Replace the fetch call in pages/login.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase"; // Assuming you created the utility file

// ... inside your handleLogin function
try {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  // TODO: Get the auth token, store it, and redirect to /admin
  console.log(user);
} catch (error) {
  console.error("Firebase Auth Error:", error);
}
```

### 3. Server-Side (API Routes) Integration

- **Install the Firebase Admin SDK:** `npm install firebase-admin`
- **Initialize the Admin SDK in your API routes.**

**Security Reminder:** NEVER commit your service account JSON file to a public repository. Use environment variables.

Here's how you might update an API route, for example `pages/api/admin/projects.js`:

```javascript
// pages/api/admin/projects.js
import admin from 'firebase-admin';

// TODO: Initialize Firebase Admin SDK
// This should ideally be done in a separate utility file
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)),
      // ... other config
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

const db = admin.firestore();

export default async function handler(req, res) {
  // TODO: Add middleware to verify the user's auth token

  if (req.method === 'GET') {
    const projectsCol = await db.collection('projects').get();
    const projects = projectsCol.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return res.status(200).json(projects);
  }

  // TODO: Implement POST, PUT, DELETE methods

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
```
This README provides a solid foundation for getting started and for future backend integration.
