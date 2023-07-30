import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
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
        <Image
          src={headLogoImg}
          fill
          alt="Kieran McKelvie"
        />
      </div>
      <Text
        as="span"
        color={useColorModeValue("gray.800", "whiteAlpha.900")}
        ml={2}
        fontSize="17"
      >
        McKelvie.dev
      </Text>
    </LogoBox>
  );
};

export default Logo;
