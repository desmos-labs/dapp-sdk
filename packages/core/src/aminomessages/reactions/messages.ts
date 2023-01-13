import { AminoMsg } from "@cosmjs/amino";
import { RegisteredReactionValueParams } from "@desmoslabs/desmjs-types/build/desmos/reactions/v1/models";
import { AminoFreeTextValueParams, AminoReaction } from "./types";
import {
  MsgAddReactionAminoType,
  MsgAddRegisteredReactionAminoType,
  MsgEditRegisteredReactionAminoType,
  MsgRemoveReactionAminoType,
  MsgRemoveRegisteredReactionAminoType,
  MsgSetReactionsParamsAminoType,
} from "../../const";

export interface AminoMsgAddReaction extends AminoMsg {
  readonly type: typeof MsgAddReactionAminoType;
  readonly value: {
    subspace_id: string;
    post_id: string;
    value: AminoReaction;
    user: string;
  };
}

export interface AminoMsgRemoveReaction extends AminoMsg {
  readonly type: typeof MsgRemoveReactionAminoType;
  readonly value: {
    subspace_id: string;
    post_id: string;
    reaction_id: number;
    user: string;
  };
}

export interface AminoMsgAddRegisteredReaction extends AminoMsg {
  readonly type: typeof MsgAddRegisteredReactionAminoType;
  readonly value: {
    subspace_id: string;
    shorthand_code: string;
    display_value: string;
    user: string;
  };
}

export interface AminoMsgEditRegisteredReaction extends AminoMsg {
  readonly type: typeof MsgEditRegisteredReactionAminoType;
  readonly value: {
    subspace_id: string;
    registered_reaction_id: number;
    shorthand_code: string;
    display_value: string;
    user: string;
  };
}

export interface AminoMsgRemoveRegisteredReaction extends AminoMsg {
  readonly type: typeof MsgRemoveRegisteredReactionAminoType;
  readonly value: {
    subspace_id: string;
    registered_reaction_id: number;
    user: string;
  };
}

export interface AminoMsgSetReactionsParams extends AminoMsg {
  readonly type: typeof MsgSetReactionsParamsAminoType;
  readonly value: {
    subspace_id: string;
    registered_reaction?: RegisteredReactionValueParams;
    free_text?: AminoFreeTextValueParams;
    user: string;
  };
}
