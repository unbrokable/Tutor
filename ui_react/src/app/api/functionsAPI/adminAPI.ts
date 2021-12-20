import { ADMIN_REMOVEUSERS_API, ADMIN_USERS_API } from "../ADRESS_CONST";
import { delet, get, post, put } from "../apiService";

export const loadUsers = () => {
  return get(ADMIN_USERS_API);
};

export const removeUser = (id: number) => {
  return delet(ADMIN_USERS_API + "/" + id);
};

export const loadRemovedUsers = () => {
  return get(ADMIN_REMOVEUSERS_API);
};

export const recoveUser = (id: number) => {
  return put(ADMIN_USERS_API + "/" + id, null);
};

export const addUser = (user: any) => {
  return post(ADMIN_USERS_API, user);
};
