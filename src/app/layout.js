import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import {ThemeProvider} from '@/context/ThemeContext'
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
        <div className="container">
        <Navbar />
          <div>{children}</div>
        <Footer />
        </div>
        </ThemeProvider>
        </body>
    </html>
  )
}
