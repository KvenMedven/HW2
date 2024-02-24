import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import s2 from '../../HW11.module.css'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                boxSizing:'border-box',
                borderRadius:'10px',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },
                '& .MuiSlider-thumb': {
                    border:'6px solid #00CC22',
                    color:'#00CC22',
                    width: '16px',
                    height:'16px',

                },
                '& .MuiSlider-thumb:before': {
                    border:'5px solid white'

                },
                '& .MuiSlider-thumb input': {
                   color:'red'

                },
                '& .MuiSlider-track': {
                    color:'#00CC22'
                }

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
