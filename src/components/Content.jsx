import Part from "./Part";

/**
 * A component that displays all the parts of a course.
 * @param {{ parts: Array<{ id: number; name: string; exercises: number }> }} course
 * @returns {JSX.Element}
 */

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

export default Content;
