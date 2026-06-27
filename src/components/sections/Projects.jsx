import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ImageOff,
} from "lucide-react";

// Component RevealOnScroll LOKAL (di dalam file ini)
const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.05, rootMargin: "0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

export const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  const categoryMeta = {
    cloud: { icon: "☁️" },
    mobile: { icon: "📱" },
    web: { icon: "🌐" },
  };

  const projects = [
{
  "id": 9,
  "title": "Web-Based Student Tuition Administration System at KB/TK ABA 1 Buduran",
  "category": "web",
  "shortDescription": "A web-based student administration and tuition management system integrated with Midtrans Payment Gateway and Fonnte WhatsApp API for KB/TK Aisyiyah Bustanul Athfal 1 Buduran, transforming manual tracking into an automated ecosystem.",
  "fullDescription": "Designed and developed a comprehensive web-based student administration and tuition management system for KB/TK Aisyiyah Bustanul Athfal 1 Buduran. This system replaces the previous manual financial tracking that was highly vulnerable to technical constraints, double billing, and physical paperwork bottlenecks.\n\nDeveloped using the Rapid Application Development (RAD) methodology, ensuring fast development with intensive iterations while actively incorporating user feedback at every deployment phase.\n\nKey Features:\n• Advanced admin dashboard with student census metrics, live billing ratios, and weekly/monthly revenue tracking\n• Secure multi-user Role-Based Access Control (RBAC) separating administrative privileges for Superadmins, Treasurers, and Parents\n• Centralized student data registry and dynamic school fee configuration interfaces\n• Multi-method payment gateway integration (Virtual Accounts, E-Wallets, and QRIS) powered by Midtrans SNAP API for instant, automated transaction verification\n• Automated communication infrastructure using Fonnte WhatsApp API to broadcast real-time billing reminders and digital payment receipts directly to parents\n• Interactive financial analytics module showcasing 6-month transaction and outstanding arrears trends with native Excel reporting export capabilities\n• Automated digital receipt generation system producing official, electronically-verified transaction documents with tamper-proof indicators\n• Secure system infrastructure featuring an automated audit trail/changelog engine that meticulously logs all administrative CRUD operations to ensure absolute operational transparency",
  "technologies": [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Midtrans API",
    "Fonnte API"
  ],
  "link": "https://github.com/nrhdyt3012/pppm-bm",
  "images": [
    "/images/ppm-1.jpg",
    "/images/ppm-2.jpg",
    "/images/ppm-3.jpg",
    "/images/ppm-4.jpg",
    "/images/ppm-5.jpg",
    "/images/ppm-6.jpg",
    "/images/ppm-7.jpg",
    "/images/ppm-8.jpg",
    "/images/ppm-9.jpg",
    "/images/ppm-10.jpg"
  ],
  "imageOrientation": "landscape"
},
    {
      id: 6,
      title: "PlantRo - Smart Crop Rotation Recommendation System",
      category: "mobile",
      shortDescription:
        "Bangkit Academy Capstone Project — an Android app that delivers ML-powered crop rotation recommendations by analyzing soil nutrients, pH, temperature, humidity, and rainfall to support sustainable farming in Indonesia.",
      fullDescription:
        "PlantRo (Plant Rotation) is an Android application providing data-driven crop rotation recommendations to support sustainable farming in Indonesia. Built as a Bangkit Academy Capstone Project integrating Machine Learning, Cloud Computing, and Mobile Development.\n\nKey Features:\n• Soil condition analysis based on Nitrogen, Phosphorus, Potassium, pH, temperature, humidity, and rainfall input\n• Crop rotation recommendations via Machine Learning model with confidence score\n• Prediction history for tracking and monitoring\n• Integrated seed and fertilizer marketplace\n• User-friendly interface with Material Design\n\nMy Contributions as Mobile Developer:\n• Designed and implemented MVVM architecture pattern\n• Developed intuitive and responsive UI/UX with Material Design\n• Integrated Machine Learning API for crop rotation predictions\n• Implemented authentication and user session management\n• Built prediction history feature with RecyclerView\n• Optimized app performance and error handling\n\nImpact:\nHelps farmers make data-driven decisions to optimize agricultural practices, supporting food security and digital innovation in Indonesia's agricultural sector.",
      technologies: [
        "Kotlin",
        "MVVM Architecture",
        "Retrofit",
        "DataStore",
        "Coroutines & Flow",
        "Material Design",
        "Firebase Auth",
        "REST APIs",
      ],
      link: "https://github.com/nrhdyt3012/PlantRo",
      images: [
        "/images/plt-1.jpg",
        "/images/plt-2.jpg",
        "/images/plt-3.jpg",
        "/images/plt-4.jpg",
        "/images/plt-5.jpg",
        "/images/plt-6.jpg",
      ],
      imageOrientation: "portrait",
    },
    {
      id: 3,
      title: "SAKTI - Change Management System for Local Government",
      category: "mobile",
      shortDescription:
        "Cross-platform system (Android + Web) for Local Government change management — featuring Service Desk & Asset Management API integration, real-time monitoring, and field inspection module for multi-level stakeholders.",
      fullDescription:
        "Developed an integrated change management system for Local Government (Pemda), consisting of a web monitoring dashboard and Android mobile application. The system enables technicians to conduct field inspections, record implementation results, and provide real-time monitoring for stakeholders ranging from technicians, section heads, division heads, up to the Diskominfo level.\n\nKey Implementations:\n• Cross-platform development: Android (Jetpack Compose) + Web monitoring dashboard\n• Real-time API integration with Service Desk and Asset Management systems for data synchronization\n• Field inspection module with offline support using Room Persistence Library\n• Role-based access control for multi-level stakeholder management\n• UML-based system design using Activity Diagrams and Use Case Diagrams to ensure compliance with government procedures\n• Project management coordination across development and stakeholder teams",
      technologies: [
        "Android Jetpack Compose",
        "REST APIs",
        "Retrofit",
        "Room Persistence Library",
        "Project Management",
      ],
      link: "https://github.com/nrhdyt3012/sakti",
      images: [
        "/images/skt-1.jpg",
        "/images/skt-2.jpg",
        "/images/skt-3.jpg",
        "/images/skt-4.jpg",
        "/images/skt-5.jpg",
        "/images/skt-6.jpg",
        "/images/skt-7.jpg",
        "/images/skt-8.jpg",
      ],
      imageOrientation: "portrait",
    },
    {
      id: 1,
      title: "Cloud Migration Strategy: Money Tracker App on GCP",
      category: "cloud",
      shortDescription:
        "Architected and executed a full cloud migration from monolith on-premise to a scalable cloud-native architecture on Google Cloud Platform — cutting infrastructure costs while improving scalability and reliability.",
      fullDescription:
        "Successfully executed a cloud migration project, effectively moving a monolith on-premise application to a scalable cloud-native architecture on Google Cloud Platform (GCP).\n\nRole: Cloud Engineer\nObjective: Reduce upfront infrastructure costs and improve scalability by deploying a web-based financial recording application (Money Tracker).\n\nKey Implementations:\n• Microservices Deployment: Deployed separated services for Front-End (PHP/CodeIgniter) and Back-End (Node.js) using Google App Engine\n• Managed Database: Provisioned and secured Cloud SQL (MySQL) instances for reliable structured data storage\n• Object Storage Integration: Configured Google Cloud Storage buckets to handle unstructured data\n• Security & IAM: Applied Principle of Least Privilege using Service Accounts and IAM roles\n• Troubleshooting: Resolved dependency issues and configured environment variables for seamless API communication",
      technologies: [
        "Google Cloud Platform",
        "App Engine",
        "Cloud SQL",
        "Cloud Storage",
        "IAM",
        "PHP",
        "Node.js",
      ],
      link: "https://github.com/nrhdyt3012/money-tracker",
      images: [
        "/images/gce-1.jpg",
        "/images/gce-2.jpg",
        "/images/gce-3.jpg",
        "/images/gce-4.jpg",
        "/images/gce-5.jpg",
      ],
      imageOrientation: "landscape",
    },
    {
      id: 2,
      title: "Movie Catalog - Modular Clean Architecture Android App",
      category: "mobile",
      shortDescription:
        "Production-grade Android app built with multi-module Clean Architecture and MVVM — featuring offline-first support, Dependency Injection, CI/CD with GitHub Actions, and Material Design 3.",
      fullDescription:
        "Developed a scalable Android application using modern architecture patterns and best practices.\n\nKey Features:\n• Clean Architecture with MVVM pattern\n• Multi-module project structure for better scalability and build performance\n• Offline-first approach using Room Database\n• RESTful API integration with Retrofit\n• Dependency Injection with Dagger Hilt\n• Continuous Integration / Continuous Deployment with GitHub Actions\n• Material Design 3 UI components\n• Search and filtering capabilities\n• Favorites management with local persistence",
      technologies: [
        "Kotlin",
        "Clean Architecture",
        "MVVM",
        "Room Database",
        "Retrofit",
        "Dagger Hilt",
        "GitHub Actions",
        "Material Design 3",
      ],
      link: "https://github.com/nrhdyt3012/moviecatalog",
      images: [
        "/images/mcl-1.jpg",
        "/images/mcl-2.jpg",
        "/images/mcl-3.jpg",
        "/images/mcl-4.jpg",
      ],
      imageOrientation: "portrait",
    },
    {
      id: 8,
      title: "OpenMusic API - Scalable Backend with Redis, RabbitMQ & S3",
      category: "cloud",
      shortDescription:
        "Engineered a production-ready RESTful backend for a music platform — leveraging Redis caching, RabbitMQ async processing, and AWS S3 storage to handle high-concurrency scenarios efficiently.",
      fullDescription:
        "Engineered the final version of the OpenMusic API, a scalable RESTful backend service for a music application. This project focuses on handling high-concurrency scenarios and complex data processing.\n\nKey Architecture:\n• Performance (Caching): Implemented Redis for server-side caching on high-traffic endpoints (e.g., Album Likes), significantly reducing database load\n• Asynchronous Processing: Integrated RabbitMQ to decouple heavy operations (playlist exports). A separate Consumer service handles these tasks in the background to prevent main-thread blocking\n• Storage & Database: Utilized AWS S3 for media storage (Cover Art) and PostgreSQL for structured data persistence\n• RESTful API design following best practices with proper error handling and validation",
      technologies: [
        "Node.js",
        "Hapi Framework",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "AWS S3",
        "Mail Servers",
      ],
      link: "https://github.com/nrhdyt3012/openmusic-api",
      images: [
        "/images/opm-1.jpg",
        "/images/opm-2.jpg",
        "/images/opm-3.jpg",
        "/images/opm-4.jpg",
        "/images/opm-5.jpg",
      ],
      imageOrientation: "landscape",
    },
  ];

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

  const handleImageError = (projectId, imageIdx) => {
    setImageErrors((prev) => ({
      ...prev,
      [`${projectId}-${imageIdx}`]: true,
    }));
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-5 bg-gradient-to-b from-blue-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header */}
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
        </RevealOnScroll>

        {/* Projects Grid */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const isExpanded = expandedProjects[project.id];
              const currentIdx = currentImageIndex[project.id] || 0;
              const totalImages = project.images.length;
              const currentImageKey = `${project.id}-${currentIdx}`;
              const hasImageError = imageErrors[currentImageKey];

              return (
                <div
                  key={project.id}
                  className="rounded-xl border border-white/10 overflow-hidden hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all bg-white/5"
                >
                  {/* Image Gallery — fixed height, object-contain so nothing gets cropped */}
                  <div className="relative bg-[#0d1117] group overflow-hidden h-56">
                    {hasImageError ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                        <ImageOff size={48} className="mb-2" />
                        <p className="text-sm">Image not available</p>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={project.images[currentIdx]}
                          alt={`${project.title} - Image ${currentIdx + 1}`}
                          className="w-full h-full object-contain"
                          onError={() =>
                            handleImageError(project.id, currentIdx)
                          }
                        />
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    {totalImages > 1 && !hasImageError && (
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
                        {categoryMeta[project.category]?.icon}{" "}
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 line-clamp-2 text-gray-100">
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
        </RevealOnScroll>

      </div>
    </section>
  );
};