import Image from "next/image";
import React from "react";

const achievements = [
  {
    id: 1,
    image: "/Background/Photo1.jpg",
    title: "2nd Place in Model Photography",
    event: "UNISA Youth Game 2024",
  },
  {
    id: 2,
    image: "/Background/Photo2.jpg",
    title: "2nd Place in Architectural Photography",
    event: "UNISA Youth Game 2024",
  },
  {
    id: 3,
    image: "/Background/Photo3.jpg",
    title: "2nd Place in Short Movie",
    event: "University of Sanata Dharma 2024",
  },
];

const Achievement = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className="bg-[#16161c] border border-white/5 rounded-lg overflow-hidden hover:border-white/10 transition-colors"
        >
          {/* Image */}
          <div className="relative h-64">
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-white font-medium mb-1">{achievement.title}</h3>
            <p className="text-zinc-500 text-sm">{achievement.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
