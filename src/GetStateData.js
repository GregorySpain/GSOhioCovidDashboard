import React from 'react';

import { Row } from 'react-bootstrap';
import CasesGraph from './CasesGraph';
import VaccinesGraph from './VaccinesGraph';
import DeathsGraph from './DeathsGraph';


function GetStateData() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    const [ohioCases, setOhioCases] = React.useState([]);
    
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    React.useEffect(() => {
      fetch("https://api.covidactnow.org/v2/state/OH.timeseries.json?apiKey=87db0002cbf449c7ba0a2b01ab2d5921")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setOhioCases(result.actualsTimeseries);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    //const timeseries = ohioCases.actualsTimeseries;
    /*if (!cookies.beenHere) {
      setCookies('Been_Here', 'Thank you for visting')
    } else if (beenHere) {
      setCookies('Been_Here', 'Welcome Back')
    }
    setBeenHere(true);
    */
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Row className="graphsDiv">
            <CasesGraph timeseries={ohioCases} />  
          </Row>
          <Row className="graphsDiv">
            <VaccinesGraph timeseries={ohioCases} />
            <DeathsGraph timeseries={ohioCases} />
          </Row>
        </div>
        
        
          
      );
    }
  }
  
  export default GetStateData;
