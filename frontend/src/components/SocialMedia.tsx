import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <AiFillGithub />
    </div>
    <div>
      <AiFillLinkedin />
    </div>
    <div>
      <BsTwitter />
    </div>
    <div>
      <AiOutlineMail />
    </div>
  </div>
);

export default SocialMedia;
