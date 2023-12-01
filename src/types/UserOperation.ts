import { UserOperationStatus } from "./UserOperationStatus";

export type UserOperation = {
  name: string;
  status: UserOperationStatus;
};
