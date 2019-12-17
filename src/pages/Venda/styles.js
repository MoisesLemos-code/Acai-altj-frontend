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
    
  #content{
       width: 400px;
       height: 400px;
       padding: 0px;
       margin-left: 10px;
       margin-bottom: 10px;
       background-color: #FFFFFF;
       border-style: solid;
       border-width: 1px;
       border-color: ${props => theme.borderPrimary};
       border-radius: 5px;
       z-index: 2;
       animation-name: fade;
       animation-duration: 500ms;
       overflow: scroll;
  }
  #total-venda{
       width: 400px;
       height: 90px;
       margin-top: 40px;
       padding: 10px;
       background-color: ${props => theme.secondColor};
       border-radius: 5px;
       box-shadow: 2px 4px 5px #555;
       animation-name: fade;
       animation-fill-mode: backwards;
       animation-duration: 500ms;
       animation-delay: 300ms;
       overflow: hidden;
       color: #FFFFFF;
  }
  .row{
      margin-top: 30px;
  }  
  .col{
    margin: 0px;
    margin-bottom: 20px;
    justify-content: center;
  }


`;