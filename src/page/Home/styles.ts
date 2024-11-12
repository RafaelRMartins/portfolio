import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const SectionHome = styled.div`
  max-width: 1240px;
  margin: 60px auto 80px;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 20px;

  @media (max-width: 1240px) {
    margin: 0px auto 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;