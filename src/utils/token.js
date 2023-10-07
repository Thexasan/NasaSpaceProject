import jwt_decode from "jwt-decode";

function saveToken(token) {
  localStorage.setItem("access_token", token);
}

function getToken() {
  try {
    return jwt_decode(localStorage.getItem("access_token"));
  } catch (error) {}
}

function destroyToken() {
  localStorage.removeItem("access_token");
  window.location.pathname = "/";
}

export { saveToken, destroyToken, getToken };
