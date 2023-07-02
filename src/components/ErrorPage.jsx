import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1 style={{textAlign:"center", marginTop:"20pc"}}>Oops!</h1>
            <p style={{textAlign:"center", color:"white"}}>Sorry, an unexpected error occurred.</p>
            <p style={{textAlign:"center", color:"white"}}>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage