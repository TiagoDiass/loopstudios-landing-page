import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 15rem;
  height: 12rem;
  background-color: var(--black);

  .content {
    /* background-color: #fff3; */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .leftBlock,
    .rightBlock {
      height: 100%;
      width: 50%;
    }

    .leftBlock {
      /* background-color: #7154; */
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;

      nav {
        display: flex;
        align-items: center;
        column-gap: 2rem;

        a {
          text-decoration: none;
          color: var(--white);
          font-size: 1rem;
          letter-spacing: 1px;
          transition: all 0.15s ease;

          &:hover {
            color: #eee;
          }
        }
      }
    }

    .rightBlock {
      /* background-color: #7154; */
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      ul {
        display: flex;
        column-gap: 1.4rem;
        align-items: center;
        list-style: none;

        li {
          transition: all 0.15s ease;
        }

        li:hover {
          transform: translateY(-2px);
        }
      }

      p {
        letter-spacing: 1px;
        color: #fff8;
      }
    }
  }
`;
