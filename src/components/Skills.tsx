export default function Skills() {
  const skills = [
    "HTML", "CSS", "Javascript", "React",
    "Tailwind", "Python", "Java", "C", "C++",
    "MySQL", "Figma", "Github"
  ];

  return (
    <section id="skills" className="py-16 text-center bg-transparent">
      <h2 className="text-3xl font-bold mb-12 text-white">Skills</h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-x-5 gap-y-6 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group flex flex-col items-center justify-center w-32 h-32 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-blue-400/30"
            >
              <img
                src={`/logos/${skill}.svg`}
                alt={skill}
                className="w-14 h-14 object-contain transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              <p className="text-white text-base font-medium mt-3 capitalize group-hover:brightness-125">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
