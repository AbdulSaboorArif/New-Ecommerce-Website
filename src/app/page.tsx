import Header from '@/components/Navbar'
import Hero from '@/components/Hero'
import OurProduct from "@/components/Our-Product" 
import BeautifullRoom from '@/components/Beautifullroom'
import Footer from '@/components/Fotter'

export default function Home() {
  return (
    <main className="min-h-screen border-2 border-blue-600">
      <Header />
      <Hero />
      <OurProduct/>
      <BeautifullRoom/>
      <Footer/>
    </main>
  )
}