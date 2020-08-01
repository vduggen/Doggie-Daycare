import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  #Blob5 {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  article {
    width: 1020px;
    height: 988px;
    margin: 0 auto;
    padding: 110px 0;

    #text-top-Section5 {
      margin-bottom: 4.875rem;

      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      .top {
        display: flex;
        align-items: center;

        h6 {
          color: #5d62b5;
          text-transform: uppercase;
          font: bold 0.75rem 'Roboto', sans-serif;
          letter-spacing: 0.15625rem;
        }
      }

      h3 {
        color: #000;
        font: 900 2.25rem 'Roboto', sans-serif;
        margin-top: 2.0625rem;
      }
    }

    .row {
      width: 100%;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1.5rem;

      .column {
        width: 324px;
        height: 340px;
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 14px 14px rgba(38, 38, 38, 0.2);
        z-index: 2;
        transition: ease-in-out .3s;

        display: flex;
        align-items: center;
        justify-content: center;

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-bottom: 1.5rem;
        }

        &:hover {
          box-shadow: 0 24px 40px rgba(38, 38, 38, 0.2);
        }

        .center {
          padding: 3.125rem 2.75rem;
          width: 100%;
          height: 100%;
          text-align: center;

          display: flex;
          justify-content: center;
          flex-direction: column;

          h6 {
            font: 900 1.1875rem 'Roboto', sans-serif;
            color: #f2726f;
          }

          p {
            font: 400 1rem 'Roboto' sans-serif;
            color: #4b4b4b;
            margin-top: 1.25rem;
          }
        }
      }
    }

    button {
      cursor: pointer;
      border-radius: 8px;
      width: 124px;
      height: 48px;
      background: #f2726f;
      color: #fff;
      text-transform: uppercase;
      font: bold 0.75rem 'Roboto', sans-serif;
      border: none;
      display: block;
      margin: 0 auto;
      margin-top: 4.125rem;
    }
  }
`;
