import { Button, Grid, Box, Stack } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>

            {/* newsletter */}

            <Box sx={{ backgroundColor: 'black', color: 'white' }}mt={5} >
                <Grid container spacing={4} width={'98%'} mx={'auto'} borderBottom={'1px solid white'} padding={"10px 0px"} >
                    {/* logo */}
                    <Grid item lg={2}>
                        <h3>Magzel</h3>
                    </Grid>

                    <Grid item lg={2}>
                        <h4>Feature</h4>
                        <Stack direction={"column"} spacing={0.2} sx={{ color: 'gray' }}>
                            <p>Mens</p>
                            <p> Womens</p>
                            <p>Boys</p>
                            <p> Girls</p>
                            <p> New Arrivals</p>
                            <p>Shoes</p>
                            <p> Cothes</p>
                            <p> Accessories</p>
                        </Stack>
                    </Grid>
                    <Grid item lg={2} >
                        <h4>Menu</h4>
                        <Stack direction={"column"} spacing={0.2} sx={{ color: 'gray' }}>
                            <p> About Us</p>
                            <p> Contact Us</p>
                            <p><Link style={{ textDecoration: "none", color: "white" }} to="/mydashboard" >My Account</Link></p>
                            <p> Order History</p>
                            <p><Link style={{ textDecoration: "none", color: "white" }} to="/wishlist" >My Wishlist</Link></p>
                            <p>Blog</p>
                            <p> Login</p>
                        </Stack>
                    </Grid>
                    <Grid item lg={2}>
                        <h4>Contact Us</h4>
                        <Stack direction={"column"} spacing={0.2} sx={{ color: 'gray' }}>
                            <h4 style={{
                                color: "white"
                            }}>Address:</h4>
                            <p style={{
                                marginTop: '-14px'
                            }}>123 street name City England</p>

                            <h4 style={{
                                color: "white"
                            }}>Phone:</h4>
                            <p>(123) 456-7890</p>

                            <h4 style={{
                                color: "white"
                            }}>Email:</h4>
                            <p>email@example.com</p>

                            <h4 style={{
                                color: "white"
                            }}>Working Days/Hours</h4>
                            <p>Mon-Sun/9:00AM-8:00PM</p>
                        </Stack>
                    </Grid>
                    <Grid item lg={2}>
                        <h4>Follow us</h4>
                        <Stack direction={"column"} spacing={0.5} sx={{ color: 'gray' }}>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={4}
                            ><FacebookIcon sx={{ color: 'white' }} />
                                Facebook
                            </Stack>

                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={4}
                            ><TwitterIcon sx={{ color: 'white' }} />
                                Twitter
                            </Stack>

                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={4}
                            ><InstagramIcon sx={{ color: 'white' }} />
                                Instagram
                            </Stack>



                        </Stack>
                    </Grid>
                    <Grid item lg={2}>
                        <h4>Join Us</h4>
                        <Stack direction={"column"} spacing={0.5} sx={{ color: 'gray' }}>
                            <input type="email" placeholder='Enter Your Email' style={{ padding: '15px 4px' }} required />
                            <Button variant="contained" fullWidth sx={{
                                backgroundColor: 'white', color: 'black', ":hover": {
                                    backgroundColor: 'white', color: 'black'
                                }
                            }}>SUBSCRIBE!</Button>


                        </Stack>
                    </Grid>
                </Grid>

                {/* developed by: */}


                {/* developed by: */}

                <Box width={'98%'} mx={'auto'} padding={"10px 0px"} >
                    <p>© 2023 Crisp theme developed by Muhammad Rizwan</p>
                </Box>
            </Box>
        </>
    )
}

export default Footer