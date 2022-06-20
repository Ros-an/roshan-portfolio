import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  const handleSocialRedirect = (link: string) => {
    window.open(
      link,
      "_blank" // <- This is what makes it open in a new window.
    );
  };
  return (
    <div className="app__social">
      <div onClick={() => handleSocialRedirect("https://github.com/Ros-an")}>
        <AiFillGithub />
      </div>
      <div
        onClick={() =>
          handleSocialRedirect(
            "https://www.linkedin.com/in/roshan-kr-mahato-798592171/"
          )
        }
      >
        <AiFillLinkedin />
      </div>
      <div onClick={() => handleSocialRedirect("https://twitter.com/rosan_kr")}>
        <BsTwitter />
      </div>
      {/* <div onClick={() => handleSocialRedirect()}>
        <AiOutlineMail />
      </div> */}
    </div>
  );
};

export default SocialMedia;
