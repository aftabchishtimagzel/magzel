import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import servicesdata from './Data';
function Services() {
    return (
        <>
            <Typography mt={3} variant='h2' sx={{
                fontWeight:'700',textAlign:'center'
            }} pt={5}>
                Services we provide
            </Typography>

            {/*==================service card============== */}
            
            <Grid container width={'80%'} mx={'auto'} spacing={2} mt={2} pb={5} >
                {servicesdata.map((item) => {
                    return (
                <Grid item md="4" >
                    <Card  sx={{
                        cursor: 'pointer', padding: '10px',borderRadius:'15px',
                        ":hover": {
                            boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
                    }}}>
                        <CardContent>
                            <Typography variant="h3" component="div" sx={{
                                fontSize: '1.875em',
                                lineHeight: '120%',
                                wordSpacing: '100vw',
                                fontWeight:'600'
                          }}>
                            {item.title}
                        </Typography>

                            <Typography variant="body2" sx={{
                                fontSize: '1.125em',
                                        marginTop: ' 27px',
                                height:'100px',
                                letterSpacing: '.002em',
                                marginBottom: '28px',
                                lineHeight:'150%'
                              
                        }} >
                          {item.disc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                            <Button  sx={{
                                color: '#db517c',gap:'4px' ,fontSize:'16px'
                            }}>Learn More  <ArrowRightAltIcon sx={{ fontSize: '40px' }} /></Button>
                    </CardActions>
                </Card>
            </Grid>
            
                    );
                })}
        </Grid >
        
      </>
  )
}

export default Services