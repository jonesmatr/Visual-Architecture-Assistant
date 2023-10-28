import React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col, FormControl, Button, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Layout>
            <Container>
                {/* Body */}
                <Row style={{ marginTop: '100px' }}>
                <Col md={5} className="prompt-content prompt-content-col">
                 <div className="mb-3 d-flex flex-column align-items-start">
                 <label htmlFor="exampleFormControlTextarea1" className="form-label design-text">DESIGN TO REAL LIVE</label>
                 <h2 className="describe-text mb-2">Describe<br />Renovation:</h2>
                 <FormControl as="textarea" id="exampleFormControlTextarea1" rows="3" className="mb-2 custom-textarea" />
                <Button className="mt-3 float-end">Submit</Button>
    </div>
</Col>

                <Col md={{ span: 6, offset: 1 }}>
                    <Card className="shadow-sm light-card-bg custom-card">
                        <Card.Img variant="top" src="/front-page.png" alt="Front Page" />
                    </Card>


                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Home;
