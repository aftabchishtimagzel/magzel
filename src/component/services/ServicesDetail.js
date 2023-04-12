import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import web from '../../images/web.jpg'
import ProvideServices from './ProvideServices';
import RecentProject from '../expertise/RecentProject';
function ServicesDetail() {
    return (
        <>

            <Grid container spacing={3} width={'80%'} mx={'auto'} mb={5} mt={5}>
                <Grid item md={6}>
                    <Box >
                        <NavLink to="/services" style={{ color: "#db5156", textDecoration: 'none' }}>
                            <Stack direction={"row"} alignItems={"center"} spacing={2} >
                                <KeyboardBackspaceIcon sx={{ fontSize: '40px' }} />
                                <Typography fontSize={"20px"}>
                                    Back
                                </Typography>

                            </Stack></NavLink>
                    </Box>
                    <Box >

                        <Typography variant="h2" style={{ color: 'black', marginBottom: '1rem', fontWeight: { md: 800, xs: '500' } }}>

                            Web Development For Business Process Automation
                        </Typography>
                        <Typography variant="h4" style={{ color: 'black', marginBottom: '1rem', fontWeight: { md: '800', xs: '500' } }}>
                            We use and provide the best web development software
                        </Typography>

                        <Typography variant="body1" style={{ color: 'black', fontSize: '1.25em' }}>
                            To us, the web development process is fascinating because each and every web development project is a chance to create something interesting and new using cutting-edge web development tools. Our vast experience in custom web application development has contributed to the formation and growth of different companies. Every web developer in our team understands that clients depend on the quality of their work, thus, puts all efforts into giving the best result possible.

                        </Typography>

                    </Box>
                </Grid>
                <Grid item md={6}>
                    <img src={web} alt="web" width={"100%"} height={"auto"} />
                </Grid>

            </Grid >


            <Box>
            <ProvideServices/>
            </Box>
            <RecentProject/>
        </>
    )
}

export default ServicesDetail