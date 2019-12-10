import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.div`
  *{
    margin-left: 10px;
    z-index: 1;
  }
  .card{
    margin-bottom: 10px;
    padding: 0px;
    animation-name: fade;
    animation-duration: 500ms;
    overflow: hidden;
    z-index: 1;
  }
  .card-body{
    padding: 0px;
    margin: 0px;
  }
  #formCard{
    width: 260px;
    padding: 0px;
    margin: 0px;
    animation: moveYBack 500ms;
    animation-delay: 120ms;
    animation-fill-mode: backwards;
    z-index: 2;   
  }
  #infoBtn{
    margin: 20px;
    text-align: center;
  }
  .btnEdit{
    width: 90px;
    margin-top: 20px;
  }
  .btn-card{
     background-color: ${props => theme.secondColor};
     border-color: ${props => theme.secondColor}
  }
  .btn-card:hover{
    background-color: ${props => theme.primaryColor};
    border-color: ${props => theme.primaryColor}
  }

`;