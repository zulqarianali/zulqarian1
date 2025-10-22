// This is a mock API route for authentication.
// In a real application, you would replace this with Firebase Authentication logic.

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // TODO: Replace this with a call to Firebase Auth's signInWithEmailAndPassword
    // For now, we'll just check for a mock user.
    if (email === 'admin@example.com' && password === 'password') {
      // In a real app, Firebase would return a real JWT.
      res.status(200).json({ token: 'MOCK_TOKEN' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
