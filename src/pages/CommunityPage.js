import React, { useState } from 'react';
import { Center, Text, Input, Button, VStack, Box, HStack, IconButton, Badge, Flex, Avatar, Heading } from '@chakra-ui/react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import commimage from './photos/comm.jpg'

function CommunityPage() {
    const [posts, setPosts] = useState([]);
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
    };
  
    const handleLike = (postId) => {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, likes: post.likes + 1 } : post
        )
      );
    };
  
    const handleDislike = (postId) => {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
        )
      );
    };

  return (
    <Box bg='#121212' minHeight='100vh'>
      <Center>
        <VStack align="stretch" spacing={4} p={4}>
          <Text fontSize="2xl" fontWeight="bold" color='white'>
            Welcome to Community Page
          </Text>

          {/* New post form */}
          <Box bg='#1A1A1B' borderRadius='lg' w='550px'>
            <VStack align="center" spacing={2} width='500px' ml='6' mt='6' mb='6' >
              <Input
                color='white'
                bg='#272729'
                placeholder="Title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
              />
              <Input
                color='white'
                bg='#272729'
                placeholder="Content"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
              <Button colorScheme="blue" onClick={handleAddPost}>
                Submit Post
              </Button>
            </VStack>
          </Box>

          {/* Display posts */}
          {posts.map((post) => (
            <Box key={post.id} p={4} borderWidth="1px" borderRadius="md" w="100%">
              <Text fontSize="xl" fontWeight="semibold">
                <Text color='white'>{post.title}</Text>
              </Text>
              <Text color='white'>{post.content}</Text>
              <HStack spacing={4}>
                <IconButton
                  icon={<AiOutlineLike />}
                  aria-label="Like"
                  onClick={() => handleLike(post.id)}
                />
                <Badge>{post.likes}</Badge>
                <IconButton
                  icon={<AiOutlineDislike />}
                  aria-label="Dislike"
                  onClick={() => handleDislike(post.id)}
                />
                <Badge>{post.dislikes}</Badge>
              </HStack>
            </Box>
          ))}
        

          <Card maxW='md'>
          <CardHeader>
              <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name='Segun Adebayo' src={commimage} />

                  <Box>
                  <Heading size='sm'>Spooderman</Heading>
                  <Text>Friendly Neighbor</Text>
                  </Box>
              </Flex>
              <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                  icon={<BsThreeDotsVertical />}
              />
              </Flex>
          </CardHeader>
          <CardBody>
              <Text>
              My name is Peter Parker. I was bitten by a radioactive spider, and for ten years I've been the one and only Spider-Man. I'm pretty sure you know the rest. I saved a bunch of people, fell in love, saved the city, and then I saved the city again... and again and again and again.
              </Text>
          </CardBody>
          <img src={commimage} alt="comm"/>

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
