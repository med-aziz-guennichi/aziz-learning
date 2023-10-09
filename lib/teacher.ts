import axios from "axios";

export const isTeacher = async(userId?: string | null) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all-instructors`);
  const instructoId = response.data.map((instructor: any) => instructor.userId);
  if(userId === process.env.NEXT_PUBLIC_TEACHER_ID){
    return true;
  } else if(instructoId.includes(userId)){
    return true;
  }else if(!userId || !instructoId.includes(userId) || userId !== process.env.NEXT_PUBLIC_TEACHER_ID)  {
    return false;
  } else {
    return false
  }
};

export const isAdmin = async(userId?:string | null) =>{
  return userId === process.env.NEXT_PUBLIC_ADMIN_ID;
}