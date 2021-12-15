import { 
  Box,
  Text,
  Heading,
  HStack,
  Avatar,
  Select,
  VStack, 
  FlexProps,
  Center
} from '@chakra-ui/react';


interface TrueFalseQuestionProps extends FlexProps {
  question: string;
  number: string; 
}

const TrueFalseQuestion = ({ question, number }: TrueFalseQuestionProps) => {
  const options = ['True', 'False', 'Not Given']
  return (
    <VStack align='start' mb={4}>
      <Text
        mb={2}
      >
        {question}
      </Text>
      <HStack>
        <Avatar 
          size='md'
          icon={<Text>{number}</Text>}
        >
        </Avatar>
        <Select
          size='lg'
          maxWidth={'sm'}
        >
          {options.map((opt)=>{
            return <option value={opt} key={opt}>{opt}</option>
          })}
        </Select>
      </HStack>
    </VStack>
  );
}


const Reading = () => {

  const questions = [
    'Aries pointed out that children did different types of work to adults during the Middle Ages.',
    'If people are interrupted by calls or e-mails, they usually put up with it.',
    'Some scientists thought that overwork might damage the health of young children.',
    'People usually have a misperception about whether they are busy or not.',
    'Experts in Carnegie Mellon University conducted a research observing all occupations of IBM.',
    'Current phone and computer systems have shortcut keys for people receiving information immediately.'
  ]

  return (
    <Center>
      <Box maxWidth={'lg'} height='100vh'>
        <Heading 
          size='lg'
          mb={2}
        >
        Questions 14-19
        </Heading>
        <Text 
          fontWeight='bold'
          mb={2}
        >
        Do the following statements agree with the information given in Reading Passage 2? 
        </Text>
        <Text
          mb={2}
        >
        In boxes 14-19 on your answer sheet, write
        </Text>
        {questions.map((question, index) => {
          return <TrueFalseQuestion question={question} number={'11'} key={index}></TrueFalseQuestion>
        })}
      </Box>
    </Center>
  ); 
}

export default Reading; 
