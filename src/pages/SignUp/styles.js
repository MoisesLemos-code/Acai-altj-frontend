import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.div`
  
  h2{
       float: left;
       font-size: 40px;
       color: ${props => theme.secondColor};
       padding-left: 5px;
       animation: moveY 500ms;
       animation-delay: 200ms;
       animation-fill-mode: backwards;
   }
   h3{
       font-size: 30px;
       color: ${props => theme.secondColor};
       margin-bottom: 30px;
       text-align: center;
   }
   #loginBack{
        float: right;
        margin-top: 5px;
        border-color: ${props => theme.borderPrimary};
        background-color: rgba(250,250,250,0.7);
        color: ${props => theme.secondColor}; 
        cursor: pointer; 
    }
    #signUP{
        font-size: 15px;
        margin-top: 42px;
        background: ${props => theme.primaryColor};
        box-shadow: ${props => theme.primaryShadow};
        border-color: ${props => theme.borderPrimary};
        color: white;
        cursor: pointer; 
        animation: move 500ms;
        animation-delay: 320ms;
        animation-fill-mode: backwards;
    }

    form{
       margin-top: 30px;
       background-color: #FFFFFF;
       border-style: solid;
       border-width: 1px;
       border-color: ${props => theme.borderPrimary};
       border-radius: 5px;
       padding: 50px;
       animation-name: fade;
       animation-duration: 500ms;
   }
   form .form-group:nth-child(1){
       animation: moveX 500ms;
       animation-delay: 200ms;
       animation-fill-mode: backwards;
   }
   form .form-group:nth-child(2){
       animation: moveX 500ms;
       animation-delay: 250ms;
       animation-fill-mode: backwards;
   } 
   form .form-group:nth-child(3){
       animation: moveX 500ms;
       animation-delay: 300ms;
       animation-fill-mode: backwards;
   }   
   form .form-group:nth-child(4){
       animation: moveX 500ms;
       animation-delay: 320ms;
       animation-fill-mode: backwards;
   }   
`;