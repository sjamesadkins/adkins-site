import Blockchain from '../Images/Blockchain.jpeg'

const Projects = () => {

    return (
        <div className="card">
            <img src={Blockchain} className="card-img-top" alt="Python Blockchain"></img>
            <div className="card-body">
                <h5 className="card-title">Python Blockchain</h5>
                <p className="card-text">A blockchain project build from a Udemy Python tutorial</p>
                <a href="https://github.com/sjamesadkins" className="btn btn-primary">Project GitHub</a>
            </div>
        </div>


    )
}

export default Projects