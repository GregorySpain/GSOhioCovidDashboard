import React from 'react';
import DrawMainGraph from './DrawMainGraph';

function GetMainData(props) {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    const [caseData, setCaseData] = React.useState([]);
    
    
    let fips = '';
    let url = '';
    const urlPrefix = 'https://api.covidactnow.org/v2/';
    const urlSuffix = '.json?apiKey=';

    switch (props.county) {
      case 'all':
        url = urlPrefix + 'state/39' + urlSuffix;
        break;

      case '39001':
        url = urlPrefix + 'county/' + props.county + urlSuffix;
        break;

    }
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    React.useEffect(() => {
      fetch('https://api.covidactnow.org/v2/state/oh.timeseries.json?apiKey=87db0002cbf449c7ba0a2b01ab2d5921')
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setCaseData(result);
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
  
    let graphData = [];
    for (let i = 0; i < 366; i++) {
      graphData[i] = {
        date: caseData['actualsTimeseries'][i]['date'],
        cases: caseData.actualsTimeseries[i].cases,
        deaths: caseData.actualsTimeseries[i].deaths
      }
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <DrawMainGraph data={graphData} />   
      );
    }
  }
//<Area type="monotone" dataKey="deaths" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv" />
  export default GetMainData;
/*<AreaChart width={1000} height={600} data={vaccines.timeline}
        margin={{ top: 100, right: 30, left: 50, bottom: 100 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="date" angle="315" tickMargin="40" interval="preserveEnd" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        
        <Area type="monotone" dataKey="total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        
        </AreaChart>
        </div>*/