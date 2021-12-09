import { Col } from 'react-bootstrap';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, Area } from 'recharts';

function VaccinesGraph(props) {
    const timeseries = props.timeseries;
    return (
        <Col>
            <div className="vaccinesGraph">
                <h2>Timeline of Completed Vaccinations</h2>
                <AreaChart id="vaccinesChart" width={800} height={500} data={timeseries}
                  margin={{ top: 20, right: 5, left: 50, bottom: 100 }}>
                    <defs>
                        <linearGradient id="colorVaccines" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" angle="315" tickMargin="40" interval="preserveEnd">
                        <Label value="Date" position="bottom" offset={70} />  
                    </XAxis>
                    <YAxis tickFormatter={(value) => new Intl.NumberFormat('en').format(value)}>
                        <Label value="Completed Vaccinations" position="left" angle={-90} offset={30} style={{textAnchor: 'middle'}} />
                    </YAxis>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
                    <Legend verticalAlign="top" height={36}/>
                    <Area connectNulls type="monotone" dataKey="vaccinationsCompleted" stroke="#82ca9d" fillOpacity={1} fill="url(#colorVaccines)" />
                </AreaChart>
            </div>
        </Col>
    );
}

export default VaccinesGraph;