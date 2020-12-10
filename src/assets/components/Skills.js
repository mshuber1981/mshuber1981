// https://react-icons.netlify.com/#/
import { FaLink } from "react-icons/fa";
import { skillData, certs } from "../../data";

const Skills = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  return (
    <section id="skills" className={newTheme}>
      <div className="container text-center">
        <h2>Skills</h2>
        <hr />
        <div className="row row-cols-3">
          {skillData.map((skills) => {
            return (
              <figure className="col" key={skills.id}>
                {skills.skill}
                <figcaption>{skills.name}</figcaption>
              </figure>
            );
          })}
        </div>
        <div className="row">
          {certs.map((certs) => {
            return (
              <div className="col-md-6" key={certs.id}>
                <img src={certs.image} alt={certs.name} />
                <br />
                <a href={certs.link} target="_blank" rel="noreferrer">
                  <FaLink />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
