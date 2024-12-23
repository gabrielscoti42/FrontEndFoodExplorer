import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;

    >.content {
        width: 75%;
        margin-top: 12rem;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            flex-direction: row;
            margin: auto 0;
        }

        >.backAndImageWrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            >a {
                align-self: flex-start;

                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    height: 100%; 
                }
            }
            
            >a .backButton {
                background-color: transparent;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                
                width: fit-content;
                margin-bottom: 1.4rem;
                display: flex;
                align-items: center;
                justify-content: start;
                
                font-family: 'Poppins', sans-serif;
                font-size: 2.4rem;
                font-weight: 500;
                line-height: 140%;

                transition: .5s;

                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    font-size: 2.4rem;
                }
            }

            >a .backButton:hover {
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }

            >img {
                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    height: 45rem;
                    width: auto;
                }
            }
        }
        
        >.ingredientsAndDescriptionWrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                justify-content: start;
                align-items: start;
                width: 100%;
            } 

            >h1, p {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-family: 'Poppins', sans-serif;
                line-height: 140%;
            }

            >h1 {
                font-size: 2.7rem;
                font-weight: 500;
                white-space: nowrap;
                margin-bottom: 2.4rem;

                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    font-size: 4rem;
                } 
            }

            >p {
                font-size: 1.6rem;
                font-weight: 400;
                text-align: center;
                margin-bottom: 2.4rem;

                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    font-size: 2.4rem;
                    text-align: start;
                } 
            }

            >.ingredientsWrapper {
                float: left;
                text-align: center;
                margin-bottom: 3rem;

                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    text-align: start;
                } 

                >button{
                    margin: 2rem 0 0 1.6rem;
                    display: inline-block;
                }
            }

            >.stepperAndButtonWrapper {
                display: flex;
                align-items: center;
                justify-content: center;

                margin-top: 2rem;
                gap: 1.6rem;
            }
        }
    }        
`