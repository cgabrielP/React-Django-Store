import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const registerForm = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}register/`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error desconocido');
  }
};

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}login/`, userData, { withCredentials: true });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error desconocido');
  }
};

export const signOut = async () => {
  const accessToken = localStorage.getItem('accessToken');
  
  try {
    const response = await axios.post(
      `${API_URL}logout/`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        withCredentials: true
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error desconocido');
  }
};
