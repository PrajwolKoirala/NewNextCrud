import { db } from "@/lib/db";

export const getUserByemail = async (email:string) => {
     try{
        const user = await db.user.findUnique({ where: {email}});
        return user;
     }catch {
        return null;

     }

};

export const getUserByID = async (id:string) => {
    try{
       const user = await db.user.findUnique({ where: {id}});
       return user;
    }catch {
       return null;

    }

};

export const getAllUsers = async () => {
   try {
       const users = await db.user.findMany();
       return users;
   } catch (error) {
       console.error('Error fetching users:', error);
       return null;
   }
};

