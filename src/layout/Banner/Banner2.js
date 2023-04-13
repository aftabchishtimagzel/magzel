import React from "react";
import AnimatedText from 'react-animated-text-content';


import { Box, Button, Typography } from "@mui/material";
function Banner2(props) {
  return (
    <div style={{ position: "relative", height: "83vh" }}>
      <img
        src={props.image}
        alt="Artist"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: { md: "70%", xs: "90%" } }} >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              width: { xs: "100%", md: "50%" },
              marginBottom: "1rem",
              fontWeight: { md: "800", xs: "500" },
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              marginBottom: "1rem",
              fontWeight: { md: "800", xs: "500" },
            }}
          >
          
            <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.3}
  duration={0.4}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.3}
  rootMargin="20%"
>
{props.title2}
</AnimatedText>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontSize: { md: "1.55em", xs: "1.2em" },
              padding: { md: "1rem 0", xs: "0.5rem 0" },
              width: { xs: "100%", md: "50%" },
            }}
          >

{props.disc}    
          </Typography>
          {props.button ? (
            <a href="#contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "  #db5156",
                  color: "white",
                  marginTop: "1rem",
                  padding: { md: "14.5px 40.5px", xs: "10px 40px" },
                  borderRadius: "64px",
                  ":hover": {
                    bgcolor: "  #db5156",
                  },
                }}
              >
                {" "}
                {props.button}
              </Button>
            </a>
          ) : null}
        </Box>
      </div>
    </div>
  );
}

export default Banner2;
