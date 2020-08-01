import styled from 'styled-components';

export const Container = styled.footer`
  height: 390px;

  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  #container-footer {
    width: 1020px;
    height: 39%;
    margin:0 auto;

    display:grid;
    grid-template-columns: repeat(3,1fr);

    .column {
      display:flex;
      align-items:flex-start;
      justify-content:flex-start;
      flex-direction:column;

      &:nth-child(1) {
        p {
          margin:1.4375rem 0;
          color:#4B4B4B;
          font: 400 0.875rem 'Roboto',sans-serif;
        }

        #social-networks-icons {
          color: #F2726F;

          svg {
            cursor:pointer;
            margin: 0 1.125rem;
            font-size:2rem;

            &:first-child {
              margin-left:0;
            }
          }
        }
      }

      &:nth-child(2) {
        display:flex;
        padding:0 1.5rem;

        p {
          margin-bottom:1.8rem;
          color:#4B4B4B;
          font: 600 1.3rem 'Roboto',sans-serif;
        }

        div {
          width: 100%;
          display:flex;
          align-items:flex-start;
          justify-content:space-between;

          ol {
            li {
              list-style-type: none;
              margin-bottom:1rem;

              a {
                color:#4B4B4B;
                font: 400 1rem 'Roboto',sans-serif;
                text-decoration:none;

                &:hover {
                  text-decoration:underline;
                }
              }
            }
          }
        }
      }

      &:nth-child(3) {
        padding:0 3.5rem;

        p {
          margin-bottom:1.8rem;
          color:#4B4B4B;
          font: 600 1.3rem 'Roboto',sans-serif;
        }

        div {
          display:flex;
          align-items:flex-start;
          margin-bottom: 1rem;

          span {
            font: 400 0.875rem 'Roboto',sans-serif;
            color:#4B4B4B;
          }

          svg {
            margin-right: 1.125rem;
            font-size:1rem;
            color: #F2726F;
          }
        }
      }
    }
  }
`;

export const Navbar = styled.section`
  background:#5D62B5;
  height: 60px;
  padding: 0 180px;

  div {
    height: 100%;
    color: #fff;

    display:flex;
    align-items:center;
    justify-content:space-between;

    p {
      font: 400 1rem 'Roboto',sans-serif;
    }
  }
`;
