import { Link } from "react-router-dom";

export default function EarningRuleMainSection() {

    return (
        <div className="row row-margin">
            <div className="col-sm-12 mb-12 mb-sm-0">
                <div className="p-4 card">
                    <div className="card-body">
                        <div className="row row-margin">
                            <div className="col-md-12">
                                <p className="fw-bold fs-1">Basic Information</p>
                                <hr className="border-dark"></hr>
                            </div>
                        </div>
                        <div className="form-group row row-margin">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Rule Name</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Rule Name" />
                            </div>
                        </div>
                        <div className="row row-margin">
                            <label htmlFor="staticEmail" className="col-md-2 col-form-label">Conditions</label>
                            <div className="btn-group col-md-4">
                                <div className="dropdown">
                                    <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span id="selected">Select Option</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Number of Purchases</a>
                                        <a className="dropdown-item" href="#">Purchase Amount</a>
                                        <a className="dropdown-item" href="#">Condition 3</a>
                                    </div>
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
                            <div className="col-md-1 mt-2">
                                <button id="rule-add" className="add-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Earning Rules */}


                        <div className="row row-margin">
                            <div className="col-md-12">
                                <p className="fw-bold fs-1">Earning Rules</p>
                                <hr className="border-dark"></hr>
                            </div>
                        </div>
                        <div className="row row-margin">
                            <label htmlFor="staticEmail" className="col-md-2 col-form-label">Rules</label>
                            <div className="btn-group col-md-4">
                                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span id="selected">Select Rule</span>
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
                            <div className="col-md-1 mt-2">
                                <button id="earning-rule-add" className="add-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                    </svg>
                                </button>
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
        </div >
    )
}