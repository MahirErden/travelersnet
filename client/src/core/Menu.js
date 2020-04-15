import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: '#ff9900' };
  else return { color: '#ffffff' };
};

const Menu = ({ history }) => (
  <div>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
        <span className="navbar-brand mb-0 h1" style={{ color: "orange", fontSize: "30px" }}>
          <img src="#" width="30" height="30" className="d-inline-block align-top" alt="" />
            TravelersNet
          </span>
        <div className="collapse navbar-collapse pr-5 " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" style={isActive(history, '/')} to="/">
                Home
            </Link>
            </li>

            <li className="nav-item">
              <Link
                className={history.location.pathname === '/users' ? 'active nav-link' : 'not-active nav-link'}
                to="/users"
              >
                Users
                </Link>
            </li>

            <li className="nav-item">
              <Link to={`/post/create`} style={isActive(history, `/post/create`)} className="nav-link">
                Create Post
                </Link>
            </li>

            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">
                    Sign In
                        </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">
                    Sign Up
                        </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 'admin' && (
              <li className="nav-item">
                <Link to={`/admin`} style={isActive(history, `/admin`)} className="nav-link">
                  Admin
              </Link>
              </li>
            )}

            {isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link to={`/findpeople`} style={isActive(history, `/findpeople`)} className="nav-link">
                    Find People
                        </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to={`/user/${isAuthenticated().user._id}`}
                    style={isActive(history, `/user/${isAuthenticated().user._id}`)}
                    className="nav-link"
                  >
                    {`${isAuthenticated().user.name}'s profile`}
                  </Link>
                </li>

                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: 'pointer', color: '#fff' }}
                    onClick={() => signout(() => history.push('/'))}
                  >
                    Sign Out
                        </span>
                </li>

              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default withRouter(Menu);