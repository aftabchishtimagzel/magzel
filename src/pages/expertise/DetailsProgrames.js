import React from 'react'
import Detail from '../../component/expertise/Detail'
import Technologies from '../../component/expertise/Technologies'
import Technology from '../../component/expertise/Technology'
import RecentProject from '../../component/expertise/RecentProject'

function DetailsProgrames() {
  return (
      <>
      <Detail />
      {/* <Technologies/> */}
      <Technology />
      <RecentProject/>
      </>
  )
}

export default DetailsProgrames