/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: SocialLinks.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    <div className="w-full bg-grayscale-950 flex justify-center items-center p-6">
      <div className="w-1/6 flex justify-around items-center">
        <a href="https://github.com/Swagat47" target="_blank">
          <FontAwesomeIcon
            className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
            icon={icons.faGithub}
          />
        </a>
        <a href="mailto:swagatrajsr47@gmail.com" target="_blank">
          <FontAwesomeIcon
            className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
            icon={icons.faEnvelope}
          />
        </a>
        <a href="https://www.linkedin.com/in/swagat-raj" target="_blank">
          <FontAwesomeIcon
            className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
            icon={icons.faLinkedin}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
