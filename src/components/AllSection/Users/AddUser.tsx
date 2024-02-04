import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { formatDate } from "@/utils/dateTransform";
import { useAddUserMutation } from "@/redux/api/api";
import toast from "react-hot-toast";
import { IResponse } from "@/utils/globalTypes";

export const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [activeStatus, setActiveStatus] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [addUser] = useAddUserMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const userData = {
      name: userName,
      description: userDescription,
      profile_picture: userImage,
      phone_number: userNumber,
      birthdate: formatDate(date),
      joining_date: formatDate(new Date()),
      active_status: activeStatus,
    };
    await addUser(userData);
    toast.success("User Added Successfully!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient lg:px-16 lg:py-6 font-bold">
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-4xl h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Add a new user
          </DialogTitle>
          <DialogDescription>
            You can add new user details here
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4 my-10">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">User Name</Label>
              <Input
                id="userName"
                type="text"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
                required
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">User Description</Label>
              <Textarea
                id="userDescription"
                placeholder="User Description"
                onChange={(e) => setUserDescription(e.target.value)}
                required
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">User Image</Label>
              <Input
                id="userImage"
                type="text"
                placeholder="User Image"
                onChange={(e) => setUserImage(e.target.value)}
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">User Number</Label>
              <Input
                id="userNumber"
                type="text"
                placeholder="User Phone Number"
                onChange={(e) => setUserNumber(e.target.value)}
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">User Birthday</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border col-span-2 flex justify-center"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label className="text-right">Active Status</Label>
              <Checkbox onChange={() => setActiveStatus(!activeStatus)} />
            </div>
          </div>
          <div className="flex justify-end gap-6">
            <DialogClose asChild>
              <Button className="bg-red-gradient mb-2">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" className="bg-primary-gradient mb-2">
                Add User
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
