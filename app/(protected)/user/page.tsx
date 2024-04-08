

// pages/users.tsx

import { signOut, useSession } from 'next-auth/react';
import {Userinfo} from "../../../components/userInfo"
import { currentUser } from '../../../lib/auth'




const UsersPage = async () => {
  const user = await currentUser();
 
  return (
    <div>
      <Userinfo 
        label='Only Admin Side'
        user={user}
      />
    </div>
  )
}

export default UsersPage;
