import { useEffect, useState } from 'react';
import '../../styles/education-form.css';
import '../../styles/forms.css';
import EducationForm from './Education-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons';

function EducationController({
  handleChange,
  appendCurrEducation,
  educationArray,
  deleteEducation,
  toggleIsOpenEducationForm,
  checker,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (educationArray.length === 0) {
      setIsActive(false);
    }
  }, [checker]);

  function handleIsActiveChange() {
    setIsActive(!isActive);
  }

  function openClose() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="education frame">
      <div className="education-set">
        <div className="input-title-wrapper">
          <h1 className="input-title">
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </h1>
          <button className={`extend-button ${isOpen ? 'rotate-up' : 'rotate-down'}`} onClick={openClose}>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>

        <div className={`education-set ${isOpen ? '' : 'hidden'}`}>
          <>
            {educationArray.map((education) => (
              <EducationForm
                key={education.id}
                education={education}
                handleChange={handleChange}
                educationArray={educationArray}
                appendCurrEducation={appendCurrEducation}
                handleIsActiveChange={handleIsActiveChange}
                isActive={isActive}
                deleteEducation={deleteEducation}
                toggleIsOpenEducationForm={toggleIsOpenEducationForm}
              />
            ))}
          </>
          {!isActive && (
            <button
              className="add-form-button"
              onClick={(event) => {
                appendCurrEducation(event);
                handleIsActiveChange();
              }}
            >
              <FontAwesomeIcon icon={faPlus} /> education
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EducationController;
