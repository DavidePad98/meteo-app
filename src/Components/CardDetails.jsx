import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  const params = useParams();

  const [cityMeteoDet, setCityMeteoDet] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchDet = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${params.cardid}&appid=b37c59d31d294fbb0194af89a7d3416e `
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore fetch");
        }
      })
      .then((data) => {
        console.log(data);
        setCityMeteoDet(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchDet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.cardid]);

  return (
    <>
      {isLoading ? (
        <div
          id="spinner-container"
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col className="text-center p-0" xs={12} md={6} lg={6}>
              <div className="rounded-2 p-2 x">
                <h3>{cityMeteoDet.name}</h3>
                {/* {(cityMeteoDet.weather[0].main = "Rain" ? "piove" : "non piove")} */}
                <p>{cityMeteoDet.weather[0].main}</p>
                <div>
                  <ul>
                    <i className="bi bi-thermometer-low"></i>
                    Temperature:
                    <li>
                      Temp.media:{" "}
                      {(((cityMeteoDet.main.temp - 32) * 5) / 9 / 6).toFixed()}
                      °C
                    </li>
                    <li>
                      Temp.minima:{" "}
                      {(
                        ((cityMeteoDet.main.temp_min - 32) * 5) /
                        9 /
                        6
                      ).toFixed()}
                      °C
                    </li>
                    <li>
                      Temp.massima:{" "}
                      {(
                        ((cityMeteoDet.main.temp_max - 32) * 5) /
                        9 /
                        6
                      ).toFixed()}
                      °C
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    Vento: <i className="fs-5 bi bi-wind"></i>
                    <li>{cityMeteoDet.wind.speed} kt</li>
                    <li>Direction: {cityMeteoDet.wind.deg}"</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default CardDetail;
