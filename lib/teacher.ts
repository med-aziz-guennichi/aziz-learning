import axios from "axios";

export const isTeacher = (userId?: string | null) => {
  return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
};

export const isAdmin = async(userId?:string | null) =>{
  return userId === process.env.NEXT_PUBLIC_ADMIN_ID;
}