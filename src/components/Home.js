import React from 'react'
import ReactLogo from './hero.svg';
import PageTitle from './PageTitle';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <PageTitle title='Eszter Tóth - Digital Product Designer'></PageTitle>
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center flex-wrap content-center my-28">
          <div className="w-9/12">
            <h2 className="text-4xl leading-normal">Hi, I'm <span className="inline-block text-extrabold ">Eszter</span>, <br />a digital product engineer<br />
                with a passion for data science and machine learning
            </h2>
            <h3 className='text-xl pt-10'>Creator of <a href='https://www.data-driven.design' target='_blank' rel="noreferrer" className="bg-gradient-to-r from-vivamagenta-900 to-vivamidnight-900 inline-block text-transparent bg-clip-text">data-driven.design</a></h3>
          </div>
       
    </div>
    <div id='herocontainer'><img id='hero' className="h-full w-auto relative left-20 top-6" src={ReactLogo} alt="React Logo" />
    </div>
    </div>
    <section className="flex flex-wrap justify-center bg-white px-4 sm:px-6 lg:px-8 pt-10">
        <h2 className="text-2xl block w-9/12 mb-6">Selected works</h2>
        <div className="grid gap-20 grid-cols-1 sm:grid-cols-2 w-9/12">
            <div className="w-auto">
              <Link to="/zuerichadresse" className="block">
                <div className="projectOne_img bg-vivamagenta-400 rounded p-6 h-60">
                </div>
                <h2 className="text-3xl font-semibold mt-6 mb-4">zuerichadresse.ch</h2>
                <p>A website to query your address to learn more about it.</p>
              </Link>
            </div>
            <div className="w-auto">
              <Link to="/data_driven_design" className="block">
                <div className="projectTwo_img bg-vivapurple-400 rounded p-6 h-60">
                </div>
                <h2 className="text-3xl font-semibold mt-6 mb-4">Data Driven Design</h2>
                    <p>Articles for data ethusiast digital designers</p>
                </Link>
            </div>
            <div className="w-auto">
            <Link to="/besity" className="block">
                <div className="projectThree_img bg-vivapurple-400 rounded p-6 h-60">
                </div>
                <h2 className="text-3xl font-semibold mt-6 mb-4">Besity</h2>
                    <p>UI/UX and front end consulting for social media startup</p>
                </Link>
            </div>

            {/* <div className="w-auto">
            <Link to="/besity" className="block">
                <div className="projectThree_img bg-vivapurple-400 rounded p-6 h-60">
                </div>
                <h2 className="text-3xl font-semibold mt-6 mb-4">ICOS 2</h2>
                    <p>Client Life Cycle Management App for Banking</p>
                </Link>
            </div>

            <div className="w-auto">
            <Link to="/besity" className="block">
                <div className="projectThree_img bg-vivapurple-400 rounded p-6 h-60">
                </div>
                <h2 className="text-3xl font-semibold mt-6 mb-4">RBS/Coutts</h2>
                    <p>New Client Onboarding</p>
                </Link>
            </div>

            <div className="w-auto">
            <Link to="/besity" className="block">
                <div className="projectThree_img bg-vivapurple-400 rounded p-6 h-60">
                </div>
                <h2 className="text-3xl font-semibold mt-6 mb-4">Leonteq E-Portal</h2>
                    <p>Investment Application</p>
                </Link>
            </div>

            <div className="w-auto">
            <Link to="/besity" className="block">
                <div className="projectThree_img bg-vivapurple-400 rounded p-6 h-60">
                </div>
                <h2 className="text-3xl font-semibold mt-6 mb-4">Swiss Re</h2>
                    <p>International Program Administration Application</p>
                </Link>
            </div> */}


            {/* <div className="w-auto">
                <div className="bg-vivamidnight-400 rounded p-6 h-60">
                </div>
                <h2 className="text-3xl font-semibold mt-6 mb-4">Title 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, culpa!</p>
            </div> */}
        </div>
        <div className='my-20 text-xl bg-vivamidnight-50'>
            <p className=' p-20'>
            For previous projects please visit previous <a href="https://past.teszter.com" target="_blank" rel="noreferrer" className="underline">Portfolio </a>. ☺
            </p>
        </div>
    </section>
    </div>
  );

}

export default Home;