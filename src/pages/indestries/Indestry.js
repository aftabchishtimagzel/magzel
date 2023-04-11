import React from 'react'
import Indestries from '../../component/indestries/Indestries'
import Client from '../../component/client/Client'
import BannerMain from '../../layout/Banner/Banner'

function Indestry() {
  return (
    <div style={{ backgroundColor: '#f1f4fd' }}>
      <BannerMain
        title={'Custom Software Solutions Of Any Complexity'}
        titlemain={"Grow stronger with our information technology solutions"}
        title3={'Specialization is the key to high-quality software development and resolving even the toughest technological challenges. Over the years, Light IT Global has mastered the craft of building custom solutions for specific industries and is ready to deliver advanced digital products that will cover your every business need'}
      />
      <Indestries />
      <Client/>
      </div>
  )
}

export default Indestry