import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import { Layout } from '../components/layout'
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
  Grid
} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import { FormGroup } from 'components/form-group'
import { motion } from 'framer-motion'
import IconArrow from 'components/iconArrow'
import IconStar from 'components/iconStar'
import IconSmile from 'components/iconSmile'
import IconDirector from 'components/iconDirector'

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
      <Container maxW="100%" p="0" h="90vh">
        <Stack
          px={{ base: '6', md: '12rem' }}
          py={{ base: '24', md: '16rem' }}
          pos="relative"
        >
          <Grid
            templateColumns={{
              base: 'repeat(auto-fill, 1fr)',
              md: 'repeat(2, 1fr)'
            }}
            py={{ base: '2rem', md: '12' }}
          >
            <Stack zIndex="1" spacing={{ base: '4', md: '20' }}>
              <Heading
                as="h2"
                w={{ base: '268px', md: '735px' }}
                fontSize={{ base: '28px', md: '3rem' }}
                fontWeight="500"
                lineHeight={{ base: '2.6rem', md: '4.25rem' }}
              >
                Crypto Payment Infrastructure and{' '}
                <chakra.span textDecoration="underline">Invoicing</chakra.span>{' '}
                for{' '}
                <chakra.span textDecoration="underline">
                  Freelancers
                </chakra.span>
                ,{' '}
                <chakra.span textDecoration="underline">
                  Contractors
                </chakra.span>
                , and SMEs.
              </Heading>
              <Button
                variant="primary"
                size="lg"
                alignSelf="flex-start"
                bgColor="#000"
                color="white.100"
                fontSize={{ base: '14px', md: '16px' }}
                h={{ base: '40px', md: '48px' }}
                px={{ base: '4', md: '8' }}
              >
                Try Sleek — Free
              </Button>
            </Stack>

            <Stack
              pos="absolute"
              top={{ base: 'none', md: '6rem' }}
              bottom={{ base: '-9rem', md: 'none' }}
              right={{ base: '1', md: '18rem' }}
              w={{ base: '100%', md: '800px' }}
              h={{ base: '100%', md: '800px' }}
              bgImage={{
                base: 'url(/images/hero-image-M.png)',
                md: 'url(/images/hero-image.png)'
              }}
              bgPosition="right center"
              bgRepeat="no-repeat"
              bgSize={{ base: 'contain', md: 'contain' }}
            />
          </Grid>

          <Box
            pos="absolute"
            top="0"
            right="0"
            h={{ base: '300px', md: '600px' }}
            w={{ base: '300px', md: '600px' }}
            bgImage="url(/images/right-strokes.svg)"
            bgPosition="top right"
            bgRepeat="no-repeat"
            bgSize={{ base: 'contain', md: 'contain' }}
          />
          <Box
            pos="absolute"
            top="12"
            left="0"
            h={{ base: '300px', md: '635px' }}
            w={{ base: '300px', md: '635px' }}
            bgImage="url(/images/left-strokes.svg)"
            bgPosition="left left"
            bgRepeat="no-repeat"
            bgSize={{ base: 'contain', md: 'contain' }}
          />

          <Box
            pos="absolute"
            right={{ base: '5rem', md: '42rem' }}
            bottom={{ base: '-5rem', md: '+1rem' }}
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
              <IconArrow onClick={() => goToId('content')} />
            </motion.div>
          </Box>
        </Stack>
      </Container>

      <chakra.section>
        <Container maxW="100%" bgColor="gold.100" id="content">
          <Grid
            templateColumns={{
              base: 'repeat(auto-fill, 1fr)',
              md: 'repeat(2, 1fr)'
            }}
            gridColumnGap={{ base: '0', md: '6rem' }}
            gridRowGap={{ base: '8', md: '0' }}
            alignItems="center"
            px={{ base: '4', md: '12rem' }}
            py={{ base: '12', md: '10rem' }}
            pos="relative"
          >
            <Stack
              minW="0"
              gridColumn={{ base: 'span 1 / 1', md: '2 / 2' }}
              spacing={{ base: '2', md: '2' }}
            >
              <Heading
                as="h2"
                w={{ base: '100%', md: '735px' }}
                fontSize={{ base: '32px', md: '3rem' }}
                fontWeight="500"
              >
                Receive invoice payments from clients all over the world
              </Heading>
              <Text
                fontSize={{ base: '1rem', md: '1rem' }}
                color="rgb(0 0 0 / 0.87)"
                py="4"
                w={{ base: '100%', md: '548px' }}
              >
                As crypto adoption becomes more widespread — Sleek is helping
                the next generation of professionals get paid with less friction
              </Text>
              <Button
                variant="primary"
                size="md"
                alignSelf="flex-start"
                bgColor="orange.100"
                color="white.100"
                fontSize="16px"
                px="6"
              >
                Get started
              </Button>
            </Stack>

            <Stack
              h={{ base: '224px', md: '448px' }}
              gridRow={{ base: '1 / 1', md: '1 / 1' }}
              w="100%"
              flex="1"
              bgImage="url(/images/section-2-image.png)"
              bgPosition="left left"
              bgRepeat="no-repeat"
              bgSize={{ base: 'contain', md: 'contain' }}
            />
          </Grid>
        </Container>
      </chakra.section>

      <chakra.section py="24">
        <Container
          maxW="100%"
          p="0"
          bgImage="url(/images/section-3-lines.svg)"
          bgPosition="top center"
          bgRepeat="no-repeat"
          bgSize={{ base: 'cover', md: 'contain' }}
        >
          <Stack
            alignItems="center"
            spacing={{ base: '6', md: '8' }}
            px={{ base: '8', md: '12rem' }}
            pos="relative"
          >
            <Stack
              flex="1"
              align="center"
              minWidth="0"
              spacing={{ base: '2', md: '8' }}
              pos="relative"
              top="-8"
            >
              <IconStar />
              <Heading
                as="h2"
                textAlign="center"
                fontSize={{ base: '2.48rem', md: '3rem' }}
                fontWeight="500"
              >
                With one <chakra.span color="orange.100">simple</chakra.span>{' '}
                interface
              </Heading>
            </Stack>

            <Grid
              templateColumns={{
                base: 'repeat(auto-fill, 1fr)',
                md: 'repeat(3, 1fr)'
              }}
              py="16"
              gridColumnGap="12"
              gridRowGap={{ base: '12', md: '0' }}
            >
              <Stack align="center" spacing={{ base: '4', md: '8' }}>
                <Heading
                  as="h3"
                  textAlign="center"
                  fontSize={{ base: '24px', md: '24px' }}
                  fontWeight="500"
                >
                  Create invoices
                </Heading>
                <Stack
                  bgColor="rgba(0,0,0, 90%)"
                  w={{ base: '100%', md: '400px' }}
                  h={{ base: '100%', md: '100%' }}
                  p="2px"
                  rounded="2"
                  overflow="hidden"
                  transition="all .4s ease-in-out"
                  _hover={{
                    boxShadow: '0px 58px 68px rgba(47, 53, 66, 8%)',
                    bgColor: 'rgba(0,0,0, 100%)',
                    rounded: '2',
                    p: '2.6px'
                  }}
                  cursor="pointer"
                >
                  <Image
                    src="/images/create-invoice.png"
                    alt="Create invoice"
                    boxSize="100%"
                    rounded="4"
                    transition="all .4s ease-in-out"
                    _hover={{
                      rounded: '2'
                    }}
                  />
                </Stack>
              </Stack>

              <Stack align="center" spacing={{ base: '4', md: '8' }}>
                <Heading
                  as="h3"
                  textAlign="center"
                  fontSize={{ base: '24px', md: '24px' }}
                  fontWeight="500"
                >
                  Automate payments
                </Heading>

                <Stack
                  bgColor="rgba(0,0,0, 90%)"
                  w={{ base: '100%', md: '400px' }}
                  h={{ base: '100%', md: '100%' }}
                  p="2px"
                  rounded="2"
                  overflow="hidden"
                  transition="all .4s ease-in-out"
                  _hover={{
                    boxShadow: '0px 58px 68px rgba(47, 53, 66, 8%)',
                    bgColor: 'rgba(0,0,0, 100%)',
                    rounded: '2',
                    p: '2.6px'
                  }}
                  cursor="pointer"
                >
                  <Image
                    src="/images/automate-invoice.png"
                    alt="Automate payments"
                    boxSize="100%"
                    rounded="4"
                    transition="all .4s ease-in-out"
                    _hover={{
                      rounded: '2'
                    }}
                  />
                </Stack>
              </Stack>

              <Stack align="center" spacing={{ base: '4', md: '8' }}>
                <Heading
                  as="h3"
                  textAlign="center"
                  fontSize={{ base: '24px', md: '24px' }}
                  fontWeight="500"
                >
                  Manage Clients
                </Heading>

                <Stack
                  bgColor="rgba(0,0,0, 90%)"
                  w={{ base: '100%', md: '400px' }}
                  h={{ base: '100%', md: '100%' }}
                  p="2px"
                  rounded="2"
                  overflow="hidden"
                  transition="all .4s ease-in-out"
                  _hover={{
                    boxShadow: '0px 58px 68px rgba(47, 53, 66, 8%)',
                    bgColor: 'rgba(0,0,0, 100%)',
                    rounded: '2',
                    p: '2.6px'
                  }}
                  cursor="pointer"
                >
                  <Image
                    src="/images/manage-clients.png"
                    alt="Manage Clients"
                    boxSize="100%"
                    rounded="4"
                    transition="all .4s ease-in-out"
                    _hover={{
                      rounded: '2'
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>
          </Stack>
          <Stack
            h="auto"
            bg=" rgba(254, 57, 1, 0.8)"
            maxW="100%"
            borderTop="1px solid #000"
            align="center"
            justify="center"
            mt={{ base: '-18rem', md: '-18.6rem' }}
          >
            <Stack
              align="center"
              justify="center"
              pt={{ base: '20rem', md: '22rem' }}
              spacing={{ base: '8', md: '12' }}
            >
              <Heading
                as="h2"
                textAlign="center"
                fontSize={{ base: '32px', md: '3rem' }}
                fontWeight="500"
                color="white.100"
              >
                All. So. Professional.
              </Heading>
              <Image
                src="/images/all-pro-invoice.png"
                alt="All Pro"
                boxSize={{ base: '100%', md: '68%' }}
                transition="all .4s ease-in-out"
              />
            </Stack>
          </Stack>
        </Container>
      </chakra.section>

      <chakra.section>
        <Container maxW="100%" p="0">
          <Stack
            h="80vh"
            bg="linear-gradient(180deg, rgba(239, 243, 251, 0) 0%, #F7F9FD 100%)"
            maxW="100%"
            align="center"
            justify="center"
            px={{ base: '8', md: '12rem' }}
          >
            <Box
              pos="relative"
              left={{ base: '-9rem', md: '-16rem' }}
              top={{ base: '0', md: '2.4rem' }}
            >
              <IconSmile />
            </Box>
            <Heading
              as="h2"
              textAlign="center"
              fontSize={{ base: '32px', md: '3rem' }}
              fontWeight="500"
              w={{ base: '100%', md: '624px' }}
            >
              Break the bounds.
              <br />
              Focus on growing your bussiness and services
            </Heading>
            <Text
              textAlign="center"
              fontSize={{ base: '1rem', md: '18px' }}
              color="rgb(0 0 0 / 0.87)"
              py="4"
              w={{ base: '100%', md: '500px' }}
            >
              Let us help you get your finances out of the way — Sleek is for
              professionals, simple and secure.
            </Text>
            <Box pos="relative" right={{ base: '-6rem', md: '-8rem' }}>
              <IconDirector />
            </Box>

            <Button
              variant="primary"
              size="lg"
              bgColor="orange.100"
              color="white.100"
              fontSize="18px"
            >
              Get Started
            </Button>
          </Stack>
        </Container>
      </chakra.section>
    </Layout>
  )
}

export default Home
