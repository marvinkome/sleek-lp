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
  Grid
} from '@chakra-ui/react'
import { AdminLayout } from 'components/layout'

const Pending = () => {
  return (
    <AdminLayout>
      <Container maxW="100%">
        <Stack py="24">
          <Heading fontSize="20px" fontWeight="500">
            Pending
          </Heading>
        </Stack>
      </Container>
    </AdminLayout>
  )
}

export default Pending
