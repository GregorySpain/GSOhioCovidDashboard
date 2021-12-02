import React from "react";

class BoringCountyPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            countyData: [],
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    componentDidMount() {
        fetch("https://disease.sh/v3/covid-19/historical/usacounties/ohio?lastdays=365")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                countyData: result.item,
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
        const { error, isLoaded, countyData, value } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
            <form>
                <label>
                    Choose a county: 
                </label>
                <select value={value} onChange={this.handleChange}>
                    <option value="adams">
                           Adams
                    </option>
                    <option value="allen">
                      Allen
                    </option>
                </select>
            </form>
        )}
    }
}
export default BoringCountyPicker;