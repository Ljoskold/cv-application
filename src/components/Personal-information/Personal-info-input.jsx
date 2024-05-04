import { useState } from 'react';
import '../../styles/personal-info-form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import InputField from '../InputField';

function PersonalInformation({ personalInfo, setPersonalInfo, setPicture }) {
  const [isOpen, setIsOpen] = useState(false);

  function openClose() {
    setIsOpen(!isOpen);
  }

  const handleSetPicture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="personal-information frame">
        <div className="input-title-wrapper">
          <h1 className="input-title">
            <FontAwesomeIcon icon={faUser} /> Personal Information{' '}
          </h1>
          <button className={`extend-button ${isOpen ? 'rotate-up' : 'rotate-down'}`} onClick={openClose}>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>

        <div className={`set ${isOpen ? '' : 'hidden'}`}>
          <>
            <InputField
              label="Full Name: "
              type="text"
              value={personalInfo.fullName || ''}
              onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
            />
            <InputField
              label="Job Title: "
              type="text"
              value={personalInfo.jobTitle || ''}
              onChange={(e) => setPersonalInfo({ ...personalInfo, jobTitle: e.target.value })}
            />
            <InputField
              label="Email: "
              type="text"
              value={personalInfo.email || ''}
              onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
            />
            <InputField
              label="Phone Number: "
              type="text"
              value={personalInfo.phoneNumber || ''}
              onChange={(e) => setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })}
            />
            <InputField
              label="Website: "
              type="text"
              value={personalInfo.website || ''}
              onChange={(e) => setPersonalInfo({ ...personalInfo, website: e.target.value })}
            />
            <InputField
              label="Location: "
              type="text"
              value={personalInfo.personalLocation || ''}
              onChange={(e) => setPersonalInfo({ ...personalInfo, personalLocation: e.target.value })}
            />
            <div className="image-input-wrapper">
              <label className="input-label" htmlFor="picture">
                Upload profile image:
              </label>
              <input name="picture" type="file" accept="image/png, image/jpeg" onChange={handleSetPicture}></input>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default PersonalInformation;
