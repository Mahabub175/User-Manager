import { TUserData } from "@/utils/globalTypes";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import UserDetails from "./UserDetails";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IUserListProps {
  user: TUserData;
  i: number;
}

export const UserList: React.FC<IUserListProps> = ({ user, i }) => {
  return (
    <div className="bg-white rounded-2xl p-1">
      <div className="rounded-xl flex justify-between items-center p-5 border-2 border-blue-600/60">
        <div className="mr-5 font-bold">{i + 1}.</div>
        {user?.active_status === true ? (
          <div className="bg-green-gradient size-4 rounded-full mr-5"></div>
        ) : (
          <div className="bg-red-gradient size-4 rounded-full mr-5"></div>
        )}

        <Avatar className="mr-10">
          <AvatarImage src={user?.profile_picture} />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>

        <p className={`flex-1 font-bold pr-5`}>{user?.name}</p>
        <div className="flex-1">{user?.birthdate}</div>
        <p className="flex-[1] px-4">{user?.joining_date}</p>
        <div className="flex gap-4">
          <UserDetails user={user} />
          <UpdateUser id={user?._id} initialData={user} />
          <DeleteUser id={user?._id} />
        </div>
      </div>
    </div>
  );
};
