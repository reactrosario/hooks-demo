import React, { Fragment, useState, useEffect } from "react";

import Card from "../components/Card";

const RequestDemo = () => {
  const [note, setNote] = useState("");

  useEffect(() => {
    setNote("Loading...");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json => setNote(json.title))
      .catch(e => console.log(e));
  }, []);

  return (
    <Fragment>
      <Card>{note}</Card>
    </Fragment>
  );
};

export default RequestDemo;
