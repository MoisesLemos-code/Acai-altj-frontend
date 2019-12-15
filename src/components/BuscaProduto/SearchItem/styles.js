import styled from "styled-components";
import { theme } from '../../../styles/themes'

export const Styles = styled.div`

.card{
    margin: 0px 5px;
    margin-bottom: 10px;
    background-color: ${props => theme.primaryColor};
    color: #FFFFFF;
    padding: 0px;
    animation-name: fade;
    animation-duration: 500ms;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
  }
  .card:hover{
    box-shadow: 2px 4px 5px #555;
  }
  .card-text{
    margin: 0px;
  }

  #Search-estoque{
  }
  #Search-tamanho{

  }
  #Search-valor{
    font-size: 20px;
    color: #6CF7B3;
  }

`;