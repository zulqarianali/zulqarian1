// This is a mock API route for managing projects.
// It uses an in-memory array for demonstration purposes.
// In a real application, you would replace this with calls to the Firebase Admin SDK to interact with Firestore.

let projects = [
    { id: 1, title: 'Commercial Ad Campaign', slug: 'commercial-ad-campaign', category: 'Video', imageUrl: 'https://via.placeholder.com/400x300/6366F1/FFFFFF?text=Project+1' },
    { id: 2, title: 'Brand Logo Animation', slug: 'brand-logo-animation', category: 'Motion', imageUrl: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Project+2' },
    { id: 3, title: 'Social Media Graphics Pack', slug: 'social-media-graphics', category: 'Graphics', imageUrl: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Project+3' },
];

export default function handler(req, res) {
  // TODO: In a real app, you would add authentication middleware here
  // to verify the user's token before allowing any operations.

  switch (req.method) {
    case 'GET':
      // TODO: Replace with: `const snapshot = await db.collection('projects').get();`
      res.status(200).json(projects);
      break;

    case 'POST':
      // TODO: Replace with: `const newProjectRef = await db.collection('projects').add(req.body);`
      const newProject = {
        id: Date.now(), // Use a simple unique ID for mock data
        ...req.body,
      };
      projects.push(newProject);
      res.status(201).json(newProject);
      break;

    case 'PUT':
      const { id: putId } = req.query;
      // TODO: Replace with: `await db.collection('projects').doc(putId).update(req.body);`
      projects = projects.map(p => (p.id === parseInt(putId) ? { ...p, ...req.body } : p));
      res.status(200).json({ message: 'Project updated' });
      break;

    case 'DELETE':
      const { id: deleteId } = req.query;
      // TODO: Replace with: `await db.collection('projects').doc(deleteId).delete();`
      projects = projects.filter(p => p.id !== parseInt(deleteId));
      res.status(200).json({ message: 'Project deleted' });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
