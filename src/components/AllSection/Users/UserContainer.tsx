import { Input } from "@/components/ui/input";
import { AddUser } from "./AddUser";
import { UserList } from "./UserList";
import { useGetUsersQuery } from "@/redux/api/api";
import { TUserData } from "@/utils/globalTypes";
import { useState } from "react";

const UserContainer = () => {
  const [name, setName] = useState("");
  const { data: users, isLoading } = useGetUsersQuery(name);

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <section className="">
      <div className="flex justify-between mt-10 px-5 lg:px-0">
        <AddUser />
        <Input
          type="text"
          placeholder="Search Users"
          className="w-1/3 border border-gray-400 focus:border-none"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="rounded-xl p-5 bg-primary-gradient h-auto my-10 lg:w-[1000px]">
        <div className="bg-white rounded-2xl p-1">
          <div className="rounded-xl flex justify-between items-center p-5 border-2 border-blue-600/60">
            <div className="mr-5 font-bold">SL.</div>

            <p className={`flex-1 font-bold`}>Image</p>
            <div className={`flex-1 font-bold`}>Name</div>
            <p className={`flex-1 font-bold`}>Birth Date</p>
            <p className={`flex-1 font-bold`}>Joining Date</p>
            <p className={`flex-1 font-bold mx-16`}>Actions</p>
          </div>
        </div>
        {users?.length > 0 || undefined ? (
          users?.map((user: TUserData, i: number) => (
            <div key={user._id} className="mt-2">
              <UserList user={user} i={i} />
            </div>
          ))
        ) : (
          <div className="bg-white text-2xl font-bold p-5 text center rounded-xl flex justify-center">
            <p>There is no user right now!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserContainer;
