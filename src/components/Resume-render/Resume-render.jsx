import EducationRenderer from '../Education/Education-render';
import WorkRenderer from '../Work/Work-render';
import DisplayInformation from '../Personal-information/Personal-info-render';
import SkillsRender from '../Skills/SkillsRender';

export default function ResumeRender({
  personalInfo,
  educationArray,
  workArray,
  cvRenderRef,
  fontFamily,
  mainColour,
  accentColour,
  picture,
  hardSkillsArray,
  softSkillsArray,
}) {
  return (
    <div className="resume-page" ref={cvRenderRef} style={{ fontFamily }}>
      <div className="resume-left-side" style={{ backgroundColor: mainColour }}>
        <img id="avatar" src={picture} alt="123" />
        <div className="contacts">
          <DisplayInformation personalInfo={personalInfo} accentColour={accentColour} picture={picture} />
        </div>
        <SkillsRender hardSkillsArray={hardSkillsArray} softSkillsArray={softSkillsArray} />
      </div>
      <div className="resume-right-side">
        <div className="fullName-jobTitle" style={{ backgroundColor: accentColour }}>
          <h1>{personalInfo.fullName}</h1>
          <p>{personalInfo.jobTitle}</p>
        </div>
        <div className="education-render">
          <h1 className="form-title-render" style={{ borderBottomColor: accentColour }}>
            Education
          </h1>
          {educationArray.map((education, index) => (
            <div key={index}>{<EducationRenderer education={education} />}</div>
          ))}
        </div>
        <div className="work-render">
          <h1 className="form-title-render" style={{ borderBottomColor: accentColour }}>
            Work experience
          </h1>
          {workArray.map((work, index) => (
            <div key={index}> {<WorkRenderer work={work} />}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
