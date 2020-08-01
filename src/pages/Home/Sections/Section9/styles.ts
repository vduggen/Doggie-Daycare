import styled from 'styled-components';

export const Container = styled.section`
  width: 1020px;
  height: 150px;
  margin:0 auto;
  background: #5D62B5;
  border-radius: 20px;
  margin-top: -100px;
  padding: 0 4.375rem;

  display:flex;
  align-items:center;
  justify-content:space-between;

  h5 {
    font: 900 1.5rem 'Roboto',sans-serif;
    color: #fff;
  }

  button {
    width: 210px;
    height: 48px;
    border:none;
    border-radius:8px;
    color: #fff;
    background:#F2726F;
    cursor:pointer;
    text-transform:uppercase;
    font: bold .75rem 'Roboto',sans-serif;
  }
`;
