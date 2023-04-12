import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Banner1(props) {
    return (
        <Box sx={{ bgcolor: 'white' }} pb={5}>  
            <Grid container spacing={3} width={{ md:"70%",xs:'98%'}} mx={'auto'} mb={5} mt={5} >
                
                {/* =================text===================== */}
          <Grid item md={6} xs={12}>
              <Box>
                  <Typography variant="h2" style={{ color: 'black', marginBottom: '1rem', fontWeight: { md: 800, xs: 500 }}}>
                    {props.title}
                  </Typography>
                  <Typography variant="h4" style={{ color: 'black', marginBottom: '1rem', fontWeight: { md: 800, xs: 500 }}}>
                      {props.head}
                  </Typography>
                  <Typography variant="body1" style={{ color: 'black', fontSize: '1.25em' }}>
                      {props.disc}
                  </Typography>
              </Box>
                </Grid>

                {/* =================image===================== */}
                <Grid item md={6} xs={12} order={{ xs: '-1', md: '0' }}>
                    <img src={props.image} alt="web" width={"100%"} height={"auto"} style={{ animation: "moveUpDown 2s ease-in-out infinite", }}  />
                </Grid>

     </Grid >
        </Box>
  )
}

export default Banner1