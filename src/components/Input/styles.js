import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    display: flex;
    align-items: center;
    justify-content: center;
        
    width: 100%;
    border-radius: 5px;
        
        >input{
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            display: flex;
            justify-content: center;
            
            background-color: transparent;

            width: 100%;
            height: 4.8rem;

            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 100%;
            text-align: center;

            border: none;
        }

        >svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            font-size: 2.4rem;

            margin-left: 15px;
        }
`