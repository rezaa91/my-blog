import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { navigate, Link } from "gatsby";
import { isEmpty } from "lodash";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SEO from "../components/seo";

import "./styles/account.css";
import Button from "../components/button/button";
import {updatePassword} from "../services/updatePassword";

const Account = ({ user }) => {
  // redirect to home page if user not logged in
  if (isEmpty(user)) {
    navigate('/');
  }

  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [validationError, setValidationError] = React.useState('');

  const changePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setValidationError('Please fill in all the fields.');
    }

    if (newPassword !== confirmPassword) {
      setValidationError('New password and password confirmation do not match.');
    }

    const response = await updatePassword({
      userId: user.id || user._id,
      currentPassword,
      newPassword,
      confirmPassword
    });

    if (response.status === 200) {
      setValidationError('Password changed successfully.');

      return;
    }

    const errorMessage = response.status !== 500 && response.data && response.data.error ?
      response.data.error :
      'Sorry, something went wrong. Please try again.';

    setValidationError(errorMessage);
  }

  return(
    <>
      <SEO title="account" />

      <section className="account-container">
        <Tabs>
          <TabList>
            <Tab>My Details</Tab>
            <Tab>My Courses</Tab>
          </TabList>

          <TabPanel>
            <div>
              <div className="update-password-container">
                <h3>Change Password</h3>
                <div>
                  <input
                    type="password"
                    placeholder="current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="account-input"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="account-input"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="account-input"
                  />
                </div>

                <div className="account-validation">{validationError}</div>

                <Button className="primary big" action={changePassword}>update</Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div>You currently do not have any <Link to="/courses/">courses</Link>.</div> {/* placeholder as paid courses do not yet exist */}
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}

Account.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Account);
