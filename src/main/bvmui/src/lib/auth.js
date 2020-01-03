import request from "./request";

export default {
  createSession(token) {
    localStorage.setItem("user-token", token);
    request.updateSessionToken(token);
  },
  destroySession() {
    localStorage.removeItem("user-token");
    request.removeSessionToken();
  },
  isLogged() {
    const token = localStorage.getItem("user-token");
    if (!token) {
      return false;
    }
    return true;
  }
};
