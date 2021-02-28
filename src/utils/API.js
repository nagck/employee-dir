import axios from "axios";

const URL = "https://randomuser.me/api/?results=50&nat=ca"

// Export object with a "getEmployees" method that returns Employee List from the Random user API
const API = {
    getEmployees: function() {
        return axios.get(URL);
    }
};
  
  export default API;