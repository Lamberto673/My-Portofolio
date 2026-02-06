import React from "react";

const OtherSkills = () => {
  const Skills = [
    {
      title: "Photography",
      skills: ["Architectural", "Object", "Wildlife"],
    },
    {
      title: "History",
      skills: [
        "American Revolutionary War",
        "World War 1",
        "World War 2",
        "American Civil war",
        "Anything war related in europe",
      ],
    },
    {
      title: "Trivia",
      skills: [
        "General Knowledge",
        "Painter (not so much)",
        "Philosophy (little bit)",
      ],
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Skills.map((items, index) => (
        <div key={index} className="rounded-lg bg-[#16161c] p-5">
          <h2 className="mb-4  font-bold">{items.title}</h2>
          <ul className="space-y-2">
            {items.skills.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-start text-zinc-400"
              >
                <span className=" border bg-[#1ba845] border-none w-1.5 h-1.5 rounded-full mr-5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OtherSkills;
