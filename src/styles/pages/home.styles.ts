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
    margin: auto 15rem;
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
  padding: 6rem 15rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
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

  @media (max-width: 1480px) {
    .content article {
      height: 100%;
      row-gap: 1.5rem;

      h2 {
        font-size: 2.5rem;
      }

      p {
        line-height: 1.4rem;
      }
    }
  }

  @media (max-width: 1240px) {
    .content {
      position: static;
      display: flex;
      flex-direction: column;

      article {
        position: static;
        width: 100%;
      }
    }
  }

  @media (max-width: 960px) {
    padding: 5rem;

    .content article {
      padding: 2rem;
      border: 1px solid rgb(152, 47, 140);
      border-top: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 2.5rem;
  }
`;

export const CreationsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 15rem;

  .content {
    /* background-color: #eee; */
    display: flex;
    flex-direction: column;
    width: 100%;

    div.header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        font-size: 3rem;
        text-transform: uppercase;
      }

      button {
        font-family: 'Alata';
        letter-spacing: 3px;
        font-weight: 300;
        font-size: 1rem;
        text-transform: uppercase;

        width: 10rem;
        padding: 0.75rem 0;
        background-color: transparent;
        border: 1px solid var(--black);

        transition: all 0.2s ease;

        &:hover {
          cursor: pointer;
          background-color: var(--black);
          color: var(--white);
        }
      }
    }

    div.blocksWrapper {
      /* background-color: #ccc; */
      margin-top: 2rem;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2rem;
      justify-content: center;
    }
  }

  @media (max-width: 1480px) {
    .content div.header h3 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 1440px) {
    .content div.blocksWrapper {
      grid-gap: 1rem;
    }
  }

  @media (max-width: 1400px) {
    .content div.blocksWrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 960px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 2.5rem;

    .content div.blocksWrapper {
      grid-template-columns: 1fr;
    }
  }
`;

export const CreationItem = styled.article<{ imageUrl: string }>`
  width: 100%;
  height: 450px;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url('${({ imageUrl }) => imageUrl}');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: flex-end;
  padding: 1.5rem;

  cursor: pointer;

  h5 {
    color: var(--white);
    font-size: 1.65rem;
    text-transform: uppercase;
  }

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-8px);

    position: relative;

    ::before {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      content: '';
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(255, 255, 255, 0.4)
      );
    }
  }
`;
