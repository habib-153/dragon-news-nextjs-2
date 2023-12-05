import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import headerImage from '@/assets/The Dragon News.png'
import { grey } from '@mui/material/colors';
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box>
            <Container className='space-y-3'>
                <Image className='mx-auto' src={headerImage} width={500} height={500} alt='img'></Image>
                <Typography variant='body2' color="gray" textAlign='center'>
                    Journalism without fear or favour
                </Typography>
                <Typography variant='body2' color="gray" textAlign='center'>
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;