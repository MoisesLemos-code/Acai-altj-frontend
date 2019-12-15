import styled from "styled-components";
import { theme } from '../../../styles/themes'

export const Styles = styled.div`
  
  #form-search{
    display: flex;
    margin: 5px;
  }
  #searchInput{
    width: 100%;
  }
  #btn-search{
         border-color: ${props => theme.secondColor};
         color: ${props => theme.secondColor};
   }
   #btn-search:hover{
        color: white;
        background: ${props => theme.primaryColor};
        box-shadow: ${props => theme.primaryShadow};
   }
`