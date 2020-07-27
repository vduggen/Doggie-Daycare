import styled from 'styled-components';

export const Container = styled.section`
  width: 1020px;
  height: 700px;
  background:#5D62B5;
  border-radius: 2.5rem;
  margin:-5rem auto 0 auto;

  position:relative;

  #Blob-Effect-About {
    position:absolute;
    bottom:-150px;
  }

  #Dog-bottom-About {
    position:absolute;
    bottom:-150px;
    left:63px;
  }

  #container-text-about {
    padding:6.25rem 5.4375rem 0 5.4375rem;

    header {

      #top-header-about {
        display:flex;
        align-items:center;

        h6 {
          color: #F5F5F5;
          font: bold 0.75rem 'Roboto',sans-serif;
          letter-spacing: 0.15625rem;
          text-transform:uppercase;
        }
      }

      h3 {
        color: #fff;
        font: 900 2.25rem 'Roboto',sans-serif;
        margin-top: 2.0625rem;
      }
    }

    p {
      font: 400 1rem 'Roboto',sans-serif;
      color: #F5F5F5;
      margin-top:2.25rem;
    }
  }
`;
