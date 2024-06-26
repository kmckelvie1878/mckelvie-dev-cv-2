import Link from "next/link";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/react";
import styled from "styled-components";

const LogoBox = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;
  .logo-container {
    position: relative;
    width: 20px;
    height: 24.5px;
    img {
      transition: 200ms ease;
    }
  }
  &:hover img {
    transform: rotate(-15deg);
  }
`;

const Logo = () => {
  const headLogoImg = `/img/logo${useColorModeValue("-dark", "")}.svg`;
  return (
    <LogoBox href="/">
      <div className="logo-container">
        <Image src={headLogoImg} fill alt="McKelvie.dev" />
      </div>
      <span
        className={`ml-2 text-[17px] ${useColorModeValue(
          "text-gray-800",
          "text-white"
        )}`}
      >
        McKelvie.dev
      </span>
    </LogoBox>
  );
};

export default Logo;
