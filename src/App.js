import logo from './logo.svg';
import './App.css';
import { BellIcon,FolderIcon,HeartIcon } from '@heroicons/react/24/solid'

function App() {
  return (
    <div className="App">
      <header className='flex items-center justify-between px-24  border-2 border-b-black'>
        <p className="text-3xl border-r-2 border-black  p-4">Furnico.</p>

        <ul className='flex gap-6  '>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Companies</a></li>
          <li><a href="/">Product</a></li>
        </ul>
          <div className="flex items-center gap-6 p-6 border-l-2 border-black ">
          <BellIcon className="h-6 w-6 text-black" />
          <FolderIcon className="h-6 w-6 text-black"/>
          <HeartIcon className="h-6 w-6 text-black"/>
          </div>
      </header>

    <main className='flex  justify-center gap-5  min-h-[650px] '> 
      <div className=" flex flex-col justify-center items-center    border-r-2 border-black">
        <h1 className='text-8xl pb-6 border-b-2 border-black w-full text-center mt-5 '>FURNITURE</h1>


        <img className='w-[560px] mt-5' src="https://images.pexels.com/photos/9171450/pexels-photo-9171450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <p className='text-md mt-3 max-w-[700px] tracking-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia quia accusantium culpa atque tempora, officiis dolores fugiat similique est  dolorum exercitationem molestiae ipsa.</p>
      </div>

      <div className=" flex flex-col justify-center mt-5 space-y-8 px-3">
        <img className='w-[650px] ' src="https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h2 className='text-3xl font-bold'>CHOOSE YOUR FURNITURE</h2>
        <button className="border-2 border-black w-48 h-12">Shop Now</button>
      </div>
    </main>

    </div>
  );
}

export default App;
