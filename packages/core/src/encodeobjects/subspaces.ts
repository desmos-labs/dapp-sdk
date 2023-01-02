import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgAddUserToUserGroup,
  MsgCreateSubspace,
  MsgCreateUserGroup,
  MsgDeleteSubspace,
  MsgDeleteUserGroup,
  MsgEditSubspace,
  MsgEditUserGroup,
  MsgRemoveUserFromUserGroup,
  MsgSetUserGroupPermissions,
  MsgSetUserPermissions,
  MsgCreateSection,
  MsgDeleteSection,
  MsgEditSection,
  MsgMoveSection,
  MsgMoveUserGroup,
} from "@desmoslabs/desmjs-types/desmos/subspaces/v3/msgs";
import {
  MsgAddUserToUserGroupTypeUrl,
  MsgCreateSectionTypeUrl,
  MsgCreateSubspaceTypeUrl,
  MsgCreateUserGroupTypeUrl,
  MsgDeleteSectionTypeUrl,
  MsgDeleteSubspaceTypeUrl,
  MsgDeleteUserGroupTypeUrl,
  MsgEditSectionTypeUrl,
  MsgEditSubspaceTypeUrl,
  MsgEditUserGroupTypeUrl,
  MsgMoveSectionTypeUrl,
  MsgMoveUserGroupTypeUrl,
  MsgRemoveUserFromUserGroupTypeUrl,
  MsgSetUserGroupPermissionsTypeUrl,
  MsgSetUserPermissionsTypeUrl,
} from "../const";

export interface MsgCreateSubspaceEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgCreateSubspace";
  readonly value: MsgCreateSubspace;
}

export function isMsgCreateSubspaceEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreateSubspaceEncodeObject {
  return (
    (encodeObject as MsgCreateSubspaceEncodeObject).typeUrl ===
    MsgCreateSubspaceTypeUrl
  );
}

export interface MsgEditSubspaceEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgEditSubspace";
  readonly value: MsgEditSubspace;
}

export function isMsgEditSubspaceEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgEditSubspaceEncodeObject {
  return (
    (encodeObject as MsgEditSubspaceEncodeObject).typeUrl ===
    MsgEditSubspaceTypeUrl
  );
}

export interface MsgDeleteSubspaceEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgDeleteSubspace";
  readonly value: MsgDeleteSubspace;
}

export function isMsgDeleteSubspaceEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteSubspaceEncodeObject {
  return (
    (encodeObject as MsgDeleteSubspaceEncodeObject).typeUrl ===
    MsgDeleteSubspaceTypeUrl
  );
}

export interface MsgCreateSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgCreateSection";
  readonly value: MsgCreateSection;
}

export function isMsgCreateSectionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreateSectionEncodeObject {
  return (
    (encodeObject as MsgCreateSectionEncodeObject).typeUrl ===
    MsgCreateSectionTypeUrl
  );
}

export interface MsgEditSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgEditSection";
  readonly value: MsgEditSection;
}

export function isMsgEditSectionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgEditSectionEncodeObject {
  return (
    (encodeObject as MsgEditSectionEncodeObject).typeUrl ===
    MsgEditSectionTypeUrl
  );
}

export interface MsgMoveSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgMoveSection";
  readonly value: MsgMoveSection;
}

export function isMsgMoveSectionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgMoveSectionEncodeObject {
  return (
    (encodeObject as MsgMoveSectionEncodeObject).typeUrl ===
    MsgMoveSectionTypeUrl
  );
}

export interface MsgDeleteSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgDeleteSection";
  readonly value: MsgDeleteSection;
}

export function isMsgDeleteSectionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteSectionEncodeObject {
  return (
    (encodeObject as MsgDeleteSectionEncodeObject).typeUrl ===
    MsgDeleteSectionTypeUrl
  );
}

export interface MsgCreateUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgCreateUserGroup";
  readonly value: MsgCreateUserGroup;
}

export function isMsgCreateUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreateUserGroupEncodeObject {
  return (
    (encodeObject as MsgCreateUserGroupEncodeObject).typeUrl ===
    MsgCreateUserGroupTypeUrl
  );
}

export interface MsgEditUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgEditUserGroup";
  readonly value: MsgEditUserGroup;
}

export function isMsgEditUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgEditUserGroupEncodeObject {
  return (
    (encodeObject as MsgEditUserGroupEncodeObject).typeUrl ===
    MsgEditUserGroupTypeUrl
  );
}

export interface MsgMoveUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgMoveUserGroup";
  readonly value: MsgMoveUserGroup;
}

export function isMsgMoveUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgMoveUserGroupEncodeObject {
  return (
    (encodeObject as MsgMoveUserGroupEncodeObject).typeUrl ===
    MsgMoveUserGroupTypeUrl
  );
}

export interface MsgSetUserGroupPermissionsEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgSetUserGroupPermissions";
  readonly value: MsgSetUserGroupPermissions;
}

export function isMsgSetUserGroupPermissionsEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgSetUserGroupPermissionsEncodeObject {
  return (
    (encodeObject as MsgSetUserGroupPermissionsEncodeObject).typeUrl ===
    MsgSetUserGroupPermissionsTypeUrl
  );
}

export interface MsgDeleteUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgDeleteUserGroup";
  readonly value: MsgDeleteUserGroup;
}

export function isMsgDeleteUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteUserGroupEncodeObject {
  return (
    (encodeObject as MsgDeleteUserGroupEncodeObject).typeUrl ===
    MsgDeleteUserGroupTypeUrl
  );
}

export interface MsgAddUserToUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgAddUserToUserGroup";
  readonly value: MsgAddUserToUserGroup;
}

export function isMsgAddUserToUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAddUserToUserGroupEncodeObject {
  return (
    (encodeObject as MsgAddUserToUserGroupEncodeObject).typeUrl ===
    MsgAddUserToUserGroupTypeUrl
  );
}

export interface MsgRemoveUserFromUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup";
  readonly value: MsgRemoveUserFromUserGroup;
}

export function isMsgRemoveUserFromUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgRemoveUserFromUserGroupEncodeObject {
  return (
    (encodeObject as MsgRemoveUserFromUserGroupEncodeObject).typeUrl ===
    MsgRemoveUserFromUserGroupTypeUrl
  );
}

export interface MsgSetUserPermissionsEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v3.MsgSetUserPermissions";
  readonly value: MsgSetUserPermissions;
}

export function isMsgSetUserPermissionsEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgSetUserPermissionsEncodeObject {
  return (
    (encodeObject as MsgSetUserPermissionsEncodeObject).typeUrl ===
    MsgSetUserPermissionsTypeUrl
  );
}
