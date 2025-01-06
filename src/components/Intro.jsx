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
          My name is Fahad Ahmed, and I'm a <span>second-year student</span> at the 
          University of Guelph, where I'm diving into the world of <span>Computer 
          Science</span>. My passion for technology isn't new; it started back in high 
          school. Back then, I began coding, which opened up a new realm of possibilities 
          for me. I joined various clubs and took part in hackathons, challenging myself 
          and learning with every new project.
        </p>
        <p>
           In my journey through computer science, I've learned to treasure the 
           process of <span>problem-solving and innovation.</span> Coding has become more than 
           just a skill for me; it's a way to bring ideas to life and to explore new 
           ways of thinking and creating. My experiences in clubs and hackathons have 
           not only sharpened my technical abilities but also taught me the value of  
           <span> collaboration and shared vision.</span>
        </p>
        <p>
           As I continue pursuing my academic and personal journey, I remain excited about uncovering
           <span> new</span> knowledge and skills, both within computer science and in my interests 
           outside of it. My goal is to keep expanding my capabilities, learning from <span>every experience</span>, 
           and embracing the 
           challenges that come my way!
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
