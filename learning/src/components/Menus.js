import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ListGroup>
      <Link
        className="list-group-item list-group-item-action"
        active="true"
        to="/"
      >
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        active="true"
        to="/add-course"
      >
        Add Course
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        active="true"
        to="/all-courses"
      >
        View Courses
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        active="true"
        to="#"
      >
        About
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        active="true"
        to="#"
      >
        Contact
      </Link>
    </ListGroup>
  );
};

export default Menus;
