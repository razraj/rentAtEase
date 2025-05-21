import { fetchUserLogin, fetchUserSignup } from "app/sevices/apiService";
import { createAppSlice } from "../../createAppSlice";

export const ACTION_PHOTO_TOOL = "PHOTO.TOOL";
export const ACTION_TEXT_TOOL = "TEXT.TOOL";

export interface LoginPayload {
  email: string;
  password: string;
}
export interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface User {
  record: {
    avatar: string;
    collectionId: string;
    collectionName: string;
    created: string;
    email: string;
    id: string;
    name: string;
    verified: string;
  };
  token: string;
}
export interface AuthSliceState {
  user: null | User; // Initially, no user is logged in
  status: "idle" | "loading" | "failed";
}

export const initialState: AuthSliceState = {
  user: null,
  status: "idle",
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const authSlice = createAppSlice({
  name: "auth",
  // `loginSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    loginUser: create.asyncThunk<User, LoginPayload>(
      async (payload) => {
        const response = await fetchUserLogin(payload.email, payload.password);
        console.log("🚀 ~ response:", response);
        // The value we return becomes the `fulfilled` action payload
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.user = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
    signupUser: create.asyncThunk<User, SignupPayload>(
      async (payload) => {
        const response = await fetchUserSignup(
          payload.email,
          payload.password,
          payload.firstName,
          payload.lastName
        );
        console.log("🚀 ~ response:", response);
        // The value we return becomes the `fulfilled` action payload
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          // state.user = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectAuthUser: (auth) => auth,
  },
});

// Action creators are generated for each case reducer function.
export const { loginUser, signupUser } = authSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectAuthUser } = authSlice.selectors;
