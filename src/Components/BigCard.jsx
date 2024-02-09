import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/spinner";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BigCard = ({ loc }) => {
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
      {isLoading ? (
        <div
          id="spinner-container"
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <div className="d-flex justify-content-center m-4 rounded-2 border-0 ">
          <Card className=" text-white position-relative ">
            <Card.Img
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT6ii63VMPCaeXVLi4QiAFkm8lmZGnrol7dve81wYOUi1DtVqjFbsjuGLiaTkVPawCIoTT3GWwrh-YcZX8ko06BL_dVSWFr1PA9Mjf18Q"
              alt="Card image"
              className="i"
            />
            <Card.ImgOverlay>
              <Card.Title className="fs-1">{loc}</Card.Title>
              <Link
                to={`/card-details/${cityMeteo.name}`}
                className="text-decoration-none position-absolute b text-black"
              >
                Dettagli<i className="bi bi-search mx-2"></i>
              </Link>
            </Card.ImgOverlay>
          </Card>
        </div>
      )}
    </>
  );
};
export default BigCard;
