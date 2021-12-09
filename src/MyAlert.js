import {React, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Col } from 'react-bootstrap'

function MyAlert(props) {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Col><Alert variant="info" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{props.message}</Alert.Heading>
          <p>
            This site is a project for WDD 3400. Per a project
            requirement, I am using one cookie; it simply tells
            me whether or not you have visited recently.
            The data is from an API supplied by <span>
              <a href="https://covidactnow.org/?s=26551559">covidActNow</a>
              </span> 
          </p>
          </Alert>
        </Col>
      );
    }
    return null;
}
export default MyAlert;