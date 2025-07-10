import React from "react";
import "../App.css";

const ChildComponent = (props) => {
  console.log("Child Component go re-render again");

  return (
    <div className="box2">
      <button>{props.buttonName}</button>
    </div>
  );
};

export default ChildComponent;
