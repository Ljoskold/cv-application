import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function HardSkills({ hardSkill, setHardSkill, setHardSkillsArray, hardSkillsArray, appendHardSkill }) {
  const handleHardSkillChange = (e) => {
    setHardSkill({
      skillName: e.target.value,
      id: uniqid(),
    });
  };

  function deleteHardSkill(id) {
    const updatedArray = hardSkillsArray.filter((skill) => skill.id !== id);
    setHardSkillsArray(updatedArray);
  }

  const handleAddHardSkill = () => {
    if (hardSkill.skillName.trim() === '') {
      return;
    } else {
      appendHardSkill();
      setHardSkill({
        skillName: '',
        id: '',
      });
    }
  };

  return (
    <>
      <div className="skill-input-title-wrapper">
        <h1>Hard Skills</h1>
        <div className="skill-input-wrapper">
          <input
            className="skill-input"
            type="text"
            value={hardSkill.skillName}
            onChange={handleHardSkillChange}
            required
          ></input>
          <button className="add-skill-button" onClick={handleAddHardSkill}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <ul>
        {hardSkillsArray.map((skill) => {
          return (
            <div key={skill.id} className="skill-inline-wrapper">
              <button className="delete-button" title="delete" onClick={() => deleteHardSkill(skill.id)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <li>{skill.skillName}</li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
