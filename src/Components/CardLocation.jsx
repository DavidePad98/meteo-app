import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/spinner";
// import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardLocation = ({ loc }) => {
  const [cityMeteo, setCityMeteo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);

  const fetchCity = () => {
    setIsLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=b37c59d31d294fbb0194af89a7d3416e `
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
        setCityMeteo(data);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    fetchCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* {isLoading && (
        <div
          id="spinner-container"
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" variant="warning" />
        </div>
      )}
      {cityMeteo.lenght === 0 && !isLoading && !Error ? (
        <Alert varient="danger">Nessuna città trovata...mi disp</Alert>
      ) : (
        <Card className="x border-0 ">
          <Card.Body>
            <Card.Title>{loc}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {cityMeteo.name} - {cityMeteo.sys.country}
            </Card.Subtitle>
            <Card.Text>
              Temp: {(((cityMeteo.main.temp - 32) * 5) / 9 / 6).toFixed()}°C
            </Card.Text>
            <Link
              to={`/card-details/${cityMeteo.name}`}
              className="text-decoration-none"
            >
              Dettagli<i className="bi bi-search mx-2"></i>
            </Link>
          </Card.Body>
        </Card>
      )} */}

      {isLoading ? (
        <div
          id="spinner-container"
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <div className="d-flex x rounded-2">
          <div className="flex-grow-1">
            <Card className="bg-transparent border-0 ">
              <Card.Body>
                <Card.Title>{loc}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {cityMeteo.name} - {cityMeteo.sys.country}
                </Card.Subtitle>
                {/* <Card.Text>
                  <i className="bi bi-thermometer-low"></i>{" "}
                  {(((cityMeteo.main.temp - 32) * 5) / 9 / 6).toFixed()}°C
                </Card.Text> */}
                <Link
                  to={`/card-details/${cityMeteo.name}`}
                  className="text-decoration-none"
                >
                  Dettagli<i className="bi bi-search mx-2"></i>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="d-flex justify-content-center align-items-center fs-1 fw-bold">
            <p>
              <i className="bi bi-thermometer-low"></i>{" "}
              {(((cityMeteo.main.temp - 32) * 5) / 9 / 6).toFixed()}°C
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default CardLocation;
