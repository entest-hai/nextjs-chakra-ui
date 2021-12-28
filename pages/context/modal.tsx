import { Box,
  Text,
  Button,
  Textarea,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  BoxProps,
} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';

const QuestionsContext = React.createContext<any>({})

interface QuestionEditorProps extends BoxProps {
  idx: number;
  isOpen: any;
  onClose: any;
}

const QuestionEditor = ({
  idx,
  isOpen,
  onClose,
}: QuestionEditorProps) => {

  const {questions, setQuestions} = React.useContext(QuestionsContext)
  const [editQuestion, setEditQuestion] = useState(questions[idx])
  
  useEffect(() => {
    setEditQuestion(questions[idx])
  }, [questions])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            value={editQuestion}
            onChange={(event) => {
              setEditQuestion(event.target.value)
            }}
          >
          </Textarea>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme='blue'
            mr={3}
            onClick={() => {
              onClose()
              // save changes to questions via QuestionContext
              console.log('save change to question ', idx)
              let newQuestions = questions
              newQuestions[idx] = editQuestion
              setQuestions(newQuestions)
            }}
          >
              Save
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

interface QuestionBoxProps extends BoxProps {
  idx: number;
  initQuestion: string;
}

const QuestionBox  = ({ initQuestion, idx }: QuestionBoxProps ) => {
  const {questions, setQuestions} = React.useContext(QuestionsContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      px={8}
      py={8}
    >
      <Text fontWeight='semibold'>
        {questions[idx]}
      </Text>
      <Button
        mt={8}
        colorScheme='pink'
        width={200}
        onClick={() => {
          onOpen()
        }}
      >
        Edit
      </Button>
      <QuestionEditor
        idx={idx}
        isOpen={isOpen}
        onClose={onClose}
      >
      </QuestionEditor>
    </Box>
  )
}

const QuestionView  = () => {
  const pages = [1, 2, 3, 4, 5]
  const {questions, setQuestions} = React.useContext(QuestionsContext)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = (num: Number) => {
    let data = [
      'Question 1' + ' page ' + num.toString(),
      'Question 2' + ' page ' + num.toString(),
      'Question 3' + ' page ' + num.toString(),
    ]
    console.log('fetch page ', num, data)
    setQuestions(data)
  }


  return (
      <Box>
        {questions.map((question, index) => (
          <Box key={index}>
            <QuestionBox
              idx={index}
              initQuestion={question}
            >
            </QuestionBox>
          </Box>
        ))}

        {pages.map((num) => (
          <Button
            mx={2}
            key={num}
            onClick={() => {
              setCurrentPage(num)
              fetchData(num)
            }}
          >
            {num}
          </Button>
        ))}
      </Box>
  )
}


const QuestionViewProvider = () => {

  const [questions, setQuestions] = useState([])

  const fetchData = (num: Number) => {
    let data = [
      'Question 1' + ' page ' + num.toString(),
      'Question 2' + ' page ' + num.toString(),
      'Question 3' + ' page ' + num.toString(),
    ]
    console.log('fetch page ', num, data)
    setQuestions(data)
  }

  useEffect( () => {
    fetchData(1)
  }, [])

 return (
    <QuestionsContext.Provider value={{questions: questions, setQuestions: setQuestions}}>
      { questions && <QuestionView>
      </QuestionView>}
    </QuestionsContext.Provider>
 )
}

export default QuestionViewProvider;
