import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`

export const DialogContent = styled(Dialog.Content)`
  background-color: ${(props) => props.theme['primary-100']};
  box-shadow: 0 0 0 2px ${(props) => props.theme['second-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 1180px;
  max-height: 85vh;
  display: grid;
  grid-template-columns: 4fr 3fr;
  
  .slider{
    background-color: ${(props) => props.theme['second-900']};
    max-height: 85vh;
    display: flex;
    justify-content: center;
    position: relative;

    img{
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    button{
      all: unset;
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      padding: 1rem;
      cursor: pointer;
      transition: background-color 100ms ease-in-out;
      color: ${(props) => props.theme['second-100']};

      &:hover{
        background-color: rgba(0, 0, 0, 0.2);
      }
    }

  }
  
  .about{
    overflow-y: auto;
    padding: 32px;
    color: ${(props) => props.theme['second-900']};
    max-height: 85vh;
    
    a{
      text-decoration: none;
      color: ${(props) => props.theme['primary-700']};
  
      &:hover{
        color: ${(props) => props.theme['primary-800']};
      }
    }

    p{
      margin-top: 16px;
    }
  }
`

export const Container = styled.div`
  max-width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme['second-900']};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['second-700']};

  @media(max-width: 780px){
    button{
      display: none;
    }
  }

  img{
    width: 100%;
    height: 240px;
    border-radius: 4px;
  }

  h3{
    font-size: 1.5rem;
    color: ${(props) => props.theme['primary-100']};
  }

  p{
    text-align: center;
    color: ${(props) => props.theme['primary-200']};
  }

  button{
    cursor: pointer;
    border: none;
    margin-right: auto;
    text-decoration: none;
    color: ${(props) => props.theme['primary-100']};
    background-color: ${(props) => props.theme['primary-700']};
    border-radius: 12px;
    padding: 8px 14px;

    &:hover{
      color: ${(props) => props.theme['primary-200']};
      background-color: ${(props) => props.theme['primary-800']};
    }
  }
`;

