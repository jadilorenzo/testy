import React from "react";
import Paper from "./Paper";
import {
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AirDBContext } from "../context/AirDBContext";

export default React.memo((props: any) => {
  const { users, updateAirDB } = React.useContext(AirDBContext);
  const [toggled, setToggled] = React.useState(false);
  const [username, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClose = () => {
    setToggled(false);
  };

  const handleLogin = () => {
    const isMatching =
      users.filter(
        user =>
          user.fields.password === password && user.fields.username === username
      ).length > 0;
    const userId = users.filter(user => user.fields.username === username)[0]
      .id;

    if (isMatching) {
      setToggled(false);
      props.setRedirect("/");
      window.localStorage.setItem("username", username);
      updateAirDB("Testy - Users", userId, {
        active: "true"
      });
    }
  };

  return users.length > 0 ? (
    <>
      <br />
      <Paper>
        <Typography variant="h4">Home</Typography>
        I'd put a lot of text here...{" "}
        <IconButton onClick={() => setToggled(true)} color="primary">
          <ExitToAppIcon />
        </IconButton>
        <Dialog
          fullWidth={true}
          open={toggled}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle disableTypography id="alert-dialog-title">
            <Typography variant="h4">Login to Testy</Typography>
          </DialogTitle>
          <DialogContent>
            <FormControl style={{ width: "100%" }}>
              <TextField
                value={username}
                onChange={e => setUser(e.target.value)}
                fullWidth
                label="User Name"
              />
            </FormControl>
            <br /> <br />
            <FormControl style={{ width: "100%" }}>
              <TextField
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
                type="password"
                label="Password"
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </>
  ) : null;
});
