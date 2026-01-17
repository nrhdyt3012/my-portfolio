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
  const [activeTab, setActiveTab] = useState("all");
  const [expandedProjects, setExpandedProjects] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  const categories = [
    { id: "all", label: "All Projects", icon: "🚀" },
    { id: "cloud", label: "Cloud + Backend", icon: "☁️" },
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
      imageOrientation: "landscape",
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
      title: "SAKTI - Sistem Aplikasi Konfigurasi dan Transformasi Inovatif",
      category: "mobile",
      shortDescription:
        "Pengembangan aplikasi lintas platform (Web & Android) untuk Change Management System Pemda. Fitur utama mencakup API Integration (Service Desk/Asset Mgmt), Real-time Monitoring, dan modul inspeksi lapangan. Perancangan sistem berbasis UML (Activity & Use Case Diagram) untuk memastikan kepatuhan terhadap prosedur pemerintahan.",
      fullDescription:
        "Mengembangkan sistem manajemen perubahan terintegrasi untuk Pemerintah Daerah yang terdiri dari web monitoring dan aplikasi mobile Android. Sistem ini memungkinkan teknisi melakukan inspeksi lapangan, pencatatan hasil implementasi, serta monitoring real-time oleh berbagai stakeholder (teknisi, kepala seksi, kepala bidang, hingga Diskominfo).Proyek ini mengintegrasikan Service Desk dan Asset Management melalui API untuk sinkronisasi data real-time, dengan fokus pada efisiensi operasional lintas platform. Perancangan menggunakan metodologi UML, activity diagram, dan use case diagram untuk memastikan setiap proses bisnis tergambar jelas dan dapat diimplementasikan secara efektif sesuai prosedur pemerintahan. Buatlah menjadi short description",
      technologies: [
        "Android Jetpack Compose",
        "REST APIs",
        "Retrofit",
        "Room Persistence Library",
        "Project Management",
      ],
      link: "https://github.com/yourusername/ecommerce-dashboard",
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
      id: 4,
      title: "Story App - Social Media with Maps, Localization & Paginations",
      category: "mobile",
      shortDescription:
        "Social media application with map integration, localization features, and pagination.",
      fullDescription:
        "Designed and developed a fully functional social media application as a final submission for the Intermediate Mobile Development course at Dicoding Academy. This app allows users to share moments (stories) with photos, descriptions, and location tags.\n\nKey Features & Technical Implementations:\nAuthentication & Security: Implemented secure Login and Register flows with token-based session management.\nAdvanced UI/UX: Built a responsive UI with Infinite Scrolling (Pagination) to load stories efficiently.\nGeolocation Integration: Integrated Google Maps SDK to allow users to tag their location when posting and view story locations on an interactive map.\nMedia Handling: Enabled camera and gallery access for image uploading with compression logic.\nLocalization: Added multi-language support (Localization/l10n) and accessibility features.\nArchitecture: Utilized Clean Architecture principles with Code Generation for robust and maintainable code",
      technologies: [
        "Flutter",
        "Dart",
        "Google Maps API",
        "GoRouter",
        "REST APIs",
        "Localization",
        "Pagination",
      ],
      link: "https://github.com/yourusername/customer-segmentation",
      images: [
        "/images/strflt-1.jpg",
        "/images/strflt-2.jpg",
        "/images/strflt-3.jpg",
        "/images/strflt-4.jpg",
        "/images/strflt-5.jpg",
        "/images/strflt-6.jpg",
      ],
      imageOrientation: "portrait",
    },
    {
      id: 5,
      title: "Asclepius - Skin Cancer Detection with TensorFlow Lite",
      category: "mobile",
      shortDescription:
        "Mobile app for detecting skin cancer using TensorFlow Lite ML model with real-time image analysis.",
      fullDescription:
        "Developed Asclepius, an intelligent Android application capable of analyzing skin lesions to detect potential signs of cancer. This project focuses on integrating a pre-trained Machine Learning model directly into the mobile application for offline inference.\n\nKey Technical Implementations:\n\nTensorFlow Lite Integration: Successfully integrated a .tflite model to perform image classification (Cancer vs. Non-Cancer) directly on the device with low latency.\n\nImage Pre-processing: Implemented advanced image manipulation using uCrop library to crop and rotate images before analysis, ensuring optimal model accuracy.\n\nResult Visualization: Displayed classification results along with a Confidence Score (%) to interpret the model's certainty level.\n\nMedia Handling: Managed implicit intents to retrieve images securely from the device gallery.",
      technologies: [
        "Android",
        "Kotlin",
        "TensorFlow Lite",
        "ML Kit",
        "uCrop Library",
        "REST APIs",
      ],
      link: "https://github.com/yourusername/asclepius",
      images: ["/images/asc-1.jpg", "/images/asc-2.jpg"],
      imageOrientation: "landscape",
    },
    {
      id: 6,
      title: "PlantRo - Smart Crop Rotation Recommendation System",
      category: "mobile",
      shortDescription:
        "Aplikasi mobile Android yang memberikan rekomendasi rotasi tanaman berbasis data untuk pertanian berkelanjutan di Indonesia.",
      fullDescription: `PlantRo (Plant Rotation) adalah aplikasi mobile berbasis Android yang menyediakan rekomendasi rotasi tanaman berbasis data untuk mendukung pertanian berkelanjutan di Indonesia. Aplikasi ini mengintegrasikan teknologi Machine Learning, Cloud Computing, dan Mobile Development untuk menganalisis kebutuhan nutrisi tanaman, pH tanah, suhu, kelembaban, dan kebutuhan air guna membantu petani menjaga kesuburan tanah, meningkatkan produktivitas, dan mengurangi risiko hama serta penyakit.
Fitur Utama:

Analisis kondisi lahan berdasarkan input kadar Nitrogen, Fosfor, Kalium, pH, suhu, kelembaban, dan curah hujan
Rekomendasi rotasi tanaman menggunakan model Machine Learning dengan confidence score
Riwayat prediksi untuk tracking dan monitoring
Marketplace benih dan pupuk terintegrasi
Interface yang user-friendly dengan Material Design

Teknologi yang Digunakan:

Kotlin untuk pengembangan Android native
MVVM Architecture Pattern
Retrofit untuk REST API integration
DataStore untuk persistent storage
Coroutines & Flow untuk asynchronous programming
Material Design Components
Cloud API integration untuk ML predictions
Firebase Authentication untuk user management

Kontribusi Saya:
Sebagai Mobile Developer, saya bertanggung jawab dalam:

Merancang dan mengimplementasikan arsitektur aplikasi menggunakan MVVM pattern
Mengembangkan UI/UX yang intuitif dan responsif dengan Material Design
Mengintegrasikan API Machine Learning untuk prediksi rotasi tanaman
Implementasi autentikasi dan manajemen session pengguna
Membangun fitur input kondisi lahan dengan validasi
Mengembangkan sistem riwayat prediksi dengan RecyclerView
Optimasi performa aplikasi dan handling error

Dampak:
Aplikasi ini membantu petani membuat keputusan berbasis data untuk optimasi praktik pertanian, mendukung ketahanan pangan, dan mendorong inovasi digital serta adaptasi perubahan iklim di sektor pertanian Indonesia.`,
      technologies: [
        "Android",
        "Kotlin",
        "XML",
        "Retrofit",
        "Dependency Injection",
        "REST APIs",
      ],
      link: "https://github.com/yourusername/asclepius",
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
      id: 7,
      title: "Dicoding Story - Social App with Maps, Paging 3 & Testing",
      category: "mobile",
      shortDescription:
        "Aplikasi mobile Android yang memberikan rekomendasi rotasi tanaman berbasis data untuk pertanian berkelanjutan di Indonesia.",
      fullDescription: `Developed a feature-rich social media application enabling users to share stories through photos and descriptions, integrated with geolocation features. This project serves as the final submission for the Intermediate Android Development course.

Key Technical Features:

Advanced UI & UX: Created Custom Views for authentication (email/password validation) and implemented fluid animations (Property & Shared Element Transitions) for a seamless user experience.

Efficient Data Handling: Implemented Paging 3 library with RemoteMediator to handle large datasets (infinite scrolling) efficiently from the REST API.

Geolocation Integration: Integrated Google Maps SDK to visualize story locations via markers and allow users to tag their position when posting.

Robust Architecture: Built using Clean Architecture principles with MVVM pattern, Repository pattern, and Dependency Injection.

Quality Assurance: Wrote comprehensive Unit Tests using Mockito to verify the logic of the Paging Data and ViewModel, ensuring app reliability.`,
      technologies: [
        "Android",
        "Kotlin",
        "XML",
        "Paging 3",
        "Mockito",
        "REST APIs",
        "Google Maps API",
        "Animation",
        "Android Development",
      ],
      link: "https://github.com/yourusername/asclepius",
      images: ["/images/dcs-1.jpg"],
      imageOrientation: "landscape",
    },
    {
      id: 8,
      title: "Open Music API Scalable Backend with Redis, RabbitMQ & Mailtrap",
      category: "cloud",
      shortDescription:
        "Engineered the final version of the OpenMusic API, a scalable RESTful backend service for a music application. This project focuses on handling high-concurrency scenarios and complex data processing.",
      fullDescription: `Engineered the final version of the OpenMusic API, a scalable RESTful backend service for a music application. This project focuses on handling high-concurrency scenarios and complex data processing.

Key Architecture Upgrades:

Performance (Caching): Implemented Redis for server-side caching on high-traffic endpoints (e.g., Album Likes), significantly reducing database load.

Asynchronous Processing: Integrated RabbitMQ to decouple heavy operations (playlist exports). A separate Consumer service handles these tasks in the background to prevent main-thread blocking.

Storage & Database: Utilized AWS S3 for media storage (Cover Art) and PostgreSQL for structured data persistence.`,
      technologies: [
        "Node.js",
        "Hapi Framework",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "Mail Servers",
      ],
      link: "https://github.com/yourusername/asclepius",
      images: [
        "/images/opm-1.jpg",
        "/images/opm-2.jpg",
        "/images/opm-3.jpg",
        "/images/opm-4.jpg",
        "/images/opm-5.jpg",
      ],
      imageOrientation: "landscape",
    },
    {
      id: 9,
      title:
        "Web-Based SPP Payment Management Information System - Pondok Pesantren Pelajar Mahasiswa Baitul Makmur",
      category: "web",
      shortDescription:
        "Designed and developed a web-based SPP (school fee) payment management information system with digital payment integration for Pondok Pesantren Pelajar Mahasiswa Baitul Makmur (Baitul Makmur Islamic Boarding School).",
      fullDescription: `Designed and developed a web-based SPP (school fee) payment management information system with digital payment integration for Pondok Pesantren Pelajar Mahasiswa Baitul Makmur (Baitul Makmur Islamic Boarding School). This system replaces the previous manual payment process that was prone to recording errors, long verification queues, and limited access to real-time payment status information.
The system was developed using the Rapid Application Development (RAD) methodology, enabling fast development with intensive iterations and actively involving users at every stage. This digital solution provides transparency, efficiency, and easy access for student guardians and boarding school administrators.
Key Features:

Admin dashboard with student statistics, billing, and revenue tracking
Student data management and SPP billing master data
Automated billing assignment system for students
Multi-method digital payment integration (Virtual Account, E-wallet, QRIS) through Midtrans
Payment and arrears reports with graph visualization
Automatic payment receipt printing
Real-time payment status notifications
Student portal to view personal information, bills, and payment history`,
      technologies: [
        "Next.js",
        "React.js ",
        "TypeScript ",
        "Tailwind CSS",
        "React Hooks",
      ],
      link: "https://github.com/yourusername/asclepius",
      images: [
        "/images/ppm-1.jpg",
        "/images/ppm-2.jpg",
        "/images/ppm-3.jpg",
        "/images/ppm-4.jpg",
        "/images/ppm-5.jpg",
        "/images/ppm-6.jpg",
        "/images/ppm-7.jpg",
        "/images/ppm-8.jpg",
        "/images/ppm-9.jpg",
        "/images/ppm-10.jpg",
      ],
      imageOrientation: "landscape",
    },
    {
      id: 10,
      title: "myFish - Marine Encyclopedia App with Jetpack Compose",
      category: "mobile",
      shortDescription:
        "Developed myFish, a modern Android application built entirely with Jetpack Compose that serves as a digital encyclopedia for various fish species. This project showcases the implementation of Modern Android Development (MAD) standards.",
      fullDescription: `Developed myFish, a modern Android application built entirely with Jetpack Compose that serves as a digital encyclopedia for various fish species. This project showcases the implementation of Modern Android Development (MAD) standards.

Key Features & Tech Specs:

Declarative UI: Built 100% using Kotlin Composables (no XML), utilizing Material Design 3 components for a sleek look.

Efficient Data Rendering: Implemented LazyColumn to display the list of fish species efficiently, ensuring smooth scrolling performance even with large datasets.

Navigation & Data Passing: Used Navigation Compose to route users from the main list to a detailed information page for each specific fish.

State Management: Applied ViewModel and State Hoisting to handle data flow and ensure the UI reacts correctly to user interactions (e.g., searching for a specific fish name).

Search Feature: Integrated real-time filtering logic to allow users to quickly find fish species by name.`,
      technologies: ["Kotlin", "Jetpack Compose", "Navigation Component"],
      link: "https://github.com/yourusername/asclepius",
      images: ["/images/mf-1.jpg", "/images/mf-2.jpg"],
      imageOrientation: "portrait",
    },
    {
      id: 11,
      title: "Data Analysis | SQL, Tableau, Power BI & Excel | Real Projects",
      category: "data",
      shortDescription:
        "Data Analyst dengan fondasi kuat dalam pengolahan database (SQL) dan analisis data (Excel & Statistik). Mahir menerjemahkan data menjadi insight visual melalui Tableau dan Power BI, serta memanfaatkan AI (ChatGPT) untuk efisiensi scripting dan eksplorasi solusi.",
      fullDescription: `Dalam Projek ini saya mempelajari:
🟦 SQL Fundamentals
 Belajar mulai dari dasar SELECT, JOIN, hingga subqueries & aggregate function. SQL menjadi fondasi kuat saya dalam memahami struktur dan eksplorasi data.
📈 Tableau Fundamentals
 Menghubungkan berbagai data source dan membuat dashboard interaktif dengan drag-and-drop. Visualisasi data jadi makin menyenangkan dan informatif!
🟨 Power BI Essentials
 Belajar membuat report dinamis dan interaktif, mulai dari transformasi data, relasi antar tabel, hingga membangun dashboard untuk decision-making.
📊 Excel for Data Analysis
 Mengasah kemampuan menggunakan Pivot Table, conditional formatting, dan data cleaning. Excel tetap jadi senjata andalan buat analisis cepat!
🤖 Menggunakan ChatGPT sebagai Data Analyst
 Menggunakan ChatGPT untuk bantu menulis query SQL, generate script otomatis, dan bantu ide analisis. Kolaborasi manusia & AI yang produktif!
📉 Statistik Dasar untuk Analisis Data
 Mempelajari konsep penting seperti mean, median, mode, hingga standard deviation untuk memahami makna di balik angka.`,
      technologies: ["SQL", "Tableau", "Power BI", "Excel", "ChatGPT"],
      link: "https://github.com/yourusername/asclepius",
      images: [
        "/images/daudm-1.jpg",
        "/images/daudm-2.jpg",
        "/images/daudm-3.jpg",
        "/images/daudm-4.jpg",
        "/images/daudm-5.jpg",
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

  const handleImageError = (projectId, imageIdx) => {
    setImageErrors((prev) => ({
      ...prev,
      [`${projectId}-${imageIdx}`]: true,
    }));
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-blue-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header */}
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
        </RevealOnScroll>

        {/* Tabs */}
        <RevealOnScroll>
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
        </RevealOnScroll>

        {/* Projects Grid */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProjects[project.id];
              const currentIdx = currentImageIndex[project.id] || 0;
              const totalImages = project.images.length;
              const isPortrait = project.imageOrientation === "portrait";
              const currentImageKey = `${project.id}-${currentIdx}`;
              const hasImageError = imageErrors[currentImageKey];

              return (
                <div
                  key={project.id}
                  className="rounded-xl border border-white/10 overflow-hidden hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all bg-white/5"
                >
                  {/* Image Gallery */}
                  <div
                    className={`relative bg-gradient-to-br from-gray-800 to-gray-900 group overflow-hidden ${
                      isPortrait ? "aspect-[9/16] max-h-96" : "aspect-video"
                    }`}
                  >
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
                          className={`${
                            isPortrait
                              ? "h-full w-auto object-contain"
                              : "w-full h-full object-cover"
                          }`}
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
                        {
                          categories.find((c) => c.id === project.category)
                            ?.icon
                        }{" "}
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
