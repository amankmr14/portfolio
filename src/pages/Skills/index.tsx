import SkillCard from "../../components/SkillCard";

type Props = {
    data: string[]
}

const Skills = ({ data }: Props) => {
  return (
    <section id="skills" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My <span>Skills</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {data?.map((skill, index) => (
            <SkillCard key={index} skill={skill}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
