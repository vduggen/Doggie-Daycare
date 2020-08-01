import styled from 'styled-components';

export const Container = styled.section`
  width: 1020px;
  margin: 0 auto;
  margin-top: 5.375rem;
  margin-bottom: 7.625rem;

  header {
    #text-top-Section3 {
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

  #row-about {
    margin-top: 4.25rem;

    display: flex;
    justify-content: space-between;

    .column-about {
      width: 324px;
      display: flex;
      align-items: flex-start;

      .text-dir-column {
        margin-left: 1.4375rem;

        h6 {
          color: #f2726f;
          font: 900 1.1875rem 'Roboto', sans-serif;
        }

        p {
          margin-top: 1.25rem;
          font: 400 1rem 'Roboto', sans-serif;
          color: #4b4b4b;
        }
      }
    }
  }
`;
