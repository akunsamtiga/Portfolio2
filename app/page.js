import Hero from '@/components/Hero'
import IntroStats from '@/components/IntroStats'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'
import Message from '@/components/Message'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStats />
      <Services />
      <Clients />
      <Portfolio />
      <Blog />
      <Testimonial />
      <Message />
      <Footer />
    </>
  )
}
