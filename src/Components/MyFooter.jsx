import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = () => {
  return (
    <Container>
      <Row className="text-center">
        <Col xs={12}>
          <div className="text-white">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
        </Col>
        <Col className="text-white pb-3" xs={12}>
          &copy; 1997-2023 MeteoDavide, Inc.
        </Col>
      </Row>
    </Container>
  );
};
export default MyFooter;
