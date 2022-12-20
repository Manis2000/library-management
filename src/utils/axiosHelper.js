import axios from 'axios'

export const postUser = (formData) => {
    try {
      return axios.post( formData);
    } catch (error) {
      console.log(error);
      return {
        status: "error",
        message: error.message,
      };
    }
  };
