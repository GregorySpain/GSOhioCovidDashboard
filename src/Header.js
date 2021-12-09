import { Row, Col } from 'react-bootstrap'

function MyHeader() {
    return (
        <Row fluid>
            <Col>
                <header className="App-header">
                    <div>
                        <h1>Gregory Spain's Ohio Covid Dashboard</h1>
                    </div>
                </header>
            </Col>
        </Row>
    )
}

export default MyHeader;
