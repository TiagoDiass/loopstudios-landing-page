import socialMedia from '../../content/socialMedia';
import * as S from './Footer.styles';

export default function Footer() {
  return (
    <S.Footer>
      <div className='content'>
        <div className='leftBlock'>
          <img src='/images/logo.svg' alt='Loopstudios' />
          <nav>
            <a href='#'>About</a>
            <a href='#'>Careers</a>
            <a href='#'>Events</a>
            <a href='#'>Products</a>
            <a href='#'>Support</a>
          </nav>
        </div>

        <div className='rightBlock'>
          <ul className='socialMediaLinks'>
            {socialMedia.map((socialMedia, index) => (
              <li key={index}>
                <a href='#' title={socialMedia.title}>
                  <img
                    src={`/images/${socialMedia.imageName}`}
                    alt={socialMedia.title}
                  />
                </a>
              </li>
            ))}
          </ul>

          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </S.Footer>
  );
}
