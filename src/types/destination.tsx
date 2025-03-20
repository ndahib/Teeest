import { User } from "./user";

export type Destination = () => {
  destination_name: string;
  destination_description: string | null;
  destination_img: string | null;
  destination: User;
};
