import { useState } from 'react'
import Landing from './Landing'
import Portfolio from './Portfolio'

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false)

  const handlePlayClick = () => {
    setShowPortfolio(true)
  }

  return (
    <div className="w-full">
      {/* Landing Page with fade out animation */}
      {!showPortfolio && (
        <div className="animate-fade-in">
          <Landing onPlayClick={handlePlayClick} />
        </div>
      )}

      {/* Portfolio Page with fade in animation */}
      {showPortfolio && (
        <div className="animate-expand-in">
          <Portfolio />
        </div>
      )}
    </div>
  )
}
