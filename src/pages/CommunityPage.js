import React, { useState } from 'react';
import { Center, Text, Input, Button, VStack, Box, HStack, IconButton, Badge, Flex, Avatar, Heading, Divider, Link, Textarea } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, useDisclosure } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiChat } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { EditIcon } from '@chakra-ui/icons';
import commimage from './photos/comm.jpg';
import porkimage from './photos/pork.jpg';

function CommunityPage() {
  
  const [posts, setPosts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [comments, setComments] = useState({});
  const [showCommentInput, setShowCommentInput] = useState({});

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      title: newPostTitle,
      content: newPostContent,
      likes: false,
      dislikes: false,
    };
    setPosts([...posts, newPost]);
    setNewPostTitle('');
    setNewPostContent('');
    onClose();
  };

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked, disliked: false } : post
      )
    );
  };

  const handleDislike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, disliked: !post.disliked, liked: false } : post
      )
    );
  };

  const handleAddComment = (postId, comment) => {
    // If the post's comment array doesn't exist, initialize it as an empty array
    if (!comments[postId]) {
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [],
      }));
    }
  
    // Add the comment to the post's comment array
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...prevComments[postId], comment],
    }));
  };
  
  const toggleCommentInput = (postId) => {
    setShowCommentInput((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <Box bg='#121212' minHeight='100vh'>
      <Center>
        <Flex direction={{ base: 'column', md: 'row' }}>
        

          <VStack spacing='4' p='4' align='stretch' flex='1'>
            {/* "Create Post" Box */}
            <Box
              as='button'
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
              <IconButton
                color='white'
                bg='#1A1A1B'
                ml={4}
                onClick={onOpen}
                aria-label="Create Post"
                icon={<EditIcon />}
              />
            </Box>

            {/* Modal */}
            <Modal blockScrollOnMount={false} size='xl' isOpen={isOpen} onClose={onClose}>
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
                  <Textarea
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
            <Box key={post.id} p={4}  borderRadius='md' w='100%' bg='#1A1A1B'>
              <Text fontSize='xl' fontWeight='semibold'>
                <Text color='white'>{post.title}</Text>
              </Text>
              <Text color='white'>{post.content}</Text>
              <HStack spacing={4}>
                <IconButton
                  bg='#1A1A1B'
                  icon={<AiOutlineLike />}
                  aria-label='Like'
                  onClick={() => handleLike(post.id)}
                  color={post.liked ? 'blue.500' : 'white'}
                />
                <IconButton
                  bg='#1A1A1B'
                  icon={<AiOutlineDislike />}
                  aria-label='Dislike'
                  onClick={() => handleDislike(post.id)}
                  color={post.disliked ? 'red.500' : 'white'}
                />
                <IconButton
                  onClick={() => toggleCommentInput(post.id)}
                  bg='#1A1A1B'
                  icon={<BiChat />}
                  aria-label='Comment'
                  color='white'
                />
              </HStack>

              {/* Comment Input Field */}
              {showCommentInput[post.id] && (
                  <>
                    <Input
                      color='white'
                      bg='#272729'
                      placeholder='Write a comment...'
                      value={comments[post.id] ? comments[post.id] : ''}
                      onChange={(e) =>
                        setComments((prevComments) => ({ ...prevComments, [post.id]: e.target.value }))
                      }
                    />
                    {/* Add Comment Button */}
                    <Button
                      colorScheme='blue'
                      onClick={() => {
                        if (comments[post.id]) {
                          handleAddComment(post.id, comments[post.id]);
                          // Clear the comment input field after adding the comment
                          setComments((prevComments) => ({ ...prevComments, [post.id]: '' }));
                        }
                      }}
                    >
                      Add Comment
                    </Button>
                  </>
                )}
                {/* Render Comments */}
                {comments[post.id] &&
                  comments[post.id].map((comment, index) => (
                    <Box key={index} mt={2} p={2} bg='gray.700' borderRadius='md'>
                      <Text color='white'>{comment}</Text>
                    </Box>
                  ))}
            </Box>
            ))}

            {/* Sample card/post */}
            <Card maxW='550px' bg='#1A1A1B'>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Peter Parker' src={porkimage} />
                    <Box color='white'>
                      <Heading size='sm'>Spider-Ham</Heading>
                      <Text>The Spectacular Spider-Ham</Text>
                    </Box>
                  </Flex>
                  <IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<BsThreeDotsVertical />} />
                </Flex>
              </CardHeader>
              <CardBody color='white'>
                <Text>
                  My name is Peter Porker. I actually started as a spider named Peter who lived in a lab run by scientist May Parker. One day May blew a radioactive hairdriver, causing her to bite me, turning me into a Pig with the powers of a spider.
                </Text>
              </CardBody>
              <img src={porkimage} alt="pork" />

              <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
                
              >
                <IconButton
                  bg='#1A1A1B'
                  color='white'
                  icon={<AiOutlineLike />}
                  aria-label='Like'
                />
                <IconButton
                  bg='#1A1A1B'
                  color='white'
                  icon={<AiOutlineDislike />}
                  aria-label='Dislike'
                />
                <IconButton
                  bg='#1A1A1B'
                  color='white'
                  icon={<BiChat />}
                />
              </CardFooter>
            </Card>

            {/* Sample card/post 2 */}
            <Card maxW='550px' bg='#1A1A1B'>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Peter Parker' src={commimage} />
                    <Box color='white'>
                      <Heading size='sm'>Spooderman</Heading>
                      <Text>Friendly Neighbor</Text>
                    </Box>
                  </Flex>
                  <IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<BsThreeDotsVertical />} />
                </Flex>
              </CardHeader>
              <CardBody color='white'>
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
                <IconButton
                  bg='#1A1A1B'
                  color='white'
                  icon={<AiOutlineLike />}
                  aria-label='Like'
                />
                <IconButton
                  bg='#1A1A1B'
                  color='white'
                  icon={<AiOutlineDislike />}
                  aria-label='Dislike'
                />
                <IconButton
                  bg='#1A1A1B'
                  color='white'
                  icon={<BiChat />}
                />
              </CardFooter>
            </Card>

          </VStack>
        
          <Box h='350px' w='250px' bg='#1A1A1B' p='4' mt='4' rounded='md' ml={{ md: '2' }}>
            <Text fontWeight='semibold' fontSize='xl' color='white'>
              Topics for you
            </Text>
            <Divider />
            <Link color='white'>Black Screen</Link><br />
            <Link color='white'>Gameplay</Link><br />
            <Link color='white'>Spooderman</Link><br />
            <Link color='white'>Spiderverse</Link>
          </Box>

        </Flex>
      </Center>
    </Box>
  );
}

export default CommunityPage;
