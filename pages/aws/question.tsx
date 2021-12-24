// 16 DEC 2021 MIN TRAN aws question form
// fix color mode better 
import { Box,
  Modal, 
  ModalOverlay, 
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody, 
  ModalFooter,
  HStack,
  Button, 
  FlexProps, 
  Text, 
  VStack, 
  Link, 
  useColorModeValue,
  useDisclosure,
  Textarea,
  Input
} from '@chakra-ui/react';
import {Key, useEffect, useState} from 'react';

interface QuestionProps extends FlexProps {
  title: string;
  question: string;
  options: Array<string>;
}

const Question = ({ title, question, options }: QuestionProps) => {
  return (
    <Box maxW={'5xl'} mx='auto'>
      <Box 
        fontWeight='semibold' 
        bg={useColorModeValue('blue.200', 'blue.600')}
        py={4} 
        px={4}
      >
        {title}
      </Box>
      <Box my={4} px={4}>
        {question}
      </Box>
      <VStack spacing={2} alignItems='start' px={4}>
        {options.map((option, index) => {
          return <Text key={index}>{option}</Text>
        })}
      </VStack>
    </Box>
  );
}


interface ExplanationProps extends FlexProps {
  title: string; 
  solution: Array<string>;
  explanation: string;
  references: Array<string>; 
}

const Explanation = ({title, solution, explanation, references}: ExplanationProps) => {
  return (
    <Box maxW={'5xl'} mx='auto'>
      <Box 
        fontWeight='semibold' 
        bg={useColorModeValue('gray.200','gray.600')} 
        py={4} 
        px={4}
      >
        <Text fontWeight={'semibold'}>
          {title}
        </Text>
      </Box>
      <Box fontWeight='semibold' px={4}>
        Correct: {solution.join(', ')}
      </Box>
      <VStack alignItems='start' px={4} py={2}>
        <Text fontWeight='semibold'>
          Explaination
        </Text>
        <Text>
          {explanation}
        </Text>
      </VStack>
      <VStack alignItems='start' px={4} py={2}>
        <Text fontWeight='semibold'>
          References
        </Text>
        {references.map((ref,index)=>{
          return (
            <Link key={index} href={ref} target='_blank'>
              <Text wordBreak={'break-word'}>{index+1}. {ref}</Text>
            </Link>
          );
        })}
      </VStack>
    </Box>
  );
}


interface QuestionAnswerBoxProps extends FlexProps {
  title: string;
  question: string; 
  options: Array<string>; 
  solution: Array<string>; 
  explanation: string; 
  references: Array<string>; 
} 

const QuestionAnswerBox = ({ 
  title, 
  question, 
  options, 
  solution, 
  explanation, 
  references
} : QuestionAnswerBoxProps) => {
  const {isOpen, onToggle} = useDisclosure()
  const {isOpen: isModal, onOpen: onModelOpen, onClose: onModelClose} = useDisclosure()
  return (
    <Box 
      maxW='5xl' 
      mx='auto' 
      borderWidth={'2px'}
      borderRadius={'sm'}
      py={6}
      shadow='base'
    >
      <Question 
        title={title} 
        options={options} 
        question={question}
      > 
      </Question>
      <Box height={4} />
      <Box display={isOpen ? 'flex': 'none'}>
        <Explanation
          title='Solution'
          solution={solution}
          references={references}
          explanation={explanation}
        >
        </Explanation>
      </Box>
      <HStack px={4} py={2}>
        <Button
          minWidth={40}
          variant='solid'
          colorScheme='gray'
          onClick={onToggle}
        >
          {isOpen ? 'Hide Solution' : 'Show Solution'}
        </Button>
        <Button
          colorScheme='pink'
          minWidth={40}
          onClick={onModelOpen}
        >
          Edit
        </Button>
      </HStack>
      <Modal isOpen={isModal} onClose={onModelClose}>
        <ModalOverlay />
        <ModalContent minWidth={{base: '100%', lg: '5xl'}}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} alignItems='start'>
              <Text fontWeight='semibold'>
                Question
              </Text>
              <Textarea>
                {question}
              </Textarea>
              <Text fontWeight='semibold'>
                Options
              </Text>
              {options.map((option, index) => (
                <Input key={index} placeholder={option}></Input>
              ))}
              <Text fontWeight='semibold'>
                Solution
              </Text>
              <Input placeholder={solution.join(', ')}></Input>
              <Text fontWeight='semibold'>
                Explanation
              </Text>
              <Textarea>
                {explanation}
              </Textarea>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button 
              variant='ghost'
              colorScheme='blue' 
              mr={3} 
              onClick={onModelClose}
            >
              Close
            </Button>
            <Button 
              variant='ghost'
              colorScheme='pink'
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}


const TestQuestion = () => {
  const [questions, setQuestions] = useState([])

  const fetchJsonFromLocal = async (file: string) => {
    console.log('fetch json from local, ', file);
    let content = null;
    await fetch('./../db.json')
      .then((resp) => resp.json())
      .then((json) => {
        content = json;
      });
    return content;
  };

  const fetchData = async () => {
    const res = await fetchJsonFromLocal('')
    setQuestions(res)
  }


  useEffect(() => {fetchData()}, [])

  return (
    <Box width='100%' height='100vh'>
      {questions && questions.map((question:any, index:Key) => {
        return (
          <QuestionAnswerBox 
            key={index}
            title={'Question ' + question.number}
            question={question.description}
            options={question.options}
            solution={question.solution}
            explanation={question.explanation}
            references={question.references}
          >
          </QuestionAnswerBox>
        )})}
    </Box>
  );
}

export default TestQuestion;
