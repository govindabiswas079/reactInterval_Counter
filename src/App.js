import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import './App.css';

//const 6 hr = 216000;
//const 12 hr = 43200;
//const 1 day = 86400;
//const 30 day = 2592000;
//const 60 day = 5184000;
//const 90 day = 7776000;

const App = () => {
  const [clientcounter, setClientcounter] = useState(30);
  const [project, setProject] = useState(30);
  const [client, setClient] = useState(30);

  useEffect(() => {
    const client = setInterval(() => {
      setClientcounter(clientcounter + 2);
    }, 216000);

    return () => {
      clearInterval(client);
    };
  }, [clientcounter]);

  useEffect(() => {
    const Tproject = setInterval(() => {
      setProject(project + 2);
    }, 216000);

    return () => {
      clearInterval(Tproject);
    };
  }, [project]);


  useEffect(() => {
    const Tclient = setInterval(() => {
      setClient(client + 2);
    }, 216000);

    return () => {
      clearInterval(Tclient);
    };
  }, [client]);

  return (
    <div style={{ maxWidth: "1040px", margin: "0 auto", marginTop: "40px" }}>
      <Typography variant="h2">Time Interval</Typography>
      <Box textAlign="center" maxWidth="1040px" margin="0 auto" marginTop="40px" display="flex" style={{ backgroundColor: "blue" }}>
        <div style={{ color: "white", textAlign: "center", margin: "auto" }}>
          <Typography variant="h5">{clientcounter}+</Typography>
          <Typography variant="h4">Happy Client :)</Typography>
        </div>

        <div style={{ color: "white", textAlign: "center", margin: "auto" }}>
          <Typography variant="h5">{project}+</Typography>
          <Typography variant="h4">Project</Typography>
        </div>

        <div style={{ color: "white", textAlign: "center", margin: "auto" }}>
          <Typography variant="h5">{client}+</Typography>
          <Typography variant="h4">Client</Typography>
        </div>
      </Box>
    </div>
  )
}

export default App;
