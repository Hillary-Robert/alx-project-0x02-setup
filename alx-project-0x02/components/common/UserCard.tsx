import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold mb-1 text-black">{name}</h2>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-sm text-gray-500">Address: {address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
