import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import {ThemeProvider} from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rob Merrill',
  description: 'Portfolio of Rob Merrill',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <AuthProvider>
        <div className="container">
        <Navbar />
          <div>{children}</div>
        <Footer />
        </div>
        </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
