import '../App.css'

const Education = (props) => {
  return (
    <div className='education-container'>
      <h2>{props.Education}</h2>
      <h4>{props.DegreeTitle}</h4>
      <p>{props.UniversityName} +', '+ {props.GraduationDate}</p>
    </div>
  );
}

export default Education;