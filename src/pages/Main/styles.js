import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.div`
    main{
        margin-top: 50px;
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
`;