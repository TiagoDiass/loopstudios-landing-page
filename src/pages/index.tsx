import Head from 'next/head';
import creations from '../content/creations';
import Header from '../components/Header/Header';
import * as S from '../styles/pages/home.styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Loopstudios | Home</title>
      </Head>
      <S.MainContainer>
        <S.HeroBanner>
          <Header />
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </S.HeroBanner>

        <S.SecondarySection>
          <div className='content'>
            <img
              src='/images/desktop/image-interactive.jpg'
              alt='Man using a VR device'
            />

            <article>
              <h2>THE LEADER IN INTERACTIVE VR</h2>

              <p>
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </article>
          </div>
        </S.SecondarySection>

        <S.CreationsSection>
          <div className='content'>
            <div className='header'>
              <h3>Our Creations</h3>

              <button>See all</button>
            </div>

            <div className='blocksWrapper'>
              {creations.map((creation, index) => (
                <S.CreationItem
                  key={index}
                  imageUrl={`/images/desktop/${creation.imageName}`}
                >
                  <h5>{creation.name}</h5>
                </S.CreationItem>
              ))}
            </div>
          </div>
        </S.CreationsSection>

        <div style={{ height: '25rem', background: 'tomato' }}></div>
      </S.MainContainer>
    </>
  );
}
