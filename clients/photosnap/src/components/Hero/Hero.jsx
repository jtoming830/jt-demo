import { useContext, useEffect, useRef } from 'react'
import { Accent } from '../Accent'
import { styled } from 'styled-components'
import { Context } from 'context'
import { LinkButton } from '../LinkButton'

const Container = styled.div`
  margin-top: -1px;

  display: flex;
  flex-direction: ${(props) => (props.$reverse ? 'row-reverse' : 'row')};
  background: var(--black);

  &.light {
    background: var(--white);
  }
`

const DescriptionContainer = styled.div`
  flex-grow: 1;
  display: flex;
  height: fit-content;
  margin: auto;
`

const StyledAccent = styled(Accent)`
  height: unset;
  margin: 0;
`

const Description = styled.div`
  margin: auto;
  width: 400px;
`

const getSlideAnimation = (props) => (props.$reverse ? 'slide-right' : 'slide-left')

const Title = styled.h1`
  opacity: 0;

  color: var(--white);
  .light & {
    color: var(--black);
  }

  .in-viewport & {
    animation: 1.5s ${getSlideAnimation} forwards;
  }
`

const Text = styled.div`
  opacity: 0;

  color: var(--white-secondary);
  .light & {
    color: var(--black-secondary);
  }

  .in-viewport & {
    animation: 2s ${getSlideAnimation} 0.5s forwards;
  }
  margin-top: 20px;
`

const StyledLinkButton = styled(LinkButton)`
  margin-top: 48px;

  opacity: 0;
  .in-viewport & {
    animation: 2s ${getSlideAnimation} 1s forwards;
  }
`

const Image = styled.div`
  --img-url: url(${(props) => props.$img.desktop});
  --width: 55vw;
  --image-width: ${(props) => props.$imgSize.desktop.width};
  --image-height: ${(props) => props.$imgSize.desktop.height};

  @media only screen and (max-width: 1200px) {
    --img-url: url(${(props) => props.$img.tablet});
    --width: 35vw;
    --image-width: ${(props) => props.$imgSize.tablet.width};
    --image-height: ${(props) => props.$imgSize.tablet.height};
  }

  background: var(--img-url) no-repeat;
  width: var(--width);
  height: calc(var(--image-height) / var(--image-width) * var(--width));
  background-size: cover;

  opacity: 0;
  .in-viewport & {
    animation: 4s fade-in forwards;
  }
`

export function Hero({ img, title, text, reverse, light, accent, imgSize, linkText, linkTo }) {
  const ref = useRef()
  const { observer } = useContext(Context)

  useEffect(() => {
    const element = ref.current
    observer.observe(element)

    return () => observer.unobserve(element)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container
      ref={ref}
      className={light ? 'light' : ''}
      $reverse={reverse}
    >
      <DescriptionContainer>
        {accent && <StyledAccent vertical />}
        <Description>
          <Title $reverse={reverse}>{title}</Title>
          <Text $reverse={reverse}>{text}</Text>
          {linkTo && (
            <StyledLinkButton
              $reverse={reverse}
              light={!light}
              to={linkTo}
            >
              {linkText}
            </StyledLinkButton>
          )}
        </Description>
      </DescriptionContainer>
      <Image
        $img={img}
        $imgSize={imgSize}
      />
    </Container>
  )
}
