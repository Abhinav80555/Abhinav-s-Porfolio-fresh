import React from "react";
import rental from "../assets/portfolio/rental.jpg";
import dress from "../assets/portfolio/dress.jpg";
import chat from "../assets/portfolio/chat.jpg";
import blog from "../assets/portfolio/blog.jpg";
import { MdLaunch } from "react-icons/md";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: rental,
      name:"Rental App",
      link:"https://csb-131e48.netlify.app/",
      client:"https://github.com/Abhinav80555/client-final/tree/main/",
      server:"https://github.com/Abhinav80555/Server-TH"
    },
    {
      id: 2,
      src: chat,
      name:"Chat app",
      link:"https://umoja-mu.vercel.app/",
      client:"https://github.com/Abhinav80555/chat-frontend",
      server:"https://github.com/Abhinav80555/chat-backend"

    },
    {
      id: 3,
      src: dress,
      name:"Women Closet",
      link:"https://zippy-kitten-4cb4a0.netlify.app/",
      client:"https://github.com/Abhinav80555/dress-suggestion-frontend",
      server:"https://github.com/Abhinav80555/dress-suggestion-backend"
    },
    {
      id: 4,
      src: blog,
      name:"Freelance app",
      link:"https://frelanc.netlify.app/",
      client:"https://github.com/Abhinav80555/freelancing-frontend",
      server:"https://github.com/Abhinav80555/freelancing-backend"

    }
  ];

  return (
    <div
      name="projects"
      className="h-250 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-250 pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
          <h4 className="flex justify-center">Common credentials :</h4>
          <div className="flex flex-row justify-center">
            <span  className="group text-white w-fit px-4 py-1 my-1 mr-3 flex  items-center rounded-md bg-gradient-to-r from-slate-500 to-grey-500 ">username : test@gmail.com</span>
            <span  className="group text-white w-fit px-4 py-1 my-1 flex  items-center rounded-md bg-gradient-to-r from-slate-500 to-grey-500">password : 123456</span>
            </div>
            <div className="flex flex-row justify-center">
            <span  className="group text-white w-fit px-4 py-1 my-2 mr-3 flex  items-center rounded-md bg-gradient-to-r from-slate-500 to-grey-500 ">admin  :   admin@gmail.com</span>
            <span  className="group text-white w-fit px-4 py-1 my-2 flex  items-center rounded-md bg-gradient-to-r from-slate-500 to-grey-500">password  : 123456</span>
            </div>

        </div>
        
        

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,name,link,client,server}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={client}
              target="_blank"
              rel="noreferrer" 
               className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 text-cyan-500">
                 <span>client code</span>
                </a>
                <a 
                href={server}
              target="_blank"
              rel="noreferrer" 
              className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 text-cyan-500">
                  <span>server code</span>
                </a> 
              </div>
              <a 
              href={link}
              target="_blank"
              rel="noreferrer">
                <h4 className="group text-white mx-4 px-6 py-3 my-2 flex justify-center items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-105">
                {name}<MdLaunch size={20} className="ml-1"/></h4>
                </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
