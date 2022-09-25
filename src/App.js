import logo from './logo.svg';
import './App.css';
import { BellIcon, FolderIcon, HeartIcon } from '@heroicons/react/24/solid'
import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useRef } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
function App() {
  const ref=useRef();
  useEffect(() => {
    Aos.init({
      duration : 2000
    });
    Aos.refresh();
  }, []);
  return (
    <div className="App">
      
      <div className="parallax">
      <Parallax pages={3} ref={ref}>
        
      <header className='flex items-center justify-between px-24  border-2 border-b-black' data-aos="zoom-in" data-aos-duration="1300">
        <p className="text-3xl border-r-2 border-black  p-4">Furnico.</p>

        <ul className='flex gap-6  '>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Companies</a></li>
          <li><a href="/">Product</a></li>
        </ul>
        <div className="flex items-center gap-6 p-6 border-l-2 border-black ">
          <BellIcon className="h-6 w-6 text-black" />
          <FolderIcon className="h-6 w-6 text-black" />
          <HeartIcon className="h-6 w-6 text-black" />
        </div>
      </header>
      <ParallaxLayer offset={0.12} speed={0.3} >
          <main className='flex  justify-center gap-5  min-h-[650px] border-b-2 border-b-black '>
        <div className=" flex flex-col justify-center items-center    border-r-2 border-black" data-aos="fade-left" data-aos-duration="1300">
          <h1 className='text-8xl pb-6 border-b-2 border-black w-full text-center mt-5 '>FURNITURE</h1>

          <img className='w-[560px] mt-5' src="https://images.pexels.com/photos/9171450/pexels-photo-9171450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <p className='text-md mt-3 max-w-[700px] tracking-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia quia accusantium culpa atque tempora, officiis dolores fugiat similique est  dolorum exercitationem molestiae ipsa.</p>
        </div>

        <div className=" flex flex-col justify-center mt-5 space-y-8 px-3" data-aos="fade-right" data-aos-duration="1300">
          <img className='w-[650px] ' src="https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h2 className='text-3xl font-bold'>CHOOSE YOUR FURNITURE</h2>
          <button className="border-2 border-black w-48 h-12 hover:bg-black hover:text-white">Shop Now</button>
        </div>
      </main>
      </ParallaxLayer>
    


      <ParallaxLayer offset={1.01} speed={0.4} >
      <div className='flex flex-col' data-aos="zoom-in">
        <h1 className='text-center text-5xl '>MAKE YOUR ROOM BETTER</h1>
        <video className='w-100 px-20 pt-12 ' autoPlay loop muted   >
          <source src="./chair.mp4" type="video/mp4" />
        </video>

        <div className="flex justify-between px-20 py-8">
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat modi nemo consectetur <br /> in at aspernatur reiciendis fugiat aliquam, neque delectus excepturi eligendi quae?</p>
          <button className='border-2 border-black w-36 hover:bg-black hover:text-white transition ease-in-out delay-80'>Explore</button>
        </div>
      </div>
      </ParallaxLayer>


      <ParallaxLayer offset={2} speed={0.3}  >
      <div className='bg-[#3F4346] min-h-screen text-white flex justify-center flex-col ' data-aos="fade-out" data-aos-duration="3000">
        <div className="flex justify-center items-center gap-12 ">
          <img src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
          <div className="flex flex-col gap-3">
            <h1 className='text-5xl'>CREATE MAGIC WORLD <br/> WITH OUR PROJECT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia odit dolorem.</p>
          </div>
        </div>
      </div> 
      </ParallaxLayer>
      </Parallax>
      </div>
    </div>
  );
}

export default App;
