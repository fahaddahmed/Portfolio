import React from "react";
import logo from "../assets/cutebear.gif";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="introduction">
      <div className="intro-header">
        <div className="intro-text">
          <h3>Hi there! I'm</h3>
          <Typewriter
            options={{
              strings: ["Fahad Ahmed", "Second Year @UofG"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <img src={logo} alt="logo" className="logo-img"/>
      </div>

      {/* about yourself */}
      <div className="desc">
        <p>
        Hi! I am Fahad Ahmed, a <span>second-year</span> Computer Science student at the University of Guelph. 
        My interest in technology began in high school when I started coding. Working on my first project 
        got me interested in programming since then, and I joined different clubs and hackathons to push my 
        skills further!
        </p>
        <p>
        I love how computer science allows you to build a broad variety of passions. It's a versatile degree, 
        which allows me to not only learn about coding but also think of ways I can use my skills to build things 
        I'm interested in! Coding is not just a skill for me, but a way to bring concepts to life. As I continue my 
        studies, I plan to learn even more about computer science and other subjects. I hope 
        to keep growing from every challenge and explore all the possibilities ahead. 
        </p>
        <p>
        Feel free to click the buttons below to get to know me!
        </p>
      </div>

      {/* links */}
      <ul className="socials">
      <li>
          <a href="https://drive.google.com/file/d/109RKRleWe0abB12PRWUjtDUtpNC9cvbX/view?usp=sharing" target="_blank">
           <i class="ri-file-pdf-2-line"></i>
            <span> Resume</span>
          </a>
        </li>
        <li>
          <a href="mailto:fahadaahmed8@gmail.com" target="_blank">
            <i className="ri-mail-line"></i>
            <span> Gmail</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/fahaddahmed" target="_blank">
            <i className="ri-github-line"></i>
            <span> GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fahad-ahmdd/" target="_blank">
            <i className="ri-linkedin-fill"></i>
            <span> LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Intro;
