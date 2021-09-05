import {
    Account,
    accountFromAny,
    AuthExtension,
    BankExtension, BroadcastTxFailure,
    defaultRegistryTypes,
    isBroadcastTxFailure,
    QueryClient,
    setupAuthExtension,
    setupBankExtension,
    setupStakingExtension,
    SigningStargateClient,
    StakingExtension,
    StdFee
} from "@cosmjs/stargate";
import {Any} from "cosmjs-types/google/protobuf/any";
import {
    GeneratedType,
    OfflineSigner,
    Registry
} from "@cosmjs/proto-signing";
import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {DesmosProfile} from "./types/desmos";
import {
    MsgDeleteProfileEncodeObject,
    MsgRequestDTagTransferEncodeObject,
    MsgSaveProfileEncodeObject
} from "./encodeobjects";
import {MsgLinkApplication, MsgUnlinkApplication} from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_app_links";
import {MsgLinkChainAccount, MsgUnlinkChainAccount} from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_chain_links";
import {MsgAcceptDTagTransferRequest, MsgCancelDTagTransferRequest, MsgRefuseDTagTransferRequest, MsgRequestDTagTransfer } from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_dtag_requests";
import {MsgDeleteProfile} from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_profile";
import {MsgSaveProfile} from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_profile";
import {MsgBlockUser, MsgCreateRelationship, MsgDeleteRelationship, MsgUnblockUser } from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_relationships";
import {Profile} from "@desmos-labs/proto/desmos/profiles/v1beta1/models_profile";
import {
    MsgCreatePost,
    MsgEditPost,
    MsgAddPostReaction,
    MsgRemovePostReaction,
    MsgAnswerPoll,
    MsgRegisterReaction,
    MsgReportPost,
} from "@desmos-labs/proto/desmos/posts/v1beta1/msgs"
import {
    MsgCreateSubspace,
    MsgEditSubspace,
    MsgAddAdmin,
    MsgRemoveAdmin,
    MsgRegisterUser,
    MsgUnregisterUser,
    MsgBanUser,
    MsgUnbanUser,
} from "@desmos-labs/proto/desmos/subspaces/v1beta1/msgs";
import {ProfilesExtension, setupProfilesExtension} from "./queries/profiles";
import {PostsExtension, setupPostsExtension} from "./queries/posts";
import {setupSubspacesExtension, SubspacesExtension} from "./queries/subspaces";


const registryTypes: ReadonlyArray<[string, GeneratedType]> = [
    ...defaultRegistryTypes,
    // Profiles module
    ["/desmos.profiles.v1beta1.MsgLinkApplication", MsgLinkApplication],
    ["/desmos.profiles.v1beta1.MsgUnlinkApplication", MsgUnlinkApplication],
    ["/desmos.profiles.v1beta1.MsgLinkChainAccount", MsgLinkChainAccount],
    ["/desmos.profiles.v1beta1.MsgUnlinkChainAccount", MsgUnlinkChainAccount],
    ["/desmos.profiles.v1beta1.MsgRequestDTagTransfer", MsgRequestDTagTransfer],
    ["/desmos.profiles.v1beta1.MsgCancelDTagTransferRequest", MsgCancelDTagTransferRequest],
    ["/desmos.profiles.v1beta1.MsgAcceptDTagTransferRequest", MsgAcceptDTagTransferRequest],
    ["/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest", MsgRefuseDTagTransferRequest],
    ["/desmos.profiles.v1beta1.MsgSaveProfile", MsgSaveProfile],
    ["/desmos.profiles.v1beta1.MsgDeleteProfile", MsgDeleteProfile],
    ["/desmos.profiles.v1beta1.MsgCreateRelationship", MsgCreateRelationship],
    ["/desmos.profiles.v1beta1.MsgDeleteRelationship", MsgDeleteRelationship],
    ["/desmos.profiles.v1beta1.MsgBlockUser", MsgBlockUser],
    ["/desmos.profiles.v1beta1.MsgUnblockUser", MsgUnblockUser],
    // Posts module
    ["/desmos.posts.v1beta1.MsgCreatePost", MsgCreatePost],
    ["/desmos.posts.v1beta1.MsgEditPost", MsgEditPost],
    ["/desmos.posts.v1beta1.MsgAddPostReaction", MsgAddPostReaction],
    ["/desmos.posts.v1beta1.MsgRemovePostReaction", MsgRemovePostReaction],
    ["/desmos.posts.v1beta1.MsgAnswerPoll", MsgAnswerPoll],
    ["/desmos.posts.v1beta1.MsgRegisterReaction", MsgRegisterReaction],
    ["/desmos.posts.v1beta1.MsgReportPost", MsgReportPost],
    // Subspaces module
    ["/desmos.subspaces.v1beta1.MsgCreateSubspace", MsgCreateSubspace],
    ["/desmos.subspaces.v1beta1.MsgEditSubspace", MsgEditSubspace],
    ["/desmos.subspaces.v1beta1.MsgAddAdmin", MsgAddAdmin],
    ["/desmos.subspaces.v1beta1.MsgRemoveAdmin", MsgRemoveAdmin],
    ["/desmos.subspaces.v1beta1.MsgRegisterUser", MsgRegisterUser],
    ["/desmos.subspaces.v1beta1.MsgUnregisterUser", MsgUnregisterUser],
    ["/desmos.subspaces.v1beta1.MsgBanUser", MsgBanUser],
    ["/desmos.subspaces.v1beta1.MsgUnbanUser", MsgUnbanUser],
]

export type DesmosQueryClient = QueryClient & AuthExtension & BankExtension & StakingExtension & ProfilesExtension
    & PostsExtension & SubspacesExtension;

export function desmosProfileFromAny({typeUrl, value}: Any): Profile {

    if (typeUrl !== "/desmos.profiles.v1beta1.Profile") {
        throw new Error("Can't parse desmos account from value with type: " + typeUrl);
    }

    return Profile.decode(value);
}

/**
 * Client to interact with the Desmos chain.
 */
export class SigningDesmosClient extends SigningStargateClient {

    private readonly url: string
    private _tmClient: Tendermint34Client | undefined;
    private _queryClient: DesmosQueryClient | undefined;
    private _signer: OfflineSigner;

    constructor(url: string, signer: OfflineSigner) {
        super(undefined, signer, {
            registry: new Registry(registryTypes)
        });
        this._signer = signer;
        this.url = url;
    }

    async connect(): Promise<void> {
        if (this._tmClient === undefined) {
            this._tmClient = await Tendermint34Client.connect(this.url);
            this._queryClient = QueryClient.withExtensions(this._tmClient,
                setupAuthExtension,
                setupBankExtension,
                setupStakingExtension,
                setupProfilesExtension,
                setupPostsExtension,
                setupSubspacesExtension
            )
        }
    }

    override disconnect() {
        if (this._tmClient !== undefined) {
            this._tmClient.disconnect();
            this._queryClient = undefined;
        }
    }

    /**
     * Gets the address of the first account provided from the signer.
     */
    async getSignerAddress(): Promise<string> {
        const accounts = await this._signer.getAccounts();
        return accounts[0].address;
    }

    /**
     * Gets the account associated to the provided address.
     * This function has been overridden to correctly parse the desmos account.
     */
    override async getAccount(searchAddress: string): Promise<Account | null> {
        try {
            const account = await this.forceGetQueryClient().auth.account(searchAddress);
            if (account === null) {
                return null;
            }
            if (account.typeUrl.indexOf("desmos") >= 0) {
                const profile = desmosProfileFromAny(account);
                return profile.account ? accountFromAny(profile.account) : null;
            } else {
                return accountFromAny(account);
            }
        } catch (error) {
            if (/rpc error: code = NotFound/i.test(error)) {
                return null;
            }
            throw error;
        }
    }

    /**
     * Gets the tendermint client to interact with the chain.
     * This method has been overrun to provide our client
     * to the parent class.
     * @protected
     */
    protected override forceGetTmClient(): Tendermint34Client {
        if (this._tmClient === undefined) {
            throw new Error("DesmoClient Not connected");
        }

        return this._tmClient;
    }

    /**
     * Gets the gRPC client to interact with the chain.
     * This method has been overrun to provide our client
     * to the parent class.
     * @protected
     */
    protected override forceGetQueryClient(): DesmosQueryClient {
        if (this._queryClient === undefined) {
            throw new Error("DesmoClient Not connected");
        }

        return this._queryClient;
    }

    /**
     * Updates the user profile.
     * @param creator - The user address.
     * @param profile - The user profile informations.
     * @param fee - Fee to perform the transaction.
     */
    async saveProfile(creator: string, profile: Partial<Omit<DesmosProfile, "address">>, fee: StdFee): Promise<void> {

        const saveProfile: MsgSaveProfileEncodeObject = {
            typeUrl: "/desmos.profiles.v1beta1.MsgSaveProfile",
            value: {
                ...profile,
                creator,
            }
        }

        const txResponse = await this.signAndBroadcast(creator, [saveProfile], fee);
        if (isBroadcastTxFailure(txResponse)) {
            throw new Error((txResponse as BroadcastTxFailure).rawLog)
        }
    }
}