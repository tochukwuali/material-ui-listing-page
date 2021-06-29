import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import {
  Grid,
  Button,
  Box,
  Container,
  Paper,
  InputBase,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";
import List from "./components/List";
import AddNewClient from "./components/AddNewClient";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },
    secondary: {
      main: "#fff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchicon: {
    margin: 4,
  },
}));

function App() {
  const [appData, setAppData] = useState({
    loading: false,
    rowsData: [],
  });
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setAppData({ loading: true });
    const url =
      "http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getallclients/tenant/reesby";
    axios.get(url).then((res) => {
      const rows = res.data;
      const rowsWithId = [...rows].map((row, i) => ({ ...row, id: i + 1 }));
      setAppData({ loading: false, rowsData: rowsWithId });
    });
  }, []);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="lg">
          <Typography variant="body2">MANAGEMENT</Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h4">Clients</Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component="span"
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              New Client
            </Button>
            <AddNewClient
              open={open}
              handleClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            />
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            style={{ padding: "1rem 0" }}
          >
            <div className="btns-grid">
              <Paper component="form" className={classes.root}>
                <SearchIcon className={classes.searchicon} />

                <InputBase
                  className={classes.input}
                  placeholder="Search by Name"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </Paper>

              <Button
                style={{ height: "2.8rem" }}
                variant="contained"
                color="secondary"
              >
                Search
              </Button>
              <Button
                variant="contained"
                style={{ height: "2.8rem" }}
                color="secondary"
                onClick={() => setSearch("")}
              >
                Clear
              </Button>
            </div>
            <Box>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component="span"
                startIcon={<FilterListIcon />}
              >
                Show Filter
              </Button>
            </Box>
          </Grid>
          <List rows={appData.rowsData} search={search} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
