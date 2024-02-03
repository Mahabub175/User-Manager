/* eslint-disable @next/next/no-img-element */
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TUserData } from "@/utils/globalTypes";

type TUserDetailsProps = {
  user: TUserData;
};

const UserDetails: React.FC<TUserDetailsProps> = ({ user }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-gradient">See Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-4xl h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">User Details</DialogTitle>
          <DialogDescription>You can see user details here</DialogDescription>
        </DialogHeader>
        <div>
          {user?.profile_picture && (
            <img
              src={user?.profile_picture}
              alt={user?.name}
              className="mx-auto rounded-lg w-auto h-[700px] m-10"
            />
          )}
          <div className="">
            <p className="text-center my-10 font-bold text-3xl">{user?.name}</p>

            <div className="space-y-5 container mx-auto mt-10 text-center">
              <p className="">
                <span className="text-bold">Description:</span>{" "}
                {user?.description}
              </p>
              <p className="">
                <span className="text-bold">Phone Number:</span>{" "}
                {user?.phone_number}
              </p>
              <p className="">
                <span className="text-bold">Birthday:</span> {user?.birthdate}
              </p>
              <p className="">
                <span className="text-bold">Joining Date:</span>{" "}
                {user?.birthdate}
              </p>
              {user?.active_status === true ? (
                <p>
                  <span className="text-bold">Active Status: </span>
                  True
                </p>
              ) : (
                <p>
                  {" "}
                  <span className="text-bold">Active Status: </span>
                  False
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <DialogClose asChild>
            <Button type="submit" className="bg-red-gradient mb-2">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetails;
