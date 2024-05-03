import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faChevronDown, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import HardSkills from './HardSkills';
import '../../styles/skills.css';
import SoftSkills from './SoftSkills';

export default function SkillsController({
  hardSkill,
  setHardSkill,
  setHardSkillsArray,
  hardSkillsArray,
  appendHardSkill,
  softSkill,
  setSoftSkill,
  setSoftSkillsArray,
  softSkillsArray,
  appendSoftSkill,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function openClose() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="skills frame">
      <div className="input-title-wrapper">
        <h1 className="input-title">
          <FontAwesomeIcon icon={faScrewdriverWrench} /> Skills
        </h1>
        <button className={`extend-button ${isOpen ? 'rotate-up' : 'rotate-down'}`} onClick={openClose}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      {isOpen && (
        <>
          <div className="skills-set">
            <HardSkills
              hardSkill={hardSkill}
              hardSkillsArray={hardSkillsArray}
              appendHardSkill={appendHardSkill}
              setHardSkill={setHardSkill}
              setHardSkillsArray={setHardSkillsArray}
            />
            <SoftSkills
              softSkill={softSkill}
              softSkillsArray={softSkillsArray}
              appendSoftSkill={appendSoftSkill}
              setSoftSkill={setSoftSkill}
              setSoftSkillsArray={setSoftSkillsArray}
            />
          </div>
        </>
      )}
    </div>
  );
}
