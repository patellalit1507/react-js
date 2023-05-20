import "./App.css";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";

// import Course from "./components/Course";
import Menus from "./components/Menus";
import Header from "./components/Header";
import AllCourses from "./components/AllCourses";
// import AddCourse from "./components/AddCourse";
import { Col, Container, Row } from "reactstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddCourse from "./components/AddCourse";

function App() {
  const notify = () =>
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row className="my-5">
            <Col md="4">
              <Menus />
            </Col>
            <Col md="8">
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="all-courses" Component={AllCourses} exact />
                <Route path="add-course" Component={AddCourse} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
