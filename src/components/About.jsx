

const About = () => {
    return (
        
        <body className='body'>
            <div>
                <container className="inline">
                    <div className="bracket1"></div>    
                        <div>
                            <h4 className='App' style={{marginBottom:"5pc", marginLeft:"2pc", marginRight:"2pc", color:"snow", textAlign:"justify", minWidth:"500px", maxWidth:"1200px"}}>Welcome to my digital space! I'm a developer with experience in JavaScript, Java, and Python. I enjoy the process of creation. Coding is a natural extension of that interest, and so is my passion to play music and make delicious foods. I spend my free time building my tech skills, learning the French language, and crafting fantastic ginger beer.<br></br><br></br>Please explore my résumé below.</h4>
                        </div>
                    <div className="bracket2"></div>  
                </container>
                <br></br>

            <container className="inline">
                <div id="sidebar" className='App'>
                    <h2>Explore</h2>
                        <nav>
                            <ul>
                                <li>
                                    <a href={`/`}>Home</a>
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

                {/* RESUME */}
                <div className="resume" style={{minWidth:"1000px", maxWidth:"1200px"}}>
                    <h2 style={{textAlign:'center'}}>
                        
                        Samuel James Adkins<br></br><br></br>
                    </h2>

                    <h4 id="link" style={{textAlign:'center'}}>
                        St. Louis, MO &nbsp;&nbsp;|&nbsp;&nbsp; +1 (417)-773-1899 &nbsp;&nbsp;|&nbsp;&nbsp; <a href="mailto:sjamesadkins@gmail.com">sjamesadkins@gmail.com</a><br></br><br></br>
                    </h4>

                    <h4 style={{fontFamily:"timesnewroman", marginLeft:"5pc", fontWeight:"bold"}}>SUMMARY</h4>
                    <br></br>

                {/* SUMMARY */}
                    <p className="pwhite" style={{marginLeft:"5pc", textAlign:"justify"}}>Experience spanning roles in government, private industry, and entrepreneurship. &nbsp;Strengths include research, writing, coding, negotiation, management, and quantitative analysis. &nbsp;Continual learner of computer programming (Java, JavaScript, Python, SQL).&nbsp;Continual learner of the French language (intermediate level, B1). &nbsp;Top Secret / Secret Compartmented Information security clearance. &nbsp;DAWIA Level II certified in government contracting. &nbsp;Certified Federal Contracting Manager. &nbsp; Successful small-business co-founder. &nbsp; Demonstrated ability to quickly learn new material and adapt to a changing landscape.</p>
                    <br></br>

                {/* TECH specs */}
                    <h4 style={{fontFamily:"timesnewroman", marginLeft:"5pc", fontWeight:"bold"}}>TECH SPECS</h4>
                    <br></br>

                    <container className="inline, pwhite" style={{marginLeft:"5pc", fontWeight:"bold"}}>
                        <div className="resume" style={{marginLeft:"2pc"}}><p>• Java<br></br>• JavaScript<br></br>• Python<br></br>• SQL<br></br>• HTML/CSS</p></div>
                        <div className="resume" style={{marginLeft:"15pc"}}><p>• Angular<br></br>• React<br></br>• Springboot<br></br>• Thymeleaf<br></br>• Bootstrap</p></div>
                        <div className="resume" style={{marginLeft:"15pc"}}><p>• Git<br></br>• Visual Studio<br></br>• IntelliJ<br></br>• DBeaver<br></br>• MySQL</p></div>
                    </container>
                    <br></br>

                {/* CODING experience */}
                    <h4 style={{fontFamily:"timesnewroman", marginLeft:"5pc", fontWeight:"bold"}}>CODING EXPERIENCE</h4>
                    <br></br>

                    <container className="inline">
                        <div id="link">
                        <h6 className="pwhite" style={{marginLeft:"5pc", textDecoration:"underline", fontSize:"18pt"}}><a href="https://home-5013300400.app-ionos.space/#/home">Rally</a></h6>
                        </div>
                    
                        <h6 className="pwhite" style={{marginTop:".6pc"}}> &nbsp;&nbsp;— St. Louis Community Networking Site — using Springboot/Angular/Bootstrap</h6>
                    </container>
                    
                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Designed a web application for a robust community networking site using Java, Javascript, and MySQL.</p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Developed code and logic to enable login, a networking messaging forum, community events and services <br></br> repositories with sorting and filtering by keyword, and direct message features.</p>
                        </div>
                    </container>

                    <container className="pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Collaborated with a team of developers and enabled multitudes of user experiences.</p>
                        </div>
                    </container>
                    <br></br>

                    {/* WORK experience */}
                    <h4 style={{fontFamily:"timesnewroman", marginLeft:"5pc", fontWeight:"bold"}}>WORK EXPERIENCE</h4>
                    <br></br>

                    {/* NGA */}
                    <container className="inline">
                        <div id="link">
                        <h6 className="pwhite" style={{marginLeft:"5pc", textDecoration:"underline", fontSize:"18pt"}}><a href="https://www.nga.mil">National Geospatial Intelligence Agency</a></h6>
                        </div>

                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"3 1 auto", textAlign:"right", fontSize:"14pt"}}>December 2016 - Present</h6>
                    </container>
                    
                    <container style={{marginLeft:"5pc"}}><h6 className="pwhite" style={{marginTop:".6pc", fontSize:"14pt"}}>St. Louis, MO</h6></container>

                    <container className="inline">
                        <div id="link">
                        <p className="pwhite" style={{marginLeft:"5pc", textDecoration:"underline"}}>Disclosure and Release Officer</p>
                        </div>
                    
                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"3 1 auto", textAlign:"right"}}>October 2021 - Present</h6>
                    </container>
                    
                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Providing solutions to complex requests for geospatial products from the US Intelligence <br></br>Community.</p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Researching and analyzing a wide range of policies, intelligence sources, and open source <br></br>reporting to minimize risk and maximize US benefit of the disclosure and release of classified<br></br> and sensitive intelligence to assist policymakers, support humanitarian efforts, and provide<br></br> for the defense of millions of individuals worldwide.</p>
                        </div>
                    </container>
                    <br></br>

                    <container className="inline">
                        <div id="link">
                        <p className="pwhite" style={{marginLeft:"5pc", textDecoration:"underline"}}>Contracting Officer</p>
                        </div>
                    
                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"3 1 auto", textAlign:"right"}}>December 2016 - September 2021</h6>
                    </container>
                    
                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Led and administered a wide variety of construction, architecture, engineering, supply, <br></br>and service contracts with an estimated cumulative value of over one hundred million dollars.</p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Researched complex federal, Department of Defense, and agency regulations.</p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Strategized the most effective means of acquiring desired goods and services.</p>
                        </div>
                    </container>
                    <br></br>

                    {/* SSA */}
                    <container className="inline">
                        <div id="link">
                        <h6 className="pwhite" style={{marginLeft:"5pc", textDecoration:"underline", fontSize:"18pt"}}><a href="https://www.ssa.gov">Social Security Administration</a></h6>
                        </div>

                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"3 1 auto", textAlign:"right", fontSize:"14pt"}}>June 2014 - November 2016</h6>
                    </container>
                    
                    <container style={{marginLeft:"5pc"}}><h6 className="pwhite" style={{marginTop:".6pc", fontSize:"14pt"}}>Kansas City, MO</h6></container>

                    <container className="inline">
                        <div id="link">
                        <p className="pwhite" style={{marginLeft:"5pc", textDecoration:"underline"}}>Benefit Authorizer</p>
                        </div>
                    </container>
                    
                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Analyzed complex rate calculations for all benefits paid and due Social Security claimants.</p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Processed beneficiary entitlements in accordance with payment provisions and legal procedures. </p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Provided expert service to over 8,000 SSA claimants in my tenure, ensuring accurate benefits <br></br>to payees and saving thousands of dollars for SSA.</p>
                        </div>
                    </container>
                    <br></br>

                    {/* MO */}
                    <container className="inline">
                        <div id="link">
                        <h6 className="pwhite" style={{marginLeft:"5pc", textDecoration:"underline", fontSize:"18pt"}}><a href="https://www.membersonlytribute.com">Members Only, LLC</a></h6>
                        </div>

                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"3 1 auto", textAlign:"right", fontSize:"14pt"}}>October 2008 - May 2014</h6>
                    </container>
                    
                    <container style={{marginLeft:"5pc"}}><h6 className="pwhite" style={{marginTop:".6pc", fontSize:"14pt"}}>Springfield, MO</h6></container>

                    <container className="inline">
                        <div id="link">
                        <p className="pwhite" style={{marginLeft:"5pc", textDecoration:"underline"}}>Finance Manager & Professional Musician</p>
                        </div>
                    </container>
                    
                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Co-founded a profitable music business performing for thousands of fans (2014 revenue<br></br> of over $250,000).</p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Collected and analyzed all financial data for purchasing and tax purposes.</p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Generated all legal documentation for the partnership.</p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Negotiated with a wide scope of customers to fulfill strategic and profitable performance contracts.</p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Estimated the pricing of production and sound equipment and budgeted for procurement.</p>
                        </div>
                    </container>
                    

                    <br></br>

                    {/* EDUCATION */}
                    <h4 style={{fontFamily:"timesnewroman", marginLeft:"5pc", fontWeight:"bold"}}>EDUCATION</h4>
                    <br></br>

                    <container className="inline">
                        <div id="link">
                        <h6 className="pwhite" style={{marginLeft:"5pc", fontSize:"14pt"}}><a style={{fontSize:"18pt", textDecoration:"underline"}} href="https://www.launchcode.org">LaunchCode</a></h6>
                        </div>

                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"1 1 auto", fontSize:"14pt"}}> &nbsp;— LC101 Programming Course (Javascript, Java)</h6>

                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"3 1 auto", textAlign:"right", fontSize:"14pt"}}>2023</h6>
                    </container>

                    <container className="inline">
                        <div id="link">
                        <h6 className="pwhite" style={{marginLeft:"5pc", fontSize:"14pt"}}><a style={{fontSize:"18pt", textDecoration:"underline"}} href="https://www.umsl.edu">University of Missouri, St. Louis</a></h6>
                        </div>

                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"1 1 auto", fontSize:"14pt"}}> &nbsp;— Master of Business Administration</h6>

                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"3 1 auto", textAlign:"right", fontSize:"14pt"}}>2022</h6>
                    </container>

                    <container className="inline">
                        <div id="link">
                        <h6 className="pwhite" style={{marginLeft:"5pc", fontSize:"14pt"}}><a style={{fontSize:"18pt", textDecoration:"underline"}} href="https://www.missouristate.edu">Missouri State University</a></h6>
                        </div>

                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"1 1 auto", fontSize:"14pt"}}> &nbsp;— Undergraduate Degree</h6>

                        <h6 className="pwhite" style={{marginTop:".6pc", flex:"3 1 auto", textAlign:"right", fontSize:"14pt"}}>2007</h6>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Major: B.S. Economics</p>
                        </div>
                    </container>

                    <container className="inline, pwhite" style={{marginLeft:"5pc"}}>
                        <div className="resume">
                            <p>•</p>
                        </div>

                        <div className="resume" style={{marginLeft:"1pc"}}>
                            <p>Minors: International Business, French</p>
                        </div>
                    </container>


                </div>
            </container>
            </div>
        </body>



    )
}

export default About