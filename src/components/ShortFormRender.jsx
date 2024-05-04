import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
export default function ShortFormRender({ getId, toggleForm, handleIsActive }) {
  return (
    <div className="form-title">
      <h1>{getId()}</h1>
      <div className="edit-form-buttons">
        <button
          className="edit-button"
          title="edit"
          onClick={() => {
            toggleForm();
            handleIsActive();
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </div>
  );
}
