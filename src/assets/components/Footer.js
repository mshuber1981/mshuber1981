import SocialLinks from "./SocialLinks";

const Footer = ({ githubUrl, link }) => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center pb-3 bg-dark">
      <SocialLinks githubUrl={githubUrl} link={link} />
    </footer>
  );
};

export default Footer;
