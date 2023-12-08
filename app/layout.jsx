import './globals.css'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import WhatsappButton from '../components/whatsapp'
import Section from '../components/section'
import OpenStreetMap from '../components/openstreetmap'
import CallToAction from '../components/calltoaction'
import Suppliers from '../components/suppliers'

export const metadata = {
  title: 'SRP Sartori Revert Pisos',
  description: 'Transformando espaços com qualidade e confiança desde 2014. Referência em pisos, revestimentos e decorações. Sua satisfação é nosso compromisso.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col h-screen justify-between'>

        <Navbar src='/logo-white.svg'></Navbar>
        <div className='mb-auto'>
          {children}
        </div>

				{/* CALL TO ACTION */}
				<CallToAction img='/call_to_action.webp' background='/background_pattern.webp' url={`https://wa.me/`}>
					<h1 className='mb-5 text-5xl'>Solicite um Orçamento!</h1>
					<h3 className='mb-5'>Transforme seu espaço conosco.<br />Solicite um orçamento personalizado hoje!!</h3>
				</CallToAction>

				{/* MAPA */}
				<div className='gmap_canvas dui-hero min-h-[384px]'>
					<OpenStreetMap lat={-20.7859752} lon={-49.4410888} zoom={19} />
				</div>
        <Footer src='/logo.svg'></Footer>
        <WhatsappButton />
      </body>
    </html >
  )
}