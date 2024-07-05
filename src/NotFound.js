import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you are looking for cannot be found!</p>
            <Link to='/'>Return to home..........</Link>
        </div>
    );
}
 
export default NotFound;