import React from 'react';
import { AreaChart, defs, linearGradient, stop, XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts';

class GraphData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        cases: [],
        vaccines: []
      };
    }
  
    componentDidMount() {
      fetch("https://disease.sh/v3/covid-19/nyt/states/ohio?lastdays=365")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              cases: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <AreaChart width={1000} height={600} data={items}
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
            
            <Area type="monotone" dataKey="cases" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            <Area type="monotone" dataKey="deaths" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv" />
            </AreaChart>
        );
      }
    }
  }
  
  export default GraphData;