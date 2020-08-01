import styled from 'styled-components';

export const Blob = styled.img`
  position:absolute;
`;

export const Container = styled.section`
  position:relative;
  padding-bottom:11rem;

  #container-section7-externo {
    width: 1020px;
    height: 820px;
    margin: 0 auto;
    position:relative;

    #DogImage {
      position: absolute;
      bottom: 0;

      padding: 0 4rem;
    }

    #container-section7-interno {
      border-radius: 40px;
      height: 700px;
      padding: 0 5.5rem;
      margin-top: -80px;
      padding-top: 6.25rem;
      background: #5d62b5;

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
        margin-top: 2.0625rem;
      }

      #Gallery-Effect {
        margin-top: 3.4375rem;

        ul {
          color: #fff;
          border-bottom:1px solid gray;
          padding-bottom:0.9375rem;

          display: flex;
          justify-content: space-between;

          li {
            font: 400 1rem 'Roboto', sans-serif;
            cursor:pointer;

            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4) {
              position:relative;

              &::after {
                content: "";
                position:absolute;
                top: -4px;
                right: -15px;
                border-radius:50%;
                background: #fff;
                width: 8px;
                height: 8px;
              }
            }
          }

          .active {
            font-weight:bold;
            position:relative;

            &::before {
              content: "";
              position: absolute;
              width: 170px;
              bottom: -18px;
              right: -17px;
              border: 3px solid #fff;
            }
          }
        }
      }
    }
  }

  #container-testimonials {
    width: 1020px;
    height: 340px;
    margin:7.5rem auto 0 auto;
    display:flex;
    justify-content:space-between;

    header {
      .top {
        display: flex;
        align-items: center;
        position: relative;
        color: #5D62B5;

        h6 {
          margin-left: 1rem;
          font: bold 0.75rem 'Roboto', sans-serif;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }
      }

      h3 {
        color: #000;
        font: 900 2.25rem 'Roboto',sans-serif;
      }
    }

    .column {
      width: 324px;
      height: 100%;
      border-radius: 20px;
      box-shadow:0 14px 14px rgba(38,38,38,0.2);

      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;

      background: #fff;

      .center {
        width: 237px;
        height: 250px;

        display:flex;
        align-items:center;
        justify-content:space-evenly;
        flex-direction:column;

        p {
          color: #4B4B4B;
          font: 400 1rem 'Roboto',sans-serif;
        }

        footer {
          display:flex;
          align-items:center;
          margin-top: 1.125rem;

          h6 {
            margin-left: 1.0625rem;
            font: bold 1rem 'Roboto',sans-serif;
            color:#F2726F;
          }
        }
      }
    }
  }
`;
