//react use
import React, {useState} from 'react';
import {useToast} from '@chakra-ui/react';
//react
import {Box, Text, VStack, Textarea, Button, Divider} from '@chakra-ui/react';
//input
import {InputGroup, InputRightElement, Input} from '@chakra-ui/react';
//accordion
import {Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
//icon
import {Icon} from '@chakra-ui/icon'
import {FaSearch} from 'react-icons/fa';
//images
import supportbg from './photos/supportbg.png'

function SupportPage() {

  //set section
  const [concern, setConcern] = useState('');
  const toast = useToast();

  //handle section
  const handleConcernChange = (event) => {
    setConcern(event.target.value);
  };

  const handleSubmit = () => {
    setConcern('');
    toast({
      title: 'Concern submitted!',
      description: 'Thanks for submitting your concern. Our team will get back to you soon.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  //faqs data
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
      {/* title bg and text */}
      <Box 
        bg={`url(${supportbg})`} 
        h={{base:'150px', md:'200px'}} 
        width='100%'
      >
        <VStack align='center' justify='center' h='100%'>
            <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white'>
              Welcome to Support Page
            </Text>

            <InputGroup width={{base:'90%', md:'650px'}} mt='5'>
              <Input
                variant='outline'
                placeholder='Search' _placeholder={{opacity:1, color: 'gray.500'}}
                boxShadow='dark-lg'
              />
              <InputRightElement>
                <Icon as={FaSearch} color='gray.500' />
              </InputRightElement>
            </InputGroup>
        </VStack>
      </Box>

      {/* faqs */}
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
        <Accordion width='100%' allowMultiple mb='20'>
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
        <Text fontSize={{base:'xl', md:'2xl'}} fontWeight='bold' color='white'>
          Can't find what you're looking for?
        </Text>
        <Text mt={{base:-2, md:0 }}>
          Submit your concerns here and we'll be happy to assist you.
        </Text>
        <Textarea
          mt={5}
          placeholder='Your Concern'
          value={concern}
          onChange={handleConcernChange}
          size='md'
          height='100px'
        />
        <Button mt={5} colorScheme='blue' onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>

    </Box>
  );
}

export default SupportPage;