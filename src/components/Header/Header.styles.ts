import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 6rem;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    nav {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`;
