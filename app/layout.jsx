import './globals.css'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Whatsapp from '../components/whatsapp'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col h-screen justify-between'>

        <Navbar src='/logo-white.svg'></Navbar>
        <div className='mb-auto'>
          {children}
        </div>

        <Footer src='/logo.svg'></Footer>
        <Whatsapp />
      </body>
    </html >
  )
}