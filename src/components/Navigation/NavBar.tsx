/* eslint-disable no-unused-vars */
import Logo from "../UI/Logo/Logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  ChakraProps,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggle from "../UI/ThemeToggle/ThemeToggle";

interface LinkItemProps {
  href: string;
  path: string;
  _target?: string;
  children: React.ReactNode;
}

const LinkItem = ({ href, path, children, ...props }: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props: any) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#09090b20")}
      className={"backdrop-blur-sm"}
      zIndex={100}
      {...props}
    >
      <Container
        display="flex"
        p={"2"}
        maxW="container.lg"
        alignItems="center"
        justifyContent="center"
      >
        <Flex align="center" mr={5} width={160}>
          <Logo />
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {/* <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem> */}
        </Stack>
        <Box flex={1} display="flex" justifyContent="flex-end">
          <ThemeToggle />
          {/* <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/portfolio" passHref>
                  <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
