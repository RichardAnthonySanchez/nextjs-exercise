import './globals.css'
import { Inter } from 'next/font/google'
import Nav from "./components/Nav";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fetched Data Exercise',
  description: 'A Nextjs Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto pt-4`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
