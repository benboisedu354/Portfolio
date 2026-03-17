export default function Landing({ onPlayClick }: { onPlayClick: () => void }) {
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
          Benjamin<br />Boisédu
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 animate-slide-in max-w-md mx-auto">
          Développeur web, automatisation et cyber-sécurité
        </p>

        {/* Play Button */}
        <button
          onClick={onPlayClick}
          className="relative mt-12 inline-flex items-center justify-center group transform transition-transform duration-300 hover:scale-125"
        >
          {/* Animated ring */}
          <div className="absolute inset-0 rounded-full border-2 border-indigo-400 group-hover:border-purple-400 transition-colors animate-pulse"></div>
          <div className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0  transition-all duration-300"></div>

          {/* Play Icon */}
          <svg
            className="w-12 h-12 text-indigo-400 group-hover:text-purple-400 transition-colors relative z-10 group-hover:scale-110 transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
