import resumePNG from '../../images/resume.png';
import resumePDF from '../../images/resume.pdf';

function Resume(props) {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>
      <a className="resume-pdf" href={resumePDF}>
        <p className="resume-p">pdf</p>
      </a>
      <img className="resume-img" src={resumePNG} alt="screenshot of resume" />
    </div>
  );
}

export default Resume;