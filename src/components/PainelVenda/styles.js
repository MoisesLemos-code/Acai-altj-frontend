import styled from "styled-components";
import { theme } from '../../styles/themes'

export const Styles = styled.div`
  #Panel-Venda{
       width: 400px;
       max-height: 300px;
       padding: 5px;
       background-color: ${props => theme.styleColor};
       border-style: solid;
       border-width: 1px;
       border-color: ${props => theme.borderPrimary};
       border-radius: 5px;
       z-index: 2;
       animation-name: fade;
       animation-duration: 500ms;
  }
  .form-label{
    color: #FFFFFF;
  }
  #item-descricao{
       height: 85px;
       margin-bottom: 10px;
       padding: 5px;
       background-color: ${props => theme.secondColor};
       border-radius: 5px;
       box-shadow: 2px 4px 5px #555;
       overflow: hidden;
  }
  #descricao-text{
    font-size: 25px;
  }
  #item-tamanho{
       max-width: 90px;
       max-height: 45px;
       padding: 5px;
       margin-bottom: 10px;
       text-align: center;
       background-color: ${props => theme.secondColor};
       border-radius: 5px;
       box-shadow: 2px 4px 5px #555;
       overflow: hidden;
  }
  #tamanho-text{
       font-size: 20px;
  }
  #item-quantidade{
       max-width: 170px;
       max-height: 50px;
       padding: 5px;
       text-align: center;
       background-color: ${props => theme.secondColor};
       border-radius: 5px;
       box-shadow: 2px 4px 5px #555;
       overflow: hidden;
  }
  #item-valor{
       min-width: 100px;
       max-width: 150px;
       max-height: 48px;
       margin-left: 10px;
       padding: 5px;
       background-color: ${props => theme.secondColor};
       border-radius: 5px;
       box-shadow: 2px 4px 5px #555;
       overflow: hidden;
  }
  #valor-text{
     margin-top: 5px;
     font-size: 20px;    
  }
  #group-item{
      margin: 0 auto;
      justify-content: left;
      display: flex;
  }
  .input-group-text{
      background-color: ${props => theme.secondColor};
      color: #FFFFFF;
      border-style: none;
  }
  .item-venda-qtd-valor{
      background-color: ${props => theme.secondColor};
      color: #FFFFFF;
  }
  #total-venda{
       margin: 0px;
  }
  #total-item{
       max-height: 95px;
       margin: 0px;
       margin-bottom: 10px;
       padding: 5px;
       background-color: ${props => theme.primaryColor};
       border-radius: 5px;
       box-shadow: 2px 4px 5px #555;
       overflow: hidden;
       color: #6CF7B3;
  }
  #btn-inserir{
      margin-top: 10px;
      background-color: ${props => theme.primaryColor};
      border-style: none;
  }
  #btn-inserir:hover{
     background-color: ${props => theme.secondColor}
  }

`;