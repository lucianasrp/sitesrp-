import './globals.css'
import Whatsapp from '../components/whatsapp'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col h-screen justify-between'>
        <div className='mb-auto'>
          {children}
        </div>

        <Whatsapp />
      </body>
    </html>
  )
}
