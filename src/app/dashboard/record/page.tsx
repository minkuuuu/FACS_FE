import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getRecords } from '@/app/lib';
import { IRecords } from '@/app/types';
import { getServerSession } from 'next-auth';
import React from 'react';
import { RecordRow, Filter, Pagination } from './components';

export default async function Record(token: string | undefined) {
  const session = await getServerSession(authOptions);
  token = session?.user.data.accessToken;
  const listRecords: IRecords = await getRecords(token);

  return (
    <div className="container shadow-xl mx-12 my-5 border-2 border-slate-500 rounded-lg ">
      <div className="mt-3 text-4xl font-medium leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white py-3 ml-11">Records</div>

      <div className="mb-4 flex justify-end mr-12">
        <div className='flex flex-row'>
          <Filter />
        </div>

      </div>

      <div className='flex justify-center'>
        <table>
          <thead>
            <tr>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Record Time</th>
              <th className="border px-4 py-2">User Rating Percent</th>
              <th className="border px-4 py-2">Predicted Percent</th>
              <th className="border px-4 py-2">Created Date</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listRecords.results.map((record) => (
              <RecordRow
                key={record.id}
                recordId={record.id}
                status={record.status}
                recordTime={record.recordTime}
                userRatingPercent={record.userRatingPercent}
                predictedPercent={record.predictedPercent}
                createdDate={record.createdDate}
                token={token}
              />
            ))}
          </tbody>
        </table>

      </div>
      <div className='flex justify-center'>
        <Pagination />
      </div>
    </div>
  );
}
