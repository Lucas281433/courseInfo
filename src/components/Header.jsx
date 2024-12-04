/**
 * A component that displays the name of a course.
 * @param {{ name: string }} course
 * @returns {JSX.Element}
 */

const Header = ({ course }) => {
  return (
    <div>
      <h2 className="text-success">{course.name}</h2>
    </div>
  );
};

export default Header;
