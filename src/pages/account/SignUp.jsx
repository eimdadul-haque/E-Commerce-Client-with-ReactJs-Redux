import React from 'react'

export default function SignUp() {
    return (
        <div className="container mt-5">
            <div className='row d-flex justify-content-center'>
                <div className="col-lg-6 col-sm-12 col-md-12">
                    <form>
                        <div className="form-group">
                            <input placeholder="First Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input placeholder="Last Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input placeholder="Email" type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input placeholder="User Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input placeholder="Password" type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input placeholder="Confirm Password" type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="text-muted">Birth Day</label>
                            <input type="date" placeholder='Birth Day' className="form-control" />
                        </div>
                    </form>
                    <div className="form-group  ">
                        <button className="btn-sm btn btn-info" style={{ width: "30%" }} >Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
