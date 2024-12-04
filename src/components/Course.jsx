import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
import { Card, CardBody, CardImg } from "react-bootstrap";

/**
 * A component that displays a course.
 * @param {{ course: { name: string; id: number; img: string; parts: Array<{ id: number; name: string; exercises: number }> } }} props
 * @returns {JSX.Element}
 */

const Course = ({ course }) => {
  return (
    <Card className="border-3 border-success-subtle mb-3">
      <CardBody>
        <CardImg src={course.img} />
        <Header course={course} />
        <Content course={course} />
        <hr />
        <Total course={course} />
      </CardBody>
    </Card>
  );
};

export default Course;
