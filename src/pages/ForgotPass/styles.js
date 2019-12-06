import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.div`

    h2{
       font-size: 60px;
       color: ${props => theme.secondColor};
       text-align: center;
       animation-name: fade;
       animation-duration: 500ms;
   }
   h3{
       font-size: 20px;
       color: ${props => theme.secondColor};
       margin-top: 50px;
       margin-bottom: 10px;
       text-align: center;
       animation: moveX 500ms;
       animation-delay: 200ms;
       animation-fill-mode: backwards;
   }

   #forgotEnviar{
       background: ${props => theme.primaryColor};
       box-shadow: ${props => theme.primaryShadow};
       border-color: #D8DDE6;
       color: white;
       cursor: pointer; 
       animation: moveX 500ms;
       animation-delay: 200ms;
       animation-fill-mode: backwards;
   }
   #loginBack{
        float: right;
        margin-top: 5px;
        border-color: #D8DDE6;
        background-color: rgba(250,250,250,0.7);
        color: #5F5F5F;
        cursor: pointer; 
    }
   form{
       background-color: #FFFFFF;
       border-style: solid;
       border-width: 1px;
       border-color: #D8DDE6;
       border-radius: 5px;
       padding: 50px;
       margin-top: 20px;
       animation-name: fade;
       animation-duration: 500ms;
   }
   form .form-group{
       animation: moveX 500ms;
       animation-delay: 200ms;
       animation-fill-mode: backwards;
   }
   
`;