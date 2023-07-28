import { useQuery } from "@tanstack/react-query";
import { Post, User } from "@/types";

export const usersQueryKey = "users";
export const PostQueryKey = "posts";
const BASE_URL = "http://localhost:3000/api/user";

const fetchUsers = async () => {
  console.log("usssssrs");

  const res = await fetch(BASE_URL);
  return await res.json();
};

// const fetchPostOfUsers = async (userId: number) => {
//   console.log("pooooots");

//   const res = await fetch(`${BASE_URL}/user/${userId}/posts`);
//   return await res.json();
// };

export const useUserQuery = () => useQuery<User[]>([usersQueryKey], fetchUsers);

// export const useUserPostQuery = (userId: number) =>
//   useQuery<Post[]>([PostQueryKey, userId], () => fetchPostOfUsers(userId));