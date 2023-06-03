"use client";

import Project from "./ProjectComponent/Project";

const PastProject = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="text-2xl mx-auto text-center">My Past Project</div>
      <div className="container mx-auto px-4">
        <Project
          name="Home"
          tech_stack={["nextjs", "tailwind", "mongodb", "css3"]}
        />
      </div>
    </section>
  );
};

export default PastProject;
