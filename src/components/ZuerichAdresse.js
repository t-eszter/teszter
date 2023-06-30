import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { RiExternalLinkLine } from 'react-icons/ri';
import PageTitle from './PageTitle';
import img_zuerichAddresse from '../images/zuerichAdresse/zuerichadresse.png';
import table from '../images/zuerichAdresse/table.png';
import search_result from '../images/zuerichAdresse/search_result.png';

const ZuerichAdresse = () => {

  return (
    <div className="container mx-auto px-4 py-8 text-xl">
      <PageTitle title='Zuerichadresse - Solving a problem by humanizing data'></PageTitle>
      <div className="max-w-3xl mx-auto my-10">
        <h1 className="font-bold mb-10 text-center text-transparent text-8xl bg-clip-text bg-gradient-to-br from-vivamagenta-800 to-vivapurple-800">Zuerichadresse </h1>
        <h1 className="text-3xl font-bold mb-4 text-center">Solving a problem by humanizing data, <br/>connecting numbers with people</h1>
        {/* <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
        <div className="flex items-center my-10 text-center">
          <p className="text-gray-600 w-full">May 2023</p>
        </div>
        <div className="flex items-center my-10 text-center">
          <a href='http://www.zuerichadresse.ch' target='_blank' rel='noreferrer' className="text-vivanautica-900 font-semibold w-full p-4 border-2 border-solid border-vivanautica-900">Visit site  <RiExternalLinkLine/> - zuerichadresse.ch</a>
        </div>
        <div className="mb-8">
          <img src={img_zuerichAddresse} alt="Screenshot of the website about addresses of Zürich" className="w-full drop-shadow-2xl" />
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Problem</h2>
          <p>
            Newcomers or Residents of Zürich want to find information related to their address. The information is only available in a .csv file that takes more than 10 minutes to generate, requires downloading and opening a file with 53k rows.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Use Case</h2>
          <p className="mb-10">
            Visitors of the website can search for their address and get information about their address in a user-friendly way, instead of generating, downloading and searching a csv file with 53k rows.
          </p>
          <div class="grid grid-cols-11 gap-4">
                <div class="col-span-5">
                  <img src={table} alt="Screenshot of a data table" className="w-full drop-shadow-2xl" />
                </div>
                <div class="col-span-1 flex items-center justify-center h-full">
                  <HiArrowRight/>
                </div>
                <div class="col-span-5">
                  <img src={search_result} alt="Screenshot of a data table" className="w-full drop-shadow-2xl" />
                </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Tech stack</h2>
        <div className="rounded-md">

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
                <span className="text-center block">node.js</span>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
                <span className="text-center block">PostgreSQL</span>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
                <span className="text-center block">Tailwind</span>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
                <span className="text-center block">Heroku</span>
              </div>
            </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 mt-8">Learnings</h2>
          <ul class="list-disc list-outside space-y-4 mx-4">
            <li>Mobile first design with TailwindCSS, adaptive to different screen sizes</li>
            <li>Setting up node.js and express app</li>
            <li>Creating a MySQl databse with csv upload</li>
            <li>Query database with node.js</li>
            <li>Making sure user query is not sensivite to special characters (o vs ö, s vs ß)</li>
            <li>Changing the database from MySQl to PostgreSQL</li>
            <li>Uploading the database to Heroku</li>
            <li>Setting up Heroku to serve the website</li>
            <li>Connecting domain registered on Siteground to Heroku, validating SSL certificate</li>
          </ul>
        </div>
        {/* <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <p>
            The results of your data analysis and the answer to the question. Explain any insights or conclusions drawn from the data.
          </p>
          <p>
            Answer: {answer}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ZuerichAdresse;
