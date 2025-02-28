import React from 'react'
import Carousel from '../components/carousel'
import NewsGallery from '../components/landing/blog'
import CarrouselSection from '../components/landing/CarrouselSection'
import CarrouselSectionPeugeot from '../components/landing/CarrouselSectionPeugeot'
import Carte from '../components/landing/carte'
import CarrouselPartenaire from '../components/landing/partenairesection'
import SectionAffiches from '../components/landing/SectionAffiche'
import InfoSection from '../components/landing/textsection'
import Visit from '../components/visit'

function Landing() {
  return (
    <main>
         <Carousel/>
         <Visit/>
        
      <CarrouselSection/>
      <CarrouselSectionPeugeot/>
      <SectionAffiches/>
      <InfoSection/>
      <Carte/>
      <NewsGallery/>
      <CarrouselPartenaire/>
      
    </main>
  )
}

export default Landing