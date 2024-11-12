import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  width: 400px;
  height: 700px;
  background-color: ${(props) => props.theme.colors['primary-100']};
  box-shadow: 0px 3px 20px ${(props) => props.theme.colors['box-shadow']};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: fadeIn 1s ease-out;
  transition: background-color 0.8s ease-in-out;

  .Foto{
    top: -100px;
    left: 25%;
    position: absolute;
    border-radius: 20px;
  }

  .switchTheme{
    position: absolute;
    top: -30px;
    right: 6px;
  }
  @media (min-width: 1240px) {
    .switchTheme{
      display: none;
    }
  }

  .title{
    margin-top: 18px;
    text-align: center;

    h2{
      margin-top: 114px;
      color: ${(props) => props.theme.colors['primary-800']};
      font-size: 1.776rem;
      font-weight: 700;
      line-height: 35.5px;
    }

    span{
      margin-top: 4px;
      color: ${(props) => props.theme.colors['primary-850']};
      font-size: 1rem;
      font-weight: 500;
      line-height: 40px;
    }
  }

  ul{
    margin-top: 6px;
    display: flex;
    gap: 10px;
  }

  ul, li {
    list-style: none;

    a{
      display: block;
      background-color: ${(props) => props.theme.colors['primary-200']};
      border-radius: 8px;
      padding: 20px 24px;
      transition: background-color 0.8s ease-in-out;


      &:hover {
        background-color: ${(props) => props.theme.colors['primary-825']};
        transition: background-color 0.3s ease;
      }
    }
  }

  section{
    margin-top: 22px;
    background-color: ${(props) => props.theme.colors['primary-200']};
    padding: 28px;
    border-radius: 20px;
    margin-bottom: 66px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    transition: background-color 0.8s ease-in-out;

    .box{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 18px;

      hr{
        border: 0;
        height: 2px;
        background-color: ${(props) => props.theme.colors['primary-300']};
        transition: background-color 0.8s ease-in-out;
      }

      .box-info{
        display: flex;
        gap: 10px;

        img{
          padding: 0 10px;
        }

        div{
          p{
            color: ${(props) => props.theme.colors['primary-850']};
            font-size: 0.875rem;
            font-weight: 600;
          }
          span{
            color: ${(props) => props.theme.colors['primary-800']};
            font-size: 0.875rem;
            font-weight: 600;
          }
        }
      }
    }

    a{
      padding: 12px 20px;
      border-radius: 20px;
      background: linear-gradient(130deg, ${(props) => props.theme.colors['second-200']} 0%, ${(props) => props.theme.colors['second-700']} 100%);
      background-size: 200% 200%;
      background-position: 0% 50%;
      text-decoration: none;
      color: ${(props) => props.theme.colors['white']};
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.75rem;
      font-weight: 600;
      transition: background-position 0.4s ease;

      &:hover {
        background-position: 100% 50%;
      }
    }
  }

  @media (max-width: 1240px) {
    margin-top: 120px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

