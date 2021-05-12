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
`;
