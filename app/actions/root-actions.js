/**
 * Created by GadgetApp on 12-09-2018.
 */
import * as actions from "../actions/action-types";

export function controlProgress(isShowing) {
  return {
    type: actions.PROGRESS,
    progress: isShowing
  }
}