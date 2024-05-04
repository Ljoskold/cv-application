import { useState, useEffect } from 'react';
import '../../styles/work-form.css';
import WorkForm from './Work-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons';

function WorkController({
  work,
  setCurrentWork,
  handleWorkChange,
  appendCurrWork,
  workArray,
  deleteWork,
  toggleIsOpenWorkForm,
  checker,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (workArray.length === 0) {
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
    <div className="work-experience frame">
      <div className="work-set">
        <div className="input-title-wrapper">
          <h1 className="input-title">
            {' '}
            <FontAwesomeIcon icon={faBriefcase} /> Work experience
          </h1>
          <button className={`extend-button ${isOpen ? 'rotate-up' : 'rotate-down'}`} onClick={openClose}>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>

        <div className={`set ${isOpen ? '' : 'hidden'}`}>
          {workArray.map((work) => (
            <WorkForm
              key={work.id}
              work={work}
              handleWorkChange={handleWorkChange}
              handleIsActiveChange={handleIsActiveChange}
              isActive={isActive}
              workArray={workArray}
              deleteWork={deleteWork}
              toggleIsOpenWorkForm={toggleIsOpenWorkForm}
            />
          ))}
          {!isActive && (
            <button
              className="add-form-button"
              onClick={(event) => {
                appendCurrWork(event);
                handleIsActiveChange();
              }}
            >
              <FontAwesomeIcon icon={faPlus} /> work
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkController;
