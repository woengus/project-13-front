import React, { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/user";
import { useDispatch, useSelector } from "react-redux";
import { setProfile, getToken } from "../store/user.slice";

function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isEdit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
    };
    updateProfile(localStorage.token, data).then((res) => {
      dispatch(setProfile(res));
    });
    handleEdit();
  };

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  useEffect(() => {
    if (localStorage.token) {
      getProfile(localStorage.token).then((res) => {
        console.log(res);
        dispatch(getToken({ token: localStorage.token }));
        dispatch(setProfile(res));
      });
    } else {
      window.location.href = "/signin";
    }
  }, []);
  return (
    <div>
      <main className="main bg-dark">
        {!isEdit ? (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {user.firstName} {user.lastName}
            </h1>
            <button className="edit-button" onClick={handleEdit}>
              Edit Name
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="text" />
            <button type="submit">Save</button>
            <button type="button" onClick={handleEdit}>
              Cancel
            </button>
          </form>
        )}

        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default User;
