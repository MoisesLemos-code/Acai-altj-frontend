import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.div`
    max-width: 100%;
    padding: 0;
    display: inline-flex;
    z-index: 1;
    margin: 20px 10px;
#title{
        margin-bottom: 20px;
        color: ${props => theme.primaryColor};
        animation: moveX 600ms;
        animation-delay: 200ms;
        animation-fill-mode: backwards;
    }
  `;