import React from "react";
import NextLink from "next/link";
import AppLayout from "components/app.layout";
import {
  Container,
  Stack,
  Heading,
  SimpleGrid,
  Icon,
  IconButton,
  Text,
  chakra,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiChevronLeft, FiMoreHorizontal } from "react-icons/fi";
import InvoiceModal from "components/invoice";

type InvoiceCardProps = {
  name: string;
  status: "received" | "pending";
};
const InvoiceCard = (props: InvoiceCardProps) => {
  const statusColor = { pending: "#F4B731", received: "#2ED573" };
  return (
    <Stack
      bgColor="#fff"
      rounded="1.5em"
      border="1px solid rgb(0 0 0 / 4%)"
      px={6}
      py={4}
      spacing={4}
      overflow="hidden"
      minW="0"
      alignItems="flex-start"
    >
      <InvoiceModal>
        <Heading
          fontSize="lg"
          fontWeight="500"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          maxW="calc(100%)"
          overflow="hidden"
          borderBottom="1px solid"
          cursor="pointer"
        >
          {props.name}
        </Heading>
      </InvoiceModal>

      <Stack direction="row" alignItems="center" spacing={2} w="full">
        <chakra.div boxSize="8px" rounded="full" bgColor={statusColor[props.status]} />
        <Text fontSize="sm" fontWeight="500" textTransform="capitalize">
          {props.status}
        </Text>

        <Menu>
          <MenuButton
            h="6"
            minW="6"
            size="sm"
            as={IconButton}
            lineHeight="0"
            variant="outline"
            ml="auto !important"
            aria-label="Invoice actions"
            borderColor="transparent"
            _hover={{
              bgColor: "transparent",
              borderColor: "rgb(0 0 0 / 20%)",
            }}
            _active={{
              bgColor: "gray.50",
            }}
          >
            <Icon lineHeight="0" as={FiMoreHorizontal} />
          </MenuButton>

          <MenuList borderRadius="16px" minW={44} borderColor="gray.100">
            <MenuItem
              fontSize="sm"
              color="rgb(0 0 0 / 70%)"
              _focus={{ bgColor: "transparent" }}
              _hover={{
                color: "rgb(0 0 0 / 90%)",
                bgColor: "transparent",
              }}
            >
              Edit invoice
            </MenuItem>

            <MenuItem
              fontSize="sm"
              color="rgb(0 0 0 / 70%)"
              _focus={{ bgColor: "transparent" }}
              _hover={{
                color: "rgb(0 0 0 / 90%)",
                bgColor: "transparent",
              }}
            >
              Send reminder
            </MenuItem>

            <MenuItem
              fontSize="sm"
              color="rgb(0 0 0 / 70%)"
              _focus={{ bgColor: "transparent" }}
              _hover={{
                color: "rgb(0 0 0 / 90%)",
                bgColor: "transparent",
              }}
            >
              Copy link
            </MenuItem>

            <MenuItem
              fontSize="sm"
              color="red.500"
              _focus={{ bgColor: "transparent" }}
              _hover={{
                color: "red.400",
                bgColor: "transparent",
              }}
            >
              Delete invoice
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Stack>
  );
};

const Page = () => {
  return (
    <Container maxW="container.xl" py={6}>
      <Stack mb={6} direction="row" alignItems="center" spacing={4}>
        <NextLink href="/app" passHref>
          <IconButton
            p={2}
            as="a"
            size="sm"
            rounded="18px"
            bgColor="rgb(0 0 0 / 8%)"
            aria-label="back to dashboard"
            _hover={{ bgColor: "rgb(0 0 0 / 16%)" }}
            icon={<Icon boxSize="20px" as={FiChevronLeft} />}
          />
        </NextLink>

        <Heading fontSize="2xl" fontWeight="500">
          Binural App
        </Heading>
      </Stack>

      <SimpleGrid columns={4} spacing={4}>
        <InvoiceCard name="#102" status="pending" />
        <InvoiceCard name="#101" status="pending" />
        <InvoiceCard name="#100" status="received" />
      </SimpleGrid>
    </Container>
  );
};

Page.Layout = AppLayout;
export default Page;
