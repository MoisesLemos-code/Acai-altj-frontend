import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.div`
    padding: 0;
    display: inline-flex;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    z-index: 1;
    margin: 20px 10px;
    
    h1{ 
        position: absolute;
	    left: 50%;
	    top: 50%;
        margin-left: -161.28px;
	    margin-top:-54px;
        text-align: center;
        font-size: 90px;
        color: ${props => theme.backgroundText};
        z-index: 0;
    }
    #title{
        margin-bottom: 20px;
        color: ${props => theme.primaryColor};
        animation: moveX 600ms;
        animation-delay: 200ms;
        animation-fill-mode: backwards;
    }
    #textAdd{
        color: ${props => theme.primaryColor}
    }
    #addProduto{
       width: 200px;
       height: 200px;
       padding: 0px;
       margin-left: 10px auto;
       margin-bottom: 10px;
       background-color: #FFFFFF;
       border-style: solid;
       border-width: 1px;
       border-color: ${props => theme.borderPrimary};
       border-radius: 5px;
       z-index: 2;
       animation-name: fade;
       animation-duration: 500ms;
       font-size: 120px;
       text-align: center;
       cursor: pointer;
    }
    #addProduto:hover{
      background-color: ${props => theme.secondColor};
      #textAdd{
        color: #FFFFFF;
        text-shadow: 2px 4px 5px #666;
      }
 }
    .form-label{
     margin-bottom: 0px;
     margin-top: 10px;
    }
    #salvarCliente{
        margin-top: 20px;
        background-color: ${props => theme.secondColor};
        border-color: ${props => theme.borderPrimary};
    }
`;