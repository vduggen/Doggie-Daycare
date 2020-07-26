import styled from 'styled-components';

export const Container = styled.header`
  width: 1020px;
  height: 128px;
  margin:1.625rem auto 0 auto;

  #container-top {
    width: 100%;
    height: 40px;

    display:flex;
    align-items:center;
    justify-content:space-between;

    .esq {
      height: 100%;
    }

    .dir {
      height: 100%;

      display:flex;

      #hours, #call {
        height: 100%;
        margin-right:1.875rem;

        display:flex;
        align-items:flex-start;

        svg {
          color:#F2726F;
          font-size: 1.5rem;
          margin-right: 0.625rem;
        }

        .text-infos {
          h4 {
            font: bold 0.75rem 'Roboto',sans-serif;
            color: #fff;

            &:first-child {
              text-transform: uppercase;
              margin-bottom:11px;
            }
          }
        }
      }

      button {
        width: 211px;
        height: 40px;

        font: bold 0.75rem 'Roboto',sans-serif;
        text-transform: uppercase;
        border:none;
        background:#F2726F;
        border-radius:8px;
        color: #fff;
      }
    }
  }

  nav {
    width: 100%;
    height: 60px;
    border-radius:10px;
    background: #fff;
    margin-top:1.75rem;
    /* padding:0 2.5rem; */

    display:flex;
    justify-content:space-between;

    .esq {
      height: 100%;

      display:flex;
      align-items:center;
      justify-content:center;

      a {
        margin:0 2.5rem;
        font: bold 0.875rem 'Roboto',sans-serif;
        color: #000;
        text-decoration:none;

        display:flex;
        align-items:center;

        svg {
          font-size: 1.5rem;
          color:#F2726F;
        }
      }
    }

    .dir {
      height: 100%;
      padding-right:2.5rem;

      display:flex;
      align-items:center;
      justify-content:center;

      svg {
        font-size:1.5rem;
        color:#4B4B4B;
        cursor:pointer;
      }

      #search-icon {
        margin-right: 1.375rem;
      }

      #badge {
        width: 16px;
        height: 16px;
        -webkit-border-radius: 0.5625rem;
        -moz-border-radius: 0.5625rem;
        border-radius: 0.5625rem;
        padding-top:.1rem;
        font: 400 0.625rem 'Roboto',sans-serif;
        background: #F2726F;
        color: #fff;
        margin-left: -0.625rem;
        margin-bottom: 1.0625rem;

        display:flex;
        align-items:center;
        justify-content:center;
      }
    }
  }
`;
