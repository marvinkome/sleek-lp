import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import {
  Link,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Stack,
  Text,
  Box,
  HStack,
  Grid,
  Divider
} from '@chakra-ui/react'
import AppLayout from "components/app.layout";
import { FiMoreHorizontal } from "react-icons/fi";
import { ST } from 'next/dist/shared/lib/utils';

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
  return(
  <Container>
    <Stack spacing={6} mb={6}>
        <Heading fontSize="2xl" fontWeight="500">
          My Account
        </Heading>
        <Stack spacing={6} direction="row">
            <Image src='https://bit.ly/dan-abramov' boxSize="90px" borderRadius="full" alt='profile'></Image>

          <Stack justify="center" spacing={2}>
            <Text fontSize="xl">Roosevelt Innocent</Text>
            <Stack direction="row" >
              <Text>0x2840...159a</Text>
              <Button borderRadius="xl" size="xs">Disconnect</Button>
            </Stack>
          </Stack>
          <Stack ml="auto! important">
            <Text alignSelf="center" fontWeight={500} fontSize="xl">Starter</Text>
            <Button size="sm" bgColor="black"
                color="#fff"
                _hover={{ bgColor: "blackAlpha.800" }}
                _active={{ bgColor: "blackAlpha.700" }}>Upgrade</Button>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Text fontWeight={400} textTransform="uppercase">Brand Name</Text>
          <Heading fontSize="xl">Design Studio by Roosevelt</Heading>
        </Stack>
        <Stack spacing={2}>
          <Text fontWeight={400} textTransform="uppercase">Business Address</Text>
          <Heading fontSize="xl">20 Central Park, California</Heading>
        </Stack>
        <Stack spacing={2}>
          <Text fontWeight={400} textTransform="uppercase">Country</Text>
          <Heading fontSize="xl">USA</Heading>
        </Stack>
        <Divider  />
        <Stack spacing={2}>
          <Text fontWeight={400} textTransform="uppercase">Home Address</Text>
          <Heading fontSize="xl">D180 Samson Street, California</Heading>
        </Stack>
        <Stack spacing={2}>
          <Text fontWeight={400} textTransform="uppercase">Email Address</Text>
          <Heading fontSize="xl">roosevelt@designbrand.com</Heading>
        </Stack>
        <Stack spacing={2}>
          <Text fontWeight={400} textTransform="uppercase">Phone number</Text>
          <Heading fontSize="xl">+1 123 234 567</Heading>
        </Stack>
        <Button bgColor="red.100" color="red" borderRadius="lg" fontWeight={500} fontSize="md" maxWidth="22%">Close account</Button>
      </Stack>
  </Container>
    )
};

Page.Layout = AppLayout;
export default Page;