import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    zipcode: string;
  };
}

export const getUsers = async (): Promise<User[]> => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
};
