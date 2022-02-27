import {
  Box,
  chakra,
  Container,
  Heading,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  Avatar
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import React from 'react'
import NextLink from 'next/link'

const Demo: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sleek | Crypto payment processing for the internet</title>
      </Head>

      <Container
        maxW="100%"
        bgImage="url(/neon.png)"
        bgRepeat="no-repeat"
        bgSize={{ base: 'cover', md: 'cover' }}
        bgPosition="center center"
        px={{ base: '4', md: '16rem' }}
        h="100vh"
        d="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Stack
          px={{ base: '1rem', md: '12' }}
          bgColor="#fff"
          boxShadow="0px 58px 67px rgba(0, 0, 0, 0.09)"
          borderRadius="10px"
          py={{ base: '8', md: '20' }}
          spacing="16"
        >
          <Stack
            align="center"
            px={{ base: '4', md: '18rem' }}
            spacing={{ base: '2', md: '4' }}
          >
            <Heading
              textAlign="center"
              fontSize={{ base: '2rem', md: '3rem' }}
              fontWeight="600"
              color="#0F0F0F"
              lineHeight={{ base: '3rem', md: '4.25rem' }}
            >
              Sleek Demo
            </Heading>
            <Text
              textAlign="center"
              w={{ base: '100%', md: '624px' }}
              fontSize={{ base: '0.875rem', md: '1.125rem' }}
              opacity="0.87"
            >
              Start by entering a wallet address the payable amount will go to,
              sleek works across web and mobile devices.
            </Text>
          </Stack>

          <Stack
            spacing={{ base: '8', md: '12' }}
            px={{ base: '1rem', md: '12rem' }}
          >
            <FormControl id="address">
              <FormLabel htmlFor="address">Wallet Address</FormLabel>
              <Input
                isRequired
                type="text"
                placeholder="(0x2840...159a)"
                variant="flushed"
              />
              <FormErrorMessage>Address is required</FormErrorMessage>
            </FormControl>

            <FormControl id="amount">
              <FormLabel htmlFor="amount">Amount to transfer ($)</FormLabel>
              <Input
                isRequired
                type="number"
                placeholder="0"
                variant="flushed"
              />
              <FormErrorMessage>Amount is required</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              variant="primary"
              bgColor="#3742FA"
              px="12"
              py="6"
            >
              Pay (amount)
            </Button>
            <Text
              textAlign="center"
              color="#FF6348"
              fontSize={{ base: '0.825rem', md: '1rem' }}
            >
              This is a real transaction and your account will be charged,
              choose a small amount to transfer.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  )
}

export default Demo
