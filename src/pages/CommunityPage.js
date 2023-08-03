import React, { useState } from 'react';
import { Center, Text, Input, Button, VStack, Box, HStack, IconButton, Badge, Flex, Avatar, Heading } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, useDisclosure } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import commimage from './photos/comm.jpg';

function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      title: newPostTitle,
      content: newPostContent,
      likes: 0,
      dislikes: 0,
    };
    setPosts([...posts, newPost]);
    setNewPostTitle('');
    setNewPostContent('');
    onClose();
  };

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post))
    );
  };

  const handleDislike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post))
    );
  };

  return (
    <Box bg='#121212' minHeight='100vh'>
      <Center>
        <VStack spacing={4} p={4} align='stretch'>
          {/* "Create Post" Box */}
          <Box
            as="button"
            display="flex"
            alignItems="center"
            bg='#1A1A1B'
            borderRadius='lg'
            w='550px'
            p={4}
            onClick={onOpen}
          >
            <Input
              color='white'
              bg='#272729'
              placeholder='Create Post'
              readOnly
              pointerEvents='none'
              flex='1'
              _placeholder={{ color: 'gray.500' }}
            />
            <Button colorScheme='blue' ml={4} onClick={onOpen}>
              New Post
            </Button>
          </Box>

          {/* Modal */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg='#1A1A1B'>
              <ModalHeader color='white'>Create a post</ModalHeader>
              <ModalCloseButton color='white' />
              <ModalBody>
                <Input
                  color='white'
                  bg='#272729'
                  placeholder='Title'
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                />
                <Input
                  color='white'
                  bg='#272729'
                  h='150px'
                  placeholder='Content'
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  mt={2}
                />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleAddPost}>
                  Submit Post
                </Button>
                <Button color='white' variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* Display posts */}
          {posts.map((post) => (
            <Box key={post.id} p={4} borderWidth='1px' borderRadius='md' w='100%'>
              <Text fontSize='xl' fontWeight='semibold'>
                <Text color='white'>{post.title}</Text>
              </Text>
              <Text color='white'>{post.content}</Text>
              <HStack spacing={4}>
                <IconButton
                  icon={<AiOutlineLike />}
                  aria-label='Like'
                  onClick={() => handleLike(post.id)}
                />
                <Badge>{post.likes}</Badge>
                <IconButton
                  icon={<AiOutlineDislike />}
                  aria-label='Dislike'
                  onClick={() => handleDislike(post.id)}
                />
                <Badge>{post.dislikes}</Badge>
              </HStack>
            </Box>
          ))}

          {/* Sample card/post */}
          <Card maxW='550px'>
            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name='Peter Parker' src={commimage} />
                  <Box>
                    <Heading size='sm'>Spooderman</Heading>
                    <Text>Friendly Neighbor</Text>
                  </Box>
                </Flex>
                <IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<BsThreeDotsVertical />} />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                My name is Peter Parker. I was bitten by a radioactive spider, and for ten years I've been the one and only Spider-Man. I'm pretty sure you know the rest. I saved a bunch of people, fell in love, saved the city, and then I saved the city again... and again and again and again.
              </Text>
            </CardBody>
            <img src={commimage} alt="comm" />

            <CardFooter
              justify='space-between'
              flexWrap='wrap'
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                Like
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                Comment
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                Share
              </Button>
            </CardFooter>
          </Card>
        </VStack>
      </Center>
    </Box>
  );
}

export default CommunityPage;
