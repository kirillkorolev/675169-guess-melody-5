import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";

// import {extend} from "../../../utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });

      // extend(state, {
      //   authorizationStatus: action.payload,
      // });
  }

  return state;
};

export {user};