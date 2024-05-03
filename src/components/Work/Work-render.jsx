function WorkRenderer({ work }) {
  return (
    <div className="work-block">
      <p className="date-p">
        {work.startDate} - {work.endDate}
      </p>
      <p className="education-work-place">{work.company}</p>
      <p className="major-p">{work.position}</p>
      <p>{work.description}</p>
    </div>
  );
}
export default WorkRenderer;
