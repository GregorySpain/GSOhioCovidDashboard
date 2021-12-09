import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts';

function DrawMainGraph(props) {
    
    return (
        <div>
        <AreaChart width={1000} height={600} data={props.data}
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
        <Area type="monotone" dataKey="deaths" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
        </div>
    );
}

export default DrawMainGraph;