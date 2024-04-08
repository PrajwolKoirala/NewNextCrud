// // // "use client"
// // // import React from 'react'
// // // import { useCurrentRole } from '../../../hooks/useCurrentRole'
// // // import {currentRole} from "../../../lib/auth"
// // // import { Card, CardContent, CardHeader } from '../../../components/ui/card'
// // // import { RoleGate } from '../../../components/auth/rolegate'
// // // import FormSuccess from "../../../components/FormSuccess"
// // // import { UserRole } from '@prisma/client'
// // // import { Button } from '../../../components/ui/button'
// // // const AdminPag = async () => {
// // //     const onApiRouteClick = () =>{
// // //         fetch("/api/admin")
// // //         .then((response) => {
// // //             if (response.ok) {
// // //                 console.log("okkkkk");
                
// // //             }else{
// // //                 console.error("Forbidden")
// // //             }
// // //         })
// // //     }

// // //     const role = await currentRole()
// // //   return (
// // //     <Card className='w-[600px] '>
// // //      <CardHeader>
// // //         <p className='text-2xl font-semibold text-center'>
// // //             ADMIN
// // //         </p>
// // //      </CardHeader>
// // //      <CardContent className='space-y-4'>
// // //         <RoleGate allowedRole={UserRole.ADMIN}>
// // //             <FormSuccess message="YOU ARE ALLOWED TO SEE THIS PAGE"/>
// // //         </RoleGate>
// // //      </CardContent>
// // //      <div className='flex flex-row items-center justify-between rounded-lg borer p-3 shadow-md'>
// // //         <p>
// // //             Admin-Only Api Route
// // //         </p>
// // //         <Button >
// // //             Click to test
// // //         </Button>
// // //      </div>
// // //      <div className='flex flex-row items-center justify-between rounded-lg borer p-3 shadow-md'>
// // //         <p>
// // //             Admin-Only Server Route
// // //         </p>
// // //         <Button onClick={onApiRouteClick}>
// // //             Click to test
// // //         </Button>
// // //      </div>
// // //     </Card>
// // //   )
// // // }

// // // export default AdminPag


"use client"
import React, { useEffect, useState } from 'react';
import { useCurrentRole } from '../../../hooks/useCurrentRole';
import { currentRole } from '../../../lib/auth';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { RoleGate } from '../../../components/auth/rolegate';
import FormSuccess from '../../../components/FormSuccess';
import { UserRole } from '@prisma/client';
import { Button } from '../../../components/ui/button';
import {toast} from "sonner"
import axios from "axios";
import { useRouter } from "next/navigation";
import { User } from 'next-auth';
const AdminPag = () => {
  // Define onApiRouteClick function
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/user"); // Fetch users from backend
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);


  const onApiRouteClick = async () => {
    try {
      const response = await fetch("/api/admin");
      if (response.ok) {
       toast.success("allowed API route")
      } else {
        toast.error("Forbidden");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Call onApiRouteClick function once when the component mounts
  useEffect(() => {
    onApiRouteClick();
  }, [0]);

  const role = useCurrentRole(); // Assuming useCurrentRole is a custom hook returning the current role

  return (
    <div>
    <Card className='w-[600px] '>
      <CardHeader>
        <p className='text-2xl font-semibold text-center'>ADMIN</p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="YOU ARE ALLOWED TO SEE THIS PAGE" />
        </RoleGate>
      </CardContent>
      <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
        <p>Admin-Only Api Route</p>
        <Button onClick={onApiRouteClick}>Click to test</Button>
      </div>
      <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
        <p>Admin-Only Server Route</p>
        <Button onClick={onApiRouteClick}>Click to test</Button>
      </div>
    </Card>
    <RoleGate allowedRole={UserRole.ADMIN}>

    <h1>Welcome to the Admin Dashboard</h1>
    <h2 style={{ textDecoration: "underline" }}>User List</h2>
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>
            Name
          </th>
          
          <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
          
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
         <tr key={user.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.email}</td>
              {/* <td style={{ border: '1px solid black', padding: '8px' }}>{user.role ? 'Admin' : 'User'}</td> */}
            </tr>
        ))}
      </tbody>
    </table>
    </RoleGate>

    </div>
  );
};

export default AdminPag;

// "use client";
// import React, { useState, useEffect } from 'react';
// import { useCurrentRole } from '../../../hooks/useCurrentRole';
// import { Card, CardContent, CardHeader } from '../../../components/ui/card';
// import { RoleGate } from '../../../components/auth/rolegate';
// import FormSuccess from '../../../components/FormSuccess';
// import { UserRole } from '@prisma/client';
// import { Button } from '../../../components/ui/button';
// import { User } from '@prisma/client';

// import { toast } from 'sonner';
// import prisma from '../../../prisma/db'; // Import the prisma instance

// const AdminPag = () => {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     fetch('/api/admin')
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error('Failed to fetch users');
//       })
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error:', error));
//   }, []);

//   const onApiRouteClick = async () => {
//     try {
//       const response = await fetch('/api/admin');
//       if (response.ok) {
//         toast.success('Allowed API route');
//       } else {
//         toast.error('Forbidden');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const role = useCurrentRole(); // Assuming useCurrentRole is a custom hook returning the current role

//   return (
//     <Card className='w-[600px] '>
//       <CardHeader>
//         <p className='text-2xl font-semibold text-center'>ADMIN</p>
//       </CardHeader>
//       <CardContent className='space-y-4'>
//         <RoleGate allowedRole={UserRole.ADMIN}>
//           <FormSuccess message='YOU ARE ALLOWED TO SEE THIS PAGE' />
//         </RoleGate>
//       </CardContent>
//       <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
//         <p>Admin-Only Api Route</p>
//         <Button onClick={onApiRouteClick}>Click to test</Button>
//       </div>
//       <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
//         <p>Admin-Only Server Route</p>
//         <Button onClick={onApiRouteClick}>Click to test</Button>
//       </div>
//       {/* Display fetched users */}
//       <div>
//       <h1>All Users</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//     </Card>
//   );
// };

// export default AdminPag;
