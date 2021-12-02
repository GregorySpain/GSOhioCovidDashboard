import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, Area} from 'recharts';

function GraphCases() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [ohioCases, setOhioCases] = React.useState([]);
    const [vaccines, setVaccines] = React.useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    React.useEffect(() => {
      fetch("https://disease.sh/v3/covid-19/nyt/states/ohio?lastdays=365")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setOhioCases(result);
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

    React.useEffect(() => {
      fetch("https://disease.sh/v3/covid-19/vaccine/coverage/states/ohio?lastdays=365&fullData=true")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setVaccines(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);

    /* //let graphData = [];
    

    for (let i = 0; i < vaccines.length; i++) {

      let object1 = ohioCases[i];
      let object2 = vaccines.timeline[i];
      let object3 = {...object1, ...object2};
      graphData[i] = object3;
    }*/
    /*for (let i = 0; i < vaccineTotals.length; i++) {
       
      graphData[i] = 
    } */

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>Cases and Deaths</h2>
          <AreaChart width={1000} height={600} data={ohioCases}
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
            <XAxis dataKey="date" angle="315" tickMargin="40" interval="preserveEnd">
              <Label value="Date" position="bottom" offset={70} />  
            </XAxis>
            <YAxis>
              <Label value="Number of Cases" position="left" angle={-90} offset={20} />
            </YAxis>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Area type="monotone" dataKey="cases" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            <Area type="monotone" dataKey="deaths" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>

          <AreaChart width={1000} height={600} data={vaccines.timeline}
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
              <XAxis dataKey="date" angle="315" tickMargin="40" interval="preserveEnd">
                <Label value="Date" position="bottom" offset={70} />  
              </XAxis>
              <YAxis>
                <Label value="Doses Administered" position="left" angle={-90} offset={20} />
              </YAxis>
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Area type="monotone" dataKey="total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>  
      );
    }
  }
//<Area type="monotone" dataKey="deaths" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv" />
  export default GraphCases;
