import React, { useState } from "react";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import ValueComponent from "./ValueComponent";

const DataComponent = () => {
  const [id, setId] = useState("");
  const [value, setValue] = useState("");
  const [error, isError] = useState(false);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();

    axios
      .get(`${process.env.API_ENDPOINT}${id}`)
      .then(({ data }) => setValue(data.value))
      .catch(() => isError(true));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number. If this ID is present in the database, its value will
          be displayed below:
          <input type="text" value={id} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {error ? <ErrorComponent /> : <ValueComponent value={value} />}
    </div>
  );
};

export default DataComponent;
