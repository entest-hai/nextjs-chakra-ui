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
import { useState} from 'react';

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


const TestQuestion = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  const title = 'Question 1'
  const question = 'In AWS CloudFormation, what is a circular dependcy?'
  const options = [
    'A. When Nested Stacks depend on each other.',
    'B. When Resources form a Depend On loop.',
    'C. When a Template references an earlier version of itself.',
    'D. When a Template references a region, which references the original Template.'
  ]

  const references = [
    'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-dependency-error', 
  ]

  const solution = [
    'B'
  ]

  const explanation = 'To resolve a dependency error, add a Depends On attribute to resources that depend on other resources in your template. In some cases, you must explicitly declare dependencies so that AWS CloudFormation can create or delete resources in the correct order. For example, if you create an Elastic IP and a VPC with an Internet gateway in the same stack, the Elastic IP must depend on the Internet gateway attachment. For additional information, see Depends On Attribute.'

  return (
    <Box width='100%' height='100vh'>
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
        <Box display={isOpen ? 'none': 'flex'}>
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
            onClick={isOpen ? onClose : onOpen}
          >
            {isOpen ? 'Hide Solution' : 'Show Solution'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TestQuestion;
