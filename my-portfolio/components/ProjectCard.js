import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="relative w-full h-60">
          <Image
            src={project.imageUrl || 'https://via.placeholder.com/400x300'} // Fallback placeholder
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="p-4 bg-gray-800">
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-gray-400">{project.category}</p>
        </div>
    </Link>
  );
};

export default ProjectCard;
