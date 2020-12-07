// https://react-icons.netlify.com/#/
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = ({ githubUrl, link }) => {
  return (
    <>
      <div className="social-links">
        <a className="mr-5" href={githubUrl} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href={link} target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
