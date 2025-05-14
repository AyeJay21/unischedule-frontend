const API_BASE_URL = 'http://localhost:8080';

export const authService = {
  signIn: async (username: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });
    return response;
  },

  signUp: async (username: string, email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    return response;
  },
};

export const timetableService = {
  getTimetable: async () => {
    const response = await fetch(`${API_BASE_URL}/users/timetable`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    return response;
  },

  saveEntry: async (entry: any) => {
    const response = await fetch(`${API_BASE_URL}/users/timetable`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(entry),
    });
    return response;
  },
}; 