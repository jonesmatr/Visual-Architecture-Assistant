import React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Layout>
            <Container>
                {/* Body */}
                <Row className="mt-5">
                    <Col md={6}>
                        <h2>Hey, this is the prompt box you can enter text here:</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <FormControl as="textarea" id="exampleFormControlTextarea1" rows="3" />
                            <Button className="mt-3 float-end">Submit</Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src="path_to_your_image.jpg" alt="Description" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Home;
