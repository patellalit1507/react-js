import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";

const Home = () => {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Home || Learn with lalit";
  }, []);
  return (
    <div>
      <h4>Home page is here in your services</h4>
      <Container></Container>
      <Container>
        <Button variant="outline-success" className="text-center">
          Start Using
        </Button>
      </Container>
    </div>
  );
};

export default Home;
