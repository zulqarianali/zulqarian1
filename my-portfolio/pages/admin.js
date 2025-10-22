import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ProjectForm from '../components/Admin/ProjectForm';
import Modal from '../components/Modal';

// This is a client-side protected route.
// In a real application, you would also protect the API routes with server-side authentication.

export default function AdminDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    // --- MOCK AUTH CHECK ---
    const token = localStorage.getItem('authToken');
    if (token !== 'MOCK_TOKEN') {
      router.push('/login');
    } else {
      fetchProjects();
      setIsLoading(false);
    }
  }, [router]);

  const fetchProjects = async () => {
    // Fetch projects from our mock API
    const res = await fetch('/api/admin/projects');
    const data = await res.json();
    setProjects(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  const handleAddProject = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDeleteProject = async (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      // Call mock API to delete
      await fetch(`/api/admin/projects?id=${id}`, { method: 'DELETE' });
      fetchProjects(); // Refresh list
    }
  };

  const handleFormSubmit = async (projectData) => {
    const url = projectData.id ? `/api/admin/projects?id=${projectData.id}` : '/api/admin/projects';
    const method = projectData.id ? 'PUT' : 'POST';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData),
    });

    fetchProjects();
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Layout><div className="text-center py-20">Loading...</div></Layout>;
  }

  return (
    <Layout title="Admin Dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>

        <div className="bg-gray-800 shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Projects</h2>
            <button onClick={handleAddProject} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Add New Project
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 border-b-2 border-gray-700"></th>
                </tr>
              </thead>
              <tbody className="bg-gray-800">
                {projects.map(project => (
                  <tr key={project.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{project.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{project.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                      <button onClick={() => handleEditProject(project)} className="text-indigo-400 hover:text-indigo-300">Edit</button>
                      <button onClick={() => handleDeleteProject(project.id)} className="text-red-400 hover:text-red-300">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
        <ProjectForm
          project={editingProject}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </Layout>
  );
}
