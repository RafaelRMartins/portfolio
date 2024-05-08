import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px 16px;
  align-items: center;
  background-color: ${(props) => props.theme['second-700']};
  border-radius: 8px;

  p{
    color: ${(props) => props.theme['primary-100']};
  }
`;

