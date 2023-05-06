import "./Home.css"


export default function BrandingSection() {
    return (
            <div className="row row-margin text-center">
                <div className="col-sm-12 mb-12 mb-sm-0">
                    <div className="card">
                        <div className="row row-margin">
                            <div className="col-md-12">
                                <img src="https://th.bing.com/th/id/OIP.wlVD4CVGb7T4vnWRAz7tegHaHa?pid=ImgDet&rs=1" height="250" width="250" className="img-responsive rounded-circle center-block" alt="Logo"></img>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-sm-12">
                                <div className="card-body">
                                    <h5 className="card-title">Store Name</h5>
                                    <hr></hr>
                                    <div className="row row-margin">
                                        <div className="col-md-4">
                                            <p>
                                                Loyalty Name
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <p>
                                                Points Currency
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <p>
                                                Points Rule
                                            </p>
                                        </div>
                                    </div>
                                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                    <a href="#" className="btn btn-dark">Setup</a>&nbsp;&nbsp;
                                    <a href="#" className="btn btn-dark">Preview</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}