import { Box, Flex, Text, Button, VStack, Link } from '@chakra-ui/react'
import { useState } from 'react'
import games from '../data/games.json'
import { Spinner } from '@chakra-ui/react'

const Layout = () => {
  const [recommendedGame, setRecommendedGame] = useState<{
    name: string
    description: string
  } | null>(null)

  const [isLoading, setIsLoading] = useState(false) // 로딩 상태 추가

  const recommendGame = () => {
    if (isLoading) return
    setIsLoading(true) // 로딩 시작
    setTimeout(() => {
      const filteredGames = games.filter((game) => game !== recommendedGame)

      if (filteredGames.length > 0) {
        const randomGame =
          filteredGames[Math.floor(Math.random() * filteredGames.length)]
        setRecommendedGame(randomGame)
      } else {
        alert('No more unique games to recommend!')
      }

      setIsLoading(false) // 로딩 종료
    }, 2000) // 2초 딜레이
  }

  return (
    <Flex direction='column' minH='100vh' overflowY='auto' bg='gray.900'>
      {/* 헤더 */}
      <Box
        as='header'
        bg='gray.800'
        p={4}
        position='sticky'
        top='0'
        zIndex='1000'
      >
        <Flex justify='space-between' align='center' maxW='1200px' mx='auto'>
          <Text fontSize='2xl' fontWeight='bold' color='yellow.400'>
            LOSTGAME
          </Text>
          <Flex gap={6}>
            <Link href='#home' _hover={{ color: 'yellow.400' }}>
              Home
            </Link>
            <Link href='#recommend' _hover={{ color: 'yellow.400' }}>
              Recommend
            </Link>
            <Link href='#story' _hover={{ color: 'yellow.400' }}>
              Story
            </Link>
          </Flex>
        </Flex>
      </Box>

      {/* 본문 섹션 */}
      <VStack mt={8} align='stretch'>
        {/* 소개 섹션 */}
        <Box
          id='home'
          textAlign='center'
          py={16}
          px={6}
          bg='gray.900'
          color='white'
        >
          <Text fontSize='4xl' fontWeight='bold'>
            Welcome to LOSTGAME
            <Text as='span' fontSize='lg' color='yellow.400' ml={2}>
              (v0.1 Beta)
            </Text>
          </Text>
          <Text mt={4}>Discover hidden gems and explore new adventures!</Text>
          <Text mt={4}>
            This beta version is here to test the waters and gather your
            valuable feedback.
          </Text>
        </Box>

        {/* 추천 섹션 */}
        <Box
          id='recommend'
          textAlign='center'
          py={16}
          px={6}
          bg='gray.800'
          color='white'
        >
          <Text fontSize='3xl' fontWeight='bold'>
            Discover Your Next Game
          </Text>
          <Button
            colorScheme='yellow'
            mt={6}
            onClick={recommendGame}
            //@ts-ignore
            isLoading={isLoading} // 로딩 상태에 따라 버튼 비활성화
            bg='yellow.400'
            color='gray.900'
            fontWeight='bold'
            size='lg'
            boxShadow='md'
            _hover={{ bg: 'yellow.300' }} // 살짝 밝은 톤으로
            _active={{ bg: 'yellow.600' }} // 클릭 시만 약간 더 어두운 톤
            _focus={{ boxShadow: 'none' }} // 포커스 효과 제거
          >
            Get Recommendation
          </Button>

          {isLoading && (
            <Box mt={8}>
              <Spinner size='xl' color='yellow.400' />
              <Text mt={4} color='yellow.400'>
                Finding the perfect game for you...
              </Text>
            </Box>
          )}

          {/* 추천 결과 */}
          {!isLoading && recommendedGame && (
            <Box
              mt={8}
              p={6}
              bg='gray.700'
              borderRadius='md'
              justifyContent='center'
              alignItems='center'
              display='flex'
              flexDirection='column'
            >
              {/* <Image
                src={recommendedGame.image}
                alt={recommendedGame.name}
                borderRadius='md'
                mb={4}
              /> */}
              <Text fontSize='xl' fontWeight='bold' color='yellow.400'>
                {recommendedGame.name}
              </Text>
              <Text mt={2}>{recommendedGame.description}</Text>
            </Box>
          )}
        </Box>

        {/* 스토리 섹션 */}
        <Box
          id='story'
          textAlign='center'
          py={16}
          px={6}
          bg='gray.900'
          color='white'
        >
          <Text fontSize='3xl' fontWeight='bold'>
            The Story of LOSTGAME
          </Text>
          <Text mt={4}>
            Dive into the mysterious world of hidden games and unique
            experiences. Explore new adventures every day and share your
            discoveries with the community.
          </Text>
        </Box>
      </VStack>

      {/* 푸터 */}
      <Box as='footer' bg='gray.800' py={4} mt={8}>
        <Text textAlign='center' color='gray.400'>
          © {new Date().getFullYear()} LOSTGAME. All rights reserved.
        </Text>
      </Box>
    </Flex>
  )
}

export default Layout
