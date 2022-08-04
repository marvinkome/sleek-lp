import React from "react";
import AppLayout from "components/app.layout";
import {
  chakra,
  Container,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

type InvoiceCardProps = {
  name: string;
  status: "received" | "pending";
  count: number;
};
const InvoiceCard = (props: InvoiceCardProps) => {
  const statusColor = { pending: "#F4B731", received: "#2ED573" };
  return (
    <Stack
      bgColor="#fff"
      rounded="1.5em"
      border="1px solid rgb(0 0 0 / 4%)"
      px={5}
      py={4}
      spacing={4}
      overflow="hidden"
      minW="0"
      alignItems="flex-start"
    >
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

      <Stack direction="row" alignItems="center" spacing={2} w="full">
        <Text fontSize="sm" fontWeight="500" textTransform="capitalize" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
          Softcom Inc .
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
              color="red.500"
              _focus={{ bgColor: "transparent" }}
              _hover={{
                color: "red.400",
                bgColor: "transparent",
              }}
            >
              Remove client
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
      <Stack mb={6} direction="row" alignItems="center">
        <chakra.div boxSize="10px" rounded="full" bgColor="#F4B731" />

        <Heading fontSize="2xl" fontWeight="500">
          Pending
        </Heading>
      </Stack>

      <SimpleGrid columns={4} spacing={4}>
        <InvoiceCard name="#102" status="pending" count={1} />
        <InvoiceCard name="#102" status="pending" count={2} />
        <InvoiceCard name="#102" status="received" count={3} />
      </SimpleGrid>
    </Container>
  );
};

Page.Layout = AppLayout;
export default Page;
