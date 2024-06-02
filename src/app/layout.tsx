import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Learn more about me here!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
     <html lang="en">
      <body>
        <main>{children}</main>
      </body>
     </html>
    </>
  )
}
