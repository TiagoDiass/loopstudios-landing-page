import styled from 'styled-components';

export const MainContainer = styled.main``;

export const HeroBanner = styled.section`
  height: 85vh;
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
