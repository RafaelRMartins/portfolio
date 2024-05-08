import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1180px;
  margin: 80px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;

  .backgroundCircle {
    position: absolute;
    width: 960px;
    height: 800px;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: -1;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(38, 154, 201, 0.18) 0%, rgba(0, 0, 0, 0) 60%);
  }

  @media(max-width: 940px){
    img{
      display: none;
    }
    display: block;
    padding: 40px;
    width: 100%;
  }

  @media(max-width: 1180px){
    width: 100%;
  }


  img{
    width: 100%;
    height: auto;
  }

  section{
    h2{
      font-size: 2rem;
      color: ${(props) => props.theme['primary-100']};

      span{
        color: ${(props) => props.theme['primary-700']};
      }
    }

    div{
      margin-top: 40px;

      p{
        margin-top: 20px;
        font-size: 1.25rem;
        color: ${(props) => props.theme['primary-200']};

        span{
          color: ${(props) => props.theme['primary-700']};
        }

        a{
          text-decoration: none;
          color: ${(props) => props.theme['primary-700']};

          &:hover{
            color: ${(props) => props.theme['primary-800']};
          }
        }
      }
    }
  }
`;
