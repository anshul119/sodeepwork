import React from 'react';
import Button from '../components/button/Button';
import Card from '../components/card/Card';
import Linkedin from '../assets/icons/Linkedin.svg';
import Instagram from '../assets/icons/Instagram.svg';
import Dribbble from '../assets/icons/Dribbble.svg';
import Behance from '../assets/icons/Behance.svg';
import Branding from '../assets/icons/Branding.svg';
import Direction from '../assets/icons/Direction.svg';
import UI from '../assets/icons/UI.svg';
import UX from '../assets/icons/UX.svg';
import spiral from '../assets/images/spiral.svg';

import './home.scss';

class Home extends React.Component {
    handleClickOnWork() {
        window.location.href = '/projects';
    }
    render() {
        return (
            <div className="home">
                <section className="hero" style={{ backgroundImage: `url(${spiral})` }}>
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="hero-text highlighted-text">Hello World!</h1>
                            <h2 className="hero-subtext">
                                My name is <span className="highlighted-text">Sudeep Giri</span>, a multidisciplinary
                                designer and art director based in New Delhi.
                            </h2>
                            <Button action={this.handleClickOnWork} text="See my work"></Button>
                        </div>
                    </div>
                </section>
                <section className="projects">
                    <div className="wrapper">
                        <h2 className="projects-heading">Projects</h2>
                        <div className="cards">
                            <Card
                                projectName={'Chai peeni hai'}
                                thumbnail={
                                    'https://lh3.googleusercontent.com/proxy/oargSwXkXYpmJryxo7ZkJm-ukr5db4SN1xC0EkZ15K2uOEG-IrW5c2HbYKFDuIyW2L_3fLDwZFmRbuxPx9kP0x_PKa-tX3lng2H5d96bmZIvyqcifV2GGlhrY_YTH6WvkcvGVEsSN5Rx'
                                }
                                description={
                                    'Concept App UI designed for Chai Peeni Hai; a leading brand of online Tea and Food delivery platform.'
                                }
                            />

                            <Card
                                projectName={'UPES'}
                                thumbnail={
                                    'https://lh3.googleusercontent.com/proxy/oargSwXkXYpmJryxo7ZkJm-ukr5db4SN1xC0EkZ15K2uOEG-IrW5c2HbYKFDuIyW2L_3fLDwZFmRbuxPx9kP0x_PKa-tX3lng2H5d96bmZIvyqcifV2GGlhrY_YTH6WvkcvGVEsSN5Rx'
                                }
                                description={
                                    'Webpage done for UPES; designed and developed for a campaign that focuses on encouraging girl education.'
                                }
                            />
                            <Card
                                projectName={'UPES'}
                                thumbnail={
                                    'https://lh3.googleusercontent.com/proxy/oargSwXkXYpmJryxo7ZkJm-ukr5db4SN1xC0EkZ15K2uOEG-IrW5c2HbYKFDuIyW2L_3fLDwZFmRbuxPx9kP0x_PKa-tX3lng2H5d96bmZIvyqcifV2GGlhrY_YTH6WvkcvGVEsSN5Rx'
                                }
                                description={
                                    'Webpage done for UPES; designed and developed for a campaign that focuses on encouraging girl education.'
                                }
                            />
                        </div>
                        <div className="projects-cta">
                            <p className="highlighted-italic-text">This is not the end of the road!</p>
                            <a href="#">View all work</a>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="wrapper">
                        <div className="bio">
                            <h2 className="heading highlighted-text">Aim for the wow!</h2>
                            <div className="description">
                                <p>
                                    6+ Years of experience has developed this simple lad into a Work Machine no less
                                    than the Mercedes F1 Beast.
                                </p>
                                <p>
                                    In free time, I love reading Comics and Graphic Novels plus take some time off to
                                    watch Football.
                                </p>
                            </div>
                        </div>
                        <div className="services">
                            <p className="services-heading">
                                With speciality in <span className="highlighted-text">UX & Identity Design</span>
                                <br />
                                I've helped brands <span className="highlighted-text">build their presence</span>
                                <br />
                                in varied domains across
                                <span className="highlighted-text">mulitple platforms.</span>
                            </p>
                            <p className="services-subtext">I can help you with</p>
                            <div className="skills">
                                <div className="skill">
                                    <div className="skill-icon">
                                        <img src={UX} />
                                    </div>
                                    <p className="skill-name">UX Research</p>
                                </div>
                                <div className="skill">
                                    <div className="skill-icon">
                                        <img src={UI} />
                                    </div>
                                    <p className="skill-name">UI Design</p>
                                </div>
                                <div className="skill">
                                    <div className="skill-icon">
                                        <img src={Branding} />
                                    </div>
                                    <p className="skill-name">Branding</p>
                                </div>
                                <div className="skill">
                                    <div className="skill-icon">
                                        <img src={Direction} />
                                    </div>
                                    <p className="skill-name">Art Direction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="wrapper">
                        <div className="container">
                            <h2 className="heading highlighted-text">Why don't you slide into my Email?</h2>
                            <p className="subheading">so.deep.work@gmail.com</p>
                            <span className="connector"></span>
                            <Button action={this.handleClickOnWork} text="Say hello"></Button>
                            <div className="social">
                                <p className="social-text highlighted-italic-text">Follow me for amazing stuff</p>
                                <ol className="social-icons">
                                    <li className="social-icon">
                                        <img src={Instagram}></img>
                                    </li>
                                    <li className="social-icon">
                                        <img src={Behance}></img>
                                    </li>
                                    <li className="social-icon">
                                        <img src={Linkedin}></img>
                                    </li>
                                    <li className="social-icon">
                                        <img src={Dribbble}></img>
                                    </li>
                                </ol>
                            </div>
                            <p className="copyright">copyright 2021 Sodeepwork | Creafted by Anshul.art</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;
