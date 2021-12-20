const HOST_API = "https://localhost:44394/api/";

export const LOGIN_API = HOST_API + "Authorize/login";
export const REGISTRATION_API = HOST_API + "Authorize/registration";
export const LOGIN_GOOGLE_API = HOST_API + "Authorize/google";

// user

export const USER_API = HOST_API + "user";

// announcement

export const ANNOUNCEMENT_API = HOST_API + "Announcement";

export const SUBJECT_API = HOST_API + "Announcement/subjects";

// admin

export const ADMIN_USERS_API = HOST_API + "admin/users";
export const ADMIN_REMOVEUSERS_API = HOST_API + "admin/users/removes";
