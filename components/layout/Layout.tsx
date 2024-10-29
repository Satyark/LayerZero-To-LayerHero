import React, { PropsWithChildren } from 'react';
import { BackgroundBeams } from '../ui/BackgroundBeams';
import { Outfit } from 'next/font/google';
import NavBar from '../NavBar';

// Import the Outfit font with the required styles
const outfit = Outfit({
  subsets: ['latin'],   // You can add other subsets if needed
  variable: '--font-outfit', // CSS variable for the font
  weight: ['400', '700'],    // Specify weights you want to use
});

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${outfit.variable} font-sans min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-start antialiased`}>
    <NavBar/>
    <div className='flex items-center justify-center w-full'>
        {children}
    </div>
    <BackgroundBeams/>
    </div>
  )
}

export default Layout