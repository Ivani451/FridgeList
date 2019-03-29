import React from "react";

// "input" is destructured from the props passed in by the redux-form "Field" component
export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label> <br />
      <textarea {...input} />
    </div>
  );
};
