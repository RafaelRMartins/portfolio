import styled from 'styled-components';

export const Container = styled.div`
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .none{
      width: 48px;
    }
    
    .menu{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 10px 20px;
      border-radius: 20px;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

      button{
        width: 60px;
        height: 60px;
        background-color: ${(props) => props.theme.colors['primary-300']};
        color: ${(props) => props.theme.colors['primary-800']};
        border: none;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.75rem;
        line-height: 20px;
        cursor: pointer;

        svg path{
          fill: ${(props) => props.theme.colors['primary-850']};
        }

        &:hover {
          background-color: ${(props) => props.theme.colors['primary-825']};
          transition: background-color 0.3s ease;
        }
      }

      .active{
        background: linear-gradient(to right, ${(props) => props.theme.colors['second-200']}, ${(props) => props.theme.colors['second-700']});
        color: ${(props) => props.theme.colors['white']};

        svg path{
          fill: ${(props) => props.theme.colors['white']};
        }
      }
    }
  }

   @media (max-width: 1240px) {
    header{
      justify-content: center;
    }
    header .switchTheme, .none {
      display: none;
    }
  }

  section{
    height: 700px;
    margin-top: 20px;
    background-color: ${(props) => props.theme.colors['primary-100']};
    border-radius: 20px;
    box-shadow: 0px 3px 20px ${(props) => props.theme.colors['box-shadow']};

    .box-resume, .box-Portfolio{
      padding: 32px 60px;
    }

    .box-Portfolio{
      height: 100%;
      overflow: auto;

      .sectionProject{
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

        @media (max-width: 780px) {
          display: flex;
          flex-direction: column;
        }

        a{
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          position: relative;
          overflow: hidden;

          p {
            font-size: 1rem;
            color: ${(props) => props.theme.colors['primary-800']};
            font-weight: 700;
          }

          .image-container {
            border-radius: 12px;
            overflow: hidden;
            max-width: 100%;
            max-height: 100%;
          }

          img {
            display: block;
            width: 100%;
            height: auto;
            transition: transform 0.3s ease;
          }

          &:hover img {
            transform: scale(1.1);
          }
        }
      }
    }

    .sectionList{
      margin: 32px auto 0;
      display: flex;
      justify-content: space-around;

      .listEducation, .listExperience{
        display: flex;
        flex-direction: column;
        gap: 20px;

        .list-title{
          display: flex;
          gap: 8px;
        }

        h3{
          font-size: 1.75rem;
          font-weight: 600;
        }

        .box{
          width: 280px;
          padding: 16px;
          border-radius: 11px;
          display: flex;
          flex-direction: column;
          gap: 8px;

          .date{
            font-size: 0.875rem;
            color: ${(props) => props.theme.colors['primary-850']};
          }

          .title{
            font-size: 1rem;
            font-weight: 600;
            color: ${(props) => props.theme.colors['primary-800']};
          }

          .subtitle{
            font-size: 0.875rem;
            font-weight: 500;
            color: ${(props) => props.theme.colors['primary-800']};
          }
        }
      }

      .listEducation{
        .box:nth-child(even) {
          background-color: ${(props) => props.theme.colors['second-275']};
        }

        .box:nth-child(odd) {
          background-color: ${(props) => props.theme.colors['second-250']};
        }
      }

      .listExperience{
        .box:nth-child(even) {
          background-color: ${(props) => props.theme.colors['second-250']};
        }

        .box:nth-child(odd) {
          background-color: ${(props) => props.theme.colors['second-275']};
        }
      }
    }

    .sectionSkills{
      margin-top: 40px;

      h3{
        font-size: 1.75rem;
        font-weight: 600;
      }

      .skills{
        display: flex;
        flex-wrap: wrap;
        gap: 14px 20px;
        margin-top: 14px;

        span{
          display: block;
          padding: 4px 8px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 400;
          color: ${(props) => props.theme.colors['primary-800']};
          background-color: ${(props) => props.theme.colors['second-225']};
        }
      }
    }
  }

  @media (max-width: 1240px) {
    margin: 0px 40px;
  }

  @media (max-width: 780px) {
    margin: 0px 40px;
    width: 100%;

    .sectionList{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
    
    section{
      height: auto;
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  h2{
    font-size: 2.5rem;
    font-weight: 600;
  }

  .line{
    width: 252px;
    height: 2px;
    background: linear-gradient(to right, ${(props) => props.theme.colors['second-200']}, ${(props) => props.theme.colors['second-700']});

  }

  @media (max-width: 780px) {
    .line{
      width: 40%;
    }
  }
`;