'use client'
import { useUserQuery } from "../customHooks/queries";

export default function User() {
    const { data: users, isLoading } = useUserQuery();
    if (isLoading) return <p>Loading...</p>;
    console.log(`users`, users)
    return (
        <div>
            {users?.map((user) =>
                <>
                    <p>{user.fullName}</p>
                    <p>{user.phone}</p>
                </>
            )}
        </div>
    )
}
