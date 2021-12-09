import React from 'react';
import { Row } from 'react-bootstrap';
import { render } from 'react-dom';
import CountyGraph from './CountyGraph';


function GetCountyData(props) {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [countyData, setCountyData] = React.useState([]);
    
    const counties = [
        {
            county: 'adams',
            fips: '39001',
        },
        {
            county: 'allen',
            fips: '39003',
        }
    ];

    
    console.log(props.county)
    const fips = counties[props.county].fips;
    const url = "https://api.covidactnow.org/v2/county/" +  fips  + ".timeseries.json?apiKey=87db0002cbf449c7ba0a2b01ab2d5921";
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    React.useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setCountyData(result.actualsTimeseries);
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
          <CountyGraph timeseries={countyData} />
      );
    }
  }
  
  export default GetCountyData;
