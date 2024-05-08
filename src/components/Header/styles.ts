import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['second-900']};

  @media(max-width: 1180px){
    width: 100vw;
  }
`;

export const BoxGrid = styled.div`
  margin: 0 auto;
  width: 1180px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1180px){
    width: 100%;
    margin: 0 20px;
  }

  h1{
    font-size: 1.5rem;
    color: ${(props) => props.theme['primary-100']};
  }

  ul{
    
    li{
      font-size: 1.125rem;
      list-style: none;
      display: inline-block;
      margin-left: 20px;


      a{
        text-decoration: none;
        color: ${(props) => props.theme['primary-100']};
        
        &:hover{
          color: ${(props) => props.theme['primary-700']};
        }
      }
    }
  }
`;