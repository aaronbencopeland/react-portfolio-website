import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})`, width: '250px', height: '250px', margin: 'auto'}} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;