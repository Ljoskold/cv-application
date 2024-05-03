import '../../styles/resume-page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faEnvelope, faLocationDot, faLaptop } from '@fortawesome/free-solid-svg-icons';

function DisplayInformation({ personalInfo, accentColour }) {
  return (
    <>
      <div className="contacts-inline-wrapper">
        <div className="icon-wrapper" style={{ backgroundColor: accentColour }}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <p>{personalInfo.email}</p>
      </div>

      <div className="contacts-inline-wrapper">
        <div className="icon-wrapper" style={{ backgroundColor: accentColour }}>
          <FontAwesomeIcon icon={faMobileScreenButton} />
        </div>
        <p>{personalInfo.phoneNumber}</p>
      </div>

      <div className="contacts-inline-wrapper">
        <div className="icon-wrapper" style={{ backgroundColor: accentColour }}>
          <FontAwesomeIcon icon={faLaptop} />
        </div>
        <p>
          <a href={personalInfo.website}>{personalInfo.website}</a>
        </p>
      </div>

      <div className="contacts-inline-wrapper">
        <div className="icon-wrapper" style={{ backgroundColor: accentColour }}>
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <p>{personalInfo.personalLocation}</p>
      </div>
    </>
  );
}

export default DisplayInformation;
