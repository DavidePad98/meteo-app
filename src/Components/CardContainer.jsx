import CardLocation from "./CardLocation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BigCard from "./BigCard";

const CardContainer = () => {
  return (
    <>
      <Container className="mt-3 pb-5">
        <Row>
          <Col xs={12}>
            <BigCard loc={"Muravera"} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center g-4">
          <Col xs={12} sm={6} md={4}>
            <CardLocation loc={"Cagliari"} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CardLocation loc={"Roma"} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CardLocation loc={"Milano"} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CardLocation loc={"Napoli"} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CardLocation loc={"Palermo"} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CardLocation loc={"Genova"} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CardLocation loc={"Lisbona"} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CardLocation loc={"Praga"} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CardLocation loc={"Barcelona"} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;
