import React from "react";
import AppBar from "../src/Components/AppBar/AppBar";
import Drawer from "../src/Components/Drawer/Drawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <Drawer />
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        contenido
        {/* <button onClick={() => desplegar()}>Abrir</button> */}
      </div>
    </div>
  );
}

export default App;
