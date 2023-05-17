import { Link } from "react-router-dom"
import './BurningRule.css'

export default function TierHeading() {
    return (
        <div className="mt-2 mb-2">
            <h3>
                <Link to="/" className="button-margin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </Link>
                Add / Edit Burning Rules
            </h3>
            <hr></hr>
        </div>
    )
}