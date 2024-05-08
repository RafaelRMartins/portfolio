import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 210px;
  background-color: ${(props) => props.theme['second-900']};
`;

export const BoxFooter = styled.footer`
  width: 1180px;
  margin: 0 auto;
  height: 210px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media(max-width: 1180px){
    width: 100%;
    padding: 0 40px;
  }

  .emailLink{
    font-size: 0.875rem;
    color: ${(props) => props.theme['primary-100']};
    text-decoration: none;
  }

  p{
    font-size: 0.875rem;
    color: ${(props) => props.theme['primary-100']};
  }
  
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  a{
    display: flex;
    border-radius: 4px;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme['second-800']};
    border: 1px solid ${(props) => props.theme['second-900']};
    
    &:hover{
      background-color: ${(props) => props.theme['second-700']};
    }
  }

  ul{
    display: flex;
    gap: 10px;


    li{
      list-style: none;
      
      a{
        display: flex;
        border-radius: 4px;
        width: 48px;
        height: 48px;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme['second-800']};
        border: 1px solid ${(props) => props.theme['second-900']};
        
        &:hover{
          background-color: ${(props) => props.theme['second-700']};
        }
      }
    }
  }
`;
