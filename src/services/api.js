import axios from "axios";

const apiServer = axios.create({
  baseURL: "http://localhost:1339/",
});

export default {
  getLol: async () => await apiServer.get("/hehe-xd", { params: { id: 4 } }),
};
