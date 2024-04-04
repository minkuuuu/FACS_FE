import Link from 'next/link';
import React from 'react';

type RecordProps = {
  recordId: number;
  status: string;
  recordTime: string;
  userRatingPercent: number;
  predictedPercent: number;
  createdDate: string;
  token: string | undefined;
};

export default function RecordRow({
  recordId,
  status,
  recordTime,
  userRatingPercent,
  predictedPercent,
  createdDate,
  token,
}: RecordProps) {
  return (
    <tr className="hover:bg-gray-200">
      <td className="border px-4 py-2">{status}</td>
      <td className="border px-4 py-2">{recordTime}</td>
      <td className="border px-4 py-2">{userRatingPercent}</td>
      <td className="border px-4 py-2">{predictedPercent}</td>
      <td className="border px-4 py-2">{createdDate}</td>
      <td className="border px-4 py-2">
        <Link className="bg-amber-700 text-white hover:cursor-pointer hover:bg-red-600 font-bold py-2 px-4 rounded" href="/dashboard/record/[recordId]" as={`/dashboard/record/${recordId}`}>
          Details
        </Link>
      </td>
    </tr>
  );
}
