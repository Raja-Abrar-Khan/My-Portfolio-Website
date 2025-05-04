import { EnvelopeIcon, LinkIcon, CameraIcon, CodeBracketIcon, UsersIcon, StarIcon } from '@heroicons/react/24/solid';

function Contact() {
  const skills = [
    'Java', 'Python', 'C', 'C++', 'JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
    'Tailwind CSS', 'Next.js', 'Prisma', 'Git', 'VS Code'
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-950 via-teal-950 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-20 animate-float-glow">
          <h2 className="text-5xl md:text-7xl font-extrabold text-teal-400 animate-pulse-glow">
            Let’s Build the Future
          </h2>
          <p className="mt-6 text-lg md:text-2xl text-gray-100 max-w-4xl mx-auto animate-fade-in">
            I’m Raja Abrar Khan, a Full Stack Developer driven by innovation and collaboration. From crafting seamless web apps to contributing to open-source, I’m here to turn ideas into reality. Connect with me to create something extraordinary!
          </p>
        </div>

        {/* Skills Showcase */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <CodeBracketIcon className="h-10 w-10 text-teal-400 mr-4" />
            <h3 className="text-4xl font-semibold text-white">My Tech Arsenal</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 text-teal-300 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-teal-600 hover:text-white transition duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Project Spotlight */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <StarIcon className="h-10 w-10 text-teal-400 mr-4" />
            <h3 className="text-4xl font-semibold text-white">Featured Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 p-6 rounded-xl shadow-2xl hover:shadow-xl hover:scale-105 transition duration-300 animate-fade-in">
              <h4 className="text-xl font-semibold text-teal-400 mb-2">FocusForge</h4>
              <p className="text-gray-300 mb-4">
                A Chrome extension tracking productivity with a MERN-based dashboard for focus scores and streaks.
              </p>
              <a
                href="/projects"
                className="text-teal-500 hover:text-teal-400 font-semibold"
              >
                Explore Projects
              </a>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 p-6 rounded-xl shadow-2xl hover:shadow-xl hover:scale-105 transition duration-300 animate-fade-in">
              <h4 className="text-xl font-semibold text-teal-400 mb-2">PriceHunt</h4>
              <p className="text-gray-300 mb-4">
                A real-time price comparison tool with a Flask backend and React frontend, featuring PostgreSQL alerts.
              </p>
              <a
                href="/projects"
                className="text-teal-500 hover:text-teal-400 font-semibold"
              >
                Explore Projects
              </a>
            </div>
          </div>
        </div>

        {/* Open-Source Invitation */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-teal-800 to-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-xl hover:scale-105 transition duration-300 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <LinkIcon className="h-10 w-10 text-teal-400 mr-4" />
              <h3 className="text-4xl font-semibold text-white">Join My Open-Source Mission</h3>
            </div>
            <p className="text-gray-200 text-lg text-center">
              Passionate about open-source? Join me in shaping the future of tech! Visit my GitHub to explore my projects and contribute to innovative solutions.
            </p>
            <a
              href="https://github.com/Raja-Abrar-Khan"
              className="mt-4 inline-block bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute on GitHub
            </a>
          </div>
        </div>

        {/* Collaboration Call-to-Action */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-gray-800 to-teal-900 p-8 rounded-xl shadow-2xl hover:shadow-xl hover:scale-105 transition duration-300 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <UsersIcon className="h-10 w-10 text-teal-400 mr-4" />
              <h3 className="text-4xl font-semibold text-white">Let’s Collaborate</h3>
            </div>
            <p className="text-gray-200 text-lg text-center">
              Got a groundbreaking idea? Let’s create something extraordinary together! I’m open to innovative projects, open-source contributions, or any tech challenge that pushes boundaries.
            </p>
          </div>
        </div>

        {/* Contact Links */}
        <div>
          <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 p-8 rounded-xl shadow-2xl hover:shadow-xl hover:scale-105 transition duration-300 animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <EnvelopeIcon className="h-10 w-10 text-teal-400 mr-4" />
              <h3 className="text-4xl font-semibold text-white">Connect with Me</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center hover:scale-110 transition duration-300">
                <EnvelopeIcon className="h-8 w-8 text-teal-400 mr-3" />
                <a
                  href="mailto:rajaabrarkhan2911@gmail.com"
                  className="text-teal-500 hover:text-teal-400 text-lg"
                >
                  rajaabrarkhan2911@gmail.com
                </a>
              </div>
              <div className="flex items-center hover:scale-110 transition duration-300">
                <LinkIcon className="h-8 w-8 text-teal-400 mr-3" />
                <a
                  href="https://github.com/Raja-Abrar-Khan"
                  className="text-teal-500 hover:text-teal-400 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center hover:scale-110 transition duration-300">
                <LinkIcon className="h-8 w-8 text-teal-400 mr-3" />
                <a
                  href="https://www.linkedin.com/in/raja-abrar-khan-148597296/"
                  className="text-teal-500 hover:text-teal-400 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center hover:scale-110 transition duration-300">
                <CameraIcon className="h-8 w-8 text-teal-400 mr-3" />
                <a
                  href="https://www.instagram.com/_raja_abrar_khan/"
                  className="text-teal-500 hover:text-teal-400 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
              <div className="flex items-center hover:scale-110 transition duration-300">
                <LinkIcon className="h-8 w-8 text-teal-400 mr-3" />
                <a
                  href="https://x.com/Raja_Abrar_Khan"
                  className="text-teal-500 hover:text-teal-400 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;