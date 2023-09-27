import React from "react";

import ProjectDetails from "./ProjectDetails";

import { Outlet } from "react-router-dom";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <>
      <ProjectDetails />
      <Outlet />
    </>
  );
};

export default ProjectDetailsIndex;