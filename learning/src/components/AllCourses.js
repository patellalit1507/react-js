import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../api/baseapi";
import { toast } from "react-toastify";

const AllCourses = () => {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "All Courses";
  }, []);

  const getallcoursesfromServer = () => {
    axios.get(`${base_url}/get-courses`).then(
      (Response) => {
        console.log(Response.data);
        setCourses(Response.data);
        toast.success("data fetched successfully");
      },
      (Error) => {
        console.log(Error);
        toast.error("server failed");
      }
    );
  };

  useEffect(() => {
    getallcoursesfromServer();
  }, []);
  const [courses, setCourses] = useState({});
  return (
    <div>
      <h1>All Courses</h1>
      <p>all courses as follow</p>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.Courseid} course={item} />)
        : "no courses"}
    </div>
  );
};

export default AllCourses;
