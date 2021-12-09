import './styles/App.css';
import MyHeader from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import GetStateData from './GetStateData';
import CookieHandler from './CookieHandler';

function App() {
  return (
    <div>
      <MyHeader />
      <Container fluid="true">
      
      
      {/* GraphCases calls CasesGraph
          and VaccinesGraph*/}
      <GetStateData />
      
      <Row classname='alertClass'>
      <CookieHandler />
      </Row>
    </Container>
    </div>
  );
}

export default App;
