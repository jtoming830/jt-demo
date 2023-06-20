import projectDelSolImgDesktop from 'assets/portfolio/desktop/image-del-sol.jpg'
import projectDelSolImgTablet from 'assets/portfolio/tablet/image-del-sol.jpg'
import projectDelSolImgMobile from 'assets/portfolio/mobile/image-del-sol.jpg'

import tower228bImgDesktop from 'assets/portfolio/desktop/image-228b.jpg'
import tower228bImgTablet from 'assets/portfolio/tablet/image-228b.jpg'
import tower228bImgMobile from 'assets/portfolio/mobile/image-228b.jpg'

import prototypeImgDesktop from 'assets/portfolio/desktop/image-prototype.jpg'
import prototypeImgTablet from 'assets/portfolio/tablet/image-prototype.jpg'
import prototypeImgMobile from 'assets/portfolio/mobile/image-prototype.jpg'

import edelweissImgDesktop from 'assets/portfolio/desktop/image-edelweiss.jpg'
import edelweissImgTablet from 'assets/portfolio/tablet/image-edelweiss.jpg'
import edelweissImgMobile from 'assets/portfolio/mobile/image-edelweiss.jpg'

import eeboxImgDesktop from 'assets/portfolio/desktop/image-eebox.jpg'
import eeboxImgTablet from 'assets/portfolio/tablet/image-eebox.jpg'
import eeboxImgMobile from 'assets/portfolio/mobile/image-eebox.jpg'

import federalImgDesktop from 'assets/portfolio/desktop/image-federal.jpg'
import federalImgTablet from 'assets/portfolio/tablet/image-federal.jpg'
import federalImgMobile from 'assets/portfolio/mobile/image-federal.jpg'

import hypersImgDesktop from 'assets/portfolio/desktop/image-hypers.jpg'
import hypersImgTablet from 'assets/portfolio/tablet/image-hypers.jpg'
import hypersImgMobile from 'assets/portfolio/mobile/image-hypers.jpg'

import netcryImgDesktop from 'assets/portfolio/desktop/image-netcry.jpg'
import netcryImgTablet from 'assets/portfolio/tablet/image-netcry.jpg'
import netcryImgMobile from 'assets/portfolio/mobile/image-netcry.jpg'

import paramourImgDesktop from 'assets/portfolio/desktop/image-paramour.jpg'
import paramourImgTablet from 'assets/portfolio/tablet/image-paramour.jpg'
import paramourImgMobile from 'assets/portfolio/mobile/image-paramour.jpg'

import seraphImgDesktop from 'assets/portfolio/desktop/image-seraph.jpg'
import seraphImgTablet from 'assets/portfolio/tablet/image-seraph.jpg'
import seraphImgMobile from 'assets/portfolio/mobile/image-seraph.jpg'

import sxivImgDesktop from 'assets/portfolio/desktop/image-sxiv.jpg'
import sxivImgTablet from 'assets/portfolio/tablet/image-sxiv.jpg'
import sxivImgMobile from 'assets/portfolio/mobile/image-sxiv.jpg'

import trinityImgDesktop from 'assets/portfolio/desktop/image-trinity.jpg'
import trinityImgTablet from 'assets/portfolio/tablet/image-trinity.jpg'
import trinityImgMobile from 'assets/portfolio/mobile/image-trinity.jpg'

const allProjects = [
  {
    key: 'seraph',
    img: {
      desktop: projectDelSolImgDesktop,
      tablet: projectDelSolImgTablet,
      mobile: projectDelSolImgMobile
    },
    title: 'Seraph Station',
    date: 'September 2019'
  },
  {
    key: 'eebox',
    img: {
      desktop: tower228bImgDesktop,
      tablet: tower228bImgTablet,
      mobile: tower228bImgMobile
    },
    title: 'Eebox Building',
    date: 'August 2017'
  },
  {
    key: 'federal',
    img: {
      desktop: prototypeImgDesktop,
      tablet: prototypeImgTablet,
      mobile: prototypeImgMobile
    },
    title: 'Federal II Tower',
    date: 'March 2017'
  },
  {
    key: 'projectDelSol',
    featured: true,
    img: {
      desktop: edelweissImgDesktop,
      tablet: edelweissImgTablet,
      mobile: edelweissImgMobile
    },
    title: 'Project Del Sol',
    date: 'Januar 2016'
  },
  {
    key: 'tower228b',
    featured: true,
    img: {
      desktop: eeboxImgDesktop,
      tablet: eeboxImgTablet,
      mobile: eeboxImgMobile
    },
    title: '228B Tower',
    date: 'April 2015'
  },
  {
    key: 'prototype',
    featured: true,
    img: {
      desktop: federalImgDesktop,
      tablet: federalImgTablet,
      mobile: federalImgMobile
    },
    title: 'Le Prototype',
    date: 'October 2015'
  },
  {
    key: 'edelweiss',
    img: {
      desktop: hypersImgDesktop,
      tablet: hypersImgTablet,
      mobile: hypersImgMobile
    },
    title: 'Grand Edelweiss Hotel',
    date: 'December 2013'
  },
  {
    key: 'netcry',
    img: {
      desktop: netcryImgDesktop,
      tablet: netcryImgTablet,
      mobile: netcryImgMobile
    },
    title: 'Netcry Tower',
    date: 'August 2012'
  },
  {
    key: 'hypers',
    img: {
      desktop: paramourImgDesktop,
      tablet: paramourImgTablet,
      mobile: paramourImgMobile
    },
    title: 'Hypers',
    date: 'Januar 2012'
  },
  {
    key: 'sxiv',
    img: {
      desktop: seraphImgDesktop,
      tablet: seraphImgTablet,
      mobile: seraphImgMobile
    },
    title: 'SXIV Tower',
    date: 'March 2011'
  },
  {
    key: 'trinity',
    img: {
      desktop: sxivImgDesktop,
      tablet: sxivImgTablet,
      mobile: sxivImgMobile
    },
    title: 'Trinity Bank Tower',
    date: 'September 2010'
  },
  {
    key: 'paramour',
    img: {
      desktop: trinityImgDesktop,
      tablet: trinityImgTablet,
      mobile: trinityImgMobile
    },
    title: 'Project Paramour',
    date: 'February 2008'
  }
]

export const featuredProjects = allProjects.filter(({ featured }) => featured)
export const portfolioProjects = allProjects.sort((a, b) => new Date(a.date) > new Date(b.date))
