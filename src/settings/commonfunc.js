import axios from "axios";
import { API_URL } from "./appsettings";

export async function serverCall(url, body = {}) {

  if (!body["Data"]) {
    body = { ...body };
  }

  axios.defaults.headers.common["Accept"] =
    "application/json, text/plain, image/jpeg,*/*";

  const result = axios.post(API_URL + url, body);
  return result;
    // sessionStorage.clear();
    // localStorage.clear();
    // window.location.reload()
  
}