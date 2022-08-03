import React from "react";
import AppLayout from "components/app.layout";
import { chakra, Container, Heading, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

type InvoiceCardProps = {
  name: string;
  status: "received" | "pending";
  count: number;
};
const InvoiceCard = (props: InvoiceCardProps) => {
  const statusColor = { pending: "#F4B731", received: "#2ED573" };
  return (
    <Stack bgColor="#fff" rounded="1.5em" border="1px solid rgb(0 0 0 / 4%)" px={6} py={4} spacing={6} overflow="hidden" minW="0">
      <Heading fontSize="lg" fontWeight="500" whiteSpace="nowrap" textOverflow="ellipsis" width="calc(100%)" overflow="hidden">
        {props.name}
      </Heading>

      <Stack direction="row" alignItems="center" spacing={2} w="full">
        <chakra.div boxSize="8px" rounded="full" bgColor={statusColor[props.status]} />
        <Text fontSize="sm" fontWeight="500" textTransform="capitalize">
          {props.count} {props.status}
        </Text>

        <Icon ml="auto !important" as={FiMoreHorizontal} />
      </Stack>
    </Stack>
  );
};

const Page = () => {
  return (
    <Container maxW="container.xl" py={6}>
      <Stack mb={6}>
        <Heading fontSize="2xl" fontWeight="500">
          All Invoices
        </Heading>
      </Stack>

      <SimpleGrid columns={4} spacing={4}>
        <InvoiceCard name="Softcom Inc." status="pending" count={1} />
        <InvoiceCard name="Binural App" status="pending" count={2} />
        <InvoiceCard name="YGC Agency." status="received" count={3} />
        <InvoiceCard name="YOLO Brandrrrrr" status="received" count={2} />
        <InvoiceCard name="YOLO Brandrrrrr" status="received" count={2} />
        <InvoiceCard name="YOLO Brandrrrrr" status="received" count={2} />
      </SimpleGrid>
    </Container>
  );
};

Page.Layout = AppLayout;
export default Page;
