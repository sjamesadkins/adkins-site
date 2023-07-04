import Adkins from '../Images/Adkins.jpg'

const Sidebar = () => {

    return (

        <>
            <body className='body'>
                <div className='App'>
                    <div>
                        <h1 style={{marginBottom:"5pc", fontSize:"36pt"}}>Sam Adkins</h1>
                    </div>
                    <container className="inline">
                        <div id="sidebar">
                            <h2>Explore</h2>
                                <nav>
                                    <ul>
                                        <li>
                                            <a href={`/pages/about`}>Bio + Résumé</a>
                                        </li>
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
                                    </ul>
                                </nav>
                                
                        </div>
                        <div className="profile">
                            <img className="img-fluid" src={Adkins} alt="Adkins"></img>
                        </div>
                    </container>
        
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