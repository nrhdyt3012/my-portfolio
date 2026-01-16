import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projects = [
    {
      id: 1,
      title:
        "Cloud Migration Strategy: Money Tracker App on Google Cloud Platform",
      description:
        "Successfully executed a cloud migration project effectively moving a monolith on-premise application to a scalable cloud-native architecture on Google Cloud Platform (GCP).Role: Cloud Engineer Objective: Reduce upfront infrastructure costs and improve scalability by deploying a web-based financial recording application (Money Tracker).Key Implementations:Microservices Deployment: Deployed separated services for Front-End (PHP/CodeIgniter) and Back-End (Node.js) using Google App Engine to ensure isolated scalability.Managed Database: Provisioned and secured Cloud SQL (MySQL) instances for reliable structured data storage, moving away from local database management.Object Storage Integration: Configured Google Cloud Storage buckets to handle unstructured data (transaction attachments/images) with proper public access policies.Security & IAM: Applied the Principle of Least Privilege using Service Accounts and IAM roles to secure communication between the application, database, and storage.\nTroubleshooting: Resolved dependency issues and configured environment variables for seamless API communication between services.",
      technologies: [
        "Google Cloud Platform",
        "App Engine",
        "Cloud SQL",
        "Cloud Storage",
        "PHP",
        "Node.js",
      ],
      link: "https://github.com/Capstone-Ps109/PlantRo",
      images: [
        "/images/gce-1.png",
        "/images/gce-2.png",
        "/images/gce-3.png",
        "/images/gce-4.png",
        "/images/gce-5.png",
      ],
    },
  ];

  const handlePrevImage = (projectId) => {
    setCurrentImageIndex((prev) => {
      const project = projects.find((p) => p.id === projectId);
      const currentIdx = prev[projectId] || 0;
      const newIdx =
        currentIdx === 0 ? project.images.length - 1 : currentIdx - 1;
      return { ...prev, [projectId]: newIdx };
    });
  };

  const handleNextImage = (projectId) => {
    setCurrentImageIndex((prev) => {
      const project = projects.find((p) => p.id === projectId);
      const currentIdx = prev[projectId] || 0;
      const newIdx = (currentIdx + 1) % project.images.length;
      return { ...prev, [projectId]: newIdx };
    });
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="space-y-12">
            {projects.map((project) => {
              const currentIdx = currentImageIndex[project.id] || 0;
              const totalImages = project.images.length;

              return (
                <div
                  key={project.id}
                  className="rounded-xl border border-white/10 overflow-hidden hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {/* Image Gallery Section */}
                  <div className="relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 aspect-video flex items-center justify-center group">
                    {/* Placeholder Image */}
                    <div className="w-full h-full bg-white/5 flex items-center justify-center text-gray-500">
                      <img
                        src={project.images[currentIdx]}
                        alt={`${project.title} - Image ${currentIdx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/800x450?text=${
                            project.title
                          }+${currentIdx + 1}`;
                        }}
                      />
                    </div>

                    {/* Navigation Buttons */}
                    {totalImages > 1 && (
                      <>
                        <button
                          onClick={() => handlePrevImage(project.id)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-500/70 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={24} />
                        </button>

                        <button
                          onClick={() => handleNextImage(project.id)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-500/70 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
                          aria-label="Next image"
                        >
                          <ChevronRight size={24} />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                          {currentIdx + 1} / {totalImages}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Project Info Section */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                      View on GitHub ↗️
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
