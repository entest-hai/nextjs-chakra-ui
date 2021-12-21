// 21 DEC 2021 HAI TRAN 
// Simple pagination 

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, HStack, Box, Select, BoxProps } from '@chakra-ui/react';
import {useState} from 'react';

interface PaginationProps extends BoxProps {
  currentPage: number; 
  setCurrentPage: any; 
  setNumItemPerPage: any; 
}

const Pagination = ({currentPage,setCurrentPage,setNumItemPerPage}: PaginationProps) => {

  return (
    <HStack
    >
      <Button
        aria-label='prev' 
        leftIcon={<ChevronLeftIcon h={6} w={6}></ChevronLeftIcon>}
        colorScheme='teal'
        variant='solid'
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
          }
        }}
      >
          Prev
      </Button>
      <Select
        width={24}
        fontWeight='semibold'
        onChange={(event) => {
          setNumItemPerPage(parseInt(event.target.value))
        }}
      >
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
        <option value='25'>25</option>
      </Select>
      <Button 
        rightIcon={<ChevronRightIcon width={6} height={6} />} 
        colorScheme="teal" 
        variant="solid"
        onClick={() => {
          if (currentPage < 9) {
            setCurrentPage(currentPage + 1)
          }
        }}
      >
          Next
      </Button>
    </HStack>
  );
}



const Test = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [numItemPerPage, setNumItemPerPage] = useState(10)

  return (
    <Box
      width='100%'
      height='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Box py={20} whiteSpace='pre-line'>
        currentPage: {currentPage} {'\n'}
        numItemPerPage: {numItemPerPage}
      </Box>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setNumItemPerPage={setNumItemPerPage}
      >
      </Pagination>
    </Box>
  ); 
}

export default Test;
