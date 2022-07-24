import {
  chakra,
  Image,
  Stack,
  Text,
  Button,
  Heading,
  Grid,
  Tag,
  Flex
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'components/link'
import React from 'react'
import { MdAdd } from 'react-icons/md'

export const Layout: React.FC<any> = ({ children, ContainerProps }) => {
  return (
    <chakra.main {...ContainerProps}>
      <chakra.nav>
        <Stack
          h={{ base: '57px', md: '82px' }}
          maxW="100%"
          px={{ base: '6', md: '12rem' }}
          align="center"
          direction="row"
          justify="space-between"
          bgColor="white.100"
          pos="fixed"
          top="0"
          left="0"
          right="0"
          zIndex="2"
        >
          <Stack>
            <Link borderBottom="none" href="/">
              <Image
                src="/sleek-logo.svg"
                alt="Sleek Logo"
                boxSize={{ base: '100px', md: '120' }}
              />
            </Link>
          </Stack>
          <Stack
            direction="row"
            align="center"
            spacing={{ base: '3', md: '6' }}
          >
            <Button variant="secondary" h={{ base: '33px', md: '36px' }}>
              Log in
            </Button>
            <Button
              variant="primary"
              fontSize={{ base: '14px', md: '15px' }}
              h={{ base: '33px', md: '36px' }}
              bgColor="#000"
              color="white.100"
            >
              Sign up
            </Button>
          </Stack>
        </Stack>
      </chakra.nav>

      <chakra.main>{children}</chakra.main>

      <chakra.footer bgColor="#FBFCFE">
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}
          gridColumnGap="2"
          gridRowGap={{ base: '2', md: '0' }}
          px={{ base: '3', md: '8rem' }}
          justifyContent="center"
        >
          <Stack
            px={{ base: '8', md: '16' }}
            py={{ base: '8', md: '16' }}
            bgColor="white.100"
            spacing="4"
          >
            <Heading
              as="h1"
              fontWeight="500"
              fontSize="40px"
              color="dark.100"
              userSelect="none"
              cursor="none"
            >
              Slee-k
            </Heading>
            <Stack letterSpacing="0.5px" whiteSpace="nowrap">
              <Text>help@sleekpay.app</Text>
            </Stack>
          </Stack>
          <Stack
            px={{ base: '8', md: '16' }}
            py={{ base: '8', md: '16' }}
            bgColor="white.100"
            spacing="4"
          >
            <Heading fontSize="16px" fontWeight="500" color="dark.100">
              Company
            </Heading>
            <Stack spacing="3" letterSpacing="0.5px">
              {/* <Link
                href="/"
                alignItems="center"
                textDecoration="underline"
                alignSelf="flex-start"
                fontSize="15px"
              >
                Product
              </Link> */}
              <Link
                href="/"
                alignItems="center"
                textDecoration="underline"
                alignSelf="flex-start"
                fontSize="15px"
              >
                About sleek
              </Link>

              <Link
                href="/"
                alignItems="center"
                textDecoration="underline"
                alignSelf="flex-start"
                fontSize="15px"
              >
                Presskit
              </Link>
            </Stack>
          </Stack>

          <Stack
            px={{ base: '8', md: '16' }}
            py={{ base: '8', md: '16' }}
            bgColor="white.100"
            spacing="4"
          >
            <Heading fontSize="16px" fontWeight="500" color="dark.100">
              Help
            </Heading>
            <Stack spacing="3" letterSpacing="0.5px" color="dark.100">
              <Link
                href="/"
                alignItems="center"
                textDecoration="underline"
                alignSelf="flex-start"
                fontSize="15px"
              >
                Faq
              </Link>
              <Link
                href="/"
                alignItems="center"
                textDecoration="underline"
                alignSelf="flex-start"
                fontSize="15px"
              >
                Pricing
              </Link>
              <Link
                href="/"
                alignItems="center"
                textDecoration="underline"
                alignSelf="flex-start"
                fontSize="15px"
              >
                Give feedback
              </Link>
            </Stack>
          </Stack>

          <Stack
            px={{ base: '8', md: '16' }}
            py={{ base: '8', md: '16' }}
            bgColor="white.100"
            spacing="4"
          >
            <Heading fontSize="16px" fontWeight="500" color="dark.100">
              Legal
            </Heading>
            <Stack spacing="3" letterSpacing="0.5px" color="dark.100">
              <Link
                href="/"
                alignItems="center"
                textDecoration="underline"
                alignSelf="flex-start"
                fontSize="15px"
              >
                Terms of use
              </Link>
              <Link
                href="/"
                alignItems="center"
                textDecoration="underline"
                alignSelf="flex-start"
                fontSize="15px"
              >
                Privacy policy
              </Link>
            </Stack>
          </Stack>

          <Stack
            px={{ base: '8', md: '16' }}
            py={{ base: '8', md: '16' }}
            bgColor="white.100"
            spacing="4"
          >
            <Heading fontSize="16px" fontWeight="500" color="dark.100">
              Contact Us
            </Heading>
            <Stack spacing="3" letterSpacing="0.5px" color="dark.100">
              <Link
                href="/"
                alignItems="center"
                textDecoration="underline"
                alignSelf="flex-start"
                fontSize="15px"
              >
                Twitter
              </Link>
              <Link
                href="/"
                alignItems="center"
                textDecoration="underline"
                alignSelf="flex-start"
                fontSize="15px"
              >
                LinkedIn
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          w="100%"
          bgColor="dark.100"
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
          gridRowGap="3"
          px={{ base: '20px', md: '32' }}
          py={{ base: '2', md: '2' }}
        >
          <Text
            color="white.100"
            opacity="72%"
            letterSpacing="0.5px"
            py={{ base: '2', md: '0' }}
            fontSize={{ base: '11px', md: '13' }}
            gridColumn={{ base: '1 / 3', md: '2 / 2' }}
            gridRow={{ base: '2 / 2', md: '1 / 1' }}
            textAlign={{ base: 'center', md: 'center' }}
          >
            © {new Date().getFullYear()} Sleek App. All rights reserved.{' '}
          </Text>

          <Stack
            color="white.100"
            direction="row"
            align="center"
            justify={{ base: 'center', md: 'flex-end' }}
            spacing={{ base: '5', md: '4' }}
            gridColumn={{ base: '1 / 3', md: '3 / 3' }}
            gridRow={{ base: '1 / 1', md: '1 / 1' }}
          >
            {/* <AiFillYoutube />
            <AiOutlineTwitter />
            <GrFacebookOption />
            <AiFillInstagram /> */}
          </Stack>
        </Grid>
      </chakra.footer>
    </chakra.main>
  )
}

// Admin Layout
const useNavLinks = () => {
  const router = useRouter()
  return React.useMemo(() => {
    return [
      {
        name: 'Dashboard',
        url: '/dashboard',
        isActive: router.asPath?.includes('dashboard')
      },
      {
        name: 'Recieved',
        url: '/recieved',
        isActive: router.asPath?.includes('recieved')
      },
      {
        name: 'Pending',
        url: '/pending',
        isActive: router.asPath?.includes('pending')
      }
    ]
  }, [router])
}

export const AdminLayout = ({ title, children }: any) => {
  const router = useRouter()
  const navLinks = useNavLinks()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Grid
        templateColumns="580px 1fr"
        templateRows="70px 1fr 70px"
        templateAreas={{
          base: `"topbar topbar" "main main" "bottombar bottombar"`,
          md: `"topbar topbar"
        "sidebar main "
        "sidebar main "`
        }}
        minH="100vh"
      >
        {/* topbar */}
        <chakra.nav
          gridArea="topbar"
          display={{ base: 'none', md: 'flex' }}
          pos="fixed"
          top="0"
          left="0"
          right="0"
          bg="#fff"
          zIndex="2"
          h="70px"
        >
          <Stack
            direction="row"
            align="center"
            justify="space-between"
            w="100%"
            px="24rem"
          >
            <Flex align="center">
              <Heading fontSize="24px" fontWeight="500" mr="2">
                Slee-k
              </Heading>
              <Tag bgColor="dark.100" size="sm" color="white.100">
                Starter
              </Tag>
            </Flex>
            <Link href="/account">Roosevelt</Link>
          </Stack>
        </chakra.nav>

        {/* sidebar */}
        <chakra.aside
          gridArea="sidebar"
          display={{ base: 'none', md: 'block' }}
          position="relative"
        >
          <Stack
            bg="white.100"
            rounded="36"
            border="1px solid rgba(19, 20, 21, 0.08)"
            spacing="24px"
            py="24px"
            px="24px"
            pos="fixed"
            top="8rem"
            left="22rem"
            minH="auto"
          >
            <Stack spacing={6}>
              {navLinks.map((navLink, idx) => (
                <Link
                  key={idx}
                  href={navLink.url}
                  px="16px"
                  py="12px"
                  rounded="8px"
                  borderBottom="none"
                  _hover={{ transform: 'scale(1.02)' }}
                  {...(navLink.isActive
                    ? { color: '#fff', bg: '#000' }
                    : { color: '#000' })}
                >
                  <Stack direction="row" spacing={4} align="center">
                    <Text
                      fontWeight="500"
                      color="inherit"
                      fontSize="16px"
                      as="span"
                    >
                      {navLink.name}
                    </Text>
                  </Stack>
                </Link>
              ))}
              <Button
                variant="primary"
                size="lg"
                px="16px"
                leftIcon={<MdAdd fontSize="20px" />}
              >
                New invoice
              </Button>
            </Stack>
          </Stack>
        </chakra.aside>

        {/* mobile topbar */}
        <chakra.header
          gridArea="topbar"
          bgColor="rgba(255, 255, 255, 90%)"
          backdropFilter="blur(24px)"
          borderBottom="1px solid rgba(19, 20, 21, 0.08)"
          bg="#fff"
          px={5}
          display={{ base: 'block', md: 'none' }}
          pos="fixed"
          top="0"
          left="0"
          right="0"
          zIndex="2"
          // 60px height
          h="3.75rem"
        >
          <Stack
            direction="row"
            alignItems="center"
            justify="space-between"
            h="100%"
            w="100%"
          >
            <Stack
              as={Link}
              href="/"
              direction="row"
              border="none"
              align="center"
              spacing={2}
            >
              <Heading
                textTransform="capitalize"
                fontWeight="800"
                fontSize="md"
                color="#000"
              >
                {router.query?.store}
              </Heading>
            </Stack>
          </Stack>
        </chakra.header>

        {/* main */}
        <chakra.main gridArea="main">{children}</chakra.main>

        {/* mobile bottom */}
        <chakra.aside
          gridArea="bottombar"
          bg="#000000"
          pos="fixed"
          bottom="0"
          h="4.938rem"
          w="100%"
          display={{ base: 'block', md: 'none' }}
          zIndex="2"
        >
          <Stack
            direction="row"
            alignItems="center"
            justify="space-around"
            h="100%"
            w="100%"
          >
            {navLinks.map((NavLink, idx) => (
              <Link
                key={idx}
                href={NavLink.url}
                borderBottom="none"
                color="#FFF"
                {...(NavLink.isActive ? { textDecoration: 'underline' } : {})}
              >
                <Stack spacing={2} align="center">
                  <Text
                    fontWeight="normal"
                    color="inherit"
                    fontSize="xs"
                    as="span"
                  >
                    {NavLink.name}
                  </Text>
                </Stack>
              </Link>
            ))}
          </Stack>
        </chakra.aside>
      </Grid>
    </>
  )
}
