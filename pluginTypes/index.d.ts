/// <reference path="@ijstech/eth-contract/index.d.ts" />
/// <amd-module name="@scom/scom-gem-token/interface.tsx" />
declare module "@scom/scom-gem-token/interface.tsx" {
    export interface PageBlock {
        getData: () => any;
        setData: (data: any) => Promise<void>;
        getTag: () => any;
        setTag: (tag: any) => Promise<void>;
        validate?: () => boolean;
        defaultEdit?: boolean;
        tag?: any;
        readonly onEdit: () => Promise<void>;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        edit: () => Promise<void>;
        preview: () => Promise<void>;
        confirm: () => Promise<void>;
        discard: () => Promise<void>;
        config: () => Promise<void>;
    }
    export type DappType = 'buy' | 'redeem';
    export interface IDeploy {
        name: string;
        symbol: string;
        cap: string;
        price: string;
        mintingFee: string;
        redemptionFee: string;
    }
    export interface IConfig extends Partial<IDeploy> {
        dappType?: DappType;
        logo?: string;
        description?: string;
        hideDescription?: boolean;
        chainId?: number;
        token?: ITokenObject;
        feeTo?: string;
        contract?: string;
    }
    export interface ITokenObject {
        address?: string;
        name: string;
        decimals: number;
        symbol: string;
        status?: boolean | null;
        logoURI?: string;
        isCommon?: boolean | null;
        balance?: string | number;
        isNative?: boolean | null;
        isWETH?: boolean | null;
        isNew?: boolean | null;
    }
}
/// <amd-module name="@scom/scom-gem-token/utils/token.ts" />
declare module "@scom/scom-gem-token/utils/token.ts" {
    import { BigNumber, IWallet, ISendTxEventsOptions } from "@ijstech/eth-wallet";
    import { ITokenObject } from "@scom/scom-gem-token/interface.tsx";
    export const getERC20Amount: (wallet: IWallet, tokenAddress: string, decimals: number) => Promise<BigNumber>;
    export const getTokenBalance: (token: ITokenObject) => Promise<BigNumber>;
    export const registerSendTxEvents: (sendTxEventHandlers: ISendTxEventsOptions) => void;
}
/// <amd-module name="@scom/scom-gem-token/utils/approvalModel.ts" />
declare module "@scom/scom-gem-token/utils/approvalModel.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    import { ITokenObject } from "@scom/scom-gem-token/interface.tsx";
    export enum ApprovalStatus {
        TO_BE_APPROVED = 0,
        APPROVING = 1,
        NONE = 2
    }
    export const getERC20Allowance: (token: ITokenObject, spenderAddress: string) => Promise<BigNumber>;
    export const getERC20ApprovalModelAction: (spenderAddress: string, options: IERC20ApprovalEventOptions) => IERC20ApprovalAction;
    interface IERC20ApprovalEventOptions {
        sender: any;
        payAction: () => Promise<void>;
        onToBeApproved: (token: ITokenObject) => Promise<void>;
        onToBePaid: (token: ITokenObject) => Promise<void>;
        onApproving: (token: ITokenObject, receipt?: string, data?: any) => Promise<void>;
        onApproved: (token: ITokenObject, data?: any) => Promise<void>;
        onPaying: (receipt?: string, data?: any) => Promise<void>;
        onPaid: (data?: any) => Promise<void>;
        onApprovingError: (token: ITokenObject, err: Error) => Promise<void>;
        onPayingError: (err: Error) => Promise<void>;
    }
    export interface IERC20ApprovalOptions extends IERC20ApprovalEventOptions {
        spenderAddress: string;
    }
    export interface IERC20ApprovalAction {
        setSpenderAddress: (value: string) => void;
        doApproveAction: (token: ITokenObject, inputAmount: string, data?: any) => Promise<void>;
        doPayAction: (data?: any) => Promise<void>;
        checkAllowance: (token: ITokenObject, inputAmount: string) => Promise<void>;
    }
}
/// <amd-module name="@scom/scom-gem-token/utils/index.ts" />
declare module "@scom/scom-gem-token/utils/index.ts" {
    export const formatNumber: (value: any, decimals?: number) => string;
    export const formatNumberWithSeparators: (value: number, precision?: number) => string;
    export function parseContractError(oMessage: any): string;
    export { getERC20Amount, getTokenBalance, registerSendTxEvents } from "@scom/scom-gem-token/utils/token.ts";
    export { ApprovalStatus, getERC20Allowance, getERC20ApprovalModelAction, IERC20ApprovalOptions, IERC20ApprovalAction } from "@scom/scom-gem-token/utils/approvalModel.ts";
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/mainnet/avalanche.ts" />
declare module "@scom/scom-gem-token/store/tokens/mainnet/avalanche.ts" {
    export const Tokens_Avalanche: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/mainnet/ethereum.ts" />
declare module "@scom/scom-gem-token/store/tokens/mainnet/ethereum.ts" {
    export const Tokens_Ethereuem: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/mainnet/polygon.ts" />
declare module "@scom/scom-gem-token/store/tokens/mainnet/polygon.ts" {
    export const Tokens_Polygon: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/mainnet/bsc.ts" />
declare module "@scom/scom-gem-token/store/tokens/mainnet/bsc.ts" {
    export const Tokens_BSC: ({
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/mainnet/fantom.ts" />
declare module "@scom/scom-gem-token/store/tokens/mainnet/fantom.ts" {
    export const Tokens_Fantom: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/mainnet/cronos.ts" />
declare module "@scom/scom-gem-token/store/tokens/mainnet/cronos.ts" {
    export const Tokens_Cronos: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/mainnet/index.ts" />
declare module "@scom/scom-gem-token/store/tokens/mainnet/index.ts" {
    export { Tokens_Avalanche } from "@scom/scom-gem-token/store/tokens/mainnet/avalanche.ts";
    export { Tokens_Ethereuem } from "@scom/scom-gem-token/store/tokens/mainnet/ethereum.ts";
    export { Tokens_Polygon } from "@scom/scom-gem-token/store/tokens/mainnet/polygon.ts";
    export { Tokens_BSC } from "@scom/scom-gem-token/store/tokens/mainnet/bsc.ts";
    export { Tokens_Fantom } from "@scom/scom-gem-token/store/tokens/mainnet/fantom.ts";
    export { Tokens_Cronos } from "@scom/scom-gem-token/store/tokens/mainnet/cronos.ts";
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/testnet/kovan.ts" />
declare module "@scom/scom-gem-token/store/tokens/testnet/kovan.ts" {
    export const Tokens_Kovan: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
        isVaultToken?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
        isVaultToken?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isVaultToken: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
        isVaultToken?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/testnet/bsc-testnet.ts" />
declare module "@scom/scom-gem-token/store/tokens/testnet/bsc-testnet.ts" {
    export const Tokens_BSC_Testnet: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/testnet/fuji.ts" />
declare module "@scom/scom-gem-token/store/tokens/testnet/fuji.ts" {
    export const Tokens_Fuji: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/testnet/mumbai.ts" />
declare module "@scom/scom-gem-token/store/tokens/testnet/mumbai.ts" {
    export const Tokens_Mumbai: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/testnet/fantom-testnet.ts" />
declare module "@scom/scom-gem-token/store/tokens/testnet/fantom-testnet.ts" {
    export const Tokens_Fantom_Testnet: ({
        address: string;
        decimals: number;
        name: string;
        symbol: string;
        isWETH: boolean;
        isCommon?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/testnet/amino.ts" />
declare module "@scom/scom-gem-token/store/tokens/testnet/amino.ts" {
    export const Tokens_Amino: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/testnet/aminoX-testnet.ts" />
declare module "@scom/scom-gem-token/store/tokens/testnet/aminoX-testnet.ts" {
    export const Tokens_AminoXTestnet: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/testnet/cronos-testnet.ts" />
declare module "@scom/scom-gem-token/store/tokens/testnet/cronos-testnet.ts" {
    export const Tokens_Cronos_Testnet: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/testnet/index.ts" />
declare module "@scom/scom-gem-token/store/tokens/testnet/index.ts" {
    export { Tokens_Kovan } from "@scom/scom-gem-token/store/tokens/testnet/kovan.ts";
    export { Tokens_BSC_Testnet } from "@scom/scom-gem-token/store/tokens/testnet/bsc-testnet.ts";
    export { Tokens_Fuji } from "@scom/scom-gem-token/store/tokens/testnet/fuji.ts";
    export { Tokens_Mumbai } from "@scom/scom-gem-token/store/tokens/testnet/mumbai.ts";
    export { Tokens_Fantom_Testnet } from "@scom/scom-gem-token/store/tokens/testnet/fantom-testnet.ts";
    export { Tokens_Amino } from "@scom/scom-gem-token/store/tokens/testnet/amino.ts";
    export { Tokens_AminoXTestnet } from "@scom/scom-gem-token/store/tokens/testnet/aminoX-testnet.ts";
    export { Tokens_Cronos_Testnet } from "@scom/scom-gem-token/store/tokens/testnet/cronos-testnet.ts";
}
/// <amd-module name="@scom/scom-gem-token/store/tokens/index.ts" />
declare module "@scom/scom-gem-token/store/tokens/index.ts" {
    import { ITokenObject } from "@scom/scom-gem-token/interface.tsx";
    const DefaultERC20Tokens: {
        [chainId: number]: ITokenObject[];
    };
    const ChainNativeTokenByChainId: {
        [chainId: number]: ITokenObject;
    };
    const DefaultTokens: {
        [chainId: number]: ITokenObject[];
    };
    export { DefaultERC20Tokens, ChainNativeTokenByChainId, DefaultTokens };
}
/// <amd-module name="@scom/scom-gem-token/store/index.ts" />
declare module "@scom/scom-gem-token/store/index.ts" {
    export const getTokenList: (chainId: number) => import("@scom/scom-gem-token/interface.tsx").ITokenObject[];
    export const enum EventId {
        ConnectWallet = "connectWallet",
        IsWalletConnected = "isWalletConnected",
        IsWalletDisconnected = "IsWalletDisconnected",
        chainChanged = "chainChanged"
    }
    export const getNetworkName: (chainId: number) => string;
    export interface IContractDetailInfo {
        address: string;
    }
    export type ContractType = 'Proxy';
    export interface IContractInfo {
        Proxy: IContractDetailInfo;
    }
    export type ContractInfoByChainType = {
        [key: number]: IContractInfo;
    };
    export const state: {
        contractInfoByChain: ContractInfoByChainType;
        commissionFee: string;
    };
    export const setDataFromSCConfig: (options: any) => void;
    export const getCommissionFee: () => string;
    export const getContractAddress: (type: ContractType) => any;
    export * from "@scom/scom-gem-token/store/tokens/index.ts";
}
/// <amd-module name="@scom/scom-gem-token/wallet/walletList.ts" />
declare module "@scom/scom-gem-token/wallet/walletList.ts" {
    import { WalletPlugin } from '@ijstech/eth-wallet';
    export const walletList: ({
        name: WalletPlugin;
        displayName: string;
        img: string;
        iconFile?: undefined;
    } | {
        name: WalletPlugin;
        displayName: string;
        iconFile: string;
        img?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-gem-token/wallet/index.ts" />
declare module "@scom/scom-gem-token/wallet/index.ts" {
    import { IWallet, WalletPlugin } from "@ijstech/eth-wallet";
    export function isWalletConnected(): boolean;
    export function connectWallet(walletPlugin: WalletPlugin, eventHandlers?: {
        [key: string]: Function;
    }): Promise<IWallet>;
    export const hasWallet: () => boolean;
    export const getChainId: () => number;
}
/// <amd-module name="@scom/scom-gem-token/config/index.css.ts" />
declare module "@scom/scom-gem-token/config/index.css.ts" {
    export const textareaStyle: string;
}
/// <amd-module name="@scom/scom-gem-token/assets.ts" />
declare module "@scom/scom-gem-token/assets.ts" {
    import { ITokenObject } from "@scom/scom-gem-token/interface.tsx";
    function fullPath(path: string): string;
    function tokenPath(tokenObj?: ITokenObject, chainId?: number): string;
    const _default: {
        logo: string;
        fullPath: typeof fullPath;
        tokenPath: typeof tokenPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-gem-token/token-selection/index.css.ts" />
declare module "@scom/scom-gem-token/token-selection/index.css.ts" {
    export const scrollbarStyle: string;
    export const buttonStyle: string;
    export const tokenStyle: string;
    export const modalStyle: string;
}
/// <amd-module name="@scom/scom-gem-token/token-selection/index.tsx" />
declare module "@scom/scom-gem-token/token-selection/index.tsx" {
    import { Module, ControlElement, Container } from '@ijstech/components';
    import { ITokenObject } from "@scom/scom-gem-token/interface.tsx";
    type selectTokenCallback = (token: ITokenObject) => void;
    interface TokenSelectionElement extends ControlElement {
        readonly?: boolean;
        onSelectToken?: selectTokenCallback;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['gem-token-selection']: TokenSelectionElement;
            }
        }
    }
    export class TokenSelection extends Module {
        private btnTokens;
        private mdTokenSelection;
        private gridTokenList;
        private $eventBus;
        private _token;
        private _readonly;
        onSelectToken: selectTokenCallback;
        private _chainId;
        private isInited;
        constructor(parent?: Container, options?: any);
        get token(): ITokenObject | undefined;
        set token(value: ITokenObject | undefined);
        get chainId(): number;
        set chainId(value: number);
        get readonly(): boolean;
        set readonly(value: boolean);
        private onSetup;
        private registerEvent;
        private get tokenList();
        private sortToken;
        private renderTokenItems;
        private renderToken;
        private updateTokenButton;
        private selectToken;
        private showTokenModal;
        private closeTokenModal;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-gem-token/config/index.tsx" />
declare module "@scom/scom-gem-token/config/index.tsx" {
    import { Module, ControlElement } from '@ijstech/components';
    import { IConfig } from "@scom/scom-gem-token/interface.tsx";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['gem-token-config']: ControlElement;
            }
        }
    }
    export default class Config extends Module {
        private uploadLogo;
        private edtDescription;
        private markdownViewer;
        private edtName;
        private edtSymbol;
        private edtCap;
        private edtMintingFee;
        private edtRedemptionFee;
        private edtPrice;
        private tokenSelection;
        private comboDappType;
        private _logo;
        private _contract;
        private _isInited;
        init(): void;
        get data(): IConfig;
        set data(config: IConfig);
        private onChangeFile;
        private onRemove;
        private onMarkdownChanged;
        private onChangedAction;
        private get isDeployed();
        private updateInputs;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-gem-token/index.css.ts" />
declare module "@scom/scom-gem-token/index.css.ts" {
    export const imageStyle: string;
    export const markdownStyle: string;
    export const inputStyle: string;
    export const tokenSelectionStyle: string;
    export const centerStyle: string;
}
/// <amd-module name="@scom/scom-gem-token/alert/index.tsx" />
declare module "@scom/scom-gem-token/alert/index.tsx" {
    import { Module, ControlElement } from '@ijstech/components';
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['gem-token-alert']: ControlElement;
            }
        }
    }
    export interface IAlertMessage {
        status: 'warning' | 'success' | 'error' | 'loading';
        title?: string;
        content?: string;
        onClose?: any;
    }
    export class Alert extends Module {
        private mdAlert;
        private pnlMain;
        private _message;
        get message(): IAlertMessage;
        set message(value: IAlertMessage);
        private get iconName();
        private get color();
        closeModal(): void;
        showModal(): void;
        private renderUI;
        private renderContent;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-gem-token/contracts/gem-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" />
declare module "@scom/scom-gem-token/contracts/gem-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-gem-token/contracts/gem-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" />
declare module "@scom/scom-gem-token/contracts/gem-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class ERC20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IApproveParams, options?: TransactionOptions) => Promise<string>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<string>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<string>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferParams, options?: TransactionOptions) => Promise<string>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferFromParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-gem-token/contracts/gem-token-contract/contracts/GEM.json.ts" />
declare module "@scom/scom-gem-token/contracts/gem-token-contract/contracts/GEM.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/scom-gem-token/contracts/gem-token-contract/contracts/GEM.ts" />
declare module "@scom/scom-gem-token/contracts/gem-token-contract/contracts/GEM.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
        cap: number | BigNumber;
        baseToken: string;
        price: number | BigNumber;
        mintingFee: number | BigNumber;
        redemptionFee: number | BigNumber;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class GEM extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): GEM.ApprovalEvent[];
        decodeApprovalEvent(event: Event): GEM.ApprovalEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): GEM.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): GEM.AuthorizeEvent;
        parseBuyEvent(receipt: TransactionReceipt): GEM.BuyEvent[];
        decodeBuyEvent(event: Event): GEM.BuyEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): GEM.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): GEM.DeauthorizeEvent;
        parsePausedEvent(receipt: TransactionReceipt): GEM.PausedEvent[];
        decodePausedEvent(event: Event): GEM.PausedEvent;
        parseRedeemEvent(receipt: TransactionReceipt): GEM.RedeemEvent[];
        decodeRedeemEvent(event: Event): GEM.RedeemEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): GEM.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): GEM.StartOwnershipTransferEvent;
        parseTransferEvent(receipt: TransactionReceipt): GEM.TransferEvent[];
        decodeTransferEvent(event: Event): GEM.TransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): GEM.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): GEM.TransferOwnershipEvent;
        parseTreasuryRedeemEvent(receipt: TransactionReceipt): GEM.TreasuryRedeemEvent[];
        decodeTreasuryRedeemEvent(event: Event): GEM.TreasuryRedeemEvent;
        parseUnpausedEvent(receipt: TransactionReceipt): GEM.UnpausedEvent[];
        decodeUnpausedEvent(event: Event): GEM.UnpausedEvent;
        parseUpdateCapEvent(receipt: TransactionReceipt): GEM.UpdateCapEvent[];
        decodeUpdateCapEvent(event: Event): GEM.UpdateCapEvent;
        parseUpdateMintingFeeEvent(receipt: TransactionReceipt): GEM.UpdateMintingFeeEvent[];
        decodeUpdateMintingFeeEvent(event: Event): GEM.UpdateMintingFeeEvent;
        parseUpdateRedemptionFeeEvent(receipt: TransactionReceipt): GEM.UpdateRedemptionFeeEvent[];
        decodeUpdateRedemptionFeeEvent(event: Event): GEM.UpdateRedemptionFeeEvent;
        parseUpdateTreasuryEvent(receipt: TransactionReceipt): GEM.UpdateTreasuryEvent[];
        decodeUpdateTreasuryEvent(event: Event): GEM.UpdateTreasuryEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IApproveParams, options?: TransactionOptions) => Promise<string>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        baseToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        buy: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (amount: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        cap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decimalsDelta: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<string>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
            txData: (user: string, options?: TransactionOptions) => Promise<string>;
        };
        depositBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        feeBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<string>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        mintingFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        newCap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        newCapEffectiveTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        newMintingFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        newMintingFeeEffectiveTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        newRedemptionFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        newRedemptionFeeEffectiveTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        newTreasury: {
            (options?: TransactionOptions): Promise<string>;
        };
        newTreasuryEffectiveTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        pause: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        paused: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
            txData: (user: string, options?: TransactionOptions) => Promise<string>;
        };
        price: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        redeem: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (amount: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        redeemFee: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (amount: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        redemptionFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferParams, options?: TransactionOptions) => Promise<string>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferFromParams, options?: TransactionOptions) => Promise<string>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
            txData: (newOwner: string, options?: TransactionOptions) => Promise<string>;
        };
        treasury: {
            (options?: TransactionOptions): Promise<string>;
        };
        unpause: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        updateCap: {
            (cap: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (cap: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (cap: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        updateMintingFee: {
            (mintingFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (mintingFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (mintingFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        updateRedemptionFee: {
            (redemptionFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (redemptionFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (redemptionFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        updateTreasury: {
            (treasury: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (treasury: string, options?: TransactionOptions) => Promise<void>;
            txData: (treasury: string, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module GEM {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface BuyEvent {
            buyer: string;
            baseTokenAmount: BigNumber;
            gemAmount: BigNumber;
            fee: BigNumber;
            _event: Event;
        }
        interface DeauthorizeEvent {
            user: string;
            _event: Event;
        }
        interface PausedEvent {
            account: string;
            _event: Event;
        }
        interface RedeemEvent {
            redeemer: string;
            gemAmount: BigNumber;
            baseTokenAmount: BigNumber;
            fee: BigNumber;
            _event: Event;
        }
        interface StartOwnershipTransferEvent {
            user: string;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferOwnershipEvent {
            user: string;
            _event: Event;
        }
        interface TreasuryRedeemEvent {
            baseTokenAmount: BigNumber;
            newFeeBalance: BigNumber;
            _event: Event;
        }
        interface UnpausedEvent {
            account: string;
            _event: Event;
        }
        interface UpdateCapEvent {
            cap: BigNumber;
            _event: Event;
        }
        interface UpdateMintingFeeEvent {
            mintingFee: BigNumber;
            _event: Event;
        }
        interface UpdateRedemptionFeeEvent {
            redemptionFee: BigNumber;
            _event: Event;
        }
        interface UpdateTreasuryEvent {
            treasury: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-gem-token/contracts/gem-token-contract/contracts/index.ts" />
declare module "@scom/scom-gem-token/contracts/gem-token-contract/contracts/index.ts" {
    export { ERC20 } from "@scom/scom-gem-token/contracts/gem-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts";
    export { GEM } from "@scom/scom-gem-token/contracts/gem-token-contract/contracts/GEM.ts";
}
/// <amd-module name="@scom/scom-gem-token/contracts/gem-token-contract/index.ts" />
declare module "@scom/scom-gem-token/contracts/gem-token-contract/index.ts" {
    import * as Contracts from "@scom/scom-gem-token/contracts/gem-token-contract/contracts/index.ts";
    export { Contracts };
    import { IWallet, BigNumber } from '@ijstech/eth-wallet';
    export interface IDeployOptions {
        name: string;
        symbol: string;
        cap: number | BigNumber;
        baseToken: string;
        price: number | BigNumber;
        mintingFee: number | BigNumber;
        redemptionFee: number | BigNumber;
    }
    export interface IDeployResult {
        gem: string;
    }
    export var DefaultDeployOptions: IDeployOptions;
    export function deploy(wallet: IWallet, options: IDeployOptions, onProgress?: (msg: string) => void): Promise<IDeployResult>;
    const _default_3: {
        Contracts: typeof Contracts;
        deploy: typeof deploy;
        DefaultDeployOptions: IDeployOptions;
    };
    export default _default_3;
}
/// <amd-module name="@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/Proxy.json.ts" />
declare module "@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/Proxy.json.ts" {
    const _default_4: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: ({
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                } | {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                })[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/Proxy.ts" />
declare module "@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/Proxy.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IClaimantIdsParams {
        param1: string;
        param2: string;
    }
    export interface IEthInParams {
        target: string;
        commissions: {
            to: string;
            amount: number | BigNumber;
        }[];
        data: string;
    }
    export interface IGetClaimantBalanceParams {
        claimant: string;
        token: string;
    }
    export interface IGetClaimantsInfoParams {
        fromId: number | BigNumber;
        count: number | BigNumber;
    }
    export interface IProxyCallParams {
        target: string;
        tokensIn: {
            token: string;
            amount: number | BigNumber;
            directTransfer: boolean;
            commissions: {
                to: string;
                amount: number | BigNumber;
            }[];
        }[];
        to: string;
        tokensOut: string[];
        data: string;
    }
    export interface ITokenInParams {
        target: string;
        tokensIn: {
            token: string;
            amount: number | BigNumber;
            directTransfer: boolean;
            commissions: {
                to: string;
                amount: number | BigNumber;
            }[];
        };
        data: string;
    }
    export class Proxy extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        parseAddCommissionEvent(receipt: TransactionReceipt): Proxy.AddCommissionEvent[];
        decodeAddCommissionEvent(event: Event): Proxy.AddCommissionEvent;
        parseClaimEvent(receipt: TransactionReceipt): Proxy.ClaimEvent[];
        decodeClaimEvent(event: Event): Proxy.ClaimEvent;
        parseSkimEvent(receipt: TransactionReceipt): Proxy.SkimEvent[];
        decodeSkimEvent(event: Event): Proxy.SkimEvent;
        parseTransferBackEvent(receipt: TransactionReceipt): Proxy.TransferBackEvent[];
        decodeTransferBackEvent(event: Event): Proxy.TransferBackEvent;
        parseTransferForwardEvent(receipt: TransactionReceipt): Proxy.TransferForwardEvent[];
        decodeTransferForwardEvent(event: Event): Proxy.TransferForwardEvent;
        claim: {
            (token: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (token: string, options?: TransactionOptions) => Promise<void>;
            txData: (token: string, options?: TransactionOptions) => Promise<string>;
        };
        claimMultiple: {
            (tokens: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tokens: string[], options?: TransactionOptions) => Promise<void>;
            txData: (tokens: string[], options?: TransactionOptions) => Promise<string>;
        };
        claimantIdCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        claimantIds: {
            (params: IClaimantIdsParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        claimantsInfo: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                claimant: string;
                token: string;
                balance: BigNumber;
            }>;
        };
        ethIn: {
            (params: IEthInParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IEthInParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IEthInParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        getClaimantBalance: {
            (params: IGetClaimantBalanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getClaimantsInfo: {
            (params: IGetClaimantsInfoParams, options?: TransactionOptions): Promise<{
                claimant: string;
                token: string;
                balance: BigNumber;
            }[]>;
        };
        lastBalance: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        proxyCall: {
            (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        skim: {
            (tokens: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tokens: string[], options?: TransactionOptions) => Promise<void>;
            txData: (tokens: string[], options?: TransactionOptions) => Promise<string>;
        };
        tokenIn: {
            (params: ITokenInParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITokenInParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ITokenInParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module Proxy {
        interface AddCommissionEvent {
            to: string;
            token: string;
            amount: BigNumber;
            _event: Event;
        }
        interface ClaimEvent {
            from: string;
            token: string;
            amount: BigNumber;
            _event: Event;
        }
        interface SkimEvent {
            token: string;
            to: string;
            amount: BigNumber;
            _event: Event;
        }
        interface TransferBackEvent {
            target: string;
            token: string;
            sender: string;
            amount: BigNumber;
            _event: Event;
        }
        interface TransferForwardEvent {
            target: string;
            token: string;
            sender: string;
            amount: BigNumber;
            commissions: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/ProxyV2.json.ts" />
declare module "@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/ProxyV2.json.ts" {
    const _default_5: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: ({
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                } | {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                })[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/ProxyV2.ts" />
declare module "@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/ProxyV2.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IClaimantIdsParams {
        param1: string;
        param2: string;
    }
    export interface IEthInParams {
        target: string;
        commissions: {
            to: string;
            amount: number | BigNumber;
        }[];
        data: string;
    }
    export interface IGetClaimantBalanceParams {
        claimant: string;
        token: string;
    }
    export interface IGetClaimantsInfoParams {
        fromId: number | BigNumber;
        count: number | BigNumber;
    }
    export interface IProxyCallParams {
        target: string;
        tokensIn: {
            token: string;
            amount: number | BigNumber;
            directTransfer: boolean;
            commissions: {
                to: string;
                amount: number | BigNumber;
            }[];
            totalCommissions: number | BigNumber;
        }[];
        to: string;
        tokensOut: string[];
        data: string;
    }
    export interface ITokenInParams {
        target: string;
        tokensIn: {
            token: string;
            amount: number | BigNumber;
            directTransfer: boolean;
            commissions: {
                to: string;
                amount: number | BigNumber;
            }[];
            totalCommissions: number | BigNumber;
        };
        data: string;
    }
    export class ProxyV2 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        parseAddCommissionEvent(receipt: TransactionReceipt): ProxyV2.AddCommissionEvent[];
        decodeAddCommissionEvent(event: Event): ProxyV2.AddCommissionEvent;
        parseClaimEvent(receipt: TransactionReceipt): ProxyV2.ClaimEvent[];
        decodeClaimEvent(event: Event): ProxyV2.ClaimEvent;
        parseSkimEvent(receipt: TransactionReceipt): ProxyV2.SkimEvent[];
        decodeSkimEvent(event: Event): ProxyV2.SkimEvent;
        parseTransferBackEvent(receipt: TransactionReceipt): ProxyV2.TransferBackEvent[];
        decodeTransferBackEvent(event: Event): ProxyV2.TransferBackEvent;
        parseTransferForwardEvent(receipt: TransactionReceipt): ProxyV2.TransferForwardEvent[];
        decodeTransferForwardEvent(event: Event): ProxyV2.TransferForwardEvent;
        claim: {
            (token: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (token: string, options?: TransactionOptions) => Promise<void>;
            txData: (token: string, options?: TransactionOptions) => Promise<string>;
        };
        claimMultiple: {
            (tokens: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tokens: string[], options?: TransactionOptions) => Promise<void>;
            txData: (tokens: string[], options?: TransactionOptions) => Promise<string>;
        };
        claimantIdCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        claimantIds: {
            (params: IClaimantIdsParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        claimantsInfo: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                claimant: string;
                token: string;
                balance: BigNumber;
            }>;
        };
        ethIn: {
            (params: IEthInParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IEthInParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IEthInParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        getClaimantBalance: {
            (params: IGetClaimantBalanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getClaimantsInfo: {
            (params: IGetClaimantsInfoParams, options?: TransactionOptions): Promise<{
                claimant: string;
                token: string;
                balance: BigNumber;
            }[]>;
        };
        lastBalance: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        proxyCall: {
            (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        skim: {
            (tokens: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tokens: string[], options?: TransactionOptions) => Promise<void>;
            txData: (tokens: string[], options?: TransactionOptions) => Promise<string>;
        };
        tokenIn: {
            (params: ITokenInParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITokenInParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ITokenInParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module ProxyV2 {
        interface AddCommissionEvent {
            to: string;
            token: string;
            amount: BigNumber;
            _event: Event;
        }
        interface ClaimEvent {
            from: string;
            token: string;
            amount: BigNumber;
            _event: Event;
        }
        interface SkimEvent {
            token: string;
            to: string;
            amount: BigNumber;
            _event: Event;
        }
        interface TransferBackEvent {
            target: string;
            token: string;
            sender: string;
            amount: BigNumber;
            _event: Event;
        }
        interface TransferForwardEvent {
            target: string;
            token: string;
            sender: string;
            amount: BigNumber;
            commissions: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/index.ts" />
declare module "@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/index.ts" {
    export { Proxy } from "@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/Proxy.ts";
    export { ProxyV2 } from "@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/ProxyV2.ts";
}
/// <amd-module name="@scom/scom-gem-token/contracts/scom-commission-proxy-contract/index.ts" />
declare module "@scom/scom-gem-token/contracts/scom-commission-proxy-contract/index.ts" {
    import * as Contracts from "@scom/scom-gem-token/contracts/scom-commission-proxy-contract/contracts/index.ts";
    export { Contracts };
    import { IWallet } from '@ijstech/eth-wallet';
    export interface IDeployOptions {
        version?: string;
    }
    export interface IDeployResult {
        proxy: string;
    }
    export var DefaultDeployOptions: IDeployOptions;
    export function deploy(wallet: IWallet, options?: IDeployOptions): Promise<IDeployResult>;
    export function onProgress(handler: any): void;
    const _default_6: {
        Contracts: typeof Contracts;
        deploy: typeof deploy;
        DefaultDeployOptions: IDeployOptions;
        onProgress: typeof onProgress;
    };
    export default _default_6;
}
/// <amd-module name="@scom/scom-gem-token/API.ts" />
declare module "@scom/scom-gem-token/API.ts" {
    import { BigNumber } from '@ijstech/eth-wallet';
    import { DappType, IDeploy, ITokenObject } from "@scom/scom-gem-token/interface.tsx";
    import { Contracts } from "@scom/scom-gem-token/contracts/gem-token-contract/index.ts";
    function getFee(contractAddress: string, type: DappType): Promise<BigNumber>;
    function getGemBalance(contractAddress: string): Promise<BigNumber>;
    function deployContract(options: IDeploy, token: ITokenObject, callback?: any, confirmationCallback?: any): Promise<string>;
    function transfer(contractAddress: string, to: string, amount: string): Promise<{
        receipt: import("@ijstech/eth-contract").TransactionReceipt;
        value: any;
    }>;
    function buyToken(contractAddress: string, backerCoinAmount: number, token: ITokenObject, feeTo: string, callback?: any, confirmationCallback?: any): Promise<any>;
    function redeemToken(address: string, gemAmount: string, callback?: any, confirmationCallback?: any): Promise<import("@ijstech/eth-contract").TransactionReceipt | {
        receipt: import("@ijstech/eth-contract").TransactionReceipt;
        data: Contracts.GEM.RedeemEvent;
    }>;
    export { deployContract, getFee, transfer, buyToken, redeemToken, getGemBalance };
}
/// <amd-module name="@scom/scom-gem-token/scconfig.json.ts" />
declare module "@scom/scom-gem-token/scconfig.json.ts" {
    const _default_7: {
        env: string;
        logo: string;
        main: string;
        assets: string;
        moduleDir: string;
        modules: {
            "@pageblock-gem-token/assets": {
                path: string;
            };
            "@pageblock-gem-token/interface": {
                path: string;
            };
            "@pageblock-gem-token/utils": {
                path: string;
            };
            "@pageblock-gem-token/store": {
                path: string;
            };
            "@pageblock-gem-token/wallet": {
                path: string;
            };
            "@pageblock-gem-token/token-selection": {
                path: string;
            };
            "@pageblock-gem-token/alert": {
                path: string;
            };
            "@pageblock-gem-token/config": {
                path: string;
            };
            "@pageblock-gem-token/main": {
                path: string;
            };
            "@pageblock-gem-token/loading": {
                path: string;
            };
        };
        dependencies: {
            "@ijstech/eth-contract": string;
            "@scom/gem-token-contract": string;
        };
        contractInfo: {
            "43113": {
                Proxy: {
                    address: string;
                };
            };
        };
        commissionFee: string;
    };
    export default _default_7;
}
/// <amd-module name="@scom/scom-gem-token" />
declare module "@scom/scom-gem-token" {
    import { Module, Container, IDataSchema, ControlElement } from '@ijstech/components';
    import { IConfig, PageBlock, DappType } from "@scom/scom-gem-token/interface.tsx";
    interface ScomGemTokenElement extends ControlElement {
        dappType?: DappType;
        logo?: string;
        description?: string;
        hideDescription?: boolean;
        chainId?: number;
        tokenAddress?: string;
        feeTo?: string;
        contract?: string;
        name: string;
        symbol: string;
        cap: string;
        price: string;
        mintingFee: string;
        redemptionFee: string;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ["i-scom-gem-token"]: ScomGemTokenElement;
            }
        }
    }
    export default class ScomGemToken extends Module implements PageBlock {
        private gridDApp;
        private imgLogo;
        private imgLogo2;
        private markdownViewer;
        private pnlLogoTitle;
        private lblTitle;
        private lblTitle2;
        private toTokenLb;
        private fromTokenLb;
        private feeLb;
        private lbYouWillGet;
        private feeTooltip;
        private pnlQty;
        private edtGemQty;
        private lblBalance;
        private btnSubmit;
        private btnApprove;
        private tokenElm;
        private edtAmount;
        private configDApp;
        private mdAlert;
        private balanceLayout;
        private backerStack;
        private backerTokenImg;
        private backerTokenBalanceLb;
        private gridTokenInput;
        private gemLogoStack;
        private maxStack;
        private loadingElm;
        private pnlDescription;
        private lbOrderTotal;
        private _type;
        private _gemTokenContract;
        private _entryContract;
        private _oldData;
        private _data;
        private $eventBus;
        private approvalModelAction;
        private isApproving;
        tag: any;
        private oldTag;
        defaultEdit: boolean;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        readonly onEdit: () => Promise<void>;
        constructor(parent?: Container, options?: any);
        static create(options?: ScomGemTokenElement, parent?: Container): Promise<ScomGemToken>;
        private registerEvent;
        onWalletConnect: (connected: boolean) => Promise<void>;
        onChainChanged: () => Promise<void>;
        private get isBuy();
        private get tokenSymbol();
        private updateTokenBalance;
        private onSetupPage;
        getEmbedderActions(): {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
        }[];
        getActions(): {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
        }[];
        _getActions(propertiesSchema: IDataSchema, themeSchema: IDataSchema): {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
        }[];
        getData(): IConfig;
        setData(data: IConfig): Promise<void>;
        getTag(): any;
        setTag(value: any): Promise<void>;
        private updateStyle;
        private updateTheme;
        edit(): Promise<void>;
        preview(): Promise<void>;
        confirm(): Promise<void>;
        private onDeploy;
        discard(): Promise<void>;
        config(): Promise<void>;
        validate(): boolean;
        private refreshDApp;
        init(): Promise<void>;
        get chainId(): number;
        set chainId(value: number);
        get name(): string;
        set name(value: string);
        get symbol(): string;
        set symbol(value: string);
        get cap(): string;
        set cap(value: string);
        get mintingFee(): string;
        set mintingFee(value: string);
        get redemptionFee(): string;
        set redemptionFee(value: string);
        get feeTo(): string;
        set feeTo(value: string);
        get contract(): string;
        set contract(value: string);
        get price(): string;
        set price(value: string);
        get tokenAddress(): string;
        set tokenAddress(value: string);
        get dappType(): DappType;
        set dappType(value: DappType);
        get description(): string;
        set description(value: string);
        get hideDescription(): boolean;
        set hideDescription(value: boolean);
        get logo(): string;
        set logo(value: string);
        private initWalletData;
        private initApprovalAction;
        private selectToken;
        private updateSubmitButton;
        private onApprove;
        private onQtyChanged;
        private onAmountChanged;
        private getBackerCoinAmount;
        private getGemAmount;
        private getBalance;
        private doSubmitAction;
        private onSubmit;
        onBuyToken: (quantity: number) => Promise<void>;
        onRedeemToken: () => Promise<void>;
        private onSetMaxBalance;
        private renderTokenInput;
        render(): any;
    }
}