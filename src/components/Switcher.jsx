import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faFileLines } from '@fortawesome/free-solid-svg-icons';
export default function Switcher({ handleIsSettings, isSettings }) {
  return (
    <div className="settings-switch-wrapper">
      <button
        onClick={handleIsSettings}
        title="resume"
        className={`settings-design-button ${isSettings ? '' : 'active'}`}
      >
        <FontAwesomeIcon icon={faFileLines} />
      </button>
      <button
        onClick={handleIsSettings}
        title="edit design"
        className={`settings-design-button ${isSettings ? 'active' : ''}`}
      >
        <FontAwesomeIcon icon={faPenRuler} />
      </button>
    </div>
  );
}
