function Footer() {
    return (
      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {/* GitHub */}
            <a href="https://github.com/Raja-Abrar-Khan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="h-6 w-6 text-teal-400 hover:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.564 9.564 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.56.94.56 1.89v2.8c0 .27.19.58.69.49A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/raja-abrar-khan-148597296/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="h-6 w-6 text-teal-400 hover:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 00-12 0v7.5a6 6 0 0012 0V8zM4 10h16M4 14h8m4 4.5V18m-4-6v6m4-6v3" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/_raja_abrar_khan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="h-6 w-6 text-teal-400 hover:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8zm5 0a4 4 0 00-4 4v4a4 4 0 004 4h8a4 4 0 004-4v-4a4 4 0 00-4-4H8zm7 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3 3.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
              </svg>
            </a>
            {/* X */}
            <a href="https://x.com/Raja_Abrar_Khan" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg className="h-6 w-6 text-teal-400 hover:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.36 5.64a9 9 0 11-12.73 0M12 3v3m0 12v3m-3-9H3m18 0h-6m-3-3v6" />
              </svg>
            </a>
            {/* Gmail */}
            <a href="mailto:rajaabrarkhan2911@gmail.com" aria-label="Email">
              <svg className="h-6 w-6 text-teal-400 hover:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm2 0v12h14V8L12 3 5 8z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Raja Abrar Khan. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;