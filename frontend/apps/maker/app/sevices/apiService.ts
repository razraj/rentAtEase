import { User } from "app/lib/features/auth/authSlice";
import {
  VehiclesRecord,
  VehiclesTypeRecord,
} from "app/lib/features/vehicles/vehiclesSlice";

export const fetchUserLogin = async (email: string, password: string) => {
  const response = await fetch("http://127.0.0.1:8090/api/loginUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "r2@gmail.com",
      password: "123456789",
    }),
  });
  const result: User = await response.json();

  return result;
};

export const fetchUserSignup = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const response = await fetch("http://127.0.0.1:8090/api/loginUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "r2@gmail.com",
      password: "123456789",
    }),
  });
  const result: User = await response.json();

  return result;
};

export const fetchVehicles = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://127.0.0.1:8090/api/vehicles", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json", // Adjust if needed
    },
  });
  const result: VehiclesRecord = await response.json();

  return result;
};
export const fetchVehicleTypes = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://127.0.0.1:8090/api/vehicleTypes", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json", // Adjust if needed
    },
  });
  const result: VehiclesTypeRecord = await response.json();

  return result;
};
