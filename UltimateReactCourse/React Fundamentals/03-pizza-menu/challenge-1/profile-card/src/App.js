import "./App.css";

const data = {
  name: "Jonas Schmedtmann",
  description:
    "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.",
};

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Avatar() {
  return <img className="avatar" src="jonas.jpeg" alt="Jonas" />;
}

function Intro(props) {
  const { name, description } = props.data;
  return (
    <div>
      <h2>{name}</h2>
      <p style={{ paddingTop: "15px" }}>{description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill(props) {
  const { color, skill, level } = props.skill;
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👌"}
        {level === "advancd" && "💪"}
      </span>
    </div>
  );
}
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro data={data} />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
