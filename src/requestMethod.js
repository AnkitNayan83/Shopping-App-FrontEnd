import axios from "axios";

const BASE_URL = process.env.APP_URL || "http://localhost:8080/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWFlZDEzNjY5YzA5OWI3YTY2YTc0YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDY5MjM3NSwiZXhwIjoxNjU0OTUxNTc1fQ.zMTAT2W3SjmKrz8JsJV47MBtuI_xADW8hurXbvII_gI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
