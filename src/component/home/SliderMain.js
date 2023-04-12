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
          height: '80vh',
          objectFit: 'cover',
        }}
      />
    
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '80vh',
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box width={{ md: '70%', xs:'90%'}}>
          <Typography variant="h3" style={{ color: '#fff', marginBottom: '1rem', fontWeight:{md:'800',xs:'500'} }}>
            Custom Software<br></br>
            Development Company
          </Typography>
          <Typography variant="h6" style={{ color: '#fff', marginBottom: '1rem', fontWeight: { md: '800', xs: '500' } }}>
            We are Experienced in the development of BlockchainWeb 3.0AppsWeb
          </Typography>
         
          <Typography variant="body1" style={{ color: '#fff', fontSize:'1.55em' }}>
          
            Magzel is one of the pioneers in web 3.0 development
          </Typography>
          <a href='#contact' style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{
            bgcolor: '  #db5156', color: 'white',marginTop:'10px', padding: '14.5px 64.5px', borderRadius:'64px', ":hover": {
              bgcolor: '  #db5156'
            }
          }} > Let's talk</Button></a>
        
        </Box>

       

      </div>
    </div>
  )
}

export default SliderMain




