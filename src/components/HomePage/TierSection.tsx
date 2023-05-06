import { Link } from "react-router-dom";
import "./Home.css"
import TierCard from "./TierCard"

export default function TierSection() {
    let tierHelper = "Reward your customers based on their purchase behaviour. Customers whose average bill value is more, make them stick and users wiht lower average bill value lure them to purchase more";
    return (
        <div className="row row-margin">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header fw-bold fs-2">
                        Tiers
                        <a href="#" className="button-margin" data-toggle="tooltip" data-placement="top" title={tierHelper}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                            </svg>
                        </a>
                    </div>
                    <div className="card-body">
                        <div className="row row-margin">
                            <TierCard name="Gold" condition="Minimum Purchase: 10000" duration="3 months" />
                            <TierCard name="Silver" condition="Minimum Purchase: 5000" duration="3 months" />
                            <TierCard name="Bronze" condition="Minimum Purchase: 3000" duration="3 months" />
                        </div>
                        <Link to="/tier" className="btn btn-dark">Add Tier</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}