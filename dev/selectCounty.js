import React from "react";
import GetMainData from "./GetMainData";
class CountyPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            counties: [
                {
                    county: 'adams',
                    fips: '39001',
                },
                {
                    county: 'allen',
                    fips: '39003',
                }
            ],
            value: 'all',
            countyData: []
        };

        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    
    render() {
        const { error, counties, value } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
          } else {
            return (
            <div>
                <form>
                    <label>
                        Choose a county:
                    </label>
                    <select value={value} onChange={this.handleChange}>
                        <option value='all'>All</option>
                        {counties.map(item => (
                        <option key={item.county} value={item.fips}>
                            {item.county}
                            </option>
                        ))}
                    </select>
                </form>
                <GetMainData county={this.state.value} />
            </div>
        )}
    }
}
export default CountyPicker;