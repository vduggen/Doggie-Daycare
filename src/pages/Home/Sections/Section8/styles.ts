import styled from 'styled-components';
import Bg from '../../../../assets/Section8Bg.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${Bg});

  #container-section8 {
    width: 1020px;
    height: 85%;
    margin:0 auto;

    position:relative;

    header {
      padding-top:7rem;

      .top {
        display: flex;
        align-items: center;
        position: relative;
        color: #fff;

        h6 {
          margin-left: 1rem;
          font: bold 0.7rem 'Roboto', sans-serif;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }
      }

      h3 {
        color: #fff;
        font: 900 2.25rem 'Roboto', sans-serif;
        margin-top:1.9375rem;
      }
    }

    #ImgDogSection8 {
      position:absolute;
      top:-80px;
      right:-50px;
    }

    .row {
      width: 100%;
      margin-top:4.9375rem;

      display:flex;
      justify-content:space-between;

      .column {
        display:flex;
        align-items:center;

        .text {
          margin-left: .75rem;

          h3 {
            font: 900 2.25rem 'Roboto',sans-serif;
            color: #fff;
          }

          p {
            font: bold 1rem 'Roboto',sans-serif;
            color: #5D62B5;
          }
        }
      }
    }
  }
`;
