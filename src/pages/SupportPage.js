//react use
import React, {useState} from 'react';
import {useDisclosure } from '@chakra-ui/react';
import {Box, Flex, Text, VStack, Textarea, Button, Divider} from '@chakra-ui/react';
//input
import {InputGroup, InputRightElement, Input} from '@chakra-ui/react';
//accordion
import {Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
//alert
import {AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay} from '@chakra-ui/react'
//icon
import {Icon} from '@chakra-ui/icon'
import {FaSearch} from 'react-icons/fa';
//photos
import supportbg from './photos/supportbg.png'

function SupportPage() {

  // set section
  const [concern, setConcern] = useState('');
  const { isOpen: showAlert, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });

  // handle section
  const handleConcernChange = (event) => {
    setConcern(event.target.value);
  };

  const handleSubmit = () => {
    onOpen();
    setConcern('');
  };

  //faqs
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
      <Box 
        bg={`url(${supportbg})`} 
        h={{base:'150px', md:'200px'}} 
        width='100%'
        >
        <Flex align='center' justify='center' h='100%'>
          <VStack>
            <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white'>
              Welcome to Support Page
            </Text>

            {/* search input */}
            <InputGroup width={{base:'90%', md:'650px'}} mt='5'>
              <Input
                variant='outline'
                placeholder='Search' _placeholder={{opacity:1, color: 'gray.500'}}
                bg='white'
                boxShadow='dark-lg'
              />
              <InputRightElement>
                <Icon as={FaSearch} color='gray.500' />
              </InputRightElement>
            </InputGroup>
          </VStack>
        </Flex>
      </Box>

      <VStack 
        p={{base:4, md:8}} 
        spacing={8} 
        width={{base:'90%', md:'700px'}} 
        mx='auto'
        >
        <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='semi-bold' color='white'>
          Frequently Asked Questions
        </Text>

        {/* display faqs */}
        <Accordion width='100%' allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <Text color='white'>{faq.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              <AccordionPanel pb={3}>
                <Text color='white'>{faq.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>

      <Divider />
      {/* input concern */}
      <VStack 
        mt={{base:8, md:30}} 
        width={{base:'90%', md:'800px'}} 
        mx='auto'
        >
        <Text 
          fontSize={{base:'xl', md:'2xl'}} 
          fontWeight='bold' color='white'
          >
          Can't find what you're looking for?
        </Text>
        <Text mt={{base:-2, md:0 }} color='white'>
          Submit your concerns here and we'll be happy to assist you.
        </Text>
        <Textarea
          mt={5}
          color='white'
          placeholder='Your Concern'
          value={concern}
          onChange={handleConcernChange}
          size='md'
          height='100px'
        />

        {/* alert section */}
        <AlertDialog isOpen={showAlert} leastDestructiveRef={undefined} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent bg='gray'>
              <AlertDialogHeader fontSize='lg' fontWeight='bold' color='white'>
                Concern submitted!
              </AlertDialogHeader>

              <AlertDialogBody color='white'>
                Thanks for submitting your concern. Our team will get back to you soon.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={undefined} onClick={onClose}>
                  Close
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>

        <Button mt={5} colorScheme='blue' onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default SupportPage;