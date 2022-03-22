import { AminoMsg } from "@cosmjs/amino";
import Long from "long";

export interface AminoMsgCreateSubspace extends AminoMsg {
  readonly type: "desmos/MsgCreateSubspace";
  readonly value: {
    name: string;
    description: string;
    treasury: string;
    owner: string;
    creator: string;
  };
}

export interface AminoMsgEditSubspace extends AminoMsg {
  readonly type: "desmos/MsgEditSubspace";
  readonly value: {
    subspace_id: Long;
    name: string;
    description: string;
    treasury: string;
    owner: string;
    signer: string;
  };
}

export interface AminoMsgDeleteSubspace extends AminoMsg {
  readonly type: "desmos/MsgDeleteSubspace";
  readonly value: {
    subspace_id: Long;
    signer: string;
  };
}

export interface AminoMsgCreateUserGroup extends AminoMsg {
  readonly type: "desmos/MsgCreateUserGroup";
  readonly value: {
    subspace_id: Long;
    name: string;
    description: string;
    default_permissions: number;
    creator: string;
  };
}

export interface AminoMsgEditUserGroup extends AminoMsg {
  readonly type: "desmos/MsgEditUserGroup";
  readonly value: {
    subspace_id: Long;
    group_id: number;
    name: string;
    description: string;
    signer: string;
  };
}

export interface AminoMsgSetUserGroupPermissions extends AminoMsg {
  readonly type: "desmos/MsgSetUserGroupPermissions";
  readonly value: {
    subspace_id: Long;
    group_id: number;
    permissions: number;
    signer: string;
  };
}

export interface AminoMsgDeleteUserGroup extends AminoMsg {
  readonly type: "desmos/MsgDeleteUserGroup";
  readonly value: {
    subspace_id: Long;
    group_id: number;
    signer: string;
  };
}

export interface AminoMsgAddUserToUserGroup extends AminoMsg {
  readonly type: "desmos/MsgAddUserToUserGroup";
  readonly value: {
    subspace_id: Long;
    group_id: number;
    user: string;
    signer: string;
  };
}

export interface AminoMsgRemoveUserFromUserGroup extends AminoMsg {
  readonly type: "desmos/MsgRemoveUserFromUserGroup";
  readonly value: {
    subspace_id: Long;
    group_id: number;
    user: string;
    signer: string;
  };
}

export interface AminoMsgSetUserPermissions extends AminoMsg {
  readonly type: "desmos/MsgSetUserPermissions";
  readonly value: {
    subspace_id: Long;
    user: string;
    permissions: number;
    signer: string;
  };
}
