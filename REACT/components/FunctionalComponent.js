import React from "react";

function FunctionalComponent(prop_obj) {
  console.log(prop_obj);
  return (
    <div>
      <h1> I am functional Component.</h1>
      <p>I am a paragraph inside a functional component</p>
      <h2>{prop_obj.name}</h2>
      <h2>{prop_obj.age}</h2>
      <h2>{prop_obj.occupation}</h2>
    </div>
  );
}

export default FunctionalComponent;

