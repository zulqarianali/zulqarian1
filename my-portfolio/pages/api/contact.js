// This is a mock API route for the contact form.
// In a real application, you would handle the form data here,
// for example, by sending an email or saving it to a database.

export default function handler(req, res) {
  if (req.method === 'POST') {
    // TODO: Implement actual logic (e.g., send email with Nodemailer, save to Firestore)
    const { name, email, message } = req.body;

    console.log('Received contact form submission:');
    console.log({ name, email, message });

    // For now, just return a success response.
    res.status(200).json({ message: 'Message received successfully.' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
