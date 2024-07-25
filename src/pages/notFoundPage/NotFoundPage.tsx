import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
   return (
      <div>
         <h1>404</h1>
         <h2>Page Not Found</h2>
         <Link to="/">Back to Home</Link>
      </div>
   );
};

export default NotFoundPage;
