import React from "react";
import { Button } from "./reportComponents";
import { Link } from "react-router-dom";

const DummyPage = () => {
  return (
    <div>
      <Button>
        <Link to='/admin'>Admin </Link>
      </Button>
      <Button>
        <Link to='/clients'>client </Link>
      </Button>
      <Button>
        <Link to='/management'>management </Link>
      </Button>
    </div>
  );
};

export default DummyPage;
