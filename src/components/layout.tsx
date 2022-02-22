import {
  Box,
  Button,
  chakra,
  Image,
  List,
  ListItem,
  // Link,
  Stack,
  Text
} from '@chakra-ui/react'
import NextLink, { default as Link } from 'next/link'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <chakra.nav
        display={{ base: 'none', md: 'block' }}
        // px={{ base: '4', md: '16rem' }}
      >
        <Stack
          align="center"
          direction="row"
          justify="space-between"
          // px="20rem"
          // py="2rem"
          h="100px"
          maxW="100%"
          pos="absolute"
          top="0"
          left="16rem"
          right="16rem"
          borderBottom="1px solid rgba(17, 17, 17, 0.08)"
          zIndex="2"
        >
          <Stack flex="1">
            <Link href="/">
              <Image src="/sleek-logo.svg" alt="Sleek" boxSize="120" />
            </Link>
          </Stack>
          <Stack direction="row" align="center" spacing="12">
            <NextLink href="/process" passHref>
              Documentation
            </NextLink>
            <NextLink href="mailto:reach@practicallab.org" passHref>
              Contact
            </NextLink>
          </Stack>
        </Stack>
      </chakra.nav>

      {/* <chakra.nav
        borderBottom="1px solid rgba(0, 0, 0, 0.08)"
        bg="#FEF8EC"
        display={{ base: 'block', md: 'none' }}
      >
        <Stack
          align="center"
          direction="row"
          justify="space-between"
          px="1.4rem"
          py="1rem"
          maxW="100%"
          zIndex="1"
        >
          <Link href="/">
            <a>
              <Image src="/logo.svg" alt="Practical Labs" boxSize="3rem" />
            </a>
          </Link>
          <Stack direction="row" align="center" spacing="4">
            <NextLink href="/process" passHref>
              Our Processes
            </NextLink>
      
          </Stack>
        </Stack>
      </chakra.nav> */}

      <chakra.main>{children}</chakra.main>

      <chakra.footer
        maxWidth="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // color="#fff"
        p={8}
        borderTop="1px solid rgba(254, 248, 236, 0.12)"
      >
        <Stack
          w="100%"
          px={{ base: '2rem', md: '12rem' }}
          direction="row"
          justify="space-between"
        >
          <Stack>
            <Link href="/">
              <a>
                <Image src="/sleek-logo.svg" alt="Sleek" boxSize="100" />
              </a>
            </Link>
          </Stack>
          <Stack direction="row" align="center" spacing="12">
            <NextLink href="/process" passHref>
              Documentation
            </NextLink>
            <NextLink href="mailto:reach@practicallab.org" passHref>
              Contact
            </NextLink>
            <Text opacity="0.8">© Sleek</Text>
          </Stack>
        </Stack>
      </chakra.footer>
    </>
  )
}

export default Layout
