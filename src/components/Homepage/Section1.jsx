import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import quote from '../../assets/Homepage/quote-icon.png'
import usymbol from '../../assets/Homepage/u-symbol.png'
import gcloud from '../../assets/Homepage/gcloud.png'
import snowflake from '../../assets/Homepage/snowflake.png'

export const Section1 = () => {
    const handleService = () => {
        alert('Service Button clicked')
    }

    const handleQuote = () => {
        alert('Quote Button clicked')
    }
    const head = {
        color: '#20303F',
        fontSize: {
            xs: '36px',
            sm: '42px',
            md: '61.5px',
            lg: '82px'
        },
    };
    return (
        <Box sx={{
            width: '90%',
            display: 'flex',
            flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row'
            },
            m: 'auto', justifyContent: 'space-between', gap: '2rem'
        }}>
            <Box sx={{
                width: {
                    xs: "100%",
                    sm: '100%',
                    md: '70%',
                    lg: '70%',
                    xl: '70%',
                }
            }}>
                <Typography sx={head}>Think <strong>Tech</strong></Typography>
                <Typography sx={head}>Think <strong>Unitres Tech</strong></Typography>
                <Typography sx={{
                    mb: '1rem',
                    fontSize: {
                        xs: '18px',
                        sm: '18px',
                        md: '27px',
                        lg: '27px',
                        xl: '27px',
                    }
                }}>Driving Technology Driven Intelligent Outcomes</Typography>
                <Box sx={{ display: 'flex', mb: '1rem', gap: '0.5rem' }}>
                    <Button
                        variant="contained"
                        onClick={handleService}
                        endIcon={<FontAwesomeIcon icon={faArrowRight} transform={{ rotate: -45 }} />}
                        sx={{ backgroundColor: '#20303F', color: '#ffffff', fontSize: '18px', borderRadius: '25px', textTransform: 'none' }}
                    >Services</Button>
                    <Button
                        variant="outlined"
                        onClick={handleQuote}
                        startIcon={<img src={quote} alt="Quote" style={{ width: '1.5rem' }} />}
                        sx={{ borderColor: '#20303F', color: '#20303F', fontSize: '18px', borderRadius: '25px', textTransform: 'none', whiteSpace: 'nowrap' }}
                    >Get a Quote</Button>
                </Box>

                <Box sx={{ pt: '2%', borderTop: '1px solid gray' }}>
                    <Typography sx={{
                        fontSize: {
                            lg: '15px',
                        }
                    }}>Top-Tier Industry Partners</Typography>
                    <Box>
                        <img src={gcloud} alt="Google Cloud" />
                        <img src={snowflake} alt="Snowflake" />
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box
                    component="img"
                    src={usymbol}
                    alt="unitrestech"
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '100%'
                        }
                    }}
                />
            </Box>
        </Box >
    )
}
