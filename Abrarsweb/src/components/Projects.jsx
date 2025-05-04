function Projects() {
  const projects = [
    {
      title: 'FocusForge – Productivity Chrome Extension',
      description:
        'Developed a Chrome extension that tracks tab activity and uses smart keyword analysis to measure productivity. Synced with a MERN-based React dashboard to display focus scores, productivity streaks, and time insights without manual input.',
      link: 'https://github.com/Raja-Abrar-Khan/FocusForge',
      period: '2025 - Present',
      tech: ['MERN Stack', 'React', 'Chrome API'],
    },
    {
      title: 'PriceHunt – Real-Time Price Comparison Tool',
      description:
        'Developed a platform to track real-time price fluctuations across e-commerce sites. Built a scalable Flask backend with REST APIs and a React frontend with Tailwind CSS, featuring a PostgreSQL alert module.',
      link: 'https://github.com/Raja-Abrar-Khan/PriceHunt',
      period: 'Feb 2025 - Mar 2025',
      tech: ['Flask', 'React', 'Tailwind CSS', 'PostgreSQL'],
    },
    {
      title: 'Muzer – Real-Time Music Video Voting App',
      description:
        'Created a platform for users to submit and vote on music videos, with top-voted videos playing automatically. Built with Node.js, Express, Prisma, PostgreSQL, and Tailwind CSS, with plans for real-time collaboration features.',
      link: 'https://github.com/Raja-Abrar-Khan/Muzer-Real-Time-Music-Video-Voting-App',
      period: 'Sept 2024 - Nov 2024',
      tech: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    },
   
    {
      title: 'Kurkure E-commerce – ML-Based Platform',
      description:
        'Collaborated on a full-stack e-commerce site with microservices architecture. Used Prisma ORM and PostgreSQL for the backend and SCSS with Material UI for a responsive frontend. Integrated an AI/ML recommendation system.',
      link: 'https://github.com/Raja-Abrar-Khan/Kurkure-e-commerce',
      period: 'Dec 2024 - Jan 2025',
      tech: ['Prisma', 'PostgreSQL', 'SCSS', 'Material UI', 'AI/ML'],
    },
    {
      title: 'Redis – Personal Cache Database Management System',
      description:
        'Developed a high-performance cache database system using C/C++ on Ubuntu Linux with TCP/IP and socket programming. Implemented advanced data structures for efficient storage and retrieval, optimizing real-time data handling.',
      link: null,
      period: 'Nov 2024 - Dec 2024',
      tech: ['C', 'C++', 'TCP/IP', 'Socket Programming'],
    },
    {
      title: 'Blog App',
      description:
        'Created a simple blog application for personal storytelling, featuring a user-friendly interface to share and manage posts, built with modern web technologies.',
      link: 'https://github.com/Raja-Abrar-Khan/Blog-app',
      period: 'sep 2024',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Cryptocurrency Dashboard',
      description:
        'Built a responsive web app using React and Tailwind CSS, integrated with the CoinGecko API to display real-time cryptocurrency data, including prices and market trends.',
      link: 'https://github.com/Raja-Abrar-Khan/Cryptocurrency-Dashboard',
      period: 'Aug 2024',
      tech: ['React', 'Tailwind CSS', 'CoinGecko API'],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-teal-400 animate-fade-in">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-2 text-teal-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-teal-600 text-white px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm mb-4">{project.period}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="text-teal-500 hover:text-teal-400 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;