"use client";

import { Icon } from "@chakra-ui/react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
  IoLogoVercel,
} from "react-icons/io5";

const Logos = () => {
  return (
    <div className="flex justify-around flex-wrap mb-12 opacity-50">
      <Icon fontSize={50} as={IoLogoHtml5} />
      <Icon fontSize={50} as={IoLogoCss3} />
      <Icon fontSize={50} as={IoLogoJavascript} />
      <Icon fontSize={50} as={IoLogoReact} />
      <Icon fontSize={50} as={IoLogoGithub} />
      <Icon fontSize={50} as={IoLogoVercel} />
    </div>
  );
};

export default Logos;
