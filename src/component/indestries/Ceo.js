import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid, Stack } from '@mui/material';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        id: 1,
        title: 'We found the most impressive about Light IT Global their engagement and availability as well as their focus on quality. Our cooperation was very successful, and the process was really clear.',
        dis: 'A comprehensive, scalable SAAS solution helps medical professionals operate MRI images more efficiently. It not only reduces the need for manual labor but also provides employees with an easy-to-use digital catalog. The platform has already been successfully incorporated into the infrastructure of one of the clinics in Israel and has processed more than 1 million images.',
        img1: 'https://cdn.light-it.net/icons/testimonials/edacy.svg',
        
    },
    {
        id: 2,
        title: 'We found the most impressive about Light IT Global their engagement and availability as well as their focus on quality. Our cooperation was very successful, and the process was really clear.',
        dis: 'A comprehensive, scalable SAAS solution helps medical professionals operate MRI images more efficiently. It not only reduces the need for manual labor but also provides employees with an easy-to-use digital catalog. The platform has already been successfully incorporated into the infrastructure of one of the clinics in Israel and has processed more than 1 million images.',
        img1: 'https://cdn.light-it.net/icons/testimonials/tigerq.svg',
      
    },
    {
        id: 3,
        title: 'We found the most impressive about Light IT Global their engagement and availability as well as their focus on quality. Our cooperation was very successful, and the process was really clear.',
        dis: 'A comprehensive, scalable SAAS solution helps medical professionals operate MRI images more efficiently. It not only reduces the need for manual labor but also provides employees with an easy-to-use digital catalog. The platform has already been successfully incorporated into the infrastructure of one of the clinics in Israel and has processed more than 1 million images.',
        img1: 'https://cdn.light-it.net/icons/testimonials/tutorpeers.svg',

    }
];

function Ceo() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box mt={ 5 }  >
           

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((item, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Grid container width={"70%"} mx="auto" spacing={2}>

                                
                                <Grid item md='4'>
                                    <Stack direction="row" spacing={2}>
                                        <Box>
                                            <img

                                                style={{
                                                    height:"auto",
                                                    display: 'block',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={item.img1}
                                                alt=""
                                            />
                                        </Box>
                                        
                                    </Stack>


                                </Grid>
                                <Grid item md="8">
                                    <Typography variant="h6" component="div" sx={{
                                        // fontSize: '1.875em',
                                        lineHeight: '120%',
                                        fontWeight: '600'
                                    }}>
                                        {item.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{
                                        fontSize: '1.125em',
                                        marginTop: ' 27px',
                                        letterSpacing: '.002em',
                                        marginBottom: '28px',
                                        lineHeight: '150%'

                                    }} >
                                        {item.dis}
                                    </Typography>

                                </Grid>

                            </Grid>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{
                    backgroundColor: '#f1f4fd',
                    justifyContent: 'center',
                    marginTop: '50px',
                    "& .MuiMobileStepper-dot:not(.MuiMobileStepper-dotActive)": {
                        backgroundColor: '#f8bcb8' // set the inactive dot color
                    },

                    "& .MuiMobileStepper-dot": {
                        backgroundColor: '#db5156' // set the inactive dot color
                    }
                }}
            />
        </Box>
    );
}

export default Ceo;
