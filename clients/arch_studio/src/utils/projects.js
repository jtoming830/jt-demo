import projectDelSolImg from '../assets/portfolio/desktop/image-del-sol.jpg'
import tower228bImg from '../assets/portfolio/desktop/image-228b.jpg'
import prototypeImg from '../assets/portfolio/desktop/image-prototype.jpg'
import edelweissImg from '../assets/portfolio/desktop/image-edelweiss.jpg'
import eeboxImg from '../assets/portfolio/desktop/image-eebox.jpg'
import federalImg from '../assets/portfolio/desktop/image-federal.jpg'
import hypersImg from '../assets/portfolio/desktop/image-hypers.jpg'
import netcryImg from '../assets/portfolio/desktop/image-netcry.jpg'
import paramourImg from '../assets/portfolio/desktop/image-paramour.jpg'
import seraphImg from '../assets/portfolio/desktop/image-seraph.jpg'
import sxivImg from '../assets/portfolio/desktop/image-sxiv.jpg'
import trinityImg from '../assets/portfolio/desktop/image-trinity.jpg'

const allProjects = [
  {
    key: 'seraph',
    img: seraphImg,
    title: 'Seraph Station',
    date: 'September 2019'
  },
  {
    key: 'eebox',
    img: eeboxImg,
    title: 'Eebox Building',
    date: 'August 2017'
  },
  {
    key: 'federal',
    img: federalImg,
    title: 'Federal II Tower',
    date: 'March 2017'
  },
  {
    key: 'projectDelSol',
    featured: true,
    img: projectDelSolImg,
    title: 'Project Del Sol',
    date: 'Januar 2016'
  },
  {
    key: 'tower228b',
    featured: true,
    img: tower228bImg,
    title: '228B Tower',
    date: 'April 2015'
  },
  {
    key: 'prototype',
    featured: true,
    img: prototypeImg,
    title: 'Le Prototype',
    date: 'October 2015'
  },
  {
    key: 'edelweiss',
    img: edelweissImg,
    title: 'Grand Edelweiss Hotel',
    date: 'December 2013'
  },
  {
    key: 'netcry',
    img: netcryImg,
    title: 'Netcry Tower',
    date: 'August 2012'
  },
  {
    key: 'hypers',
    img: hypersImg,
    title: 'Hypers',
    date: 'Januar 2012'
  },
  {
    key: 'sxiv',
    img: sxivImg,
    title: 'SXIV Tower',
    date: 'March 2011'
  },
  {
    key: 'trinity',
    img: trinityImg,
    title: 'Trinity Bank Tower',
    date: 'September 2010'
  },
  {
    key: 'paramour',
    img: paramourImg,
    title: 'Project Paramour',
    date: 'February 2008'
  }
]

export const featuredProjects = allProjects.filter(({ featured }) => featured)
export const portfolioProjects = allProjects.sort((a, b) => new Date(a.date) > new Date(b.date))
