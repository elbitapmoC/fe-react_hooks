import React from "react";

const Loops = ({ animals }) => {
  return (
    <ul>
      {animals.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default Loops;
