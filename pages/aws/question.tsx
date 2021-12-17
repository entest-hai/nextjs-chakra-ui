// 16 DEC 2021 MIN TRAN aws question form
//
import { Box,Button,FlexProps,Text, VStack } from '@chakra-ui/react';
import { useState} from 'react';

interface QuestionProps extends FlexProps {
  title: string;
  question: string;
  options: Array<string>;
}

const Question = ({ title, question, options }: QuestionProps) => {
  return (
    <Box maxW={'5xl'} mx='auto'>
      <Box fontWeight='semibold' bg='blue.200' py={4} px={4}>
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
}

const Explanation = ({title, solution, explanation}: ExplanationProps) => {
  return (
    <Box maxW={'5xl'} mx='auto'>
      <Box fontWeight='semibold' bg='gray.200' py={4} px={4}>
        <Text fontWeight={'semibold'}>
          {title}
        </Text>
      </Box>
      <Box fontWeight='semibold' px={4}>
        Correct: {solution}
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
          Reference
        </Text>
        <Text>
          [1]. Link
        </Text>
        <Text>
          [2]. Link
        </Text>
        <Text>
          [3]. Link
        </Text>
      </VStack>
    </Box>
  );
}


const TestQuestion = () => {

  const [showSolution, setShowSolution] = useState(false); 

  const title = 'Question 1'
  const question = 'In AWS CloudFormation, what is a circular dependcy?'
  const options = [
    'A. When Nested Stacks depend on each other.',
    'B. When Resources form a Depend On loop.',
    'C. When a Template references an earlier version of itself.',
    'D. When a Template references a region, which references the original Template.'
  ]

  return (
    <Box width='100%' height='100vh'>
      <Box maxW='5xl' mx='auto' borderWidth={'1px'}>
        <Question 
          title={title} 
          options={options} 
          question={question}
        > 
        </Question>
        <Box height={4} width='full' />
        <Box display={showSolution ? 'block': 'none'}>
          <Explanation
            title='Solution'
            solution={['A']}
            explanation=' A is correct because according to AWS [1] this should be working well.'
          >
          </Explanation>
        </Box>
        <Box px={4} py={2}>
          <Button
            variant='solid'
            colorScheme='gray'
            onClick={() => {
              setShowSolution(!showSolution)
            }}
          >
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TestQuestion;
