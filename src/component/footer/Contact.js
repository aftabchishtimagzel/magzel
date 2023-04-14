import { Alert, Button, Snackbar, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8c6y8x7",
        "template_sd5b7zp",
        form.current,
        "XTHgEN1KsV08wAQJw"
      )
      .then(
        (result) => {
          // alert("message sent successfully")
          console.log(result.text);
          form.current.reset(); // reset the form fields after successful submission
          setSnackbarOpen(true); // show the snackbar message
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const award = [
    {
      id: 1,
      url: require("../../images/clutch.png"),
    },
    {
      id: 2,
      url: require("../../images/top_app_dev.png"),
    },
    {
      id: 3,
      url: require("../../images/it_services.png"),
    },
    {
      id: 4,
      url: require("../../images/clutch2.png"),
    },
    {
      id: 5,
      url: require("../../images/it_services2.png"),
    },
    {
      id: 1,
      url: require("../../images/clutch.png"),
    },
    {
      id: 6,
      url: require("../../images/clutch3.png"),
    },
    {
      id: 7,
      url: require("../../images/up_work.png"),
    },
    {
      id: 8,
      url: require("../../images/DOU.png"),
    },
  ];
  return (
    <>
      <Box sx={{ textAlign: "center" }} p={1} id="contact">
        <h1>Have a project in mind?</h1>
        <h3>Book a free consultation with tech experts</h3>
      </Box>

      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        width={{ xs: "100%", md: "70%" }}
        mx="auto"
        p={2}
        justifyContent={"space-between"}
      >
        <Stack width={{ xs: "100%", md: "40%" }}>
          <Box
            component="form"
            noValidate
            ref={form}
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            data-aos="fade-up"
          >
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
                  id="number"
                  label="Phone Number"
                  name="number"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="company"
                  label="Company"
                  name="company"
                  autoComplete="organization"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
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
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Your message has been sent!
            </Alert>
          </Snackbar>
        </Stack>
        <Grid container width={{ xs: "100%", md: "50%" }}>
          {award.map((action) => {
            return (
              <Grid item xs={6} md={4} data-aos="fade-down">
                <img style={{ width: "180px" }} src={action.url} alt="i" />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export default Contact;
