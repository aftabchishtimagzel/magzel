import React from 'react'
import BannerMain from '../../layout/Banner/Banner'
import MainPrograme from '../../component/expertise/MainPrograme'
import RecentProject from '../../component/expertise/RecentProject'

function Expertise() {
  return (
    <>
      <BannerMain
        title={'Leading Technologies for Effective Solutions'}
        title3={'We want to be the best ones at what we do, and it is only logical that we use advanced technologies when working on our projects. The Light IT Global team understands that without professional knowledge and skills in cutting-edge technologies implementation, it would be difficult to provide a wide range of solutions. That is why, we try new technologies once they appear and continue using them if they bring a better perspective on problem-solving.'}
      />
      <MainPrograme />
      <RecentProject/>
    </>
  )
}

export default Expertise