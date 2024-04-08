// Authentication.tsx

const BaseURL = 'https://gestinvest-1-c6d9743eb2ea.herokuapp.com/api/auth';

export const register = async (
  email: string,
  password: string,
  confirmation: string
) => {
  try {
    const response = await fetch(`${BaseURL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, confirmation }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errorMessage);
    }
    // Afficher une alerte pour le succès de l'inscription
    alert(data.successMessage);
    return data;
  } catch (error) {
    console.error('Error registering:', error);
    // Afficher une alerte pour l'erreur lors de l'inscription
    alert(error.message);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BaseURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errorMessage);
    }

    // Stocker le token JWT dans le localStorage
    localStorage.setItem('token', data.token);

    console.log(localStorage.getItem('token'));

    // Afficher une alerte pour le succès de la connexion
    alert('Login successful');
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    // Afficher une alerte pour l'erreur lors de la connexion
    alert(error.message);
    throw error;
  }
};