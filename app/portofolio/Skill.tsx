import React from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js / Express",
      "Prisma",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    title: "Languages",
    skills: [
      "JavaScript",
      "Python",
      "C++",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git / GitHub",
      "VS Code",
      "Vite",
    ],
  },
];

const Skill = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="bg-[#16161c] border border-white/5 rounded-lg p-5"
        >
          <h3 className="text-white font-medium mb-4">{category.title}</h3>
          <ul className="space-y-2">
            {category.skills.map((skill, skillIndex) => (
              <li
                key={skillIndex}
                className="text-zinc-400 text-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skill;
