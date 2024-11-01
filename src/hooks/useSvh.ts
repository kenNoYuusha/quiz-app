import { useEffect } from 'react'
export function useSvh(){
  useEffect(() => {
    const updateVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    // Calcular la altura inicial y agregar el listener
    updateVH()
    window.addEventListener('resize', updateVH)

    // Limpiar el listener al desmontar el componente
    return () => window.removeEventListener('resize', updateVH)
  }, [])
}