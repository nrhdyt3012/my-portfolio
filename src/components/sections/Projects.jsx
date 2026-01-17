import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedProjects, setExpandedProjects] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const categories = [
    { id: "all", label: "All Projects", icon: "🚀" },
    { id: "cloud", label: "Cloud", icon: "☁️" },
    { id: "mobile", label: "Mobile", icon: "📱" },
    { id: "web", label: "Web", icon: "🌐" },
    { id: "data", label: "Data", icon: "📊" },
  ];

  const projects = [
    {
      id: 1,
      title: "Cloud Migration Strategy: Money Tracker App on GCP",
      category: "cloud",
      shortDescription:
        "Successfully executed cloud migration from monolith on-premise to scalable cloud-native architecture on Google Cloud Platform.",
      fullDescription:
        "Successfully executed a cloud migration project effectively moving a monolith on-premise application to a scalable cloud-native architecture on Google Cloud Platform (GCP).\n\nRole: Cloud Engineer\nObjective: Reduce upfront infrastructure costs and improve scalability by deploying a web-based financial recording application (Money Tracker).\n\nKey Implementations:\n• Microservices Deployment: Deployed separated services for Front-End (PHP/CodeIgniter) and Back-End (Node.js) using Google App Engine\n• Managed Database: Provisioned and secured Cloud SQL (MySQL) instances for reliable structured data storage\n• Object Storage Integration: Configured Google Cloud Storage buckets to handle unstructured data\n• Security & IAM: Applied Principle of Least Privilege using Service Accounts and IAM roles\n• Troubleshooting: Resolved dependency issues and configured environment variables for seamless API communication",
      technologies: [
        "Google Cloud Platform",
        "App Engine",
        "Cloud SQL",
        "Cloud Storage",
        "PHP",
        "Node.js",
      ],
      link: "https://github.com/yourusername/money-tracker-cloud",
      images: [
        "/images/gce-1.jpg",
        "/images/gce-2.jpg",
        "/images/gce-3.jpg",
        "/images/gce-4.jpg",
        "/images/gce-5.jpg",
      ],
      imageOrientation: "landscape", // landscape atau portrait
    },
    {
      id: 2,
      title: "Movie Catalog - Modular Clean Architecture App",
      category: "mobile",
      shortDescription:
        "Android app with modular clean architecture, featuring movie catalog with favorites and offline support.",
      fullDescription:
        "Developed a scalable Android application using modern architecture patterns and best practices.\n\nKey Features:\n• Clean Architecture with MVVM pattern\n• Multi-module project structure for better scalability\n• Offline-first approach using Room Database\n• RESTful API integration with Retrofit\n• Dependency Injection with Dagger Hilt/Koin\n• Continuous Integration with GitHub Actions\n• Material Design 3 UI components\n• Search and filtering capabilities\n• Favorites management with local persistence",
      technologies: [
        "Kotlin",
        "Android XML",
        "Room Database",
        "Retrofit",
        "Dagger Hilt",
        "Gradle",
        "GitHub Actions",
      ],
      link: "https://github.com/yourusername/movie-catalog",
      images: [
        "/images/mcl-1.jpg",
        "/images/mcl-2.jpg",
        "/images/mcl-3.jpg",
        "/images/mcl-4.jpg",
      ],
      imageOrientation: "portrait",
    },
    {
      id: 3,
      title: "E-Commerce Dashboard",
      category: "web",
      shortDescription:
        "Full-stack e-commerce admin dashboard with real-time analytics and inventory management.",
      fullDescription:
        "Built a comprehensive admin dashboard for e-commerce platform with modern web technologies.\n\nKey Features:\n• Real-time sales analytics and reporting\n• Inventory management system\n• Order processing and tracking\n• Customer relationship management\n• Role-based access control\n• Responsive design for all devices\n• RESTful API backend\n• Database optimization for performance",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "TailwindCSS",
        "Chart.js",
      ],
      link: "https://github.com/yourusername/ecommerce-dashboard",
      images: [
        "https://via.placeholder.com/800x450?text=Dashboard+Overview",
        "https://via.placeholder.com/800x450?text=Analytics+Chart",
      ],
      imageOrientation: "landscape",
    },
    {
      id: 4,
      title: "Customer Segmentation Analysis",
      category: "data",
      shortDescription:
        "Machine learning project for customer segmentation using clustering algorithms and data visualization.",
      fullDescription:
        "Performed comprehensive customer segmentation analysis using advanced data science techniques.\n\nKey Highlights:\n• Exploratory Data Analysis (EDA) on customer dataset\n• K-Means and Hierarchical Clustering implementation\n• RFM (Recency, Frequency, Monetary) analysis\n• Interactive data visualizations with Plotly\n• Feature engineering and dimensionality reduction\n• Business insights and recommendations\n• Automated reporting pipeline",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Plotly",
        "Jupyter",
        "SQL",
      ],
      link: "https://github.com/yourusername/customer-segmentation",
      images: [
        "https://via.placeholder.com/800x450?text=Clustering+Visualization",
        "https://via.placeholder.com/800x450?text=RFM+Analysis",
      ],
      imageOrientation: "landscape",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const toggleProject = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

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
        <div className="max-w-6xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProjects[project.id];
              const currentIdx = currentImageIndex[project.id] || 0;
              const totalImages = project.images.length;
              const isPortrait = project.imageOrientation === "portrait";

              return (
                <div
                  key={project.id}
                  className="rounded-xl border border-white/10 overflow-hidden hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                >
                  {/* Image Gallery - Adjusted for orientation */}
                  <div
                    className={`relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center group ${
                      isPortrait ? "aspect-[9/16] max-h-96" : "aspect-video"
                    }`}
                  >
                    <img
                      src={project.images[currentIdx]}
                      alt={`${project.title} - Image ${currentIdx + 1}`}
                      className={`w-full h-full ${
                        isPortrait ? "object-contain" : "object-cover"
                      }`}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/${
                          isPortrait ? "450x800" : "800x450"
                        }?text=${project.title}`;
                      }}
                    />

                    {/* Navigation Buttons */}
                    {totalImages > 1 && (
                      <>
                        <button
                          onClick={() => handlePrevImage(project.id)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-500/70 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>

                        <button
                          onClick={() => handleNextImage(project.id)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-500/70 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                          {currentIdx + 1} / {totalImages}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                        {
                          categories.find((c) => c.id === project.category)
                            ?.icon
                        }{" "}
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technologies - Always visible */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white/5 text-gray-400 py-1 px-2 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-gray-500 text-xs py-1">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-white/10 space-y-4 animate-in fade-in duration-300">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">
                            Full Description:
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                            {project.fullDescription}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">
                            All Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => toggleProject(project.id)}
                        className="flex-1 bg-white/5 hover:bg-white/10 text-white py-2 px-4 rounded font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp size={16} /> Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown size={16} /> Read More
                          </>
                        )}
                      </button>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 text-sm"
                      >
                        View <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
