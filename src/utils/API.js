import axios from "axios";

export default {
    getList: function () {
        return axios.get("https://randomuser.me/api/?results=20&nat=us");
    }
};