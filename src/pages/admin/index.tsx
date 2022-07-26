import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import { AdminLayout } from 'components/layout'
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

const Dashboard = () => {
  return (
    <AdminLayout>
      <Container maxW="100%">
        <Stack py="24">
          <Heading fontSize="20px" fontWeight="500">
            All clients
          </Heading>
        </Stack>
      </Container>
    </AdminLayout>
  )
}

export default Dashboard
