import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");

  const cercaL = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      window.location.href = `/card-details/${search}`;
    }
  };

  return (
    <div className="d-flex justify-content-center my-4 ">
      <Form className="d-flex justify-content-center">
        <Form.Control
          className="x border-0 "
          type="search"
          placeholder="Cerca la tua città"
          aria-label="Search"
          onChange={cercaL}
          onKeyUp={handleKeyUp}
          value={search}
        />
        <Link to={`/card-details/${search}`}>
          <Button variant="outline-primary" className="mx-3">
            Cerca
          </Button>
        </Link>
      </Form>
    </div>
  );
};
export default Search;
