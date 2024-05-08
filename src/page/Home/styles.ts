import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const BoxTools = styled.div`
  position: relative;
  margin-top: 140px;
  padding: 85px 0;
  background-color: ${(props) => props.theme['second-900']};

  .containerTools{
    margin: 0 auto;
    max-width: 1180px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bollLeft{
    position: absolute;
    left: 25px;
    top: 25px;
  }

  .bollRight{
    position: absolute;
    bottom: 25px;
    right: 25px;
    transform: rotate(180deg);
  }
`;

export const SectionCard = styled.section`
  margin: 0 auto;
  max-width: 1180px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 120px;
  margin-bottom: 160px;

  @media(max-width: 1180px){
    width: 100%;
    padding: 0 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const TextTitle = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: ${(props) => props.theme['primary-200']};
`;

export const Line = styled.div`
  margin: 60px auto 60px;
  width: 400px;
  height: 2px;
  background-color: ${(props) => props.theme['second-300']};

  @media(max-width: 480px){
    width: 50%;
  }
`;

export const GridCardTool = styled.div`
  max-width: 980px;
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: center;
`;