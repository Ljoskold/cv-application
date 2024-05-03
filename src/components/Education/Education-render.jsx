function EducationRenderer({ education }) {
  return (
    <div className="education-block">
      <p className="date-p">
        {education.startDate} - {education.endDate}
      </p>
      <p className="education-work-place">{education.institution}</p>
      <p className="major-p">{education.major}</p>
      <p>{education.degree}</p>
      <p className="location-p">{education.educationLocation}</p>
      <p>{education.description}</p>
    </div>
  );
}
export default EducationRenderer;
