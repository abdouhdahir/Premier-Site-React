import React from 'react'
import Feature from '../components/Feature'
import Video from '../components/Video'
import Fastes from '../components/Fastes'
import Subcript from '../components/Subcript'
import Partenaire from '../components/Partenaire'
import Test from '../components/Test'
import Pricing from '../components/Pricing'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <div>
        <Feature/>
        <Video/>
        <Fastes/>
        <Subcript/>
        <Partenaire/>
        <Test/>
        <Pricing/>
        <ContactUs/>
    </div>
  )
}

export default Home
