import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Icon,
  Image,
  // Link,
  Stack,
  Text
} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import Layout from '../components/layout'
import Link from 'components/link'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sleek | Crypto payment processing for the internet</title>
        <meta
          name="description"
          content="The new standard in crypto payment for everyone"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        maxW="100%"
        bgImage="url(/header.png)"
        bgRepeat="no-repeat"
        bgSize={{ base: '8rem', md: 'cover' }}
        bgPosition="center center"
        px={{ base: '1.2rem', md: '0' }}
        h="100vh"
        d="flex"
        flexDirection="column"
        justifyContent="center"
        pos="relative"
      >
        <Stack align="center" justify="center">
          <Stack align="center" px={{ base: '4', md: '28rem' }} spacing="8">
            <Heading
              textAlign="center"
              fontSize={{ base: '1rem', md: '48px' }}
              fontWeight="bold"
              color="#0F0F0F"
              lineHeight="68px"
            >
              The new standard in crypto payment for internet businesses
            </Heading>
            <Text align="center" w="579px">
              Sleek offers unified APIs and tools that instantly enable
              developers and businesses to accept and process crypto payments
              globally.
            </Text>
          </Stack>
          <Stack direction="row" spacing="5" py={{ base: '4', md: '4rem' }}>
            <Link
              href="/"
              as={Button}
              variant="secondary"
              rightIcon={<FiChevronRight size="20px" />}
              fontWeight="600"
              px="12"
              py="6"
            >
              See Demo
            </Link>
            <Button variant="primary" px="12" py="6">
              Sign Up
            </Button>
          </Stack>
        </Stack>
        <Stack
          w="100%"
          h="141px"
          align="center"
          justify="center"
          pos="absolute"
          bottom="0"
          bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 93.71%)"
        >
          <Icon viewBox="0 0 16 30" w="16" h="30">
            <path
              d="M8 25.875C5.92893 25.875 4.25 24.1961 4.25 22.125C4.25 20.0539 5.92893 18.375 8 18.375C10.0711 18.375 11.75 20.0539 11.75 22.125C11.75 24.1961 10.0711 25.875 8 25.875ZM8 30C3.85786 30 0.5 26.6421 0.5 22.5L0.499999 7.5C0.499999 3.35787 3.85786 -1.46777e-07 8 -3.27835e-07C12.1421 -5.08894e-07 15.5 3.35786 15.5 7.5L15.5 22.5C15.5 26.6421 12.1421 30 8 30ZM2.375 22.5C2.375 25.6066 4.8934 28.125 8 28.125C11.1066 28.125 13.625 25.6066 13.625 22.5L13.625 7.5C13.625 4.3934 11.1066 1.875 8 1.875C4.8934 1.875 2.375 4.3934 2.375 7.5L2.375 22.5Z"
              fill="#0F0F0F"
            />
          </Icon>
        </Stack>
      </Container>

      <Container
        maxW="100%"
        px={{ base: '1.2rem', md: '0' }}
        py={{ base: '1.2rem', md: '8rem' }}
        h="100%"
      >
        <chakra.section>
          <Stack direction="row" px={{ base: '1.2rem', md: '12rem' }}>
            <Stack flex="1" spacing="4">
              <Heading color="rgba(83, 107, 236, 0.36)" fontSize="48px">
                Designed for{' '}
              </Heading>
              <Heading color="#536BEC" fontSize="64px">
                Developers First
              </Heading>
              <Text w="615px">
                With simple APIs that let you focus on building great products,
                Setting up payment is as easy as Snippet.
              </Text>
              <Link
                href="/"
                as={Button}
                variant="secondary"
                rightIcon={<FiChevronRight size="20px" />}
                fontWeight="600"
                px="12"
                py="6"
              >
                See Demo
              </Link>
            </Stack>

            <Stack
              flex="1"
              bgImage="url(/snippet.svg)"
              bgRepeat="no-repeat"
              bgSize={{ base: '8rem', md: 'cover' }}
              bgPosition="center center"
              h="300px"
              maxW="100%"
            />
          </Stack>
        </chakra.section>
      </Container>
    </Layout>
  )
}

export default Home
