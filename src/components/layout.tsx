import { chakra, Image, Stack, Text, Link } from "@chakra-ui/react";
import React from "react";

const Layout: React.FC<any> = ({ children, ContainerProps }) => {
  return (
    <chakra.main {...ContainerProps}>
      <chakra.nav display={{ base: "none", md: "block" }}>
        <Stack
          align="center"
          direction="row"
          justify="space-between"
          h="90px"
          maxW="100%"
          pos="absolute"
          top="0"
          left="16rem"
          right="16rem"
          borderBottom="1px solid rgba(47, 53, 66, 0.08)"
          zIndex="2"
        >
          <Stack>
            <Link borderBottom="none" href="/">
              <Image src="/sleek-logo.svg" alt="Sleek Logo" boxSize="120" />
            </Link>
          </Stack>
          <Stack direction="row" align="center" spacing="10">
            <Link href="https://docs.sleekpay.app/" fontFamily="Poppins" fontSize="15px" fontWeight="500">
              Documentation
            </Link>

            {/* <Link href="mailto:contact@sleek.app" fontFamily="Poppins" fontSize="15px" fontWeight="500">
                Contact
              </Link> */}
          </Stack>
        </Stack>
      </chakra.nav>

      <chakra.nav borderBottom="1px solid rgba(0, 0, 0, 0.08)" bg="#FEF8EC" display={{ base: "block", md: "none" }}>
        <Stack
          align="center"
          direction="row"
          justify="space-between"
          h="90px"
          maxW="100%"
          pos="absolute"
          top="0"
          left="1rem"
          right="1rem"
          borderBottom="1px solid rgba(47, 53, 66, 0.08)"
          zIndex="2"
        >
          <Stack>
            <Link borderBottom="none" href="/">
              <Image src="/sleek-logo.svg" alt="Sleek Logo" boxSize={{ base: "100", md: "120" }} />
            </Link>
          </Stack>

          <Stack direction="row" align="center" spacing={{ base: "4", md: "10" }}>
            <Link href="https://docs.sleekpay.app/" fontFamily="Poppins" fontSize={{ base: "14px", md: "15px" }} fontWeight="500">
              Documentation
            </Link>

            {/* <Link href="mailto:contact@sleek.app" fontFamily="Poppins" fontSize={{ base: "14px", md: "15px" }} fontWeight="500">
              Contact
            </Link> */}
          </Stack>
        </Stack>
      </chakra.nav>

      <chakra.main>{children}</chakra.main>

      <chakra.footer
        maxWidth="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={{ base: "4", md: "8" }}
        borderTop="1px solid rgba(254, 248, 236, 0.12)"
      >
        <Stack
          w="100%"
          px={{ base: "1rem", md: "12rem" }}
          display={{ base: "inline-block", md: "flex" }}
          direction="row"
          justify="space-between"
        >
          <Stack>
            <Link display="block" borderBottom="none" href="/">
              <Image src="/sleek-logo.svg" alt="Sleek Logo" boxSize={{ base: "100", md: "120" }} />
            </Link>
          </Stack>

          <Stack direction="row" align="center" spacing={{ base: "4", md: "10" }}>
            <Link href="https://docs.sleekpay.app/" fontFamily="Poppins" fontSize={{ base: "14px", md: "15px" }} fontWeight="500">
              Documentation
            </Link>

            {/* <Link href="mailto:contact@sleek.app" fontFamily="Poppins" fontSize={{ base: "14px", md: "15px" }} fontWeight="500">
              Contact
            </Link> */}

            <Text opacity="0.8">© Sleek</Text>
          </Stack>
        </Stack>
      </chakra.footer>
    </chakra.main>
  );
};

export default Layout;
