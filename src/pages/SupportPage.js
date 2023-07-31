import React, { useState } from 'react';
import { Box, Flex, Text, VStack, Input, Textarea, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, IconButton, StackDivider, HStack, Divider, FormControl, FormLabel } from '@chakra-ui/react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

function SupportPage() {
//   const [name, setName] = useState('');
  const [concern, setConcern] = useState('');
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

  const handleConcernChange = (event) => {
    setConcern(event.target.value);
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    setComments([...comments, { text: comment, likes: 0, dislikes: 0 }]);
    setComment('');
  };

  const handleLike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes += 1;
    setComments(updatedComments);
  };

  const handleDislike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].dislikes += 1;
    setComments(updatedComments);
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
  ];

  return (
    <Box p={8}>
      <VStack spacing={8} width="600px" mx="auto">
        <Text fontSize="2xl" fontWeight="bold">
          Support Page
        </Text>
        <Textarea
          placeholder="Your Concern"
          value={concern}
          onChange={handleConcernChange}
          size="md"
          height="150px"
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
        <Divider />
        <Accordion width="100%" allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {faq.answer}
                <VStack
                  align="flex-start"
                  spacing={2}
                  divider={<StackDivider borderColor="gray.200" />}
                  mt={4}
                >
                  {comments.map((comment, commentIndex) => (
                    <Box key={commentIndex} w="100%">
                      <Text fontWeight="bold">{comment.text}</Text>
                      <HStack>
                        <IconButton
                          aria-label="Like"
                          icon={<AiOutlineLike />}
                          size="sm"
                          onClick={() => handleLike(commentIndex)}
                        />
                        <Text>{comment.likes}</Text>
                        <IconButton
                          aria-label="Dislike"
                          icon={<AiOutlineDislike />}
                          size="sm"
                          onClick={() => handleDislike(commentIndex)}
                        />
                        <Text>{comment.dislikes}</Text>
                      </HStack>
                    </Box>
                  ))}
                  <FormControl>
                    <FormLabel>Add a comment:</FormLabel>
                    <Input
                      type="text"
                      value={comment}
                      onChange={handleCommentChange}
                      size="sm"
                      placeholder="Enter your comment"
                    />
                    <Button
                      colorScheme="blue"
                      size="sm"
                      onClick={handleAddComment}
                    >
                      Add Comment
                    </Button>
                  </FormControl>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Box>
  );
}

export default SupportPage;