function SignModaL() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xs modal-lg">
                <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-header signInTitle">
                            <h1 className="modal-title fs-2" id="exampleModalLabel">Login</h1>
                        </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-outline mb-3">
                                        <input type="email" id="form2Example1 signInput" 
                                        className="form-control" placeholder="email" />
                                        <label className="sign-label bk-first" for="form2Example1">Email address</label>
                                    </div>
                                        <div className="form-outline mb-3">
                                            <input type="password" id="form2Example2" 
                                            className="form-control" placeholder="password" />
                                            <label className="sign-label bk-first" for="form2Example2">Password</label>
                                        </div>
                                            <div className="row mb-3">
                                                <div className="col check">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="form2Example31" checked />
                                                        <label className="form-check-label fs-6" for="form2Example31">Remember me</label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <a href="#!" className="reset-pass fs-6">Forgot password?</a>
                                                </div>
                                            </div>
                                                <button type="button" className="btn btn-primary btn-block mb-4 signInBtn">Sign in</button>
                                                <div className="sign hr-lines">
                                                    <h4 className="or fs-6">Or</h4>
                                                </div>
                                                <div className="register">
                                                    <h2 className="register-title fs-2">Register</h2>
                                                </div>
                                            <div className="form-outline mb-3">
                                                <input type="email" id="form2Example1" className="form-control" placeholder="name" />
                                                <label className="sign-label bk-first" for="form2Example1">Full name</label>
                                            </div>
                                        <div className="form-outline mb-3">
                                            <input type="password" id="form2Example2" 
                                            className="form-control" placeholder="email" />
                                            <label className="sign-label bk-first" for="form2Example2">Enter your email</label>
                                        </div>
                                    <div className="form-outline mb-3">
                                        <input type="email" id="form2Example1" className="form-control" placeholder="password" />
                                        <label className="sign-label bk-first" for="form2Example1">password</label>
                                    </div>
                                <div className="form-outline mb-3">
                                    <input type="password" id="form2Example2" 
                                    className="form-control" placeholder="re-enter" />
                                    <label className="sign-label bk-first" for="form2Example2">re-enter password</label>
                                </div>
                            <button type="button" className="btn btn-primary btn-block mb-4 signInBtn">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignModaL