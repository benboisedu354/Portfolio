export default function Footer() {
  return (
    <footer className="bg-darker/80 backdrop-blur-md border-t border-indigo-500/20 text-center py-4 mt-12">
      <div className="mb-2 space-x-4 text-sm text-gray-400 flex justify-center items-center space-x-4 mb-4 ">
        <a
          href="https://github.com/benboisedu354/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
        >
          GitHub
        </a>
        <span className="mx-2 text-gray-500">|</span>
        <a
          href="https://www.linkedin.com/in/benjamin-boisedu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
      <div className="text-gray-400 text-sm mb-2 flex justify-center items-center space-x-4 mb-4 ">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Benjamin Boisédu. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
