/* eslint-disable react/react-in-jsx-scope */
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full bg-red-400'>
      <body className="h-full">
        <Navbar />
        
        {children}</body>
    </html>
  )
}
