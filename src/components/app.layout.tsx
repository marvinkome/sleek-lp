import React from "react";
import NextLink from "next/link";
import { Button, chakra, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

const AppLayout = ({ children }: any) => {
  return (
    <chakra.div bgColor="#FCFCFC" minH="100vh">
      <chakra.header bgColor="#fff">
        <Container maxW="container.lg">
          <Stack py={5} direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" alignItems="center" spacing={4}>
              <Heading>Sleek</Heading>
              <Text px={4} py={1} bgColor="#000" color="#fff" rounded="lg">
                Starter
              </Text>
            </Stack>

            <Text rounded="2xl" px={4} py={1} bgColor="rgb(0 0 0 / 4%)">
              Roosevelt
            </Text>
          </Stack>
        </Container>
      </chakra.header>

      <Container maxW="container.lg">
        <Stack direction="row" mt={20} spacing={16}>
          <chakra.aside py={6} px={4} flex="1" rounded="2rem" bgColor="#fff" border="1px solid" borderColor="rgb(0 0 0 / 4%)">
            <Stack mb={8} spacing={4} alignItems="flex-start">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontWeight="500" fontSize="md" rounded="full">
                  Dashboard
                </Button>
              </NextLink>

              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontWeight="500" fontSize="md" rounded="full">
                  Received
                </Button>
              </NextLink>

              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontWeight="500" fontSize="md" rounded="full">
                  Pending
                </Button>
              </NextLink>
            </Stack>

            <Button
              isFullWidth
              leftIcon={<FiPlus />}
              size="lg"
              fontSize="md"
              rounded="full"
              bgColor="black"
              color="#fff"
              _hover={{ bgColor: "blackAlpha.800" }}
            >
              New Invoice
            </Button>
          </chakra.aside>

          <chakra.main flex="4">{children}</chakra.main>
        </Stack>
      </Container>
    </chakra.div>
  );
};

export default AppLayout;
