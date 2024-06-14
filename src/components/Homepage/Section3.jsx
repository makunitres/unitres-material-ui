import React from 'react'
import people1 from '../../assets/Homepage/people-1.png'
import { Box, Typography } from '@mui/material'

export const Section3 = () => {
    const head = {
        fontSize: {
            xs: '30px',
            sm: '30px',
            md: '30px',
            lg: '36px',
            xl: '48px',
        },
        fontFamily: 'Plus Jakarta Sans'
    }
    return (
        <Box>
            <Box>
                <Box sx={{
                    display: 'flex'
                }}>
                    <Typography sx={{ ...head, fontWeight: '100' }}>Let's face it,</Typography>
                    <Box component='img' src={people1} alt='unitrestech' />
                    <Typography sx={{ ...head, fontWeight: '100' }}>growing your business</Typography>
                </Box>
                <Typography sx={{ ...head, fontWeight: 'bold' }}> online is hard.</Typography >
            </Box >
        </Box >
    )
}
