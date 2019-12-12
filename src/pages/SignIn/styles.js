import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.div`
  
   main{
        width: auto;
        margin-top: 50px;
   } 
   h2{
       font-size: 50px;
       color: ${props => theme.secondColor};
       text-align: center;
       animation-name: fade;
       animation-duration: 500ms;
       z-index: 1;
   }
   #formOut{
       margin-top: 30px;
       background-color: #FFFFFF;
       border-style: solid;
       border-width: 1px;
       border-color: #D8DDE6;
       border-radius: 5px;
       padding: 50px;
       overflow: hidden;
       animation-name: fadeOut;
       animation-duration: 2000ms;
       z-index: 1;
   } 
   #formIn{
       margin-top: 30px;
       background-color: #FFFFFF;
       border-style: solid;
       border-width: 1px;
       border-color: #D8DDE6;
       border-radius: 5px;
       padding: 50px;
       overflow: hidden;
       animation-name: fade;
       animation-duration: 500ms;
       z-index: 1;
   }
   #formIn .form-group:nth-child(1){
       animation: moveX 500ms;
       animation-delay: 200ms;
       animation-fill-mode: backwards;
   }
   #formIn .form-group:nth-child(2){
       animation: moveX 500ms;
       animation-delay: 250ms;
       animation-fill-mode: backwards;
   }
   #formIn .form-group:nth-child(3){
       animation: moveX 500ms;
       animation-delay: 300ms;
       animation-fill-mode: backwards;
   }
   #head{
       z-index: 2;
   }
   #loginSignUp{
       float: right;
       margin-top: 5px;
       font-size: 15px;
       background: ${props => theme.primaryColor};
       box-shadow: ${props => theme.primaryShadow};
       border-color: #D8DDE6;
       color: white;
       cursor: pointer;  
   }
   #loginForgot{ 
       font-size: 13px;
       color: ${props => theme.secondColor}; 
       float: right;
       text-decoration: underline;
       cursor: pointer;
   }
   #loginEnter{
       margin-top: 55px;
       background: ${props => theme.primaryColor};
       box-shadow: ${props => theme.primaryShadow};
       border-color: #D8DDE6;
       color: white;
       cursor: pointer; 
       animation: moveX 500ms;
       animation-delay: 320ms;
       animation-fill-mode: backwards;
       
   }
   #loginOut{
    margin-top: 55px;
       background: ${props => theme.primaryColor};
       box-shadow: ${props => theme.primaryShadow};
       border-color: #D8DDE6;
       color: white;
       cursor: pointer; 
       animation-name: fadeOut;
       animation-duration: 2000ms;
       animation-fill-mode: backwards;   
   }
   
`;
