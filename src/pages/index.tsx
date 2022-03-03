import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Layout from '../components/layout'
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
  Text
} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import { FormGroup } from 'components/form-group'
import { motion } from 'framer-motion'

const Home = () => {
  const [submitted, setSubmitted] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)

  const goToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault()

    const name = (e.target as any)['name'].value
    const email = (e.target as any)['email'].value
    const organization = (e.target as any)['organization'].value

    ReactGA.event({
      category: 'User',
      action: 'Tried to create account'
    })

    setSubmitting(true)
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, organization })
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      setSubmitted(true)
      ReactGA.event({
        category: 'User',
        action: 'Created account'
      })
    } catch (e: any) {
      // send error to GA
      ReactGA.event({
        category: 'User',
        action: 'Failed to create account',
        label: e.message
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Layout>
      <Container
        maxW="100%"
        bgImage="url(/header.png)"
        bgRepeat="no-repeat"
        bgSize={{ base: 'cover', md: 'cover' }}
        bgPosition="center center"
        px={{ base: '0', md: '0' }}
        h="100vh"
        d="flex"
        flexDirection="column"
        justifyContent="center"
        pos="relative"
      >
        <Stack align="center" justify="center">
          <Stack align="center" px={{ base: '4', md: '18rem' }} spacing="8">
            <Heading
              textAlign={{ base: 'left', md: 'center' }}
              fontSize={{ base: '2.48rem', md: '3rem' }}
              fontWeight="600"
              color="#0F0F0F"
              lineHeight={{ base: '3rem', md: '4.25rem' }}
            >
              The new standard in crypto
              <br />
              payment for internet businesses
            </Heading>
            <Text
              textAlign={{ base: 'left', md: 'center' }}
              w={{ base: '100%', md: '624px' }}
              fontSize={{ base: '1rem', md: '1.125rem' }}
              opacity="0.87"
            >
              Sleek offers unified APIs and tools that instantly enable
              developers and businesses to accept and process crypto payments
              globally.
            </Text>
          </Stack>
          <Stack
            direction="row"
            align={{ base: 'flex-start', md: 'center' }}
            justify={{ base: 'flex-start', md: 'center' }}
            w="100%"
            spacing={{ base: '4', md: '5' }}
            py={{ base: '4', md: '4rem' }}
            px={{ base: '4', md: '0' }}
          >
            <Button
              href="/demo"
              as={Link}
              variant="secondary"
              rightIcon={<FiChevronRight size="20px" />}
              fontWeight="600"
              maxW={40}
              px={{ base: '8', md: '8' }}
              py="6"
            >
              See Demo
            </Button>
            <Button
              onClick={() => goToId('signup')}
              variant="primary"
              maxW={40}
              px={{ base: '12', md: '12' }}
              py="6"
            >
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
          <motion.div
            initial={{ y: -25 }}
            animate={{ y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 0.2
            }}
          >
            <Icon
              viewBox="0 0 16 30"
              w="16"
              h="30"
              onClick={() => goToId('content')}
            >
              <path
                d="M8 25.875C5.92893 25.875 4.25 24.1961 4.25 22.125C4.25 20.0539 5.92893 18.375 8 18.375C10.0711 18.375 11.75 20.0539 11.75 22.125C11.75 24.1961 10.0711 25.875 8 25.875ZM8 30C3.85786 30 0.5 26.6421 0.5 22.5L0.499999 7.5C0.499999 3.35787 3.85786 -1.46777e-07 8 -3.27835e-07C12.1421 -5.08894e-07 15.5 3.35786 15.5 7.5L15.5 22.5C15.5 26.6421 12.1421 30 8 30ZM2.375 22.5C2.375 25.6066 4.8934 28.125 8 28.125C11.1066 28.125 13.625 25.6066 13.625 22.5L13.625 7.5C13.625 4.3934 11.1066 1.875 8 1.875C4.8934 1.875 2.375 4.3934 2.375 7.5L2.375 22.5Z"
                fill="#0F0F0F"
              />
            </Icon>
          </motion.div>
        </Stack>
      </Container>

      <Container maxW="100%" h="100%" id="content">
        {/* for developers */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          py={{ base: '2rem', md: '8rem' }}
          px={{ base: '0', md: '12rem' }}
          spacing={6}
        >
          <Stack display={{ base: 'none', md: 'block' }}>
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
          </Stack>

          <Stack flex="1" minWidth="0" spacing={{ base: '2', md: '2' }}>
            <Heading
              color="rgba(83, 107, 236, 0.36)"
              fontSize={{ base: '2rem', md: '3rem' }}
            >
              Designed for
            </Heading>
            <Heading color="#536BEC" fontSize={{ base: '2.25rem', md: '4rem' }}>
              Developers First
            </Heading>
            <Text
              display={{ base: 'none', md: 'block' }}
              fontSize={{ base: '1rem', md: '1rem' }}
              color="rgb(0 0 0 / 0.87)"
              py="4"
            >
              With simple APIs that let you focus on building great products,
              <br />
              Setting up payment is as easy as this snippet!
            </Text>
            <Text
              display={{ base: 'block', md: 'none' }}
              fontSize={{ base: '1rem', md: '1rem' }}
              color="rgb(0 0 0 / 0.87)"
              py="4"
            >
              With simple APIs that let you focus on building great products,
              Setting up payment is as easy as this snippet!
            </Text>

            <div>
              <Button
                href="https://docs.sleekpay.app/"
                as={Link}
                isExternal
                variant="solid"
                rightIcon={<FiChevronRight size="20px" />}
                fontWeight="600"
                px="12"
                py="6"
              >
                Explore Docs
              </Button>
            </div>
          </Stack>

          <Stack flex="1">
            <Image src="/snippet.png" alt="Code" boxSize="100%" />
          </Stack>
        </Stack>

        {/* simple form */}
        <Stack
          direction={{ base: 'column', md: 'row-reverse' }}
          align="center"
          px={{ base: '0', md: '12rem' }}
          spacing={{ base: '12', md: '28' }}
          py={{ base: '1.2rem', md: '4rem' }}
        >
          <Stack display={{ base: 'none', md: 'block' }}>
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
          </Stack>

          <Stack
            minWidth="0"
            display={{ base: 'none', md: 'flex' }}
            flex="1"
            spacing="4"
          >
            <Heading
              fontSize={{ base: '2rem', md: '3.4rem' }}
              fontWeight="800"
              color="rgba(83, 107, 236, 0.36)"
            >
              The best{' '}
              <span style={{ color: '#536BEC' }}>~Pay With Crypto~</span>{' '}
              experience for your customers
            </Heading>
            <Text fontSize={{ base: '1rem', md: '1.125rem' }} opacity="0.87">
              With a beautiful form that supports one-click payments across
              different networks and devices.
            </Text>
          </Stack>

          {/* Mobile display */}
          <Stack display={{ base: 'flex', md: 'none' }} flex="1" spacing="4">
            <Heading
              fontSize="32px"
              fontWeight="800"
              color="rgba(83, 107, 236, 0.36)"
            >
              The best{' '}
              <span style={{ color: '#5352ED' }}>~Pay With Crypto~</span>{' '}
              experience for your customers
            </Heading>
            <Text
              w={{ base: '100%', md: '600px' }}
              fontSize={{ base: '1rem', md: '1.125rem' }}
              opacity="0.87"
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
              alt="Sleek pay crypto form"
              boxSize="100%"
            />
          </Stack>
        </Stack>

        <chakra.section py={{ base: '1.2rem', md: '6rem' }}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            px={{ base: '0', md: '10rem' }}
            spacing={{ base: '8', md: '12' }}
          >
            <Stack
              display={{ base: 'none', md: 'block' }}
              spacing="22rem"
              direction="row"
              pos="absolute"
              mt="-28rem"
              zIndex="-2"
            >
              <Stack>
                <Icon viewBox="0 0 1 377" w="1" h="30rem" position="absolute">
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
                  h="105rem"
                  mt="-24rem"
                  position="absolute"
                >
                  <line
                    x1="0.4"
                    y1="-1.74846e-08"
                    x2="0.400016"
                    y2="377"
                    stroke="#2F3542"
                    strokeOpacity="0.10"
                    strokeWidth="0.8"
                    strokeDasharray="6 6"
                  />
                </Icon>
              </Stack>

              <Stack>
                <Icon viewBox="0 0 1 377" w="0.5" h="30rem" position="absolute">
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
                  h="105rem"
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
            </Stack>

            <Stack flex="1" spacing="4" pt="12">
              <Heading
                color="#536BEC"
                fontSize={{ base: '32px', md: '64px' }}
                lineHeight={{ base: '48px', md: '88px' }}
              >
                Crypto Payment
                <Flex color="rgba(83, 107, 236, 0.36)">
                  infrastructure for Everyone
                </Flex>
              </Heading>
              <Text
                w={{ base: '100%', md: '600px' }}
                fontSize={{ base: '1rem', md: '1.125rem' }}
                opacity="0.87"
                py={{ base: '2', md: '4' }}
              >
                Whether you&apos;re a merchant or building a marketplace to
                accept crypto payments globally, Sleek has the features you
                need.
              </Text>

              <Stack direction="row" spacing="5" py={{ base: '2', md: '1rem' }}>
                <Button
                  onClick={() => goToId('signup')}
                  variant="primary"
                  bgColor="#3742FA"
                  px="12"
                  py="6"
                >
                  Sign Up
                </Button>
                <Button
                  href="/demo"
                  as={Link}
                  variant="secondary"
                  bgColor="#EFF0FF"
                  color="#3742FA"
                  rightIcon={<FiChevronRight size="20px" />}
                  fontWeight="600"
                  px="8"
                  py="6"
                >
                  See Demo
                </Button>
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
                src="/infra.png"
                alt="Sleekpay Infrastructure"
                boxSize="100%"
              />
            </Stack>
          </Stack>
        </chakra.section>

        <chakra.section
          id="signup"
          h={{ base: '600px', md: '448px' }}
          mt="18rem"
          bgColor="rgba(83, 107, 236, 0.04)"
        >
          <Stack
            direction={{ base: 'column-reverse', md: 'row' }}
            px={{ base: '0', md: '16rem' }}
            spacing="24"
          >
            <Stack position="relative" mt="-28">
              <Image
                src="/yello.svg"
                pos="absolute"
                top="-3rem"
                left="-4rem"
                alt="illustration"
                boxSize="35%"
              />
              <Image
                src="/berry.svg"
                pos="absolute"
                bottom="-1rem"
                right="-1rem"
                alt="illustration"
                boxSize="28"
              />

              <Stack
                as="form"
                bg="rgba(255, 255, 255, 0.7)"
                boxShadow="rgba(164, 176, 190, 0.15) 0px 48px 100px 0px"
                backdropFilter=" blur(24px)"
                borderRadius="12"
                px={{ base: '8', md: '12' }}
                py="12"
                spacing="8"
                minH="27rem"
                justify="center"
                onSubmit={submitForm}
              >
                {!submitted ? (
                  <>
                    <Image src="/sleek-mark.svg" alt="Sleek" boxSize="50" />

                    <FormGroup id="email">
                      <Input
                        w={{ base: '100%', md: '24rem' }}
                        id="email"
                        type="email"
                        placeholder="Email"
                        variant="flushed"
                        isRequired
                      />
                    </FormGroup>
                    <FormGroup id="name">
                      <Input
                        id="name"
                        type="text"
                        placeholder="Full name"
                        variant="flushed"
                        isRequired
                      />
                    </FormGroup>
                    <FormGroup id="organization">
                      <Input
                        id="organization"
                        type="text"
                        placeholder="Organization"
                        variant="flushed"
                        isRequired
                      />
                    </FormGroup>

                    <Button
                      type="submit"
                      variant="primary"
                      bgColor="#3742FA"
                      px="12"
                      py="6"
                      isLoading={submitting}
                    >
                      Sign me up
                    </Button>
                  </>
                ) : (
                  <Text w={{ base: '100%', md: '24rem' }} textAlign="center">
                    Your details is recorded <br /> Look out for your email when
                    we send out an invite. Thank you.
                  </Text>
                )}
              </Stack>
            </Stack>

            <Stack
              flex="1"
              spacing={{ base: '4', md: '8' }}
              py={{ base: '4', md: '0' }}
              zIndex="2"
            >
              <Heading
                color="#0F0F0F"
                mt="-16"
                fontSize={{ base: '32px', md: '64px' }}
              >
                Sign Up!
              </Heading>
              <Text
                w={{ base: '100%', md: '600px' }}
                fontSize={{ base: '1rem', md: '1.125rem' }}
                pb="2"
              >
                Join our beta list and be the first to try sleek for free.
              </Text>
            </Stack>
          </Stack>
        </chakra.section>
      </Container>
    </Layout>
  )
}

export default Home
