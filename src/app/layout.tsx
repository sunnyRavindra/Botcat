import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BotCat',
  description: 'Sunny Ravindra -> Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html lang="en">
     <body className={inter.className}>
         <Navbar></Navbar>
         {children}
         <Footer></Footer>
     </body>
     </html> 
  )
}
