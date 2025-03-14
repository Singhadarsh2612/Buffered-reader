import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TeamsPage.css';
import logoImage1 from '../assets/cse.png';
import logoImage2 from '../assets/logo.png';
import Navbar from './Navbar';
// Import all the professor images
import Ck_sir from '../assets/professor/ck_sir.jpg';
import Dr from '../assets/professor/dr.jpg';
import Pb_coFIC from '../assets/professor/pb_coFIC.jpg';
import Ps from '../assets/professor/ps.jpg';
import Sb_sir from '../assets/professor/sb_sir.jpg';


// Import all the student images
import Sk_student from '../assets/student/sk.jpg';
import AbhishekDas from '../assets/student/AbhishekDas.jpg';
import Anirban from '../assets/student/anirban.jpeg';
import Daksh from '../assets/student/Daksh.jpg';
import Deepika from '../assets/student/deepika.jpg';
import Divyanshu from '../assets/student/Divyanshu.jpg';
import Eshita from '../assets/student/eshita.jpg';
import Jatin from '../assets/student/Jatin.jpg';
import Kasam from '../assets/student/Kasam.jpg';
import Kshitiz from '../assets/student/Kshitiz.jpg';
import Monil from '../assets/student/Monil.jpg';
import NagaChaitanya from '../assets/student/Naga Chaitanya.jpg';
import Pragna from '../assets/student/pragna.jpg';
import Riya from '../assets/student/Riya.jpg';
import Rk from '../assets/student/rk.jpg';
import Robin from '../assets/student/Robin.jpg';
import Rohan from '../assets/student/Rohan.jpg';
import Saksham from '../assets/student/saksham.jpg';
import Samarth from '../assets/student/Samarth.jpg';
import Shacin from '../assets/student/shacin.jpg';
import Sharthak from '../assets/student/sharthak.jpg';
import Shashwat from '../assets/student/Shashwat.jpg';
import Shreyansh from '../assets/student/shreyansh.jpeg';
import Shyam from '../assets/student/shyam.jpg';
import Sumit from '../assets/student/sumit.jpg';
import Supreeth from '../assets/student/Supreeth.jpg';
import Suprith from '../assets/student/suprith.jpg';
import Sv from '../assets/student/sv.jpg';

const TeamsPage = () => {
  const [activeSection, setActiveSection] = useState('admin');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make navbar sticky when scrolling down
      setIsSticky(window.scrollY > 115);

      // Detect which section is in view
      const sections = ['admin', 'writers', 'designers', 'developers'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Function to capitalize the first letter of each word
  const capitalizeFirstLetter = (name) => {
    return name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  // Team members data
  const teamMembers = {
    admin: [
      { name: 'Prof. Chiranjeev Kumar', linkedin: 'https://www.linkedin.com/in/ck31101974/', photo: Ck_sir },
      { name: 'Prof. Soumen Bag', linkedin: 'https://www.linkedin.com/in/soumen-bag-43ab8370/', photo: Sb_sir },
      { name: 'Prof. Pranav Bisht', linkedin: 'https://www.linkedin.com/in/pranav-bisht-99157492/', photo: Pb_coFIC }
    ],
    writers: [
      { name: 'Sarthak Saumya', linkedin: 'https://in.linkedin.com/in/sarthak-saumya-b6b581227', photo: Sharthak },
      { name: 'Deepika Tanuvi', linkedin: 'https://in.linkedin.com/in/deepika-tanuvi-86b61622b', photo: Deepika },
      { name: 'Eshita Paliwal', linkedin: 'https://in.linkedin.com/in/eshita-paliwal', photo: Eshita },
      { name: 'Saksham Jha', linkedin: 'https://in.linkedin.com/in/saksham-jha-iitism', photo: Saksham },
      { name: 'Riya Kumari', linkedin: 'https://in.linkedin.com/in/riya-kumari1', photo: Riya },
      { name: 'Bitra Sri Pragna', linkedin: 'https://in.linkedin.com/in/sri-pragna-bitra-283b2b255', photo: Pragna },
      { name: 'Kshitiz Pratap Singh', linkedin: 'https://in.linkedin.com/in/kshitiz-pratap-singh-5b66bb24a', photo: Kshitiz },
      { name: 'Nanneboina Naga Chaitanya', linkedin: 'https://in.linkedin.com/in/naga-chaitanya-nanneboina', photo: NagaChaitanya },
      { name: 'Shyam Sunder', linkedin: 'https://www.linkedin.com/in/shyam-s-948767255/', photo: Shyam },
      { name: 'Sachin Rajguru', linkedin: 'https://in.linkedin.com/in/sachin-rajguru-611249296', photo: Shacin },
      { name: 'Rohan Garg', linkedin: 'https://in.linkedin.com/in/rohan-garg-1446-', photo: Rohan },
      { name: 'Sumit Kumar', linkedin: 'https://www.linkedin.com/in/sumit-kumar-b513102a4/', photo: Sumit }
    ],
    designers: [
      { name: 'Abhishek Prasad Das', linkedin: '#', photo: AbhishekDas },
      { name: 'Ketham Reddy Supreeth', linkedin: 'https://in.linkedin.com/in/supreeth-kethamreddy-189a50253', photo: Supreeth },
      { name: 'Daksh Mor', linkedin: 'https://in.linkedin.com/in/daksh-mor', photo: Daksh },
      { name: 'Divyanshu Singh', linkedin: 'https://www.linkedin.com/in/divyanshu-singh-9b73b2279/', photo: Divyanshu },
      { name: 'Kasam Pramodha', linkedin: 'https://in.linkedin.com/in/pramodha-kasam-4979ab289', photo: Kasam },
      { name: 'Samarth Jindal', linkedin: 'https://in.linkedin.com/in/samarth-jindal-1129a01b8', photo: Samarth },
      { name: 'Jatin Kumar', linkedin: 'https://in.linkedin.com/in/jatin-kumar-053b1a298', photo: Jatin },
      { name: 'Monil Chandgdhiya', linkedin: 'https://in.linkedin.com/in/monil-chandgadhiya-626600255', photo: Monil },
      { name: 'Robin Kumar', linkedin: 'https://in.linkedin.com/in/robin-kumar-0b522a300', photo: Robin }
    ],
    developers: [
      { name: 'Shreyansh Shandilya', linkedin: 'https://in.linkedin.com/in/shreyansh-shandilya-5a8b1b246', photo: Shreyansh },
      { name: 'Anirban Das', linkedin: 'https://in.linkedin.com/in/anirban-das-2014412b9', photo: Anirban },
      { name: 'Shashwat Nautiyal', linkedin: 'https://in.linkedin.com/in/shashwat-nautiyal-347458280', photo: Shashwat }
    ]
  };

  return (
    <div className="teams-container">
      {/* Navbar - Same as HomePage */}
      <Navbar/>

      {/* Team Header */}
      <div className="team-header">
        <h1>OUR TEAM</h1>
        <div className="team-nav">
          <div
            className={`team-nav-item ${activeSection === 'admin' ? 'active' : ''}`}
            onClick={() => scrollToSection('admin')}
          >
            ADMIN
          </div>
          <div
            className={`team-nav-item ${activeSection === 'writers' ? 'active' : ''}`}
            onClick={() => scrollToSection('writers')}
          >
            WRITERS
          </div>
          <div
            className={`team-nav-item ${activeSection === 'designers' ? 'active' : ''}`}
            onClick={() => scrollToSection('designers')}
          >
            DESIGNERS
          </div>
          <div
            className={`team-nav-item ${activeSection === 'developers' ? 'active' : ''}`}
            onClick={() => scrollToSection('developers')}
          >
            DEVELOPERS
          </div>
        </div>
      </div>

      {/* Team Sections with Pink Backgrounds */}
      <div className="team-sections">
        <section id="admin" className="team-section pink-bg">
          <div className="section-header admin-header">
            <h2>ADMIN</h2>
          </div>
          <div className="team-members">
            {teamMembers.admin.map((member, index) => (
              <div key={index} className="member-container">
                <div className="photo-container">
                  <img
                    src={member.photo}
                    alt={`${member.name} photo`}
                    className="member-photo"
                  />
                </div>
                <div className="member-info">
                  <h3>{capitalizeFirstLetter(member.name)}</h3>
                  <a href={member.linkedin} className="linkedin-link">LinkedIn</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="writers" className="team-section pink-bg">
          <div className="section-header writers-header">
            <h2>WRITERS</h2>
          </div>
          <div className="team-members">
            {teamMembers.writers.map((member, index) => (
              <div key={index} className="member-container">
                <div className="photo-container">
                  <img
                    src={member.photo}
                    alt={`${member.name} photo`}
                    className="member-photo"
                  />
                </div>
                <div className="member-info">
                  <h3>{capitalizeFirstLetter(member.name)}</h3>
                  <a href={member.linkedin} className="linkedin-link">LinkedIn</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="designers" className="team-section pink-bg">
          <div className="section-header designers-header">
            <h2>DESIGNERS</h2>
          </div>
          <div className="team-members">
            {teamMembers.designers.map((member, index) => (
              <div key={index} className="member-container">
                <div className="photo-container">
                  <img
                    src={member.photo}
                    alt={`${member.name} photo`}
                    className="member-photo"
                  />
                </div>
                <div className="member-info">
                  <h3>{capitalizeFirstLetter(member.name)}</h3>
                  <a href={member.linkedin} className="linkedin-link">LinkedIn</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="developers" className="team-section pink-bg">
          <div className="section-header developers-header">
            <h2>DEVELOPERS</h2>
          </div>
          <div className="team-members">
            {teamMembers.developers.map((member, index) => (
              <div key={index} className="member-container">
                <div className="photo-container">
                  <img
                    src={member.photo}
                    alt={`${member.name} photo`}
                    className="member-photo"
                  />
                </div>
                <div className="member-info">
                  <h3>{capitalizeFirstLetter(member.name)}</h3>
                  <a href={member.linkedin} className="linkedin-link">LinkedIn</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>CSE Society: IIT ISM<br /> Dhanbad</p>
      </footer>
    </div>
  );
};

export default TeamsPage;
