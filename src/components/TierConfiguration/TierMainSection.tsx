import { Link } from "react-router-dom";

export default function TierMainSection() {
    return (
        <div className="row row-margin">
            <div className="col-sm-12 mb-12 mb-sm-0">
                <div className="card">
                    <div className="card-body">
                        <div className="row row-margin">
                            <div className="col-md-12">
                                <p className="fw-bold fs-4">Basic Info</p>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="form-group row row-margin">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Tier Name</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Tier Name" />
                            </div>
                        </div>
                        <div className="row row-margin">
                            <label htmlFor="staticEmail" className="col-md-2 col-form-label">Conditions</label>
                            <div className="btn-group col-md-5">
                                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Select Conditions</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Number of Purchases</a>
                                    <a className="dropdown-item" href="#">Purchase Amount</a>
                                    <a className="dropdown-item" href="#">Condition 3</a>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="From" />
                            </div>
                            <div className="col-md-1 text-center">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label fw-bold">-</label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="To" />
                            </div>
                        </div>
                        {/* Earning Rules */}


                        <div className="row row-margin">
                            <div className="col-md-12">
                                <p className="fw-bold fs-4">Earning Rules</p>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row row-margin">
                            <label htmlFor="staticEmail" className="col-md-2 col-form-label">Rules</label>
                            <div className="btn-group col-md-5">
                                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Select Rule</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Number of Purchases</a>
                                    <a className="dropdown-item" href="#">Purchase Amount</a>
                                    <a className="dropdown-item" href="#">Condition 3</a>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="From" />
                            </div>
                            <div className="col-md-1 text-center">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label fw-bold">-</label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="To" />
                            </div>
                        </div>

                        {/* Burning Rules*/}

                        <div className="row row-margin">
                            <div className="col-md-12">
                                <p className="fw-bold fs-4">Burning Rules</p>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row row-margin">
                            <label htmlFor="staticEmail" className="col-md-2 col-form-label">Rules</label>
                            <div className="btn-group col-md-5">
                                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Select Rule</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Number of Purchases</a>
                                    <a className="dropdown-item" href="#">Purchase Amount</a>
                                    <a className="dropdown-item" href="#">Condition 3</a>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="From" />
                            </div>
                            <div className="col-md-1 text-center">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label fw-bold">-</label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="To" />
                            </div>
                        </div>

                        <div className="row row-margin mt-4">
                            <div className="col-md-12 row-margin">
                                <a href="#" className="btn btn-dark button-margin">Save</a>
                                <a href="#" className="btn btn-dark button-margin">Pause</a>
                                <a href="#" className="btn btn-dark button-margin">Delete</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}