export const IP = 'http://124.29.208.60:3233';
export const URLS = {
  base_url: `${IP}/api/`,
  image_url: `${IP}/`,
  auth: {
    login: 'auth/login',

    // update_password: 'doctor/updatePassword',
    // change_password: 'doctor/changePassword',
    otp_verify: 'doctor/otpVerify',
    forget_password: 'doctor/forgetPassword',
    update_profile: 'doctor/updateProfile',
  },

  get_users: 'auth/userDetails',
  get_clients: 'auth/clients/all-clients',
  get_tasklist: 'auth/taskDetails',
  get_task_counter: 'auth/tasks/taskscounter',
  get_department_list: 'auth/departmentDetails',
  update_department: 'auth/departments/update-department',
  add_department: 'auth/departments/add-department',
  delete_department: 'auth/departments/delete-department',
  update_clients: 'auth/clients/update-client',
  add_client: 'auth/clients/add-client',
  update_clients: 'auth/clients/update-client',
  delete_clients: 'auth/clients/delete-client',
  add_user: 'auth/users/add-user',
  delete_user: 'auth/users/delete-user',
  update_user: 'auth/updateInfo',
  get_user_info: 'auth/user',
  update_user_data: 'auth/profile/update-user-data',
  update_password: 'auth/profile/change-password',
  delete_task: 'auth/tasks/delete-task',

  notification: {
    get_notification: 'doctor/getNotification',
    read_notification: 'doctor/readNotification',
  },
};
