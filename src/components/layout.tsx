import { chakra, Image, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import Link from 'components/link'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <chakra.nav display={{ base: 'none', md: 'block' }}>
        <Stack
          align="center"
          direction="row"
          justify="space-between"
          h="90px"
          maxW="100%"
          pos="absolute"
          top="0"
          left="16rem"
          right="16rem"
          borderBottom="1px solid rgba(47, 53, 66, 0.08)"
          zIndex="2"
        >
          <Stack>
            <Link borderBottom="none" href="/">
              <Image src="/sleek-logo.svg" alt="Sleek Logo" boxSize="120" />
            </Link>
          </Stack>
          <Stack direction="row" align="center" spacing="10">
            <NextLink href="/process" passHref>
              <Link fontFamily="Poppins" fontSize="15px" fontWeight="500">
                Documentation
              </Link>
            </NextLink>
            <NextLink href="mailto:contact@sleek.app" passHref>
              <Link fontFamily="Poppins" fontSize="15px" fontWeight="500">
                Contact
              </Link>
            </NextLink>
          </Stack>
        </Stack>
      </chakra.nav>

      <chakra.nav
        borderBottom="1px solid rgba(0, 0, 0, 0.08)"
        bg="#FEF8EC"
        display={{ base: 'block', md: 'none' }}
      >
        <Stack
          align="center"
          direction="row"
          justify="space-between"
          h="90px"
          maxW="100%"
          pos="absolute"
          top="0"
          left="1rem"
          right="1rem"
          borderBottom="1px solid rgba(47, 53, 66, 0.08)"
          zIndex="2"
        >
          <Stack>
            <Link borderBottom="none" href="/">
              <Image
                src="/sleek-logo.svg"
                alt="Sleek Logo"
                boxSize={{ base: '100', md: '120' }}
              />
            </Link>
          </Stack>

          <Stack
            direction="row"
            align="center"
            spacing={{ base: '4', md: '10' }}
          >
            <NextLink href="/process" passHref>
              <Link
                fontFamily="Poppins"
                fontSize={{ base: '14px', md: '15px' }}
                fontWeight="500"
              >
                Documentation
              </Link>
            </NextLink>
            <NextLink href="mailto:contact@sleek.app" passHref>
              <Link
                fontFamily="Poppins"
                fontSize={{ base: '14px', md: '15px' }}
                fontWeight="500"
              >
                Contact
              </Link>
            </NextLink>
          </Stack>
        </Stack>
      </chakra.nav>

      <chakra.main>{children}</chakra.main>

      <chakra.footer
        maxWidth="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={{ base: '4', md: '8' }}
        borderTop="1px solid rgba(254, 248, 236, 0.12)"
      >
        <Stack
          w="100%"
          px={{ base: '1rem', md: '12rem' }}
          display={{ base: 'inline-block', md: 'flex' }}
          direction="row"
          justify="space-between"
        >
          <Stack>
            <Link display="block" borderBottom="none" href="/">
              <Image
                src="/sleek-logo.svg"
                alt="Sleek Logo"
                boxSize={{ base: '100', md: '120' }}
              />
            </Link>
          </Stack>

          <Stack
            direction="row"
            align="center"
            spacing={{ base: '4', md: '10' }}
          >
            <NextLink href="/process" passHref>
              <Link
                fontFamily="Poppins"
                fontSize={{ base: '14px', md: '15px' }}
                fontWeight="500"
              >
                Documentation
              </Link>
            </NextLink>
            <NextLink href="mailto:contact@sleek.app" passHref>
              <Link
                fontFamily="Poppins"
                fontSize={{ base: '14px', md: '15px' }}
                fontWeight="500"
              >
                Contact
              </Link>
            </NextLink>
            <Text opacity="0.8">© Sleek</Text>
          </Stack>
        </Stack>
      </chakra.footer>
    </>
  )
}

export default Layout
