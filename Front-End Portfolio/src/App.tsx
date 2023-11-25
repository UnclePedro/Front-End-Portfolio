//import { useState } from 'react';
import styles from './App.module.css';
import headshot from '/Users/peter/Documents/VS Code Files/231125 - Front-End Portfolio/Front-End Portfolio/src/assets/temp-headshot.jpeg';

// need to fix font weight issues

function App() {
  return (
    <>
      <header className={'flex flex-col justify-center items-center p-4 w-full h-screen'}>
        <h1 className={styles['app-heading']}>
          Hi, I'm Peter<span className={'text-yellow-300'}>.</span>
        </h1>
        <p className={'text-4xl'}>
          <span className={'text-yellow-300 font-extrabold animate-pulse'}>&gt;</span> Welcome to my front-end portfolio
        </p>
      </header>

      <body>
        <div className={'rotate-90 pl-10'}>
          <span className={'flex justify-center text-yellow-300 font-extrabold text-5xl w-screen fixed -mx-20'}>
            &gt;
          </span>
        </div>

        <div className={'flex justify-center'}>
          <div className={'w-[650px]'}>
            <h2 className="text-6xl font-semibold">
              <span className={'text-yellow-300 font-extrabold'}>&gt;</span> About Me
            </h2>
            <p className={'text-3xl my-8 font-regular'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam
              eleifend accumsan ultrices.
            </p>
            <p className={'text-2xl my-8'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam
              eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet
              consectetur felis quis porta. Nam eleifend accumsan ultrices.
            </p>
            <div className={'flex'}>
              <ol className={'text-2xl my-8'}>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> JavaScript
                </li>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> React
                </li>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> Node.js
                </li>
              </ol>
              <ol className={'text-2xl my-8 inline-flex flex-col pl-20'}>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> TypeScript
                </li>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> Tailwind
                </li>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> HTML
                </li>
              </ol>
            </div>
          </div>
          <img src={headshot} alt="headshot" className={'flex flex-end h-[620px] pl-16 pt-24'} />
        </div>
      </body>
    </>
  );
}

export default App;
