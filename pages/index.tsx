import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import morning from '../public/Images/morning.jpg';
import night from '../public/Images/night.jpg';
import Clock from './clock'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
return(
  <>
  <Clock />
  </>
)
}
