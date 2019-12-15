import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.div`

#list-produto{
       width: 350px;
       height: 400px;
       padding: 0px;
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
  `;