import Header from '@/components/Navbar'
import Hero from '@/components/Hero'
import OurProduct from "@/components/Our-Product" 
import BeautifullRoom from '@/components/Beautifullroom'
import Footer from '@/components/Fotter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <OurProduct/>
      <BeautifullRoom/>
      <Footer/>
    </main>
  )
}