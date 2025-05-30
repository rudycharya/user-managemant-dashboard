import { User } from "../utils/api";

export default function UserTable({ users }: { users: User[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300 text-left text-black">Name</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left text-black">Email</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left text-black">Phone</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left text-black">City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 text-black">{user.name}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-black">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-black">{user.phone}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-black">{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

