import ShortFormRender from '../ShortFormRender';
import InputField from '../InputField';
function EducationForm({
  education,
  handleChange,
  educationArray,
  deleteEducation,
  isActive,
  handleIsActiveChange,
  toggleIsOpenEducationForm,
}) {
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
        <ShortFormRender
          getId={() => getEducationById(education.id)}
          toggleForm={() => toggleIsOpenEducationForm(education.id)}
          handleIsActive={() => handleIsActiveChange()}
        />
      )}
      {education.isOpen && isActive && (
        <>
          <form className="education-form">
            <InputField
              label="University: "
              type="text"
              value={education.institution}
              inputName="institution"
              onChange={(value) => handleChange(education.id, value)}
            />
            <InputField
              label="Degree: "
              type="text"
              value={education.degree}
              inputName="degree"
              onChange={(value) => handleChange(education.id, value)}
            />
            <InputField
              label="Major: "
              type="text"
              value={education.major}
              inputName="major"
              onChange={(value) => handleChange(education.id, value)}
            />
            <InputField
              label="Location: "
              type="text"
              value={education.educationLocation}
              inputName="educationLocation"
              onChange={(value) => handleChange(education.id, value)}
            />
            <div className="date-wrapper">
              <InputField
                label="Start date: "
                type="text"
                value={education.startDate}
                inputName="startDate"
                onChange={(value) => handleChange(education.id, value)}
              />
              <InputField
                label="End date: "
                type="text"
                value={education.endDate}
                inputName="endDate"
                onChange={(value) => handleChange(education.id, value)}
              />
            </div>
            <div className="description-wrapper">
              <InputField
                label="Description: "
                type="textarea"
                value={education.description}
                inputName="description"
                onChange={(value) => handleChange(education.id, value)}
              />
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
