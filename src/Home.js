import React, { useEffect, useRef, useState } from 'react';
import aboutImage from './img/about.gif';
import python from './img/html..png';
import java from './img/AI.png';
import git from './img/tool.png';
import Sinhala from './img/sinhala.jpg';
import stock from './img/stock.jpg';
import game from './img/2d.jpg';
import cleaning from './img/cleaning.jpg';
import courier from './img/courier.jpg';
import internship from './img/internship.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import heroImage from './img/myimg.png';
import StarField from './Component/StarField';


function Home() {
    const heromain = useRef(null);
    const heroImageRef = useRef(null);
    const aboutSection = useRef(null);
    const skillsSection = useRef(null);
    const projectsSection = useRef(null);
    const contactSection = useRef(null);
    const projectRefs = useRef([]);
    const sectionRefs = useRef([]);


    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let bgImages = [];
        let requestId;
        let isMoving = false;
        const inertiaFactor = 0.05;

        const handleMouseMove = (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            if (!isMoving) {
                isMoving = true;
                updatePositions();
            }
        };

        const updatePositions = () => {
            bgImages.forEach((image, index) => {
                const speed = (index + 1) * 0.4;

                // Adjusting movement direction based on index
                const directionX = index % 2 === 0 ? 1 : -1;
                const directionY = index % 2 === 0 ? -1 : 1;

                const currentTransform = image.style.transform.match(/translate\(([^)]+)\)/);
                const [currentX, currentY] = currentTransform ? currentTransform[1].split(',').map(parseFloat) : [0, 0];

                const targetX = mouseX * speed * 100 * directionX;
                const targetY = mouseY * speed * 100 * directionY;

                const newX = currentX + (targetX - currentX) * inertiaFactor;
                const newY = currentY + (targetY - currentY) * inertiaFactor;

                image.style.transform = `translate(${newX}px, ${newY}px)`;
            });

            if (isMoving) {
                requestId = requestAnimationFrame(updatePositions);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Capture the initial position of each image
        bgImages = document.querySelectorAll('.bg-image');

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestId);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const heroTextLines = heromain.current.querySelectorAll('.fade-line');
            const windowHeight = window.innerHeight;
            const heroSectionPosition = heromain.current.getBoundingClientRect().top;
            const baseDelay = 1000; // Adjust the base delay as needed (in milliseconds)

            if (heroSectionPosition < windowHeight - 200) {
                heroTextLines.forEach((line, index) => {
                    setTimeout(() => {
                        line.classList.add('fade-in');
                    }, baseDelay + index * 500); // Add the base delay to the index delay
                });
                setTimeout(() => {
                    heroImageRef.current.classList.add('fade-in');
                }, baseDelay + heroTextLines.length * 500); // Fade in the image after all text lines
            } else {
                heroTextLines.forEach((line) => {
                    line.classList.remove('fade-in');
                });
                heroImageRef.current.classList.remove('fade-in');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the scroll handler on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const sections = [heromain, aboutSection, skillsSection, projectsSection, contactSection];
            const windowHeight = window.innerHeight;

            sections.forEach((section) => {
                if (section.current) {
                    const sectionPosition = section.current.getBoundingClientRect().top;
                    if (sectionPosition < windowHeight - 300) {
                        section.current.classList.add('fade-in');
                    } else {
                        section.current.classList.remove('fade-in');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the scroll handler on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            sectionRefs.current.forEach((sectionRef) => {
                if (sectionRef) {
                    const sectionPosition = sectionRef.getBoundingClientRect().top;
                    if (sectionPosition < windowHeight - 100) {
                        sectionRef.classList.add('fade-up');
                    } else {
                        sectionRef.classList.remove('fade-up');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the scroll handler on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            projectRefs.current.forEach((projectRef) => {
                if (projectRef) {
                    const sectionPosition = projectRef.getBoundingClientRect().top;
                    if (sectionPosition < windowHeight - 100) {
                        projectRef.classList.add('fade-left');
                    } else {
                        projectRef.classList.remove('fade-left');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the scroll handler on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showSkillLists, setShowSkillLists] = useState(false);

    const toggleAllSkillLists = () => {
        setShowSkillLists(!showSkillLists);
    };

    return (
        <div>
            <StarField />
            <div>


                <section className="hero" id="home">
                    <div className="container">
                        <div className="row align-items-center hero-content">
                            <div className="col-lg-6 col-md-12 hero-text" ref={heromain}>
                                <p className="small fade-line">Hello, It's Me</p>
                                <h1>
                                    <div>
                                        <span className="fade-line big">Pavithra </span>
                                        <span className="big fade-line glow-hero-text">Ramanayake</span>
                                    </div>
                                </h1>
                                <br />
                                <p className="fade-line">I'm a Computer Science Undergraduate.</p>


                            </div>
                            <div className="col-lg-6 col-md-12 hero-image" ref={heroImageRef}>
                                <img src={heroImage} alt="Your Image" />

                            </div>
                        </div>
                        {/* Background images */}
                        <img src="https://www.sentient-portal.com/faces/javax.faces.resource/index/SH-Constellation-Lge.png?ln=img" alt="" className="bg-image fade-line glow-image " />
                        <img src="https://www.sentient-portal.com/faces/javax.faces.resource/index/SH-Constellation-Lge.png?ln=img" alt="" className="bg-image fade-line glow-image " />

                    </div>
                </section>


                <section className="about-me" ref={aboutSection} id="about">
                    <div className="container">
                        <h1 className="fade-up">About Me</h1>
                        <div className="row about-me-content">
                            <div className="col-md-6 about-me-text fade-left">
                                <h2 style={{ color: '#07b9f0', marginTop: '20px' }}>Who am I?</h2>
                                <br />
                                <p className="shine">
                                    I am an undergraduate at the University of Kelaniya, pursuing a BSc Honours degree in Computer Science. My academic background and projects have equipped me with a strong understanding of data structures, algorithms, software development, and machine learning. I have hands-on experience with technologies like JavaScript, React.js, Node.js, and MongoDB. I am seeking an internship to apply my skills and gain practical experience in a dynamic work environment. I am passionate about solving complex problems and creating innovative solutions, always eager to learn and grow.
                                    <center className='resume'>
                                        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
                                            <button className="button">
                                                <span className="button-content"><FontAwesomeIcon icon={faDownload} /> Get Resume</span>
                                            </button>
                                        </a>
                                    </center>
                                </p>

                            </div>
                            <div className="col-md-6 about-me-image fade-right">
                                <img src={aboutImage} alt="Profile Picture" className="img-fluid glow-image-white" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="skills" ref={skillsSection} id="skills">

                    <h1 className="fade-up">Skills

                    </h1>
                    <div class="skill-icons fade-up">
                        <div class="skill shine ">
                            <img src="https://skillicons.dev/icons?i=idea"></img>
                        </div>
                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=react"></img>
                        </div>

                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=bootstrap"></img>
                        </div>
                        <div class="skill shine ">
                            <img src="https://skillicons.dev/icons?i=mongodb"></img>
                        </div>
                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=c"></img>
                        </div>

                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=java"></img>
                        </div>
                        <div class="skill shine ">
                            <img src="https://skillicons.dev/icons?i=spring"></img>
                        </div>


                    </div>
                    <div class="skill-icons fade-up ">
                        <div class="skill shine ">
                            <img src="https://skillicons.dev/icons?i=git"></img>
                        </div>
                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=tensorflow"></img>
                        </div>

                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=html"></img>
                        </div>

                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=css"></img>
                        </div>
                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=php"></img>
                        </div>

                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=mysql"></img>
                        </div>
                        <div class="skill shine ">
                            <img src="https://skillicons.dev/icons?i=python"></img>
                        </div>


                    </div>

                </section>


                <section className="projects" ref={projectsSection} id="projects">
                    
                    <h2 className="section-title fade-up">Projects
                        <div id="line_l" className="line"></div>
                    </h2>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[1] = el)} className="project-section">
                                    <div className="project-content">
                                        

                                        <div className="hover-image-container">
                                            
                                            <img src={cleaning} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>Brightcleen Cleaning Services Website</h2>
                                                    <p>
                                                        This website is a group effort created for a fictional cleaning service company called Brightcleen. As beginners in web development, we aimed to keep the project simple yet effective, focusing on learning and implementing fundamental HTML, CSS, and JavaScript concepts.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>Web Project</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=html,js,css,php" alt="Tools" />
                                            <a href="https://github.com/Pavith00/cleaning_servicee_website.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[2] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={internship} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>University InternshipHub</h2>
                                                    <p>
                                                        This intuitive platform connects students, companies, and administrators, featuring profile creation, job search automation, skill-enhancing quizzes, and mentor videos. Built with React, Spring Boot, and MongoDB
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>Web Project</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=idea,react,bootstrap,mongodb" alt="Tools" />
                                            <a href="https://github.com/Pavith00/campus-internship-hub.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[3] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={courier} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>Courier-Management-System</h2>
                                                    <p>
                                                        This Courier Management System project aims to streamline and optimize courier operations by providing a digital platform(Desktop application) for managing shipments, tracking packages, and handling bills. The development and implementation of our courier service application in Visual Studio represents a significant step forward in streamlining and enhancing the efficiency of our courier service operations.                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>.Net Project</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=vscode,cs,k,j" alt="Tools" />
                                            <a href="https://github.com/Pavith00/COURIER_MANAGEMENT_SYSTEM.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[4] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={Sinhala} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>Sinhala character recognition system</h2>
                                                    <p>
                                                        This project is to create a Sinhala character recognition system using Convolutional Neural Networks (CNN).                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>Deep Learning</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=py,tensorflow,bootfstrap,mondgodb" alt="Tools" />
                                            <a href="https://github.com/Pavith00/Sinhala-character-recognition-system.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[5] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={stock} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>Stock price prediction system</h2>
                                                    <p>
                                                    Predict stock prices using LSTM Recurrent Neural Networks.                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>Deep Learning</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=py,tensorflow,bootfstrap,mondgodb" alt="Tools" />
                                            <a href="https://github.com/Pavith00/Stock-price-prediction-system.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[6] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={game} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>2D Game</h2>
                                                    <p>
                                                        Strawberry Quest is a simple 2D platformer game created using the Godot game engine. The objective of the game is for the player to navigate through the level, collect strawberries to increase their score, and reach the trophy to complete the level. I made this project to learn how to use GDScript in Godot for making 2D platform games.  </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>Gaming Project</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=godot,reafct,booftstrap,mongfodb" alt="Tools" />
                                            <a href="https://github.com/Pavith00/2dGame.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="contact" ref={contactSection} id="contact">
                    <h1 className="fade-up">Contact Me</h1>
                    <div className="contact-content">
                        <div className="contact-details">
                            <div className="container " ref={(el) => (sectionRefs.current[7] = el)}>
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="mailto:rmpramanayake@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="icon-lg" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://github.com/Pavith00"><FontAwesomeIcon icon={faGithub} className="icon-lg" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/pavithra-ramanayake-52918a251/"><FontAwesomeIcon icon={faLinkedin} className="icon-lg" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        </div>
    )
}

export default Home