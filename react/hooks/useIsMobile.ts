import { useState, useEffect } from 'react'

/**
 * Hook to detect if the current viewport is mobile (max-width: 1024px)
 * @param maxWidth - Maximum width to consider as mobile (default: 1024)
 * @returns boolean indicating if current viewport is mobile
 */
export const useIsMobile = (maxWidth: number = 1024): boolean => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= maxWidth)
        }

        // Check on mount
        checkMobile()

        // Listen to resize events
        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [maxWidth])

    return isMobile
}


