
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a className="hover:opacity-50 transition duration-500" href="https://www.linkedin.com/in/henrique-moreira-310106231/" target="_blank" rel="noreferrer">
        <BsLinkedin width={30} height={30}/>
      </a>
      <a className="hover:opacity-50 transition duration-500" href="https://github.com/HenriqueMoreira-1" target="_blank" rel="noreferrer">
        <BsGithub width={30} height={30} />
      </a>
      <a className="hover:opacity-50 transition duration-500" href="https://www.instagram.com/ohenriquemoreira/" target="_blank" rel="noreferrer">
        <BsInstagram width={30} height={30}/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;