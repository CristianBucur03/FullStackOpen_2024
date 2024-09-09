/* eslint-disable no-const-assign */

import Content from "./Content";
import Total from "./Total";

/* eslint-disable react/prop-types */
export const Course = ({ course }) => {
  const Header = ({ props }) => {
    return (
      <>
        <h1>{props.name}</h1>{" "}
      </>
    );
  };

  return (
    <div>
      <Header props={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
