import { ANNOUNCEMENT_API, SUBJECT_API } from "./../ADRESS_CONST";
import { get, post, put } from "./../apiService";
import { delet } from "../apiService";

export const removeAnnouncement = (id: number) => {
  return delet(ANNOUNCEMENT_API + "/" + id);
};

export const addAnnouncement = (data: any) => {
  return post(ANNOUNCEMENT_API, data);
};

export const updateAnnouncement = (id: number, data: any) => {
  return put(ANNOUNCEMENT_API + "/" + id, data);
};

export const loadAnnouncements = () => {
  return get(ANNOUNCEMENT_API);
};

export const loadSubjects = () => {
  return get(SUBJECT_API);
};
