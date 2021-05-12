import Header from '../components/Header/Header';
import * as S from '../styles/pages/home.styles';

export default function Home() {
  return (
    <S.MainContainer>
      <S.HeroBanner>
        <Header />
        <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </S.HeroBanner>
    </S.MainContainer>
  );
}
