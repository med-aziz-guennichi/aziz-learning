"use client";
import TableActions from "./table-actions";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default async function DataTableUsers() {
  const { data } = await axios.get("/api/users");

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user: any) => (
            <tr
              key={user?.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-6 py-4">
                {user.emailAddresses[0].emailAddress}
              </td>
              <td className="px-6 py-4">
                <TableActions key={user.id} user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
