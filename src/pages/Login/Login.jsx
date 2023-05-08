import React, { useCallback, useEffect, useState } from "react";
import { GoogleButton } from "react-google-button";
import { AuthGoogle } from "../../hooks/AuthGoogle";
const Login = () => {
  const { loginGoogle } = AuthGoogle();

  const handleLoginGoogle = useCallback(async () => {
    try {
      await loginGoogle();
    } catch (error) {
      console.log(error);
    }
  }, [loginGoogle]);

  return (
    <>
      <div className="card mb-4" id="forms">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputEmail1">
                Email address
              </label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                type="email"
                aria-describedby="emailHelp"
              />
              <div className="form-text" id="emailHelp">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputPassword1">
                Password
              </label>
              <input
                className="form-control"
                id="exampleInputPassword1"
                type="password"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                className="form-check-input"
                id="exampleCheck1"
                type="checkbox"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <div className="mt-3">
              <GoogleButton onClick={handleLoginGoogle} />
            </div>
          </form>
          {/* <hr className="my-5" />
          <h4 className="mb-5">Horizontal form</h4>
          <form className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-12">
              <input className="form-control" type="text" placeholder="Email" />
              <label
                className="visually-hidden"
                htmlFor="inlineFormInputGroupUsername2"
              >
                Username
              </label>
            </div>
            <div className="col-12">
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input
                  className="form-control"
                  id="inlineFormInputGroupUsername2"
                  type="text"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="inlineFormCheck"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="inlineFormCheck">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
          <hr className="my-5" />
          <h4 className="mb-5">Horizontal form</h4>
          <form>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="inputEmail3">
                Email
              </label>
              <div className="col-sm-10">
                <input className="form-control" id="inputEmail3" type="email" />
              </div>
            </div>
            <div className="row mb-3">
              <label
                className="col-sm-2 col-form-label"
                htmlFor="inputPassword3"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  id="inputPassword3"
                  type="password"
                />
              </div>
            </div>
            <fieldset>
              <div className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="gridRadios1"
                      type="radio"
                      name="gridRadios"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      First radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="gridRadios2"
                      type="radio"
                      name="gridRadios"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Second radio
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <input
                      className="form-check-input"
                      id="gridRadios3"
                      type="radio"
                      name="gridRadios"
                      defaultValue="option3"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="gridRadios3">
                      Third disabled radio
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="row mb-3">
              <div className="col-form-label col-sm-2 pt-0">Checkbox</div>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="gridCheck1"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Example checkbox
                  </label>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </form> */}
        </div>
      </div>
    </>
  );
};

export default Login;
