import styled from 'styled-components';
import { IButtonPropsStyles } from './types'


export const ButtonContainer = styled.button<IButtonPropsStyles>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    ${({ isDisabled }) => isDisabled ?
        `&:hover {
            opacity: 0.6;
            cursor:pointer;
        }` : null
    }
`