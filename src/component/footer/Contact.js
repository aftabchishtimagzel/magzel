import { Button, Stack } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    const award = [

        {
            id: 1,
           url:require('../../images/clutch.png')
        },
        {
            id: 2,
           url:require('../../images/top_app_dev.png')
        },
        {
            id: 3,
           url:require('../../images/it_services.png')
        },
        {
            id: 4,
           url:require('../../images/clutch2.png')
        },
        {
            id: 5,
           url:require('../../images/it_services2.png')
        },
        {
            id: 1,
           url:require('../../images/clutch.png')
        },
        {
            id: 6,
           url:require('../../images/clutch3.png')
        }, 
        {
            id: 7,
           url:require('../../images/up_work.png')
        },
        {
            id: 8,
           url:require('../../images/DOU.png')
        }
    ]
  return (
    <>
 <Box sx={{textAlign:"center"}} p={1}>
 <h1>Have a project in mind?</h1>
    <h3>
Book a free consultation with tech experts</h3>
 </Box>
  
    <Stack direction={{xs:"column",md:"row"}} width={{xs:"100%",md:"70%"}} mx="auto" p={2} justifyContent={"space-between"}>
<Stack width={{xs:"100%",md:"40%"}}>
<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
            
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Phone Number"
                  name="number"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Company"
                  name="company"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
           
              <Grid item xs={12} >
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
        
          </Box>
</Stack>
<Grid container width={{xs:"100%",md:"50%"}} >
<Grid item xs={12} md={12} >
{
    award.map((action)=>{
        return(
            <img style={{width:"180px"}} src={action.url} alt="image"/>
        )
    })
}
</Grid>
</Grid>
    </Stack>
    </>)
}

export default Contact