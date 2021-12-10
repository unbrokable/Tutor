import { post } from "./../apiService";
import { USER_API } from "./../ADRESS_CONST";
import { get } from "../apiService";

export const loadUser = () => {
  return get(USER_API);
};

export const updateUser = (user: any) => {
  return post(USER_API, user);
};
