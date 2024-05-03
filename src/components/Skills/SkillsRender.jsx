export default function SkillsRender({ hardSkillsArray, softSkillsArray }) {
  return (
    <div className="render-skills-wrapper">
      <h1>Hard Skills</h1>
      <ul className="hard-skills-render-list">
        {hardSkillsArray.map((skill, index) => {
          return (
            <div key={index}>
              <li>{skill.skillName}</li>
            </div>
          );
        })}
      </ul>
      <h1 className="soft-skill">Soft Skills</h1>
      <ul className="soft-skills-render-list">
        {softSkillsArray.map((skill, index) => {
          return (
            <div key={index}>
              <li>{skill.skillName}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
