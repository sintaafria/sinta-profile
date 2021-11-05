import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

export default function ContentComp(props) {

    return (
        <Container className="mb-2">
            <Row md={3}className="justify-content-center">
                <Col>
                    <h4>{props.name}</h4>
                </Col>
                <Col>
                    <ProgressBar now={props.val}/>
                </Col>
            </Row>
        </Container>
    )
}
