import { AcademicCapIcon, StarIcon, CodeBracketIcon, TrophyIcon } from '@heroicons/react/24/solid';

function About() {
  const skills = [
    'Java', 'Python', 'C', 'C++', 'JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
    'Tailwind CSS', 'Next.js', 'Prisma', 'Git', 'VS Code', 'English', 'Hindi'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 animate-fade-in">About Me</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            I'm Raja Abrar Khan, a passionate Full Stack Developer who loves turning ideas into reality through code. With a strong foundation in computer science and a knack for building innovative web solutions, I thrive on challenges and continuous learning. Dive into my journey below!
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Education */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-8 w-8 text-teal-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <p className="text-gray-300">
              <strong>Bachelor of Engineering, Computer Science</strong><br />
              Government College of Engineering and Technology, Jammu<br />
              CGPA: 7.6/10 | Sept 2021 - 2025<br />
              Key Courses: Data Structures & Algorithms, Java OOP, Web Applications, Operating Systems, Computer Networks
            </p>
          </div>

          {/* Achievements */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <StarIcon className="h-8 w-8 text-teal-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Achievements</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Qualified for Prelims in ISRO Robotics Challenge 2024-URSC</li>
              <li>Active member of Startup Cell GCET Jammu, organizing workshops and events</li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <CodeBracketIcon className="h-8 w-8 text-teal-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md hover:bg-teal-500 transition duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <TrophyIcon className="h-8 w-8 text-teal-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-teal-400 rounded-full mt-2 mr-3"></span>
                Front-End Development - Coursera (Dec 2023)
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-teal-400 rounded-full mt-2 mr-3"></span>
                Programming in JavaScript - Coursera (Jan 2024)
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-teal-400 rounded-full mt-2 mr-3"></span>
                Meta React Basic - Coursera (Jun 2024)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;