import axios from 'axios'
export function EMployeeInsert(employee){
       return axios.post("http://localhost:5100/employees",employee);

}