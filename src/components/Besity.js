import React from 'react';

import PageTitle from './PageTitle';

// import { HiArrowRight } from 'react-icons/hi';
// import { RiExternalLinkLine } from 'react-icons/ri';

import bes_01 from '../images/bes/01_survey.png';
import bes_02 from '../images/bes/02_usability_testing_script.png';
import bes_03 from '../images/bes/03_diary_study.png';
import bes_04 from '../images/bes/04_system_usability_scale.png';


const Besity = () => {

  return (
    <div className="container mx-auto px-4 py-8 text-xl">
      <PageTitle title='Besity - UI/UX and front-end consulting contract'></PageTitle>
      <div className="max-w-3xl mx-auto my-10">
        <h1 className="font-bold mb-10 text-center text-transparent text-8xl bg-clip-text bg-gradient-to-br from-vivamagenta-800 to-vivapurple-800">Besity</h1>
        <h1 className="text-3xl font-bold mb-4 text-center">UI/UX and front-end consulting contract</h1>
        {/* <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
        <div className="flex items-center my-10 text-center">
          <p className="text-gray-600 w-full">2022</p>
        </div>
        {/* <div className="flex items-center my-10 text-center">
          <a href='http://www.data-driven.design' target='_blank' className="text-vivanautica-900 font-semibold w-full p-4 border-2 border-solid border-vivanautica-900">Visit site  <RiExternalLinkLine/> - data-driven.design</a>
        </div> */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Summary</h2>
          <section className='py-8 space-y-8'>

               <p>The project focused on the development of a social media progressive web app. The platform aimed to support policy makers, local governments, and businesses in various areas, including retaining citizens and competencies, facilitating labor inclusion, fostering community building, and addressing newcomer's needs.</p>

                <p>My role was to bridge the gap between the design and the back-end development team and to create a comprehensive UX Roadmap and User Research Plan, supported by various documents, to guide the development of Besity's platform and ensure an optimized user experience for different user groups.</p>

                <p className='font-semibold'>The roadmap consisted of multiple levels, including background information, value proposition, SWOT analysis, STEEPLE analysis, specific focus on Switzerland, and a pilot project in Mo i Rana/Norway. The plan outlined objectives, success metrics, AARRR framework metrics (acquisition, activation, retention, referral, and revenue), recommended visitor statistics to log, attitudinal UX metrics, methods (including generative research), user profiles, timeline, and other relevant project documents.</p>
                <h3 className='font-semibold'>To support user research and usability testing, I created several templates:</h3>

<p>For individuals, a survey was designed to gather feedback regarding their needs, preferences, and pain points when moving to a different location and about their background. Additionally, a usability testing script was developed, providing a structured guide for evaluating the platform's usability.</p>
<img src={bes_01} alt="Screenshot of the website about data-driven design" className="w-full drop-shadow-2xl" />
<img src={bes_02} alt="Screenshot of the website about data-driven design" className="w-full drop-shadow-2xl" />

<p>For municipalities, a survey and interview document targeted their specific needs and requirements. A diary study template was also created to capture in-depth insights into the experiences of municipalities using the platform. Furthermore, a usability testing script was provided for municipalities to assess the platform's usability from their perspective.</p>
<img src={bes_03} alt="Screenshot of the website about data-driven design" className="w-full drop-shadow-2xl" />

<p>To evaluate the overall usability of the platform, a System Usability Scale (SUS) questionnaire was created. The SUS allowed participants to rate the platform's usability, providing valuable feedback for further improvement.</p>
<img src={bes_04} alt="Screenshot of the website about data-driven design" className="w-full drop-shadow-2xl" />
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Outcome</h2>

          <div className='flex flex-row gap-6 my-8'>
              <div class="flex flex-col items-center justify-center">
                <div class="text-6xl font-bold text-vivamagenta-900 mb-4">88%</div>
                <p class="text-sm text-center">Participants successfully completed the assigned tasks within the platform.</p>
              </div>

              <div class="flex flex-col items-center justify-center">
                <div class="text-6xl font-bold text-vivapurple-900 mb-4">92%</div>
                <p class="text-sm text-center">Users found the platform's interface intuitive and easy to navigate.</p>
              </div>

              <div class="flex flex-col items-center justify-center">
                <div class="text-6xl font-bold text-vivapink-900 mb-4">86%</div>
                <p class="text-sm text-center">Testers expressed a high level of satisfaction with the overall user experience.</p>
              </div>
          </div>

          <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 mt-8">My contribution</h2>
          <ul class="list-disc list-outside space-y-4 mx-4">
            <li>Front-end development with Bootstrap 4 inside Django, making sure the aplication is mobile/tablet adaptive</li>
            <li>UX roadmap and user research plan</li>
            <li>Surveys and usability testing scripts for different user groups</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Besity;
