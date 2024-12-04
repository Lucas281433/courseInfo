import { Container } from "react-bootstrap";
import Course from "./components/Course";
import imageFullStack from "./assets/full-stack.jpg";
import imageReact from "./assets/react.png";
import imageNode from "./assets/node.png";

/**
 * A component that displays a list of courses. The data is hard-coded and
 * consists of two courses: "Half Stack application development" and "Node.js". Each
 * course is displayed with its name, image, and a list of its parts.
 * @returns {JSX.Element}
 */

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      img: imageReact,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      img: imageNode,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <Container className="d-flex justify-content-center">
      <div>
        <h1 className="text-primary-emphasis text-center mb-3 mt-3">Web development curriculum</h1>
        <h1 className="text-center">
        <img src={imageFullStack} width="335rem" className="rounded mb-3" />
        </h1>
        <Course course={courses[0]} />
        <Course course={courses[1]} />
      </div>
    </Container>
  );
};

export default App;
