import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import LockIcon from "@mui/icons-material/Lock";
import FaceIcon from "@mui/icons-material/Face";
import Switch from "@mui/material/Switch";
import "./App.css";
import { useState } from "react";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Button from '@mui/material/Button';

function App() {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="App">
      <Paper elevation={3} style={{padding:'10px'}}>

      
       {checked ? (<Chip
          icon={<LockIcon />}
          label="Login"
          color="primary"
          variant="outlined"
        />):(<Chip
          icon={<FaceIcon />}
          label="SignUp"
          color="primary"
          variant="outlined"
        />)}
        
        
        <br />
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br/>
        {checked ? (<Login/>):(<SignUp/>)}
        
      </Paper>
    </div>
  );
}

export default App;
