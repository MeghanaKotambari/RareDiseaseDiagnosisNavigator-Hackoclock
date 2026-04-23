import { useState, useEffect } from 'react'
import AppRoutes from './Routes/AppRoutes'
import SplashScreen from './components/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <AppRoutes />
      )}
    </>
  )
}

export default App
