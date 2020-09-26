import axios from "axios";

//we are creating instances because we would need to change the base url for when it is deployed on heroku
const instance = axios.create({
  baseURL: "http://localhost:9000",
});

export default instance;
