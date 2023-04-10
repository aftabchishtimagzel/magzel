import React from 'react'
import slide from '../../images/home-background.jpg'
import { Typography } from '@mui/material'


function SliderMain() {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={slide}
        alt="Artist"
        style={{
          width: '100%',
          height: '40vh',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '40vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >

        <Typography variant="h2" style={{ color: '#fff', marginBottom: '1rem', fontWeight: '800' }}>
          Custom Software
          Development Compan
        </Typography>
        <Typography variant="body1" style={{ color: '#fff' }}>
          Helping small and medium businesses navigate the digital world
        </Typography>

      </div>
    </div>
  )
}

export default SliderMain




