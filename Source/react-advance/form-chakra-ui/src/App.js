import React from 'react'
import HookForm from './HookForm'
import { ChakraProvider, Box } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box p={4}>
        <HookForm />
      </Box>
    </ChakraProvider>
  )
}

export default App;
