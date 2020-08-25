import React from "react";
import { Link } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

const Profile = ({ toggleModal }) => {
  const identity = useIdentityContext();

  const isLoggedIn = identity && identity.isLoggedIn;
  const name =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name;

  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/secret" activeClassName="active">
          Secret
        </Link>
        <Link to="/dashboard/base" activeClassName="active">
          Base
        </Link>
      </nav>

      {isLoggedIn ? (
        <button onClick={toggleModal}>`Hey, ${name}`</button>
      ) : (
        <button onClick={toggleModal}>Log in</button>
      )}
    </div>
  );
};

export default Profile;
