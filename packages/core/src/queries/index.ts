import {
  AuthExtension,
  BankExtension,
  QueryClient,
  StakingExtension,
  TxExtension,
} from "@cosmjs/stargate";
import { AuthzExtension } from "./authz";
import { ProfilesExtension } from "./profiles";
import { RelationshipsExtension } from "./relationships";
import { SubspacesExtension } from "./subspaces";

export * from "./authz";
export * from "./profiles";
export * from "./relationships";
export * from "./subspaces";

export type DesmosQueryClient = QueryClient &
  AuthzExtension &
  AuthExtension &
  BankExtension &
  StakingExtension &
  TxExtension &
  ProfilesExtension &
  RelationshipsExtension &
  SubspacesExtension;
