/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProjectsState } from "../../context/projects/context";

const ProjectDetails = () => {
  const projectState = useProjectsState();
  let { projectID } = useParams();

  const selectedProject = projectState?.projects.filter(
    (project) => `${project.id}` === projectID
  )?.[0];

  if (!selectedProject) {
    return <>No such Project!</>;
  }
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          {selectedProject.name}
        </h2>
      </div>
    </>
  );
};

export default ProjectDetails;