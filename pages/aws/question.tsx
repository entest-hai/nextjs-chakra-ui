// 16 DEC 2021 MIN TRAN aws question form
// fix color mode better 
import { Box, 
  Button, 
  FlexProps, 
  Text, 
  VStack, 
  Link, 
  useColorModeValue,
  useDisclosure
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
      <Box px={4} py={2}>
        <Button
          variant='solid'
          colorScheme='gray'
          onClick={onToggle}
        >
          {isOpen ? 'Hide Solution' : 'Show Solution'}
        </Button>
      </Box>
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
