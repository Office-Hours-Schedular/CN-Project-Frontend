import {
  OFFICE_HOURS_MANAGER_API_URL,
} from "../utils/config.js";

export const schema = {
  // FETCH_HOME_DATA: ({ isSuccess }) => {
  //   let url = isSuccess
  //     ? `${window.location.origin}/stubs/homeAPI.json`
  //     : `${window.location.origin}/stubs/homeAPIs.json`;
  //   return {
  //     props: "home",
  //     url,
  //     method: "GET",
  //   };
  // },

  POST_STUDENT_SCHEDULE_ITEM: (payload) => {
    const url = `${OFFICE_HOURS_MANAGER_API_URL}/api/student/schedule/${payload.id}`;
    return {
      props: "addStudentScheduleItem",
      url,
      method: "POST",
    };
  },

  GET_USERS_LIST: () => {
    const url = `https://blue-journalist-bbrpv.ineuron.app:4000/users`;

    return {
      props: "userList",
      url,
      method: "GET",
    };
  },
  CREATE_USER: () => {
    const url = `https://blue-journalist-bbrpv.ineuron.app:4000/user/create`;
    return {
      props: "newUser",
      url,
      method: "POST",
    };
  },
  DELETE_USER: (payload) => {
    const url = `https://blue-journalist-bbrpv.ineuron.app:4000/user/${payload.id}`;
    return {
      props: "deleteUser",
      url,
      method: "DELETE",
    };
  },
  UPDATE_USER: (payload) => {
    const url = `https://blue-journalist-bbrpv.ineuron.app:4000/user/${payload.id}`;
    return {
      props: "updateUser",
      url,
      method: "PATCH",
      headers: payload.id,
    };
  },
};
