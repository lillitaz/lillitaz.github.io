import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/react-portfolio-website.png';
import IMG2 from '../../assets/In-Progress.jpg';
import IMG3 from '../../assets/nostalgia-games-preview.png';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio_container'>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={IMG1} alt="Website Preview" />
                    </div>
                    <h3>Portfolio Website with React</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/lillitaz/lillitaz.github.io" className='btn'>Link to the Repository</a>
                        <a href="https://lilliweitzer.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={IMG2}
                            alt="in progress" />
                    </div>
                    <h3>Virtual-Pet Game with Java</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/lillitaz/virtual-pet-game" className='btn'>Link to the Repository</a>
                        <a href="https://lilliweitzer.com/#contact" className='btn btn-primary' target='_blank' rel="noreferrer">Release: May 2023</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={IMG3}
                            alt="Nostalgia Games Preview" />
                    </div>
                    <h3>Nostalgia Games App</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/lillitaz/nostalgia-games-app" className='btn'>Link to the Repository</a>
                        <p className='btn btn-primary'>Currently Not Online</p>
                    </div>
                </article>
            </div>
        </section>
    );
};
export default Portfolio;
