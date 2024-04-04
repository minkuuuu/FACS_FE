import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getUsers } from '@/app/lib';
import { IUsers } from '@/app/types';
import { getServerSession } from 'next-auth';
import React from 'react';
import { AddUser, UpdateUser, Filter, Pagination } from './components';

type SearchParamsProps = {
  searchParams: { page: string };
};

export default async function User({ searchParams }: SearchParamsProps, token: string | undefined) {
  const session = await getServerSession(authOptions);
  // console.log(session?.user.data.accessToken);
  token = session?.user.data.accessToken;
  const listUsers: IUsers = await getUsers(token);
  // console.log(listUsers?.data.results);
  const user = listUsers?.data.results;

  return (
    <div >
      <div className="container shadow-xl mx-12 my-5 border-2 border-slate-500 rounded-lg "  >

        <div className="mt-3 text-4xl font-medium leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white py-3 ml-11">Users</div>


        <div className="mb-4 flex justify-end mr-10">
          <div className='flex flex-row'>
            <Filter />
            <AddUser token={token} />
          </div>

        </div>
        <div className='flex justify-center'>


          <table>
            <thead>
              <tr>
                <th className="border px-4 py-2">Security Code</th>
                <th className="border px-4 py-2 w-72">Email</th>
                <th className="border px-4 py-2 w-52">Name</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Role</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Update</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) => (
                <tr key={user.id} className="hover:bg-gray-200" >
                  <td className="border px-4 py-2">{user.securityCode}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.phone}</td>
                  <td className="border px-4 py-2">{user.role.roleName}</td>
                  <td className="border px-4 py-2">{user.status}</td>
                  <td className="border px-4 py-2">
                    <UpdateUser userId={user.id} token={token} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center'>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
