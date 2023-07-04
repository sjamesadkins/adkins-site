
import Adkins from '../Images/Adkins.jpg'

const About = () => {
    return (
        
        <body className='body'>
            <div>
                <div>
                    <h2 className='App' style={{marginBottom:"5pc"}}>Sam Adkins' Bio + Resume</h2>
                </div>
            <container className="inline">
                <div id="sidebar" className='App'>
                    <h2>Explore</h2>
                        <nav>
                            <ul>
                                <li>
                                    <a href={`/pages/linkedin`}>LinkedIn</a>
                                </li>
                                <li>
                                    <a href={`/pages/github`}>GitHub</a>
                                </li>
                                <li>
                                    <a href={`/pages/projects`}>Coding Projects</a>
                                </li>
                                <li>
                                    <a href={`/pages/gastronomy`}>Gastronomy</a>
                                </li>
                                <li>
                                    <a href={`/pages/music`}>Music</a>
                                </li>
                                <li>
                                    <a href={`/pages/travels`}>Travels</a>
                                </li>
                                <li>
                                    <a href={`/pages/blog`}>Vlog</a>
                                </li>
                                <li>
                                    <a href={`/`}>Landing</a>
                                </li>
                            </ul>
                        </nav>
                </div>
                <div className="resume">
                    <p style={{marginLeft:"5pc"}}>Resume Text. This is Sam's resume. He has worked at a lot of different places and he has tons of skills. He's also a smartass.</p>
                </div>
            </container>
            </div>
        </body>



    )
}

export default About