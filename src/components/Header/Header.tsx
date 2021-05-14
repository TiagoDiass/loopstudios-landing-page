import { useState } from 'react';
import * as S from './Header.styles';

export default function Header() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

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

      <S.MobileIcon onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}>
        {isMobileMenuOpened ? (
          <img src='/images/icon-close.svg' alt='Open menu' />
        ) : (
          <img src='/images/icon-hamburger.svg' alt='Close menu' />
        )}
      </S.MobileIcon>

      {isMobileMenuOpened && <S.MobileMenu></S.MobileMenu>}
    </S.HeaderContainer>
  );
}
