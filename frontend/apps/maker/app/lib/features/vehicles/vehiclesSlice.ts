import { fetchVehicles, fetchVehicleTypes } from "app/sevices/apiService";
import { createAppSlice } from "../../createAppSlice";
import { Record } from "../auth/authSlice";

export const ACTION_PHOTO_TOOL = "PHOTO.TOOL";
export const ACTION_TEXT_TOOL = "TEXT.TOOL";

export interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface VehiclesRecord extends Record {
  make: string;
  model: string;
  status: string;
  vehicleType: string;
  image: string;
  dailyRate: number;
  currentLocation: string;
}

export interface VehiclesTypeRecord extends Record {
  make: string;
  model: string;
  status: string;
  type: string;
  image: string;
  dailyRate: number;
  currentLocation: string;
}
export interface AuthSliceState {
  vehicles?: null | Array<VehiclesRecord>; // Initially, no user is logged in
  vehicleType?: null | Array<VehiclesTypeRecord>; // Initially, no user is logged in
  status: "idle" | "loading" | "failed";
}

export const initialState: AuthSliceState = {
  vehicles: null,
  vehicleType: null,
  status: "idle",
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const vehiclesSlice = createAppSlice({
  name: "vehicles",
  // `loginSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    getVehicles: create.asyncThunk<VehiclesRecord>(
      async () => {
        const response = await fetchVehicles();
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
          state.vehicles = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
    getVehicleTypes: create.asyncThunk<VehiclesTypeRecord>(
      async () => {
        const response = await fetchVehicleTypes();
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
          state.vehicleType = action.payload;
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
    selectVehicles: (vehicles) => vehicles,
  },
});

// Action creators are generated for each case reducer function.
export const { getVehicles, getVehicleTypes } = vehiclesSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectVehicles } = vehiclesSlice.selectors;
