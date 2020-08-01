import styled from 'styled-components';
import Bg from '../../../../assets/Section6.jpg';

export const Container = styled.section`
  margin-top: 251px;
  height: 980px;
  background-image: url(${Bg});
  background-position: center center;

  display: flex;
  align-items: center;

  #container-section6 {
    width: 1020px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 70% 30%;

    .esq {
      border-radius: 40px;
      width: 585px;
      height: 640px;
      background: #5d62b5;
      padding: 0 3.5625rem;
      box-shadow: 0 0 14px #333;

      h3 {
        font: 900 2.25rem 'Roboto', sans-serif;
        margin-bottom: 3rem;
        margin-top: 4.75rem;
        text-align: center;
        color: #fff;
      }

      .row {
        display: flex;
        justify-content: space-between;
        margin: 1.375rem 0;

        input {
          width: 224px;
          height: 48px;
          border-radius: 10px;
          background: transparent;
          border: 2px solid #fff;
          padding: 1rem 1.4375rem;

          &::placeholder {
            font: 400 1rem 'Roboto', sans-serif;
            color: #fff;
          }
        }
      }

      textarea {
        border-radius: 10px;
        background: transparent;
        border: 2px solid #fff;
        padding: 1rem 1.4375rem;
        resize: none;

        &::placeholder {
          font: 400 1rem 'Roboto', sans-serif;
          color: #fff;
        }
      }

      button {
        width: 210px;
        height: 48px;
        border-radius: 8px;
        color: #fff;
        font: bold 0.75rem 'Roboto', sans-serif;
        text-transform: uppercase;
        background: #f2726f;
        border: none;
        margin-top: 2.4375rem;
        display: block;
        margin-left: auto;
        cursor: pointer;
      }
    }

    .dir {
      color: #fff;
      text-align: center;

      display: flex;
      justify-content: center;
      flex-direction: column;

      h4 {
        font: 900 1.875rem 'Roboto', sans-serif;
      }

      h1 {
        margin: 2.875rem 0;
        font: 900 6rem 'Roboto', sans-serif;
      }

      h6 {
        font: 900 1.1875rem 'Roboto', sans-serif;
      }
    }
  }
`;
