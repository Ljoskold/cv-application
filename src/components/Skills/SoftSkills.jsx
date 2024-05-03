import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function SoftSkills({ softSkill, setSoftSkill, setSoftSkillsArray, softSkillsArray, appendSoftSkill }) {
  const handleSoftSkillChange = (e) => {
    setSoftSkill({
      skillName: e.target.value,
      id: uniqid(),
    });
  };

  function deleteSoftSkill(id) {
    const updatedArray = softSkillsArray.filter((skill) => skill.id !== id);
    setSoftSkillsArray(updatedArray);
  }

  const handleAddSoftSkill = () => {
    if (softSkill.skillName.trim() === '') {
      return;
    } else {
      appendSoftSkill();
      setSoftSkill({
        skillName: '',
        id: '',
      });
    }
  };
  return (
    <>
      <div className="skill-input-title-wrapper">
        <h1>Soft Skills</h1>
        <div className="skill-input-wrapper">
          <input
            className="skill-input"
            type="text"
            value={softSkill.skillName}
            onChange={handleSoftSkillChange}
          ></input>
          <button className="add-skill-button" onClick={handleAddSoftSkill}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <ul>
        {softSkillsArray.map((skill) => {
          return (
            <div key={skill.id} className="skill-inline-wrapper">
              <button className="delete-button" title="delete" onClick={() => deleteSoftSkill(skill.id)}>
                {' '}
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
