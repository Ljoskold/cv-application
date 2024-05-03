import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
function WorkForm({
  work,
  deleteWork,
  workArray,
  handleWorkChange,
  handleIsActiveChange,
  isActive,
  toggleIsOpenWorkForm,
}) {
  function getWorkById(id) {
    const found = workArray.find((element) => element.id === id);
    if (!found) {
      return null;
    } else if (found.company === '') {
      return 'Empty work';
    } else {
      return found.company;
    }
  }
  return (
    <>
      <div className="form-title">
        {!isActive && (
          <>
            <h1>{getWorkById(work.id)}</h1>
            <div className="edit-form-buttons">
              <button
                className="edit-button"
                title="edit"
                onClick={() => {
                  toggleIsOpenWorkForm(work.id);
                  handleIsActiveChange();
                }}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              {/* <button className="delete-button" title="delete" onClick={() => deleteWork(work.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button> */}
            </div>
          </>
        )}
      </div>
      {work.isOpen && isActive && (
        <>
          <form className="work-form">
            <label htmlFor="company">Company: </label>
            <input
              className="input-field"
              type="text"
              name="company"
              value={work.company}
              onChange={(e) => handleWorkChange(work.id, e)}
            />
            <label htmlFor="position">Position:</label>
            <input
              className="input-field"
              value={work.position}
              name="position"
              onChange={(e) => handleWorkChange(work.id, e)}
            />
            <div className="date-wrapper">
              <label>Start date:</label>
              <input
                className="input-field date"
                value={work.startDate}
                type="text"
                name="startDate"
                onChange={(e) => handleWorkChange(work.id, e)}
              />
              <label>End date:</label>
              <input
                className="input-field date"
                value={work.endDate}
                type="text"
                name="endDate"
                onChange={(e) => handleWorkChange(work.id, e)}
              />
            </div>
            <div className="description-wrapper">
              <label htmlFor="description">Description:</label>
              <textarea
                className="input-field textarea"
                value={work.description}
                name="description"
                onChange={(e) => handleWorkChange(work.id, e)}
              ></textarea>
            </div>
            <div className="form-buttons">
              <button
                className="form-button cancel"
                onClick={() => {
                  deleteWork(work.id);
                  handleIsActiveChange();
                }}
              >
                Delete
              </button>
              <button
                className="form-button"
                type="submit"
                onClick={() => {
                  toggleIsOpenWorkForm(work.id);
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
export default WorkForm;
