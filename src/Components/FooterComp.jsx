import React from "react";
import { Container } from "react-bootstrap";

export default function FooterComp () {
    const footer = {
        color: "#fff",
	    backgroundColor: "#040e27",
    }
    return(
        <Container fluid className="py-3" style={footer}>
            <p className="text-center mb-lg-0" >Copyright &#169;2020 All right reserves</p>
        </Container>
    )
}