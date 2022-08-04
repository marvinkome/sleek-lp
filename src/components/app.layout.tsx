import React from "react";
import NextLink from "next/link";
import { Button, chakra, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import CreateInvoice from "components/invoice/create";

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

            <NextLink href="/app/account" passHref>
              <Button
                as="a"
                rounded="2xl"
                px={4}
                py={1}
                bgColor="rgb(0 0 0 / 4%)"
                fontWeight="500"
                _hover={{ bgColor: "rgb(0 0 0 / 8%)" }}
                _active={{ bgColor: "rgb(0 0 0 / 8%)" }}
                onClick={() => null}
              >
                Roosevelt
              </Button>
            </NextLink>
          </Stack>
        </Container>
      </chakra.header>

      <Container maxW="container.lg">
        <Stack direction="row" mt={20} spacing={6} alignItems="flex-start">
          <chakra.aside py={6} px={4} flex="1" rounded="2rem" bgColor="#fff" border="1px solid" borderColor="rgb(0 0 0 / 4%)">
            <Stack mb={8} spacing={4} alignItems="flex-start">
              <NextLink href="/app" passHref>
                <Button as="a" variant="ghost" fontWeight="500" fontSize="md" rounded="full" _hover={{ bgColor: "rgb(0 0 0 / 8%)" }}>
                  Dashboard
                </Button>
              </NextLink>

              <NextLink href="/app/received" passHref>
                <Button as="a" variant="ghost" fontWeight="500" fontSize="md" rounded="full" _hover={{ bgColor: "rgb(0 0 0 / 8%)" }}>
                  Received
                </Button>
              </NextLink>

              <NextLink href="/app/pending" passHref>
                <Button as="a" variant="ghost" fontWeight="500" fontSize="md" rounded="full" _hover={{ bgColor: "rgb(0 0 0 / 8%)" }}>
                  Pending
                </Button>
              </NextLink>
            </Stack>
            <CreateInvoice>
              <Button
                isFullWidth
                leftIcon={<FiPlus />}
                size="lg"
                fontSize="md"
                rounded="full"
                bgColor="black"
                color="#fff"
                _hover={{ bgColor: "blackAlpha.800" }}
                _active={{ bgColor: "blackAlpha.700" }}
              >
                New Invoice
              </Button>
            </CreateInvoice>
          </chakra.aside>

          <chakra.main flex="4">{children}</chakra.main>
        </Stack>
      </Container>
    </chakra.div>
  );
};

export default AppLayout;
