import {Box, IconButton, useBreakpointValue, Heading, Text, Container, Stack} from '@chakra-ui/react';
import React from 'react';
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';
import Slider from 'react-slick';


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const cards = [
  {
    title: 'Design Projects 1',
    text:
        'The project board is an exclusive resource for contract work. It\'s perfect for freelancers, agencies, and moonlighters.',
    image:
        'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    title: 'Design Projects 2',
    text:
        'The project board is an exclusive resource for contract work. It\'s perfect for freelancers, agencies, and moonlighters.',
    image:
        'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
  },
  {
    title: 'Design Projects 3',
    text:
        'The project board is an exclusive resource for contract work. It\'s perfect for freelancers, agencies, and moonlighters.',
    image:
        'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
];


const Caption = () => {

  const [_slider, setSlider] = React.useState<Slider | null>(null); 

  return (
    <Box width='full' height={'600px'} position='relative' overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label='left-arrow'
        variant='ghost'
        position='absolute'
        left={useBreakpointValue({ base: '30%', md: '40px' })}
        top={useBreakpointValue({ base: '90%', md: '50%' })}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => _slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px"></BiLeftArrowAlt>
      </IconButton>
      <Slider {...settings} ref={(slider: Slider) => setSlider(slider)}>
        {
          cards.map((card, index) => (
            <Box
              key={index}
              height={'6xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}>
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack 
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)">
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))
        }
      </Slider>
      <IconButton
        aria-label='right-arrow'
        variant='ghost'
        position='absolute'
        right={useBreakpointValue({ base: '30%', md: '40px' })}
        top={useBreakpointValue({ base: '90%', md: '50%' })}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => _slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px"></BiRightArrowAlt>
      </IconButton>
    </Box>
  );
}


export default Caption; 
