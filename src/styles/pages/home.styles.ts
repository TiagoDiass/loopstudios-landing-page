import styled from 'styled-components';

export const MainContainer = styled.main`
  /* background-color: tomato; */
`;

export const HeroBanner = styled.section`
  height: 100vh;
  background-image: url('/images/desktop/image-hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;

  h1 {
    width: 45%;
    max-width: 600px;
    padding: 2rem 4rem 2rem 2rem;
    border: 1px solid var(--white);
    margin: auto 10rem;
    color: var(--white);
    font-size: 4.5rem;
  }

  @media (max-width: 1220px) {
    h1 {
      width: 80%;
      margin: auto;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
      padding: 2rem;
      margin: auto;
    }
  }
`;

export const SecondarySection = styled.section`
  /* background-color: #eee; */
  min-height: 80vh;
  padding: 6rem 10rem;

  .content {
    /* background-color: #ccc; */
    display: grid;
    grid-template-columns: 2fr 1fr;
    position: relative;

    img {
      width: 100%;
    }

    article {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 45%;
      height: 60%;
      padding: 4rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 2.2rem;

      background-color: #fff;

      h2 {
        font-size: 3rem;
      }

      p {
        color: var(--gray);
        line-height: 2rem;
      }
    }
  }
`;
