import { createGlobalStyle } from "styled-components";
//import { theme } from './themes'

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font: 14px 'Roboto', sans-serif;
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased !important;
  }
  a{
    text-decoration: none !important;
  }
  @keyframes fade{
        from{
            opacity: 0;
            transform: scale(0.5);
        }to{
             opacity: 1;
             transform: scale(1);
        }
    }
    @keyframes moveX{
        from{
            opacity: 0;
            transform: translateX(-35%);
        }to{
             opacity: 1;
             transform: translateX(0%);
        }
    }
    @keyframes moveXRight{
        from{
            opacity: 0;
            transform: translateX(95%);
        }to{
             opacity: 1;
             transform: translateX(0%);
        }
    }
    @keyframes moveY{
        from{
            opacity: 0;
            transform: translateY(-35%);
        }to{
             opacity: 1;
             transform: translateY(0%);
        }
    }
    @keyframes moveYBack{
        from{
            opacity: 0;
            transform: translateY(35%);
        }to{
             opacity: 1;
             transform: translateY(0%);
        }
    }
    @keyframes fadeOut {
   0% {opacity: 1;}
   100% {opacity: 0;} 
} 
`;