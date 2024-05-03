import { useState, useRef, useEffect } from 'react';
import PersonalInformation from './components/Personal-information/Personal-info-input.jsx';
import EducationController from './components/Education/Education-controller.jsx';
import WorkController from './components/Work/Work-controller.jsx';
import SettingsActions from './components/Settings/Settings-actions.jsx';
import SettingsDesign from './components/Settings/Settings-design.jsx';
import ResumeRender from './components/Resume-render/Resume-render.jsx';
import SkillsController from './components/Skills/SkillsController.jsx';
import './styles/resume-left-side.css';
import './styles/resume-right-side.css';
import avatar from '../assets/avatar.png';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faFileLines } from '@fortawesome/free-solid-svg-icons';

function App() {
  const cvRenderRef = useRef(null);
  const [isSettings, setIsSettings] = useState(false);
  const [fontFamily, setFontFamily] = useState('Helvetica');
  const [mainColour, setMainColour] = useState('#323232');
  const [accentColour, setAccentColour] = useState('#ffa500');
  const [picture, setPicture] = useState(avatar);

  // useEffect(() => {
  //   console.log(`'isPreload' ${isPreload}`);
  // }, [isPreload]);
  // useState(() => {
  //   console.log(`'isPreload' ${isPreload}`);
  // }, []);

  const [hardSkill, setHardSkill] = useState({
    skillName: '',
    id: uniqid(),
  });
  const [hardSkillsArray, setHardSkillsArray] = useState([]);

  function appendHardSkill() {
    setHardSkillsArray((prevArray) => [...prevArray, { ...hardSkill }]);
  }
  function appendSoftSkill() {
    setSoftSkillsArray((prevArray) => [...prevArray, { ...softSkill }]);
  }

  const [softSkill, setSoftSkill] = useState({
    skillName: '',
    id: uniqid(),
  });
  const [softSkillsArray, setSoftSkillsArray] = useState([]);

  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phoneNumber: '',
    website: '',
    personalLocation: '',
  });

  const [currentEducation, setCurrEducation] = useState({
    institution: '',
    degree: '',
    major: '',
    educationLocation: '',
    startDate: '',
    endDate: '',
    description: '',
    isOpen: true,
    id: uniqid(),
  });

  function toggleIsOpenEducationForm(id) {
    setEducationArray((prevState) =>
      prevState.map((education) => (education.id === id ? { ...education, isOpen: !education.isOpen } : education)),
    );
  }
  function toggleIsOpenWorkForm(id) {
    setWorkArray((prevState) => prevState.map((work) => (work.id === id ? { ...work, isOpen: !work.isOpen } : work)));
  }

  const [educationArray, setEducationArray] = useState([]);

  const [currentWork, setCurrentWork] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    isOpen: true,
    id: uniqid(),
  });
  const [workArray, setWorkArray] = useState([]);

  function handleEducationChange(id, e) {
    const { name, value } = e.target;
    setEducationArray((prevArray) => prevArray.map((item) => (item.id === id ? { ...item, [name]: value } : item)));
  }

  const appendCurrEducation = (event) => {
    event.preventDefault();
    setEducationArray((prevArray) => [...prevArray, { ...currentEducation }]);
    setCurrEducation({
      institution: '',
      degree: '',
      major: '',
      educationLocation: '',
      startDate: '',
      endDate: '',
      description: '',
      isOpen: true,
      id: uniqid(),
    });
  };
  function deleteEducation(id) {
    const updatedArray = educationArray.filter((education) => education.id !== id);
    setEducationArray(updatedArray);
  }

  function handleWorkChange(id, e) {
    const { name, value } = e.target;
    setWorkArray((prevArray) => prevArray.map((item) => (item.id === id ? { ...item, [name]: value } : item)));
  }
  function appendCurrWork(event) {
    event.preventDefault();
    setWorkArray((prevWorkArray) => [...prevWorkArray, { ...currentWork }]);
    setCurrentWork({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      isOpen: true,
      id: uniqid(),
    });
  }
  function deleteWork(id) {
    const updatedArray = workArray.filter((work) => work.id !== id);
    setWorkArray(updatedArray);
  }

  function handleIsSettings() {
    setIsSettings(!isSettings);
  }

  return (
    <div className="app">
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
      <div className="all-input-wrapper">
        <SettingsActions
          setPersonalInfo={setPersonalInfo}
          setEducationArray={setEducationArray}
          setWorkArray={setWorkArray}
          setCurrentWork={setCurrentWork}
          setHardSkillsArray={setHardSkillsArray}
          setSoftSkillsArray={setSoftSkillsArray}
          setPicture={setPicture}
          cvRenderRef={cvRenderRef}
        />
        {isSettings ? (
          <SettingsDesign
            setFontFamily={setFontFamily}
            setMainColour={setMainColour}
            setAccentColour={setAccentColour}
            mainColour={mainColour}
            accentColour={accentColour}
          />
        ) : (
          <>
            <PersonalInformation
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              setPicture={setPicture}
            />
            <EducationController
              education={currentEducation}
              handleChange={handleEducationChange}
              setCurrEducation={setCurrEducation}
              educationArray={educationArray}
              appendCurrEducation={appendCurrEducation}
              deleteEducation={deleteEducation}
              toggleIsOpenEducationForm={toggleIsOpenEducationForm}
            />
            <WorkController
              work={currentWork}
              handleWorkChange={handleWorkChange}
              setCurrentWork={setCurrentWork}
              workArray={workArray}
              appendCurrWork={appendCurrWork}
              deleteWork={deleteWork}
              toggleIsOpenWorkForm={toggleIsOpenWorkForm}
            />
            <SkillsController
              hardSkill={hardSkill}
              setHardSkill={setHardSkill}
              hardSkillsArray={hardSkillsArray}
              appendHardSkill={appendHardSkill}
              setHardSkillsArray={setHardSkillsArray}
              softSkill={softSkill}
              setSoftSkill={setSoftSkill}
              softSkillsArray={softSkillsArray}
              appendSoftSkill={appendSoftSkill}
              setSoftSkillsArray={setSoftSkillsArray}
            />
          </>
        )}
      </div>
      <ResumeRender
        personalInfo={personalInfo}
        workArray={workArray}
        educationArray={educationArray}
        fontFamily={fontFamily}
        cvRenderRef={cvRenderRef}
        mainColour={mainColour}
        accentColour={accentColour}
        picture={picture}
        hardSkillsArray={hardSkillsArray}
        softSkillsArray={softSkillsArray}
      />
    </div>
  );
}

export default App;
