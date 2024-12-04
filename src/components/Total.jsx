/**
 * A component that displays the total number of exercises in a course.
 * @param {{ course: { parts: Array<{ exercises: number }> } }} props
 * @returns {JSX.Element}
 */

const Total = ({ course }) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <div>
      <strong>Total of {total} exercises</strong>
    </div>
  );
};

export default Total;
