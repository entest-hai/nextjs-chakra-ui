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
  Input,
  BoxProps
} from '@chakra-ui/react';
import React, {Key, useEffect, useState} from 'react';
import {AutoResizeTextarea} from './../../components/auto_resize_textarea'
import {UpdateQuestion} from './../../services/update_question'

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


interface QuestionEditorProps extends BoxProps {
  title: string; 
  updatedQuestion: string; 
  setUpdatedQuestion: React.Dispatch<React.SetStateAction<string>>; 
  updatedOptions: Array<string>; 
  setUpdatedOptions: React.Dispatch<React.SetStateAction<Array<string>>>;
  updatedSolution: Array<string>; 
  setUpdatedSolution: React.Dispatch<React.SetStateAction<Array<string>>>; 
  updatedExplanation: string; 
  setUpdatedExplanation: React.Dispatch<React.SetStateAction<string>>;
  updatedReferences: Array<string>; 
  setUpdatedReferences: React.Dispatch<React.SetStateAction<Array<string>>>; 
  isOpen?: boolean; 
  onClose?: () => void; 
}

const QuestionEditor = ({ 
  title, 
  updatedQuestion, 
  setUpdatedQuestion,
  updatedOptions, 
  setUpdatedOptions,
  updatedSolution, 
  setUpdatedSolution, 
  updatedExplanation,
  setUpdatedExplanation,
  updatedReferences,
  setUpdatedReferences, 
  isOpen, 
  onClose 
}: QuestionEditorProps) => {

  const [editQuestion, setEditQuestion] = useState(updatedQuestion)
  const [editOptions, setEditOptions] = useState(updatedOptions)
  const [editSolution, setEditSolution] = useState(updatedSolution)
  const [editExplantion, setEditExplanation] = useState(updatedExplanation)
  const [editReferences, setEditReferences] = useState(updatedReferences)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minWidth={{base: '100%', lg: '5xl'}}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} alignItems='start'>
            <Text fontWeight='semibold'>
                Question
            </Text>
            <AutoResizeTextarea 
              value={editQuestion}
              onChange={(event) => {
                setEditQuestion(event.target.value)
              }}
            >
            </AutoResizeTextarea>
            <Text fontWeight='semibold'>
                Options
            </Text>
            { editOptions.map((_option: string, index: number) => (
              <AutoResizeTextarea key={index} value={editOptions[index]} onChange={(event) => {
                let newOptions = [... editOptions]
                newOptions[index] = event.target.value 
                setEditOptions(newOptions)
              }}></AutoResizeTextarea>
            )) }
            <Text fontWeight='semibold'>
                Solution
            </Text>
            <Input 
              value={editSolution.join(',')}
              onChange={(event) => {
                let newSolution = [...editSolution]
                newSolution = event.target.value.trim().split(',')
                setEditSolution(newSolution)
              }}
            >
            </Input>
            <Text fontWeight='semibold'>
                Explanation
            </Text>
            <AutoResizeTextarea
              value={editExplantion}
              onChange={(event) => {
                setEditExplanation(event.target.value)
              }}
            >
            </AutoResizeTextarea>
            <Text fontWeight='semibold'>
              References
            </Text>
            { editReferences.map((ref: string, index: number) => (
              <AutoResizeTextarea 
                value={ref} 
                key={index}
                onChange={(event) => {
                  let newReferences = [... editReferences]
                  newReferences[index] = event.target.value
                  setEditReferences(newReferences)
                }}
              >
              </AutoResizeTextarea>
            )) }
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button 
            variant='ghost'
            colorScheme='blue' 
            mr={3} 
            onClick={onClose}
          >
              Close
          </Button>
          <Button 
            variant='ghost'
            colorScheme='pink'
            onClick={() => {
              UpdateQuestion(title, editQuestion, editOptions, editSolution, editExplantion, editReferences)
              setUpdatedQuestion(editQuestion)
              setUpdatedOptions(editOptions)
              setUpdatedSolution(editSolution)
              setUpdatedExplanation(editExplantion)
              setUpdatedReferences(editReferences)
              onClose()
            }}
          >
              Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
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
  const {isOpen: isModal, onOpen: onModalOpen, onClose: onModalClose} = useDisclosure()
  const [updatedQuestion, setUpdatedQuestion] = useState(question)
  const [updatedExplanation, setUpdatedExplanation] = useState(explanation)
  const [updatedOptions, setUpdatedOptions] = useState(options)
  const [updatedSolution, setUpdatedSolution] = useState(solution)
  const [updatedReferences, setUpdatedReferences] = useState(references)

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
        options={updatedOptions} 
        question={updatedQuestion}
      > 
      </Question>
      <Box height={4} />
      <Box display={isOpen ? 'block': 'none'}>
        <Explanation
          title='Solution'
          solution={updatedSolution}
          references={updatedReferences}
          explanation={updatedExplanation}
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
          onClick={onModalOpen}
        >
          Edit
        </Button>
      </HStack>
      <QuestionEditor
        title={title}
        updatedQuestion={updatedQuestion}
        setUpdatedQuestion={setUpdatedQuestion}
        updatedOptions={updatedOptions}
        setUpdatedOptions={setUpdatedOptions}
        updatedSolution={updatedSolution}
        setUpdatedSolution={setUpdatedSolution}
        updatedExplanation={updatedExplanation}
        setUpdatedExplanation={setUpdatedExplanation}
        updatedReferences={updatedReferences}
        setUpdatedReferences={setUpdatedReferences}
        isOpen={isModal}
        onClose={onModalClose}
      >
      </QuestionEditor>
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
