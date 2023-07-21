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
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(-15deg);
  }
`;

const Logo = () => {
  const headLogoImg = `/img/logo${useColorModeValue("-dark", "")}.svg`;
  return (
    <LogoBox href="/">
      <Image src={headLogoImg} width={20} height={20} alt="Kieran McKelvie" />
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
