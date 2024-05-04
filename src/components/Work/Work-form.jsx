import InputField from '../InputField';
import ShortFormRender from '../ShortFormRender';

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
      {!isActive && (
        <ShortFormRender
          getId={() => getWorkById(work.id)}
          toggleForm={() => toggleIsOpenWorkForm(work.id)}
          handleIsActive={() => handleIsActiveChange()}
        />
      )}

      {work.isOpen && isActive && (
        <>
          <form className="work-form">
            <InputField
              label="Company: "
              type="text"
              value={work.company}
              inputName="company"
              onChange={(value) => handleWorkChange(work.id, value)}
            />
            <InputField
              label="Position: "
              type="text"
              value={work.position}
              inputName="position"
              onChange={(value) => handleWorkChange(work.id, value)}
            />
            <div className="date-wrapper">
              <InputField
                label="Start date: "
                type="text"
                value={work.startDate}
                inputName="startDate"
                onChange={(value) => handleWorkChange(work.id, value)}
              />
              <InputField
                label="End date: "
                type="text"
                value={work.endDate}
                inputName="endtDate"
                onChange={(value) => handleWorkChange(work.id, value)}
              />
            </div>
            <div className="description-wrapper">
              <InputField
                label="Description: "
                type="textarea"
                value={work.description}
                inputName="description"
                onChange={(value) => handleWorkChange(work.id, value)}
              />
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
