import React from 'react';

import PageTitle from './PageTitle';

// import { HiArrowRight } from 'react-icons/hi';
// import { RiExternalLinkLine } from 'react-icons/ri';

import et from '../images/about/et.jpeg';


const About  = () => {

  return (
    <section className="flex justify-center">
        <PageTitle title='About - Eszter Tóth Digital Product Engineer'></PageTitle>
        <article className="w-11/12 md:w-4/6 mx-auto my-24 flex flex-col md:flex-row gap-12">
            <header className="w-full md:w-1/5 text-center grid">
                
                <img src={et} alt="Screenshot of the website about data-driven design" className="drop-shadow-2xl rounded-full -scale-x-100 w-3/5 md:w-full justify-items-center mx-auto" />

            </header>
        
            <section className="w-full md:w-4/5 font-kumbh font-normal text-xl px-8 leading-8 antialiased select-none flex flex-col space-y-4 text-justify">
                <h1 className="font-bold mb-10 text-transparent text-8xl bg-clip-text bg-gradient-to-br from-vivamagenta-800 to-vivapurple-800">Hi there! </h1>

                <p>I'm Eszter, a passionate and dedicated UI/UX designer with over a decade of experience in the field.
                     Throughout my career, I've had the incredible opportunity to work on a wide range of projects and collaborate with diverse teams to create designs that truly put users at the center.

                    I've always been drawn to the wonderful blend of art, computers and psychology, which eventually led me down the path of digital design.
                </p>

                <p>To give you a bit of background, I actually started my journey as a web designer 12 years ago, designing websites and graphics. However, over the past 6 years, my role has naturally transitioned into the captivating world of UX. I've continued to learn and grow because I genuinely enjoy it.

                </p>

                <p>Over the years, I've honed my skills in wireframing, prototyping, and creating user interfaces that are intuitive and delightful. Understanding user behavior and psychology has been a key factor in crafting designs that not only look visually appealing but also satisfies the users' needs.
                I enjoy participating in all stages of the process, including business analytics, user research, user experience & user interface design and web development.
                </p>


                <p>But what really keeps my passion for design is my love for learning and staying up to date with new technologies.


                In recent years, I have observed a decline in the demand for custom creative UI design due to the popularity of UI libraries like Google Material design. Therefore, I recognised the need to continuously expand my skillset to include emerging technologies such as machine learning, AI and Data Science.
                That's why I'm currently pursuing a distance learning <strong>BSc in Computer Science</strong> with a strong focus on Data Science and Machine Learning. 
                </p>

                <p>Let's create something amazing together! 🚀</p>

                <p className='text-left'>You can find me on <a href="https://www.linkedin.com/in/testimo/" target='_blank' rel="noreferrer" className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-vivamagenta-800 to-vivapurple-800'>LinkedIn</a> <br/>or drop me an email at <a href="mailto:eszter@teszter.com" rel="nofollow" className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-vivamagenta-800 to-vivapurple-800'>eszter@teszter.com</a>.
                </p>


                

                
            </section>

        </article>

    </section>
    );
}

export default About;








