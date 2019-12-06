import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.div`
    main{
        margin-top: 0px;
        padding: 30px 10px;
        width: 100%;
        height: 100%;
    }
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
    #panel{
       width: 350px;
       height: 100%;
       margin-top: 10px;
       padding: 10px;
       background-color: #FFFFFF;
       border-style: solid;
       border-width: 1px;
       border-color: ${props => theme.borderPrimary};
       border-radius: 5px;
       z-index: 2;
       animation: moveX 500ms;
       animation-delay: 320ms;
       animation-fill-mode: backwards;
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