import "./App.css";

const data = {
  name: "Jonas Schmedtmann",
  description:
    "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.",
};

const skills = [
  {
    skill: "HTML + CSS",
    emoji: "💪",
    background: "blue",
  },
  {
    skill: "JavaScript",
    emoji: "💪",
    background: "yellow",
  },
  {
    skill: "Web Design",
    emoji: "💪",
    background: "green",
  },
  {
    skill: "Git and Github",
    emoji: "👌",
    background: "red",
  },
  {
    skill: "React",
    emoji: "💪",
    background: "lightblue",
  },
  { skill: "Svelte", emoji: "👶", background: "orangered" },
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
  const { background, skill, emoji } = props.skill;
  return (
    <div className="skill" style={{ backgroundColor: background }}>
      <span>{skill}</span>
      <span>{emoji}</span>
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
