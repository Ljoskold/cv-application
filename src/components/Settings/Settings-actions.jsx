import { useEffect, useState } from 'react';
import '../../styles/settings-actions.css';
import uniqid from 'uniqid';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import randomGuy from '../../../assets/random_guy.jpg';
import avatar from '../../../assets/avatar.png';
import { useReactToPrint } from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

export default function SettingsActions({
  setPersonalInfo,
  setEducationArray,
  setWorkArray,
  cvRenderRef,
  setHardSkillsArray,
  setSoftSkillsArray,
  setPicture,
  toggleChecker,
}) {
  const [educationTemplate, setEducationTemplate] = useState({
    institution: 'Harvard University',
    degree: 'Bachelor',
    major: 'Computer Science',
    educationLocation: 'Cambridge, Massachusetts, USA',
    startDate: '2010/08/1',
    endDate: '2014/06/1',
    description:
      'During my studies, I gained a strong foundation in computer science principles, including algorithms, data structures, programming languages, and software engineering.',
    isOpen: false,
    id: uniqid(),
  });
  const [workTemplate, setWorkTemplate] = useState({
    company: 'Google',
    position: 'Frontend Developer',
    startDate: '2015/12/25',
    endDate: '2020/08/25',
    description: `Developed user-facing features for Google's web applications using modern frontend technologies such as React, Angular, and Vue.js. Collaborated with design and product teams to implement responsive and intuitive user interfaces. Optimized web applications for performance, scalability, and cross-browser compatibility. Conducted code reviews and provided constructive feedback to team members. Contributed to the development of internal tools and frameworks to streamline frontend development processes.`,
    isOpen: false,
    id: uniqid(),
  });

  useEffect(() => {
    loadTemplates();
  }, []);

  function clearForms() {
    setPersonalInfo({
      fullName: '',
      jobTitle: '',
      email: '',
      phoneNumber: '',
      website: '',
      personalLocation: '',
    });
    setEducationArray([]);
    setWorkArray([]);
    setHardSkillsArray([]);
    setSoftSkillsArray([]);
    setPicture(avatar);
    toggleChecker();
  }

  function loadTemplates() {
    setEducationArray([]);
    setWorkArray([]);

    setPersonalInfo({
      fullName: 'John Doe',
      jobTitle: 'Front-end Developer',
      email: 'johndoe@gmail.com',
      phoneNumber: '+1 (123) -456-7891',
      website: 'http://github.com/JohnDoe',
      personalLocation: 'Matrix, Universe',
    });
    setEducationArray((prevArray) => [...prevArray, { ...educationTemplate }]);
    setWorkArray((prevArray) => [...prevArray, { ...workTemplate }]);
    setHardSkillsArray([
      {
        skillName: 'HTML',
        id: uniqid(),
      },
      {
        skillName: 'CSS',
        id: uniqid(),
      },
      {
        skillName: 'Javascritp',
        id: uniqid(),
      },
      {
        skillName: 'React JS',
        id: uniqid(),
      },
      {
        skillName: 'Webpack',
        id: uniqid(),
      },
    ]);
    setSoftSkillsArray([
      {
        skillName: 'Communication',
        id: uniqid(),
      },
      {
        skillName: 'Problem-solving',
        id: uniqid(),
      },
      {
        skillName: 'Attention to Detail',
        id: uniqid(),
      },
      {
        skillName: 'Adaptability',
        id: uniqid(),
      },
      {
        skillName: 'Time Management',
        id: uniqid(),
      },
    ]);
    setPicture(randomGuy);
  }

  const captureWebpage = () => {
    const cvRender = cvRenderRef.current;
    if (!cvRender) return;

    html2canvas(cvRender).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      generatePdf(imageData);
    });
  };
  const generatePdf = (imageData) => {
    const doc = new jsPDF('p', 'mm', 'a4', true);
    doc.addImage(imageData, 'PNG', 0, 0, 210, 297);
    doc.save('cv.pdf');
  };
  const handlePrint = useReactToPrint({
    content: () => cvRenderRef.current,
  });

  return (
    <>
      <div className="settings">
        <button className="clear" title="clear resume" onClick={clearForms}>
          Clear Resume
        </button>
        <button className="example" title="load example" onClick={loadTemplates}>
          Load Example
        </button>
        <button className="icon" title="print" onClick={handlePrint}>
          <FontAwesomeIcon icon={faPrint} />
        </button>
        <button className="icon" title="save as PDF" onClick={captureWebpage}>
          <FontAwesomeIcon icon={faFilePdf} />
        </button>
      </div>
    </>
  );
}
