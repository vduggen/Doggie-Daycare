import styled from 'styled-components';
import BannerImage from '../../../../assets/HERO.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 13.125rem;

  background-image: url(${BannerImage});
  background-position:center center;
  background-size: cover;

  display:flex;
  align-items:center;

  #container-text-banner {
    margin-top:7.875rem;

    h1 {
      color: #fff;
      font: bold 3.5rem 'Roboto',sans-serif;
      margin-bottom: 3rem;
    }

    button {
      width: 210px;
      height: 48px;
      text-transform: uppercase;
      background:#F2726F;
      color: #fff;
      border-radius: 8px;
      border:none;
      box-shadow: 0 8px 16px #2626265c;
      box-shadow: 0 16px 24px #2626265c;
      cursor: pointer;
    }
  }
`;
