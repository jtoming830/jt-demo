import federalImgDesktop from 'assets/home/desktop/image-hero-federal.jpg'
import paramourImgDesktop from 'assets/home/desktop/image-hero-paramour.jpg'
import seraphImgDesktop from 'assets/home/desktop/image-hero-seraph.jpg'
import trinityImgDesktop from 'assets/home/desktop/image-hero-trinity.jpg'

import federalImgTablet from 'assets/home/tablet/image-hero-federal.jpg'
import paramourImgTablet from 'assets/home/tablet/image-hero-paramour.jpg'
import seraphImgTablet from 'assets/home/tablet/image-hero-seraph.jpg'
import trinityImgTablet from 'assets/home/tablet/image-hero-trinity.jpg'

import federalImgMobile from 'assets/home/mobile/image-hero-federal.jpg'
import paramourImgMobile from 'assets/home/mobile/image-hero-paramour.jpg'
import seraphImgMobile from 'assets/home/mobile/image-hero-seraph.jpg'
import trinityImgMobile from 'assets/home/mobile/image-hero-trinity.jpg'

export const items = [
  {
    key: 'paramour',
    img: {
      desktop: paramourImgDesktop,
      tablet: paramourImgTablet,
      mobile: paramourImgMobile
    },
    title: 'Project\nParamour',
    text: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.'
  },
  {
    key: 'seraph',
    img: {
      desktop: seraphImgDesktop,
      tablet: seraphImgTablet,
      mobile: seraphImgMobile
    },
    title: 'Seraph\nStation',
    text: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.'
  },
  {
    key: 'federal',
    img: {
      desktop: federalImgDesktop,
      tablet: federalImgTablet,
      mobile: federalImgMobile
    },
    title: 'Federal II\nTower',
    text: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.'
  },
  {
    key: 'trinity',
    img: {
      desktop: trinityImgDesktop,
      tablet: trinityImgTablet,
      mobile: trinityImgMobile
    },
    title: 'Trinity Bank\nTower',
    text: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.'
  }
]
