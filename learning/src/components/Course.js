import React from "react";
import { Card, Container } from "reactstrap";
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const Course = ({ course }) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <CardBody>
        <CardTitle tag="h5">{course.title}</CardTitle>

        <CardText>{course.desc}</CardText>
        <Container className="text-center">
          <Button color="warning ml-3">update</Button>
          <Button color="danger">delete </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
