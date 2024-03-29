/**
 * Created by GadgetApp on 12-09-2018.
 */
import * as actions from "../actions/action-types";

export function getReadMe(token, username, repository) {
  return {
    type: actions.ACTION_README,
    token: token,
    username: username,
    repository: repository
  }
}

export function setError(error) {
  return {
    type: actions.ACTION_README_ERROR,
    error: error
  }
}

export function setReadMeSuccess(readme) {
  return {
    type: actions.ACTION_README_SUCCESS,
    readMe: readme
  }
}