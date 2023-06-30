import React from 'react';

import PageTitle from './PageTitle';

// import { HiArrowRight } from 'react-icons/hi';
import { RiExternalLinkLine } from 'react-icons/ri';

import ddd_01 from '../images/datadrivendesign/screen_ddd.png';
import ddd_02 from '../images/datadrivendesign/screen_author_dashboard.png';
import ddd_03 from '../images/datadrivendesign/screen_article_editor.png';
import ddd_04 from '../images/datadrivendesign/ddd_interaction.gif';
import ddd_05 from '../images/datadrivendesign/screen_article.png';


const DataDrivenDesign = () => {

  return (
    <div className="container mx-auto px-4 py-8 text-xl">
      <PageTitle title='Data Driven Design - Articles for data enthusiast designers'></PageTitle>
      <div className="max-w-3xl mx-auto my-10">
        <h1 className="font-bold mb-10 text-center text-transparent text-8xl bg-clip-text bg-gradient-to-br from-vivamagenta-800 to-vivapurple-800">Data Driven Design</h1>
        <h1 className="text-3xl font-bold mb-4 text-center">Design and development of ChatGPT supported blog motor with Django, React and Tailwind</h1>
        {/* <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
        <div className="flex items-center my-10 text-center">
          <p className="text-gray-600 w-full">May 2023</p>
        </div>
        <div className="flex items-center my-10 text-center">
          <a href='http://www.data-driven.design' target='_blank' rel="noreferrer" className="text-vivanautica-900 font-semibold w-full p-4 border-2 border-solid border-vivanautica-900">Visit site  <RiExternalLinkLine/> - data-driven.design</a>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Summary</h2>
          <p className='py-8'>
            I created a blog motor for myself to write about data driven design. I used Django as a backend, React as a frontend and Tailwind as a CSS framework.
          </p>
          <p className='flex flex-col gap-20'>
            <img src={ddd_01} alt="Screenshot of the website about data-driven design" className="w-full drop-shadow-2xl" />
            <img src={ddd_05} alt="Screenshot of the website about data-driven design" className="w-full drop-shadow-2xl" />
            <img src={ddd_02} alt="Screenshot of the website about data-driven design" className="w-full drop-shadow-2xl" />
            <img src={ddd_03} alt="Screenshot of the website about data-driven design" className="w-full drop-shadow-2xl" />
            <img src={ddd_04} alt="Screenshot of the website about data-driven design" className="w-full drop-shadow-2xl" />
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-4">Tech stack</h2>
        <div className="rounded-md">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
                <span className="text-center block">Django</span>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
                <span className="text-center block">React</span>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
                <span className="text-center block">Tailwind</span>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
                <span className="text-center block">PostgreSQL</span>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
                <span className="text-center block">ChatGPT API</span>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
                <span className="text-center block">Heroku</span>
              </div>
            </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 mt-8">Learnings</h2>
          <ul class="list-disc list-outside space-y-4 mx-4">
            <li>Django setup</li>
            <li>Plugging in React and Tailwind frontend into Django backend environment</li>
            <li>Separating the Blog Author Admin interface with Django authentication and React Routing</li>
            <li>Adding TinyMCE text editor to the interface</li>
            <li>Front-end development with React, Tailwind and DaisyUI</li>
            <li>Adding ChatGPT API to TinyMCE text editor</li>
            <li>Adding and retrieving articles to/from database through React front-end interface</li>
            <li>Securely connecting to Heroku's PostgreSQL database with environment variables</li>
            <li>Deploying the app to Heroku</li>
            <li>'whitenoise' setup to serve static files on Heroku</li>
            <li>Version control with Github</li>
            <li>Automatic deployment to Heroku with Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataDrivenDesign;
