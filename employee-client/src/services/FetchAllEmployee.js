import axios from "axios";

export  function fetchAllEmployees(){
   return axios.get("http://localhost:5100/employees"); 
}