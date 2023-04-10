import React from 'react'
import SliderMain from '../../component/home/SliderMain'
import Services from '../../component/services/Services'
import Award from '../../component/home/Award'
import Indestries from '../../component/indestries/Indestries'
import Stories from '../../component/stories/Stories'
import Ceo from '../../component/indestries/Ceo'



function Home() {
  return (
    <div style={{ backgroundColor:'#f1f4fd'}}>
      
      <SliderMain />
      <Services />
      <Award />
      <Indestries />
      <Stories />
      <Ceo/>
      
    </div>
  )
}

export default Home