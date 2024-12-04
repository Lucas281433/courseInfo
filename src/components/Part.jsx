/**
 * A component that displays a part of a course.
 * @param {{ name: string; exercises: number }} part
 * @returns {JSX.Element}
 */

const Part = ({ part }) => {
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  );
};

export default Part;
