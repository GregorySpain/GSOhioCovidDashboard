import DropdownMenu from "react-bootstrap/DropdownMenu";
import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from "react-bootstrap/DropdownItem";
import GetCountyData from "./GetCountyData";



function CountyPicker() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [county, setCounty] = React.useState(0);
    
    function handleChange(eventKey) {
        console.log(eventKey);
        <GetCountyData county={eventKey} />
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return (
        
        <><DropdownButton
            id="dropdown-menu-align-end"
            title="Choose a County"
            onSelect={(eventKey) => {
                
                handleChange(eventKey);
            }}
        >
            <DropdownItem eventKey="0">Adams</DropdownItem>
            <DropdownItem eventKey="1">Allen</DropdownItem>
            
        </DropdownButton>
        <GetCountyData county={county} /></>
    )};
};


export default CountyPicker;