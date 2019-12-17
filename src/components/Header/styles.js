import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.form`

    border-width: 1px;
    border-style: solid;
    border-color: #BDBDBD; 

  .navbar{
        background-color: ${props => theme.backgroundColor};
 }
  #navbar-brand{ 
       font-size: 30px;
       color: #FFFFFF;
   }
   #navbar-brand:hover{
         color: ${props => theme.secondColor}
   }
   #navbar-Info{
         margin-right: 50px;
   }
   #navbar-button{
         border-color: ${props => theme.primaryColor};
         color: ${props => theme.primaryColor};
   }
   #btn-logoff{
         margin: 0 auto;
         border-color: ${props => theme.secondColor};
         color: ${props => theme.secondColor};
   }
   #btn-logoff:hover{
        color: white;
        background: ${props => theme.styleColor};
        box-shadow: ${props => theme.primaryShadow};
   }
   #navbar-button:hover{
        color: white;
        background: ${props => theme.primaryColor};
        box-shadow: inset 0px 25px 4px #FA5858;
   }
   #taskBar{
         margin-left: 15px;
   }
  li:hover{
        color: white;
        background: ${props => theme.primaryColor};
        box-shadow: inset 0px 25px 4px #FA5858;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
  }
  #dropdown-menu-align-right{
        background-color: ${props => theme.styleColor};
        border-style: none;
  }


`;