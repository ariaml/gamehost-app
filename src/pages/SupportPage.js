import React, { useState } from 'react';
import { Box, Flex, Text, VStack, Textarea, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Divider, useDisclosure, CloseButton} from '@chakra-ui/react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import supportbg from './photos/supportbg.png'

function SupportPage() {

  const [concern, setConcern] = useState('');
  const { isOpen: showAlert, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });
  const [submitted, setSubmitted] = useState(false);

  const handleConcernChange = (event) => {
    setConcern(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onOpen();
    setConcern('');
  };

  const faqs = [
    {
      question: 'What are the system requirements for gaming?',
      answer: 'The system requirements vary depending on the game, but you will generally need a computer with a decent CPU, GPU, and sufficient RAM to play modern games smoothly.',
    },
    {
      question: 'How can I improve my gaming performance?',
      answer: 'To improve gaming performance, you can update your graphics drivers, optimize in-game settings, close unnecessary background processes, and ensure that your computer meets the recommended system requirements for the game.',
    },
    {
      question: 'Are there any gaming events or tournaments?',
      answer: 'Yes, there are numerous gaming events and tournaments that take place both online and offline. Keep an eye on gaming communities and official game websites for announcements about upcoming events.',
    },
    {
      question: 'Question 4?',
      answer: 'Yes, there are numerous gaming events and tournaments that take place both online and offline. Keep an eye on gaming communities and official game websites for announcements about upcoming events.',
    },
    {
      question: 'Question 5?',
      answer: 'Yes, there are numerous gaming events and tournaments that take place both online and offline. Keep an eye on gaming communities and official game websites for announcements about upcoming events.',
    },
  ];

  return (
    <Box bg='#121212' minHeight='100vh'>
      <Box bg={`url(${supportbg})`} h="150px" width="100%">
        <Flex align="center" justify="center" h="100%">
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Welcome to Support Page
          </Text>
        </Flex>
      </Box>

      <VStack p='8' spacing={8} width="700px" mx="auto">
        <Text fontSize="xl" fontWeight="semi-bold" color="white">
          Frequently Asked Questions
        </Text>

        <Accordion width="100%" allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" >
                    <Text color="white">{faq.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3}>
                <Text color="white">{faq.answer}</Text>
                <VStack
                  align="flex-start"
                  spacing={2}
                  mt={4}
                >
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        </VStack>

        <Divider></Divider>
        <VStack mt='30'>
        <Text fontSize="xl" fontWeight="bold" color='white'>
          Can't find what you're looking for? 
        </Text>
        <Text mt='-2' color='white'>
          Submit your concerns here and we'll be happy to assist you.
        </Text>
        <Textarea 
          mt='30'
          color='white'
          placeholder="Your Concern"
          value={concern}
          onChange={handleConcernChange}
          size="md"
          height="100px"
          w='800px'
        />

        {showAlert && (
          <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            width='500px'
            borderRadius='lg'
          >
            <AlertIcon boxSize='30px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Concern submitted!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Thanks for submitting your concern. Our team will get back to you soon.
            </AlertDescription>
            <CloseButton
              alignSelf='flex-start'
              position='relative'
              right={1}
              top={1}
              onClick={onClose}
            />
          </Alert>
        )}

        <Button mt='5' colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default SupportPage;