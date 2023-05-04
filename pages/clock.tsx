import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import morning from '../public/Images/morning.jpg';
import night from '../public/Images/night.jpg';

const inter = Inter({ subsets: ['latin'] })



export default function Clock() {

  let [timeperhours,settimeperhours] = useState<string>();
  let [monthsperyear,setmonthsperyear] = useState<string>();
  let [flag,setflag] = useState<String|number>();
  let backgroundref = useRef<HTMLDivElement>(null!);
 


  
//Define times
  let Am:number|string;
  let hour:string|number ;
  let now ;
  let day;
  let year;
  let month;
  let minute:string|number;
  let secounds ;
  let sevenday ;

  //Define Arrays
  let daysofweek:String[] ;
  let monthsoftheyear:string[];
  
  
  let clocking = () => {
   
   now =  new Date();
   hour = now.getHours();
   day = now.getDate();
   year = now.getFullYear();
   month = now.getMonth() + 1;
   minute = now.getMinutes();
   secounds = now.getSeconds();
   sevenday = now.getDay();
  
  daysofweek= ['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];
  monthsoftheyear = ['January','Febuary','March','April',
  'May','June','July','August','September','October','November','December'];

  //Pm or Am
   Am= now.getHours();
  
  if(Am <= 11.99){
    Am = `AM`;
   
    backgroundref.current.style.backgroundImage = `url(${night.src})`;
  }else{
    Am = `pm`;
    backgroundref.current.style.backgroundImage = `url(${morning.src})`;
   }


 //convert hour to 12 hour
  if(hour == 12 || hour == 24 || hour == 0){
    hour =12;
  }else{
    hour = hour %12;
  } 
   //handel minuts
  if(minute <= 9){
    minute = `0${minute}`;
  }
  //handel Hours
  if(hour <= 9){
    hour = `0${hour}`;
  }

  //handel secounds

  if(secounds <= 9){
    secounds = `0${secounds}`;
  }
  

   //Time per hour minute secound Am
 let timing = `${hour}:${minute}:${secounds}` ;
 settimeperhours(timing);
  //today date
  
  let todaydates = `${daysofweek[sevenday]}, ${monthsoftheyear[month-1]} ${day}, ${year}`
  setmonthsperyear(todaydates);

  // Am or pm state

  setflag(Am);
  }

  

  //Update the Clock;
useEffect(() => {
  setInterval(function() {clocking()},900);
},[])


  
return (
  
    
    <div className="main" ref = {backgroundref} >

   <div className='clock'>
      <div className='todaydates'>{monthsperyear}</div>
      <div className='timing'>{timeperhours}<span> {flag}</span></div>
    </div>  
   </div>

  

  
    
  )
}
