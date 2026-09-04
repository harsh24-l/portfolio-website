import { useState } from 'react';
import harshRaj from '../assets/images/harsh-raj.jpg';
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.png';
import project5 from '../assets/images/project-5.png';
import project6 from '../assets/images/project-6.png';
import project7 from '../assets/images/project-7.png';
import project8 from '../assets/images/project-8.jpg';
import project9 from '../assets/images/project-9.png';

const projects = [
  { title: 'Full-Stack Job Portal', category: 'Web development', image: project7, href: 'https://github.com/harsh24-l/full-stack-job-portal' },
  { title: 'Employee Management System', category: 'Web development', image: project2 },

];

const navItems = ['About', 'Education', 'Skills', 'Projects', 'Contact'];
const skills = [
  ['Programming Languages', 'Java, C++, C, JavaScript, TypeScript'],
  ['Frontend', 'React.js, HTML5, CSS3, Tailwind CSS'],
  ['Backend', 'Node.js, Express.js, REST APIs'],
  ['Databases', 'MongoDB, MySQL, SQL'],
  ['Core Computer Science', 'Data Structures, Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks'],
  ['Tools & Platforms', 'Git, GitHub, VS Code, Postman'],
  ['Cloud/Deployment', 'Vercel, Netlify, Render'],
];

function Icon({ name }) {
  return <ion-icon name={name} />;
}

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={harshRaj} alt="Harsh Raj" width="120" />
        </figure>
        <div className="info-content"><h1 className="name">Harsh Raj</h1><p className="title">Full-Stack Developer</p></div>
        <button className="info_more-btn" onClick={() => setIsOpen(!isOpen)}><span>Show contacts</span><Icon name="chevron-down" /></button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item"><div className="icon-box"><Icon name="mail-outline" /></div><div className="contact-info"><p className="contact-title">Email</p><a href="mailto:harsh1224.be23@chitkarauniversity.edu.in" className="contact-link">harsh1224.be23@chitkarauniversity.edu.in</a></div></li>
          <li className="contact-item"><div className="icon-box"><Icon name="phone-portrait-outline" /></div><div className="contact-info"><p className="contact-title">Phone</p><a href="tel:+91800251916" className="contact-link">+91 800251916</a></div></li>
          <li className="contact-item"><div className="icon-box"><Icon name="location-outline" /></div><div className="contact-info"><p className="contact-title">Location</p><address>India</address></div></li>
        </ul>
        <div className="separator" />
        <ul className="social-list"><li className="social-item"><a href="https://linkedin.com/in/harshu-raj" className="social-link" aria-label="LinkedIn"><Icon name="logo-linkedin" /></a></li><li className="social-item"><a href="https://github.com/harshu24-l" className="social-link" aria-label="GitHub"><Icon name="logo-github" /></a></li><li className="social-item"><a href="https://leetcode.com/u/harsh24_/" className="social-link" aria-label="LeetCode"><Icon name="code-slash-outline" /></a></li></ul>
      </div>
    </aside>
  );
}

function About() {
  const services = [['code-slash-outline', 'Web development', 'Responsive interfaces and full-stack applications with React, Node.js, and Express.'], ['server-outline', 'Backend APIs', 'Secure REST APIs with authentication, validation, and clear business logic.'], ['layers-outline', 'Problem solving', 'Data structures, algorithms, and practical engineering with an eye for detail.'], ['git-branch-outline', 'Clean delivery', 'Version-controlled projects deployed with GitHub and Vercel.']];
  return <><header><p className="eyebrow">Hello, I’m Harsh</p><h2 className="h2 article-title">Building useful things for the web.</h2></header><section className="about-text"><p>Motivated Computer Science undergraduate at Chitkara University with hands-on experience building full-stack web applications using JavaScript, React, Node.js, and modern web APIs.</p><p>I enjoy turning product ideas into reliable, intuitive experiences, from polished interfaces to secure APIs and well-structured databases.</p></section><section className="service"><h3 className="h3 service-title">What I’m doing</h3><ul className="service-list">{services.map(([icon, title, text]) => <li className="service-item" key={title}><div className="service-icon-box"><Icon name={icon} /></div><div className="service-content-box"><h4 className="h4 service-item-title">{title}</h4><p className="service-item-text">{text}</p></div></li>)}</ul></section></>;
}

function Resume() {
  return <><header><p className="eyebrow">The details</p><h2 className="h2 article-title">Resume</h2></header><section className="timeline"><div className="title-wrapper"><div className="icon-box"><Icon name="school-outline" /></div><h3 className="h3">Education</h3></div><ol className="timeline-list"><li className="timeline-item"><h4 className="h4 timeline-item-title">Chitkara University, Himachal Pradesh</h4><span>2023 — 2027</span><p className="timeline-text">Bachelor of Engineering in Computer Science and Engineering.</p></li><li className="timeline-item"><h4 className="h4 timeline-item-title">Loyola School, Bilaspur</h4><span>2021 — 2023</span><p className="timeline-text">Class 10th and 12th.</p></li></ol></section><section className="timeline"><div className="title-wrapper"><div className="icon-box"><Icon name="ribbon-outline" /></div><h3 className="h3">Certifications</h3></div><ol className="timeline-list"><li className="timeline-item"><h4 className="h4 timeline-item-title">Programming, systems, and development</h4><span>Completed</span><p className="timeline-text">Programming in C, Dart Programming, Red Hat Linux, DBMS and SQL, Network Fundamentals, and Mobile App Development using Flutter.</p></li></ol></section><section className="skill"><h3 className="h3 skills-title">Technical skills</h3><ul className="skills-list content-card">{skills.map(([name, value]) => <li className="skills-item" key={name}><div className="skill-name">{name}</div><p className="skill-values">{value}</p></li>)}</ul></section></>;
}

function Education() {
  return <><header><p className="eyebrow">Academic journey</p><h2 className="h2 article-title">Education</h2></header><section className="timeline"><div className="title-wrapper"><div className="icon-box"><Icon name="school-outline" /></div><h3 className="h3">Education</h3></div><ol className="timeline-list"><li className="timeline-item"><h4 className="h4 timeline-item-title">Chitkara University, Himachal Pradesh</h4><span>2023 — 2027</span><p className="timeline-text">Bachelor of Engineering in Computer Science and Engineering.</p></li><li className="timeline-item"><h4 className="h4 timeline-item-title">Loyola School, Bilaspur</h4><span>2021 — 2023</span><p className="timeline-text">Class 10th and 12th.</p></li></ol></section></>;
}

function Skills() {
  return <><header><p className="eyebrow">Technical toolkit</p><h2 className="h2 article-title">Skills</h2></header><section className="skill"><ul className="skills-list content-card">{skills.map(([name, value]) => <li className="skills-item" key={name}><div className="skill-name">{name}</div><p className="skill-values">{value}</p></li>)}</ul></section></>;
}

function Portfolio() {
  const [filter, setFilter] = useState('All');
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);
  return <><header><p className="eyebrow">Selected work</p><h2 className="h2 article-title">10 Projects</h2></header><section className="projects"><ul className="filter-list">{['All', 'Web development', 'Applications'].map((item) => <li className="filter-item" key={item}><button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button></li>)}</ul><ul className="project-list">{visibleProjects.map((project) => <li className="project-item active" key={project.title}><a href={project.href || '#'} target={project.href ? '_blank' : undefined} rel={project.href ? 'noreferrer' : undefined}><figure className="project-img"><div className="project-item-icon-box"><Icon name="open-outline" /></div><img src={project.image} alt={project.title} loading="lazy" /></figure><h3 className="project-title">{project.title}</h3><p className="project-category">{project.category}</p></a></li>)}</ul></section></>;
}

function Contact() {
  return <><header><p className="eyebrow">Let’s connect</p><h2 className="h2 article-title">Contact</h2></header><section className="contact-card"><div><h3 className="h3">Have a project in mind?</h3><p>Reach out for internships, collaborations, or conversations about building for the web.</p></div><a className="form-btn" href="mailto:harsh1224.be23@chitkarauniversity.edu.in"><Icon name="mail-outline" /><span>Email me</span></a></section><section className="contact-form"><h3 className="h3 form-title">Find me online</h3><div className="online-links"><a href="https://github.com/harshu24-l"><Icon name="logo-github" /> github.com/harshu24-l</a><a href="https://linkedin.com/in/harshu-raj"><Icon name="logo-linkedin" /> linkedin.com/in/harshu-raj</a><a href="https://leetcode.com/u/harsh24_/"><Icon name="code-slash-outline" /> leetcode.com/u/harsh24_/</a></div></section></>;
}

export default function App() {
  const [page, setPage] = useState('About');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const content = { About, Education, Skills, Projects: Portfolio, Contact }[page];
  const Page = content;
  return <main><Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} /><div className="main-content"><nav className="navbar"><ul className="navbar-list">{navItems.map((item) => <li className="navbar-item" key={item}><button className={`navbar-link ${page === item ? 'active' : ''}`} onClick={() => setPage(item)}>{item}</button></li>)}</ul></nav><article className="active"><Page /></article></div></main>;
}
