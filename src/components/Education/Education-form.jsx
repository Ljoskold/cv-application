import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
function EducationForm({
  education,
  handleChange,
  educationArray,
  deleteEducation,
  isActive,
  isPreload,
  handleIsActiveChange,
  toggleIsOpenEducationForm,
}) {
  useEffect(() => {
    console.log(`isActive  ${isActive}`);
  }, [isActive]);

  function getEducationById(id) {
    const found = educationArray.find((element) => element.id === id);
    if (!found) {
      return null;
    } else if (found.institution === '') {
      return 'Empty education';
    } else {
      return found.institution;
    }
  }

  return (
    <>
      {!isActive && (
        <div className="form-title">
          <h1>{getEducationById(education.id)}</h1>
          <div className="edit-form-buttons">
            <button
              className="edit-button"
              title="edit"
              onClick={(e) => {
                toggleIsOpenEducationForm(education.id);
                handleIsActiveChange();
              }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            {/* <button className="delete-button" title="delete" onClick={() => deleteEducation(education.id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button> */}
          </div>
        </div>
      )}
      {education.isOpen && isActive && (
        <>
          <form className="education-form">
            <label htmlFor="institution">University: </label>
            <input
              className="input-field"
              type="text"
              name="institution"
              value={education.institution}
              onChange={(e) => handleChange(education.id, e)}
            />
            <label htmlFor="degree">Degree:</label>
            <input
              className="input-field"
              value={education.degree}
              name="degree"
              onChange={(e) => handleChange(education.id, e)}
            />
            <label htmlFor="major">Major:</label>
            <input
              className="input-field"
              value={education.major}
              name="major"
              onChange={(e) => handleChange(education.id, e)}
            />
            <label htmlFor="location">Location:</label>
            <input
              className="input-field"
              value={education.educationLocation}
              name="educationLocation"
              onChange={(e) => handleChange(education.id, e)}
            />
            <div className="date-wrapper">
              <label>Start date:</label>
              <input
                className="input-field date"
                value={education.startDate}
                type="text"
                name="startDate"
                onChange={(e) => handleChange(education.id, e)}
              />
              <label>End date:</label>
              <input
                className="input-field date"
                value={education.endDate}
                type="text"
                name="endDate"
                onChange={(e) => handleChange(education.id, e)}
              />
            </div>
            <div className="description-wrapper">
              <label htmlFor="description">Description:</label>
              <textarea
                className="input-field textarea"
                value={education.description}
                name="description"
                onChange={(e) => handleChange(education.id, e)}
              ></textarea>
            </div>
            <div className="form-buttons">
              <button
                className="form-button cancel"
                type="button"
                onClick={() => {
                  deleteEducation(education.id);
                  handleIsActiveChange();
                }}
              >
                Delete
              </button>
              <button
                className="form-button"
                type="submit"
                onClick={() => {
                  toggleIsOpenEducationForm(education.id);
                  handleIsActiveChange();
                }}
              >
                Save
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}
export default EducationForm;
