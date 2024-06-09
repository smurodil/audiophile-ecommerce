import { useRouteError } from "react-router-dom"
import './errorElement.css'

function ErrorElement() {
    const error = useRouteError()
    console.log(error);
  return <div className="error-element">There was an error...</div>
}

export default ErrorElement