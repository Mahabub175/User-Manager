export type TUserData = {
  _id: string;
  name: string;
  profile_picture: string;
  phone_number: string;
  description: string;
  birthdate: string;
  joining_date: string;
  active_status: boolean;
};

export interface IResponse {
  data?: {
    insertedId?: number | undefined;
  };
}
