import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";
import base_url from "../api/baseapi";
import { toast } from "react-toastify";
const AddCourse = () => {
  // decalring course variable to store value
  const [course, setCourse] = useState({});

  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Add Courses";
  }, []);

  const formhandler = (e) => {
    console.log(course);
    axios.post(`${base_url}/add-course`, course).then(
      (response) => {
        console.log(response);
        toast.success("succefully data added");
      },

      (Error) => {
        console.log(Error);
        toast.error("server failed");
      }
    );
    e.preventDefault();
  };

  return (
    // <h1 className="my-3">Add Course</h1>
    <Fragment>
      <h1 className="my-5">Fill the Course details</h1>
      <Form className="my-5" onSubmit={formhandler}>
        <FormGroup className="my-3">
          <label htmlFor="courseid">Course id</label>
          <Input
            type="userid"
            name="courseid"
            id="courseid"
            onChange={(e) => {
              setCourse({ ...course, courseid: e.target.value });
              // console.log(course);
            }}
          />
        </FormGroup>

        <FormGroup className="my-3">
          <label htmlFor="course title">Title</label>
          <Input
            type="title"
            name="courseTitle"
            id="courseTitle"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
              // console.log(course);
            }}
          />
        </FormGroup>

        <FormGroup className="my-3">
          <label htmlFor="Description">Description</label>
          <Input
            type="textarea"
            name="courseDesc"
            id="courseDesc"
            onChange={(e) => {
              setCourse({ ...course, desc: e.target.value });
              // console.log(course);
            }}
          />
        </FormGroup>

        <Container>
          <Button type="submit" variant="success">
            Add Course
          </Button>
          <Button variant="warning ml-3" type="reset">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
