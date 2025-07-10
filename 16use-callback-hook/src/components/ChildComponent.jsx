import React from "react";
import "../App.css";

const ChildComponent = React.memo((props) => {
    console.log("Child Component go re-render again");
  
    return (
      <div className="box2">
        <button onClick={props.handleClick}>{props.buttonName}</button>
      </div>
    );
});

export default ChildComponent;
