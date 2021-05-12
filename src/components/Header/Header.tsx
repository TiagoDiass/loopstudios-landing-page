import * as S from './Header.styles';

export default function Header() {
  return (
    <S.HeaderContainer>
      <img src='/images/logo.svg' alt='Loopstudios' />
      <nav>
        <a href='#'>About</a>
        <a href='#'>Careers</a>
        <a href='#'>Events</a>
        <a href='#'>Products</a>
        <a href='#'>Support</a>
      </nav>
    </S.HeaderContainer>
  );
}
