/* eslint-disable no-unused-vars */
import Logo from "../../UI/Logo/Logo";
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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggle from "../../UI/ThemeToggle/ThemeToggle";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  href: string;
  path: string;
  _target?: string;
  children: React.ReactNode;
}

const LinkItems = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const LinkItem = ({ href, path, children, ...props }: LinkItemProps) => {
  const active = path === href;
  const linkColor = useColorModeValue("gray200", "whiteAlpha.900");
  const linkUnderlineColor = useColorModeValue("bg-gray-500", "bg-white");
  return (
    <div className="relative">
      <NextLink href={href}>
        <Text p={2} color={linkColor} {...props}>
          {children}
        </Text>
      </NextLink>
      {active && (
        <motion.span
          layoutId="underline"
          className={`absolute left-0 top-full block h-[1px] w-full ${linkUnderlineColor}`}
        />
      )}
    </div>
  );
};

const Navbar = (props: any) => {
  const pathname = usePathname();
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#09090b20")}
      className={"backdrop-blur-sm"}
      zIndex={5}
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
        {/* <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {LinkItems.map((link) => (
            <LinkItem key={link.name} href={link.href} path={pathname}>
              {link.name}
            </LinkItem>
          ))}
        </Stack> */}
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
