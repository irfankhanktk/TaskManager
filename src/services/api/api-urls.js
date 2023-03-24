export const IP = 'http://124.29.208.60:3233';
export const URLS = {
  base_url: `${IP}/api/`,
  image_url: `${IP}/`,
  auth: {
    login: 'auth/login',

    update_password: 'doctor/updatePassword',
    change_password: 'doctor/changePassword',
    otp_verify: 'doctor/otpVerify',
    forget_password: 'doctor/forgetPassword',
    update_profile: 'doctor/updateProfile',
  },

  get_users: 'auth/userDetails',
  get_clients: 'auth/clients/all-clients',
  get_tasklist: 'auth/taskDetails',

  notification: {
    get_notification: 'doctor/getNotification',
    read_notification: 'doctor/readNotification',
  },
};
