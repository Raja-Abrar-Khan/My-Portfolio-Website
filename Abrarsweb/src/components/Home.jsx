function Home() {
    const skills = [
      'PERN Stack',
      'MERN Stack',
      'JavaScript',
      'Python',
      'Java',
      'C++',
      'C',
      'React',
      'Node.js',
      'Tailwind CSS',
      'PostgreSQL',
      'MongoDB',
    ];
  
    return (
      <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-950 to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
                Hi, I'm <span className="text-teal-400">Raja Abrar Khan</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-gray-300 font-semibold">
                Full Stack Developer
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
                I'm a Full Stack Developer passionate about building dynamic websites and browser
  
   extensions with PERN and MERN stacks. Skilled in JavaScript, Java, C++, C, React, and Node.js, I create seamless digital experiences using Tailwind CSS and modern databases. Let's code the future!
              </p>
              {/* Call-to-Action Button */}
              <a
                href="/projects"
                className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition duration-300 animate-pulse"
              >
                Explore My Work
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/profile.jpg"
                alt="Raja Abrar Khan"
                className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-teal-500 animate-fade-in"
              />
            </div>
          </div>
          {/* Skills Snapshot */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6 animate-fade-in">My Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-teal-600 hover:text-white transition duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
      </section>
    );
  }
  
  export default Home;