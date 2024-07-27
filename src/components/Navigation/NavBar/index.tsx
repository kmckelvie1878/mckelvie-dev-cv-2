/* eslint-disable no-unused-vars */
import Logo from "../../UI/Logo/Logo";
import Link from "next/link";
import {
  Container,
  Box,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggle from "../../UI/ThemeToggle/ThemeToggle";

interface LinkItemProps {
  href: string;
  path: string;
  _target?: string;
  children: React.ReactNode;
}

const LinkItem = ({ href, path, children, ...props }: LinkItemProps) => {
  const active = path === href;
  return (
    <Link
      href={href}
      className={`${active ? "text-teal-400" : ""} hover:underline`}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </Link>
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
        maxW="container.xl"
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
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
        </Stack>
        <Box flex={1} display="flex" justifyContent="flex-end">
          <ThemeToggle />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Menu"
              />
              <MenuList>
                <LinkItem href="/" path={path}>
                  <MenuItem>Home</MenuItem>
                </LinkItem>
                <LinkItem href="/portfolio" path={path}>
                  <MenuItem>Portfolio</MenuItem>
                </LinkItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
