import { Ilogin } from "../../Models/Ilogin";
import { IUser } from "../../Models/Iuser";
import axios from "axios";

export class AuthenticationService {
  private static URL: string = "http://localhost:5000/users";

  public static signupUser(user: IUser) {
    return axios.post(`${this.URL}/register`, user);
  }

  public static loginUser(user: Ilogin) {
    return axios.post(`${this.URL}/login`, user);
  }
}
