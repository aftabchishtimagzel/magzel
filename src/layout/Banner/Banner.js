import React from 'react'
import slide from '../../images/home-background.jpg'
import { Box, Button, Typography } from '@mui/material'


const BannerMain=(props)=> {
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
          height: '70vh',
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box width={{ md: '45%', xs:'90%'}}>
          <Typography variant="h3" style={{ color: '#fff', marginBottom: '1rem', fontWeight:{md:'800',xs:'500'} }}>
            {props.title}
          </Typography>
          {/* <Typography variant="h5" style={{ color: '#fff', marginBottom: '1rem', fontWeight: { md: '800', xs: '500' } }}> */}
          <p style={{color:"white "}}>
          {
            props.title1
          }
          </p>
          {/* </Typography> */}
         
          <p style={{color:"white "}}>
          {
            props.title2
          }
          </p>
          {
            props.title3 ? <p style={{color:"white "}}>
            {
              props.title3
            }
            </p> : <Button variant="contained" sx={{
            bgcolor: '  #db5156', color: 'white',marginTop:'10px', padding: '14.5px 64.5px', borderRadius:'64px', ":hover": {
              bgcolor: '  #db5156'
            }
          }} > Let's talk</Button>
          }
          
        
        </Box>

       

      </div>
    </div>
  )
}

export default BannerMain




