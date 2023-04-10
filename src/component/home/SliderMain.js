import React from 'react'
import slide from '../../images/home-background.jpg'
import { Box, Button, Typography } from '@mui/material'


function SliderMain() {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={slide}
        alt="Artist"
        style={{
          width: '100%',
          height: '70vh',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '70vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box width={'50%'}>
          <Typography variant="h2" style={{ color: '#fff', marginBottom: '1rem', fontWeight: '800' }}>
            Custom Software
            Development Compan
          </Typography>
          <Typography variant="body1" style={{ color: '#fff', fontSize:'1.875em' }}>
            Helping small and medium<br></br> businesses navigate the digital world
          </Typography>
          <Button variant="contained" sx={{
            bgcolor: '  #db5156', color: 'white', padding: '14.5px 64.5px', borderRadius:'64px', ":hover": {
              bgcolor: '  #db5156'
            }
          }}> Let's talk</Button>
        
        </Box>

       

      </div>
    </div>
  )
}

export default SliderMain




