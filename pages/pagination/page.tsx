// 21 DEC 2021 HAI TRAN 
// Simple pagination 

import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, HStack, Box, Select, BoxProps, IconButton } from '@chakra-ui/react';
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
      <IconButton 
        aria-label='prev' 
        display={{base:'none',sm:'flex'}}
      >
        {<ArrowLeftIcon></ArrowLeftIcon>}
      </IconButton>
      <HStack overflowX='auto' maxWidth={{base: '96', md: '500px'}} py={1} px={1}>
        {[1,2,3,4,5,6,7,8,9,10].map((num,index)=>(
          <Button 
            key={index}
            onClick={() => {
              setCurrentPage(num)
            }}
          >
            {num}
          </Button>))}
      </HStack>
      <IconButton 
        aria-label='next' 
        display={{base: 'none',sm:'flex'}}
      >
        {<ArrowRightIcon></ArrowRightIcon>}
      </IconButton>
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
