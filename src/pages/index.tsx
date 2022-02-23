import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Stack,
  Text
} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import Layout from '../components/layout'
import Link from '../components/link'
import { FormGroup } from 'components/form-group'

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
            <Text
              align="center"
              w="624px"
              fontSize={{ base: '1rem', md: '1.125rem' }}
              opacity="0.87"
            >
              Sleek offers unified APIs and tools that instantly enable
              developers and businesses to accept and process crypto payments
              globally.
            </Text>
          </Stack>
          <Stack direction="row" spacing="5" py={{ base: '4', md: '4rem' }}>
            <Link
              href="#"
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
        // py={{ base: '1.2rem', md: '8rem' }}
        h="100%"
      >
        <chakra.section py={{ base: '1.2rem', md: '8rem' }}>
          <Stack
            direction="row"
            align="center"
            px={{ base: '1.2rem', md: '12rem' }}
          >
            <Icon viewBox="0 0 1 377" w="1" h="377">
              <line
                x1="0.4"
                y1="-1.74846e-08"
                x2="0.400016"
                y2="377"
                stroke="#2F3542"
                strokeOpacity="0.24"
                strokeWidth="0.8"
                strokeDasharray="6 6"
              />
            </Icon>
            <Stack flex="1" spacing="4">
              <Heading color="rgba(83, 107, 236, 0.36)" fontSize="48px">
                Designed for{' '}
              </Heading>
              <Heading color="#536BEC" fontSize="64px">
                Developers First
              </Heading>
              <Text
                w="548px"
                fontSize={{ base: '1rem', md: '1.125rem' }}
                opacity="0.87"
                py="4"
              >
                With simple APIs that let you focus on building great products,
                Setting up payment is as easy as Snippet!
              </Text>

              <Link
                href="/"
                as={Button}
                variant="solid"
                rightIcon={<FiChevronRight size="20px" />}
                fontWeight="600"
                px="12"
                py="6"
                w="208px"
              >
                Explore Docs
              </Link>
            </Stack>

            <Stack
              flex="1"
              userSelect="none"
              pointerEvents="none"
              maxW="100%"
              height="100%"
            >
              <Image src="/snippet.svg" alt="Code" boxSize="100%" />
            </Stack>
          </Stack>
        </chakra.section>

        <chakra.section py={{ base: '1.2rem', md: '4rem' }}>
          <Stack
            direction="row-reverse"
            align="center"
            px={{ base: '1.2rem', md: '12rem' }}
            spacing="24"
          >
            {/* <Icon viewBox="0 0 1 377" w="1" h="377" position="absolute">
              <line
                x1="0.4"
                y1="-1.74846e-08"
                x2="0.400016"
                y2="377"
                stroke="#2F3542"
                strokeOpacity="0.24"
                strokeWidth="0.8"
                strokeDasharray="6 6"
              />
            </Icon> */}
            <Stack flex="1" spacing="4">
              <h1
                style={{
                  fontSize: '60px',
                  fontWeight: '800',
                  color: 'rgba(83, 82, 237, 0.48)'
                }}
              >
                The best{' '}
                <span style={{ color: '#5352ED' }}>~Pay With Crypto~</span>{' '}
                experience for your customers
              </h1>
              <Text
                w="600px"
                fontSize={{ base: '1rem', md: '1.125rem' }}
                opacity="0.87"
                py="2"
              >
                With a beautiful form that supports one-click payments across
                different networks and devices.
              </Text>
            </Stack>

            <Stack
              flex="1"
              userSelect="none"
              pointerEvents="none"
              maxW="100%"
              height="100%"
            >
              <Image
                src="/pay-crypto.png"
                alt="Sleekpay crypto form"
                boxSize="100%"
              />
            </Stack>
          </Stack>
        </chakra.section>

        <chakra.section py={{ base: '1.2rem', md: '6rem' }}>
          <Stack
            direction="row"
            px={{ base: '1.2rem', md: '12rem' }}
            // spacing="32"
          >
            <Stack
              spacing="22rem"
              direction="row"
              pos="absolute"
              mt="-28rem"
              zIndex="-2"
            >
              <Stack>
                <Icon viewBox="0 0 1 377" w="1" h="44rem" position="absolute">
                  <line
                    x1="0.4"
                    y1="-1.74846e-08"
                    x2="0.400016"
                    y2="377"
                    stroke="#2F3542"
                    strokeOpacity="0.12"
                    strokeWidth="0.8"
                    strokeDasharray="6 6"
                  />
                </Icon>
                <Icon
                  viewBox="0 0 1 377"
                  w="0.5"
                  h="135rem"
                  mt="-24rem"
                  position="absolute"
                >
                  <line
                    x1="0.4"
                    y1="-1.74846e-08"
                    x2="0.400016"
                    y2="377"
                    stroke="#2F3542"
                    strokeOpacity="0.12"
                    strokeWidth="0.8"
                    strokeDasharray="6 6"
                  />
                </Icon>
              </Stack>

              <Stack>
                <Icon viewBox="0 0 1 377" w="0.5" h="44rem" position="absolute">
                  <line
                    x1="0.4"
                    y1="-1.74846e-08"
                    x2="0.400016"
                    y2="377"
                    stroke="#2F3542"
                    strokeOpacity="0.08"
                    strokeWidth="0.8"
                    strokeDasharray="6 6"
                  />
                </Icon>
                <Icon
                  viewBox="0 0 1 377"
                  w="0.5"
                  h="135rem"
                  mt="-24rem"
                  position="absolute"
                >
                  <line
                    x1="0.4"
                    y1="-1.74846e-08"
                    x2="0.400016"
                    y2="377"
                    stroke="#2F3542"
                    strokeOpacity="0.08"
                    strokeWidth="0.8"
                    strokeDasharray="6 6"
                  />
                </Icon>
              </Stack>
              <Stack>
                <Icon
                  viewBox="0 0 1 377"
                  w="0.5"
                  h="65rem"
                  mt="-24rem"
                  position="absolute"
                >
                  <line
                    x1="0.4"
                    y1="-1.74846e-08"
                    x2="0.400016"
                    y2="377"
                    stroke="#2F3542"
                    strokeOpacity="0.06"
                    strokeWidth="0.8"
                    strokeDasharray="6 6"
                  />
                </Icon>
                <Icon
                  viewBox="0 0 1 377"
                  w="0.5"
                  h="112rem"
                  mt="-24rem"
                  position="absolute"
                >
                  <line
                    x1="0.4"
                    y1="-1.74846e-08"
                    x2="0.400016"
                    y2="377"
                    stroke="#2F3542"
                    strokeOpacity="0.06"
                    strokeWidth="0.8"
                    strokeDasharray="6 6"
                  />
                </Icon>
              </Stack>
            </Stack>

            <Stack flex="1" spacing="4" pt="12">
              <Heading color="#536BEC" fontSize="64px" lineHeight="88px">
                Crypto Payment
                <Flex color="rgba(83, 107, 236, 0.36)">
                  infrastructure for Everyone
                </Flex>
              </Heading>
              <Text
                w="600px"
                fontSize={{ base: '1rem', md: '1.125rem' }}
                opacity="0.87"
                py="4"
              >
                Whether you&apos;re building a marketplace or accepting crypto
                payments, Sleek has the features you need.
              </Text>

              <Stack direction="row" spacing="5" py={{ base: '4', md: '1rem' }}>
                <Button variant="primary" bgColor="#3742FA" px="12" py="6">
                  Sign Up
                </Button>
                <Link
                  href="#"
                  as={Button}
                  variant="secondary"
                  bgColor="#EFF0FF"
                  color="#3742FA"
                  rightIcon={<FiChevronRight size="20px" />}
                  fontWeight="600"
                  px="8"
                  py="6"
                >
                  See Demo
                </Link>
              </Stack>
            </Stack>

            <Stack
              flex="1"
              userSelect="none"
              pointerEvents="none"
              maxW="100%"
              height="100%"
            >
              <Image
                src="/infra.svg"
                alt="Sleekpay Infrastructure"
                boxSize="100%"
              />
            </Stack>
          </Stack>
        </chakra.section>

        <chakra.section
          h="448px"
          mt="18rem"
          bgColor="rgba(83, 107, 236, 0.04)"
          // borderTop="1px dashed rgba(47, 53, 66, 0.12)"
          // borderBottom="1px dashed rgba(47, 53, 66, 0.12)"
        >
          <Stack direction="row" px={{ base: '', md: '16rem' }} spacing="24">
            <Stack position="relative" mt="-28">
              <Image
                src="/yello.svg"
                pos="absolute"
                top="-3rem"
                left="-4rem"
                alt="Code"
                boxSize="35%"
              />
              <Image
                src="/berry.svg"
                pos="absolute"
                bottom="-1rem"
                right="-1rem"
                alt="Code"
                boxSize="28"
              />

              <Stack
                bg="rgba(255, 255, 255, 0.7)"
                boxShadow="rgba(164, 176, 190, 0.15) 0px 48px 100px 0px"
                backdropFilter=" blur(24px)"
                borderRadius="12"
                px="12"
                py="12"
                spacing="8"
              >
                <Image src="/sleek-mark.svg" alt="Sleek" boxSize="50" />

                <FormGroup id="name">
                  <Input
                    w="24rem"
                    type="text"
                    placeholder="Email"
                    variant="flushed"
                  />
                </FormGroup>
                <FormGroup id="name">
                  <Input
                    type="text"
                    placeholder="Full name"
                    variant="flushed"
                  />
                </FormGroup>
                <FormGroup id="name">
                  <Input
                    type="text"
                    placeholder="Organization"
                    variant="flushed"
                  />
                </FormGroup>

                <Button
                  type="submit"
                  variant="primary"
                  bgColor="#3742FA"
                  px="12"
                  py="6"
                >
                  Sign me up
                </Button>
              </Stack>
            </Stack>

            <Stack flex="1" spacing="8">
              <Heading color="#0F0F0F" mt="-16" fontSize="64px">
                Sign Up!
              </Heading>
              <Text
                w="600px"
                fontSize={{ base: '1rem', md: '1.125rem' }}
                pb="2"
              >
                Join our beta list and be the first to get notified.
              </Text>
            </Stack>
          </Stack>
        </chakra.section>
      </Container>
    </Layout>
  )
}

export default Home
