// import axios from 'axios';
import axios from '../../api/index';

import * as actionTypes from './actionTypes';
import {ApiResponse} from "../../constants";

export const authStart = () => {
  console.log('action');
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};
export const userOrders = (userOrders) => {
  return {
    type: actionTypes.USER_ORDERS,
    userOrders: userOrders
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  if(localStorage.getItem('token')) {
    axios.post('logout')
        .then(response => {

          console.log(` Logout Flushed`);
        })
        .catch(err => {

        });
  }
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  //const response = await axios.post('logout');
  /*if (response.data.status === ApiResponse.SUCCESS) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    console.log(` Logout Data Flushed`);
  }*/
  console.log(` Logout Done`);
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
export const fetchUserOrders = () => {
  let url = 'user';
  axios.post(url)
  .then(response => {
    console.log("Hello Fetch User Orders", response);
    dispatch(userOrders(response));
  })
  .catch(err => {
    dispatch(authFail(err.response.data.error));
  });
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = 'test_user';
    if (!isSignup) {
      url = 'login';
    }
    axios.get('/sanctum/csrf-cookie')
    .then(response => {
      axios.post(url, authData)
      .then(response => {
        // console.log("_______________response", response);
        const expiresIn = response.data?.payload?.expiresIn
            ? response.data?.payload?.expiresIn : 3600;
        const expirationDate = new Date(
            new Date().getTime() + expiresIn * 1000);
        const token = response.data?.payload?.token || null;
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        const userId = response.data?.payload?.user?.id || 0;
        localStorage.setItem('userId', userId);
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout(expiresIn));
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
    })
    .catch(err => {
      dispatch(authFail(err.response.data.error));
    });
  };
};

export const setAuthRedirectPath = (path) => {
  console.log("set this auth path", path);
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};
