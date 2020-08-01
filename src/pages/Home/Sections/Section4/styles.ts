import styled from 'styled-components';
import BgVideo from '../../../../assets/BgVideo.jpg';

export const Container = styled.section`
  width: 100%;
  height: 500px;
  background-image: url(${BgVideo});
  background-position: center center;

  #container-text {
    width: 1020px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    div {
      h3 {
        font: 900 2.25rem 'Roboto', sans-serif;
        color: #fff;
        margin-bottom: 2.625rem;
      }

      button {
        border-radius: 8px;
        width: 210px;
        height: 48px;
        font: bold 0.75rem 'Roboto', sans-serif;
        text-transform: uppercase;
        background: #f2726f;
        color: #fff;
        border: none;
        cursor: pointer;
      }
    }
  }
`;
