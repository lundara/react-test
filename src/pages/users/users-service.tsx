import axios from 'axios';

export default class UsersService {

  // ==============================
  // GET USERS FROM API
  // ==============================
  getUsers() {
    return axios.get('https://60b47e9a4ecdc10017480ad7.mockapi.io/api/v1/users').then(result => result.data);
  }

  // ==============================
  // ADD USERS TO API
  // ==============================
  addUser(body: any) {
    return axios.post('https://60b47e9a4ecdc10017480ad7.mockapi.io/api/v1/users', body).then(result => result);
  }
}