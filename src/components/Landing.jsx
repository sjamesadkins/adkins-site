import Adkins from '../Images/Adkins.jpg'

const Sidebar = () => {

    return (

        <>
            <body className='body'>
                <div className='App'>
                    <div>
                        <h1 style={{marginBottom:"5pc", fontSize:"60pt"}}>
                            <span>
                                <span className="fade-name-1">S</span>
                                <span className="fade-name-2">a</span>
                                <span className="fade-name-3">m</span>
                                <span> </span>
                                <span className="fade-name-1">A</span>
                                <span className="fade-name-2">d</span>
                                <span className="fade-name-3">k</span>
                                <span className="fade-name-2">i</span>
                                <span className="fade-name-3">n</span>
                                <span className="fade-name-1">s</span>
                            </span></h1>
                    </div>
                    <container className="inline">
                        <div id="sidebar">
                            <h2>Explore</h2>
                                <nav>
                                    <ul>
                                        <li>
                                            <a href={`/adkins/about`}>Biography</a>
                                        </li>
                                        <li>
                                            <a href={`http://www.linkedin.com/in/adkins-mba`}>LinkedIn</a>
                                        </li>
                                        <li>
                                            <a href={`http://github.com/sjamesadkins`}>GitHub</a>
                                        </li>
                                        <li>
                                            <a href={`/adkins/projects`}>Coding Projects</a>
                                        </li>

                                        {/* hidden for now */}
                                        {/* <li>
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
                                        </li> */}
                                    </ul>
                                </nav>
                                
                        </div>
                        <div className="profile" style={{minWidth:"500px"}}>
                            <img className="img-fluid" src={Adkins} alt="Adkins"></img>
                        </div>
                    </container>
                                        
                    <br></br><br></br>
                    <container id="link"><h6 className="pwhite">• Built with <a href="https://react.dev/">React</a></h6></container>

                </div>
            </body>
        </>

        // <header>
        //     <div>
        //         <h1 style={{fontSize: "40pt"}}>
        //             Sam Adkins
        //         </h1>
        //         <p style={{fontSize: "20pt"}}>
        //             <a href='http://www.linkedin.com/in/adkins-mba'>LinkedIn</a><br></br>
        //             <a href='https://github.com/sjamesadkins'>GitHub</a><br></br>
        //         </p>
        //     </div>
        // </header>
    ) 
}

export default Sidebar