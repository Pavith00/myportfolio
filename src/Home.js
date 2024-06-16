import React, { useEffect, useRef, useState } from 'react';
import aboutImage from './img/about.gif';
import python from './img/html..png';
import java from './img/AI.png';
import git from './img/tool.png';
import Sinhala from './img/sinhala.jpg';
import stock from './img/stock.jpg';
import game from './img/2d.png';
import cleaning from './img/cleaning.jpg';
import courier from './img/courier.jpg';
import internship from './img/internship.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
                const speed = (index + 1) * 0.2;
                const currentTransform = image.style.transform.match(/translate\(([^)]+)\)/);
                const [currentX, currentY] = currentTransform ? currentTransform[1].split(',').map(parseFloat) : [0, 0];

                const targetX = mouseX * speed * 100;
                const targetY = mouseY * speed * 100;

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
                    if (sectionPosition < windowHeight - 200) {
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
                    <div className="hero-content">
                        <div className="hero-text" ref={heromain}>
                            <h1>
                                <div > <span className="small fade-line">I'm </span> <span className="fade-line big">Pavithra</span></div>
                                <div className="big fade-line glow-hero-text ">Ramanayake</div>
                            </h1>
                            <p className="fade-line">I'm the Unknown Developer.</p>
                        </div>
                        <div className="hero-image" ref={heroImageRef}>
                            <img src={heroImage} alt="Your Image" />
                        </div>
                        {/* Background images */}
                        <img src="https://skillicons.dev/icons?i=java" alt="" className="bg-image glow-image" />
                        <img src="https://skillicons.dev/icons?i=py" alt="" className="bg-image glow-image" />
                        <img src="https://skillicons.dev/icons?i=react" alt="" className="bg-image glow-image" />
                        <img src="https://skillicons.dev/icons?i=py" alt="" className="bg-image glow-image" />
                        <img src="https://skillicons.dev/icons?i=react" alt="" className="bg-image glow-image" />
                        <img src="https://skillicons.dev/icons?i=java" alt="" className="bg-image glow-image" />
                        <img src="https://skillicons.dev/icons?i=py" alt="" className="bg-image glow-image" />
                        <img src="https://skillicons.dev/icons?i=react" alt="" className="bg-image glow-image" />
                        <img src="https://skillicons.dev/icons?i=html" alt="" className="bg-image glow-image" />
                        <img src="https://skillicons.dev/icons?i=css" alt="" className="bg-image glow-image" />
                    </div>
                </section>


                <section className="about-me" ref={aboutSection} id="about">
                    <h1 className="fade-up">About Me
                        <div id="line_l" class="line"></div></h1>
                    <div className="about-me-content">
                        <div className="about-me-text fade-left">
                            <h2 style={{ color: '#1ab9b1', marginTop: '20px' }}>Who am I?</h2><br/>
                            <p>I am an undergraduate at the University of Kelaniya, pursuing a BSc Honours degree in Computer Science. My academic background and projects have equipped me with a strong understanding of data structures, algorithms, software development, and machine learning. I have hands-on experience with technologies like JavaScript, React.js, Node.js, and MongoDB. I am seeking an internship to apply my skills and gain practical experience in a dynamic work environment. I am passionate about solving complex problems and creating innovative solutions, always eager to learn and grow.</p>
                        </div>
                        <div className="about-me-image fade-right">
                            <img src={aboutImage} alt="Profile Picture" />
                        </div>
                    </div>
                </section>

                <section className="skills" ref={skillsSection} id="skills">

                    <h1 className="fade-up">Skills
                        <div id="line_l" class="line"></div>
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
                            <img src="https://skillicons.dev/icons?i=godot"></img>
                        </div>
                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=figma"></img>
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


                <section class="projects" ref={projectsSection} id="projects">
                    <h2 class="section-title fade-up">Projects
                        <div id="line_l" class="line"></div>
                    </h2>
                    <section ref={(el) => (sectionRefs.current[2] = el)} className="project-section">
                        <div className='project'>

                            <div className='project-content'>
                                <div className="hover-image-container">
                                    <img src={internship} alt="Hover" className="image" />
                                    <div className="overlay">
                                        <div className="text"> <h2>University InternshipHub</h2><br></br>
                                            Streamline your campus internship placement process with University InternshipHub. This intuitive platform connects students, companies, and administrators, featuring profile creation, job search automation, skill-enhancing quizzes, and mentor videos. Built with React, Spring Boot, and MongoDB
                                            <div className="tools">
                                                <img src="https://skillicons.dev/icons?i=idea,react,bootstrap,mongodb"></img>
                                                <a href="https://github.com/Pavith00/campus-internship-hub.git" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project-content'>
                                <div className="hover-image-container">
                                    <img src={cleaning} alt="Hover" className="image" />
                                    <div className="overlay">
                                        <div className="text"> <h2>
                                            Brightcleen Cleaning Services Website</h2><br></br>A collaborative HTML project for a fictional cleaning service, Brightcleen. This beginner-level website showcases fundamental HTML, CSS, and JavaScript skills through pages detailing residential and commercial cleaning services, a contact form, and basic navigation features.
                                            <div className="tools">
                                                <img src="https://skillicons.dev/icons?i=html,css,javascript,php"></img>
                                                <a href="https://github.com/Pavith00/cleaning_servicee_website.git" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section ref={(el) => (sectionRefs.current[3] = el)} className="project-section">
                        <div className='project'>

                            <div className='project-content'>
                                <div className="hover-image-container">
                                    <img src={game} alt="Hover" className="image" />
                                    <div className="overlay">
                                        <div className="text"> <h2>Strawberry Quest</h2><br></br>
                                            Strawberry Quest is a 2D platformer game built with Godot, focusing on collecting strawberries and reaching a trophy. Featuring basic platformer mechanics, simple scoring, and intuitive controls, it's an open-source project designed to teach GDScript and 2D game development.
                                            <div className="tools">
                                                <img src="https://skillicons.dev/icons?i=godot,cs"></img>
                                                <a href="https://github.com/Pavith00/2dGame.git" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project-content'>
                                <div className="hover-image-container">
                                    <img src={stock} alt="Hover" className="image" />
                                    <div className="overlay">
                                        <div className="text"> <h2>Stock price prediction system</h2><br></br>Developed a stock price prediction system using LSTM Recurrent Neural Networks. Implemented in Python with Colaboratory, this project leverages historical data to forecast future stock prices. Includes a comprehensive Jupyter Notebook and sample data for replication.
                                            <div className="tools">
                                                <img src="https://skillicons.dev/icons?i=colab"></img>
                                                <a href="https://github.com/Pavith00/Stock-price-prediction-system.git" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section ref={(el) => (sectionRefs.current[4] = el)} className="project-section">
                        <div className='project'>

                            <div className='project-content'>
                                <div className="hover-image-container">
                                    <img src={courier} alt="Hover" className="image" />
                                    <div className="overlay">
                                        <div className="text"> <h2>Courier Management System</h2><br></br>A desktop application developed in Visual Studio to optimize courier operations. Features include shipment management, package tracking, billing, and administrative tools. Utilizes Visual Basic .NET for the front-end, ASP.NET MVC and C# for the back-end, and SQL Server for the database.
                                            <div className="tools">
                                                <img src="https://skillicons.dev/icons?i=visualstudio,cs"></img>
                                                <a href="https://github.com/Pavith00/COURIER_MANAGEMENT_SYSTEM.git" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project-content'>
                                <div className="hover-image-container">
                                    <img src={Sinhala} alt="Hover" className="image" />
                                    <div className="overlay">
                                        <div className="text"> <h2>Sinhala character recognition system</h2><br></br>Developed a Sinhala character recognition system using Convolutional Neural Networks (CNN). This project enhances optical character recognition for the Sinhala language, improving text digitization accuracy and supporting the preservation of linguistic heritage.
                                            <div className="tools">
                                                <img src="https://skillicons.dev/icons?i=idea,nodejs,npm"></img>
                                                <a href="https://github.com/Pavith00/Sinhala-character-recognition-system.git" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>


                </section>


                <section className="contact" ref={contactSection} id="contact">
                    <h1 className="fade-up">Contact Me</h1>
                    <div className="contact-content">
                        <div className="contact-details">
                            <div className="container">
                                <ul>
                                    <li><a href="mailto:rmpramanayake@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a></li>
                                    <li><a href="https://github.com/Pavith00"><FontAwesomeIcon icon={faGithub} size="lg" /></a></li>
                                    <li><a href="https://www.linkedin.com/in/pavithra-ramanayake-52918a251/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
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