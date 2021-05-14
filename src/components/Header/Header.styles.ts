import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
  height: 6rem;
  padding: 2rem 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    z-index: 3;
  }

  nav {
    display: flex;
    align-items: center;
    column-gap: 2rem;

    a {
      text-decoration: none;
      color: var(--white);
      font-size: 1.1rem;
      letter-spacing: 1px;
      transition: all 0.15s ease;

      &:hover {
        color: #eee;
      }
    }
  }

  @media (max-width: 1220px) {
    nav {
      column-gap: 1.5rem;
    }
  }

  @media (max-width: 960px) {
    padding: 2rem 5rem;
    nav {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 3rem;

    img {
      width: 130px;
    }
  }
`;

const fadeFromLeft = keyframes`
  from {
    opacity: 0.4;
    left: -100%;
  }

  to {
    opacity: 1;
    left: 0;
  }
`;

export const MobileIcon = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  display: none;
  cursor: pointer;
  z-index: 3;

  @media (max-width: 960px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  background-color: var(--black);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;

  animation: ${fadeFromLeft} 1s ease;
`;
