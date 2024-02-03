import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TUserData } from "@/utils/globalTypes";
import { Checkbox } from "@/components/ui/checkbox";
import { useUpdateUserMutation } from "@/redux/api/api";
import toast from "react-hot-toast";

interface TUpdateUserProps {
  id: string;
  initialData: TUserData;
}

const UpdateUser: React.FC<TUpdateUserProps> = ({ id, initialData }) => {
  const [userName, setUserName] = useState(initialData?.name);
  const [userDescription, setUserDescription] = useState(
    initialData?.description
  );
  const [userImage, setUserImage] = useState(initialData?.profile_picture);
  const [userNumber, setUserNumber] = useState(initialData?.phone_number);
  const [activeStatus, setActiveStatus] = useState(initialData?.active_status);

  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedData = {
      name: userName,
      description: userDescription,
      profile_picture: userImage,
      phone_number: userNumber,
      active_status: activeStatus,
    };
    const options = { id: id, data: updatedData };
    updateUser(options);
    toast.success("User Updated Successfully!");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient">
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-4xl h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Update user</DialogTitle>
          <DialogDescription>
            You can update user details here
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4 my-10">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">User Name</Label>
              <Input
                id="User Name"
                type="text"
                placeholder="User Name"
                defaultValue={initialData?.name}
                className="col-span-2"
                onBlur={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">User Description</Label>
              <Textarea
                id="user description"
                placeholder="User Description"
                defaultValue={initialData?.description}
                className="col-span-2"
                onBlur={(e) => {
                  setUserDescription(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">User Image</Label>
              <Input
                id="user image"
                type="text"
                placeholder="User Image"
                defaultValue={initialData?.profile_picture}
                className="col-span-2"
                onBlur={(e) => {
                  setUserImage(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">User Number</Label>
              <Input
                id="user image"
                type="text"
                placeholder="User Phone Number"
                defaultValue={initialData?.phone_number}
                className="col-span-2"
                onBlur={(e) => {
                  setUserNumber(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label className="text-right">Active Status</Label>
              <Checkbox
                defaultChecked={initialData?.active_status}
                onChange={() => setActiveStatus(!activeStatus)}
              />
            </div>
          </div>
          <div className="flex justify-end gap-6">
            <DialogClose asChild>
              <Button className="bg-red-gradient mb-2">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" className="bg-primary-gradient mb-2">
                Update User
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUser;
