import React from 'react'
import { motion } from 'framer-motion'
import Carousel from '../components/carousel'
import NewsGallery from '../components/landing/blog'
import CarrouselSection from '../components/landing/CarrouselSection'
import CarrouselSectionPeugeot from '../components/landing/CarrouselSectionPeugeot'
import Carte from '../components/landing/carte'
import CarrouselPartenaire from '../components/landing/partenairesection'
import SectionAffiches from '../components/landing/SectionAffiche'
import InfoSection from '../components/landing/textsection'
import Visit from '../components/visit'

// Variantes d'animation
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

function Landing() {
  return (
    <main className="space-y-10">
      {/* Animation du Carousel avec zoom */}
      <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <Carousel />
      </motion.div>

      {/* Animation du Visit avec fade-in up */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <Visit />
      </motion.div>

      {/* Carrousel avec effet slide */}
      <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <CarrouselSection />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <CarrouselSectionPeugeot />
      </motion.div>

      <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <SectionAffiches />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <InfoSection />
      </motion.div>

      <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <Carte />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <NewsGallery />
      </motion.div>

      <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <CarrouselPartenaire />
      </motion.div>
    </main>
  )
}

export default Landing
