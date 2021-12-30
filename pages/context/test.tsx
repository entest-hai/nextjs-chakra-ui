import {HStack, Box, Button } from '@chakra-ui/react'; 
import React, {useState } from 'react';

const ColorContext = React.createContext<string>('blue')
const ControlContext = React.createContext<any>({})

const ButtonOne = () => {
  const myColor = React.useContext(ColorContext)
  const {color, setColor} = React.useContext(ControlContext)
  return (
    <Button
      colorScheme={myColor}
      onClick={() => {
        setColor('blue')
      }}
    >
    Button 1
    </Button>
  ); 
}

const ButtonTwo = () => {
  const myColor = React.useContext(ColorContext)
  const {color, setColor} = React.useContext(ControlContext)
  return (
    <Button
      colorScheme={myColor}
      onClick={() => {
        setColor('green') 
      }}
    >
    Button 2
    </Button>
  ); 
}


const Test = () => {
  const [color, setColor] = useState('tomato')
  return (
    <ControlContext.Provider value={{color: color, setColor: setColor}}>
      <ColorContext.Provider value='blue'>
        <Box width='100%' height='100vh'>
          <Box
            width='100%'
            height={96}
            bg={color}
            display='flex'
            alignItems='center'
            justifyContent='center'
            fontSize={50}
          >
            {color}
          </Box>
          <HStack spacing='20'>
            <ButtonOne></ButtonOne>
            <ButtonTwo></ButtonTwo>
          </HStack>
        </Box>
      </ColorContext.Provider>
    </ControlContext.Provider>
  ); 
}

export default Test; 
