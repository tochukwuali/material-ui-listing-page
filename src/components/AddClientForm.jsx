import { useState } from "react";
import axios from "axios";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import {
  Button,
  Box,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WebIcon from "@material-ui/icons/Language";
import SubmitIcon from "@material-ui/icons/Send";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      flexGrow: 1,
    },
  },
  formContainer: {
    padding: theme.spacing(2),
  },
  header: {
    padding: theme.spacing(1, 3),
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  input: {
    width: "100%",
    margin: theme.spacing(1),
  },
  socialInput: {
    width: "100%",
  },
  submitBtn: {
    width: "100%",
    padding: theme.spacing(1, 2),
    textAlign: "right",
  },
}));

const AddClientForm = () => {
  const [clientName, setClientName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [workPhone, setWorkPhone] = useState("");
  const [address, setAddress] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");
  const [poc, setPoc] = useState("");
  const [fax, setFax] = useState("");
  const [industry, setIndustry] = useState("");
  const [contract, setContract] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");

  function handleSubmit() {
    console.log("starting");
    const newClient = {
      tenantId: "reesby",
      clientName,
      clientEmail: emailAddress,
      clientWorkPhone: workPhone,
      clientAddress: address,
      clientPersonalPhone: personalPhone,
      clientPocName: poc,
      clientFax: fax,
      clientIndustry: industry,
      clientContract: contract,
      clientWebsite: websiteUrl,
      twitter: twitterUrl,
      facebook: facebookUrl,
      instagram: instagramUrl,
    };
    const postUrl = "/api/v1/addclient";
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(postUrl, { newClient }, config)
      .then((res) => {
        console.log(res.data);
      })
      .then((err) => console.log(err));
  }

  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off" id="myform">
      <Box className={classes.header}>
        <Typography variant="body2">New Client</Typography>
      </Box>

      <Divider className={classes.divider}></Divider>
      <ThemeProvider theme={theme}>
        <Grid container spacing={1} className={classes.formContainer}>
          <Grid item xs={12}>
            <TextField
              className={classes.input}
              label="Client Name*"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e) => setClientName(e.target.value)}
              value={clientName}
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              className={classes.input}
              label="Email Address*"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e) => setEmailAddress(e.target.value)}
              value={emailAddress}
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              className={classes.input}
              label="Work Phone Number*"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e) => setWorkPhone(e.target.value)}
              value={workPhone}
              size="small"
              color="secondary"
              type="tel"
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              className={classes.input}
              label="Address"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              className={classes.input}
              label="Personal Phone Number"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e) => setPersonalPhone(e.target.value)}
              value={personalPhone}
              size="small"
              color="secondary"
              type="tel"
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              className={classes.input}
              label="Point of Contact"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e) => setPoc(e.target.value)}
              value={poc}
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              className={classes.input}
              label="Fax"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e) => setFax(e.target.value)}
              value={fax}
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              className={classes.input}
              label="Industry"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e) => setIndustry(e.target.value)}
              value={industry}
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              className={classes.input}
              label="Contract"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e) => setContract(e.target.value)}
              value={contract}
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
          <Grid item xs={6}>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <WebIcon />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id="website"
                    className={classes.socialInput}
                    label="Website"
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    value={websiteUrl}
                    color="secondary"
                    type="text"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <FacebookIcon />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id="facebook-logo"
                    className={classes.socialInput}
                    label="Facebook"
                    onChange={(e) => setFacebookUrl(e.target.value)}
                    value={facebookUrl}
                    color="secondary"
                    type="text"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <InstagramIcon />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id="input-with-icon-grid"
                    className={classes.socialInput}
                    label="Instagram"
                    onChange={(e) => setInstagramUrl(e.target.value)}
                    value={instagramUrl}
                    color="secondary"
                    type="text"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <TwitterIcon />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id="input-with-icon-grid"
                    className={classes.socialInput}
                    label="Twitter"
                    onChange={(e) => setTwitterUrl(e.target.value)}
                    value={twitterUrl}
                    color="secondary"
                    type="text"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Box className={classes.submitBtn}>
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<SubmitIcon />}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default AddClientForm;
