// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AuthorizeSender extends ethereum.Event {
  get params(): AuthorizeSender__Params {
    return new AuthorizeSender__Params(this);
  }
}

export class AuthorizeSender__Params {
  _event: AuthorizeSender;

  constructor(event: AuthorizeSender) {
    this._event = event;
  }

  get authorizerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get authorizedSender(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AuthorizeSigner extends ethereum.Event {
  get params(): AuthorizeSigner__Params {
    return new AuthorizeSigner__Params(this);
  }
}

export class AuthorizeSigner__Params {
  _event: AuthorizeSigner;

  constructor(event: AuthorizeSigner) {
    this._event = event;
  }

  get authorizerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get authorizedSigner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Cancel extends ethereum.Event {
  get params(): Cancel__Params {
    return new Cancel__Params(this);
  }
}

export class Cancel__Params {
  _event: Cancel;

  constructor(event: Cancel) {
    this._event = event;
  }

  get nonce(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get signerWallet(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CancelUpTo extends ethereum.Event {
  get params(): CancelUpTo__Params {
    return new CancelUpTo__Params(this);
  }
}

export class CancelUpTo__Params {
  _event: CancelUpTo;

  constructor(event: CancelUpTo) {
    this._event = event;
  }

  get nonce(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get signerWallet(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RevokeSender extends ethereum.Event {
  get params(): RevokeSender__Params {
    return new RevokeSender__Params(this);
  }
}

export class RevokeSender__Params {
  _event: RevokeSender;

  constructor(event: RevokeSender) {
    this._event = event;
  }

  get authorizerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get revokedSender(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RevokeSigner extends ethereum.Event {
  get params(): RevokeSigner__Params {
    return new RevokeSigner__Params(this);
  }
}

export class RevokeSigner__Params {
  _event: RevokeSigner;

  constructor(event: RevokeSigner) {
    this._event = event;
  }

  get authorizerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get revokedSigner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get nonce(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get signerWallet(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get signerAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get signerId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get signerToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get senderWallet(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get senderAmount(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get senderId(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get senderToken(): Address {
    return this._event.parameters[9].value.toAddress();
  }

  get affiliateWallet(): Address {
    return this._event.parameters[10].value.toAddress();
  }

  get affiliateAmount(): BigInt {
    return this._event.parameters[11].value.toBigInt();
  }

  get affiliateId(): BigInt {
    return this._event.parameters[12].value.toBigInt();
  }

  get affiliateToken(): Address {
    return this._event.parameters[13].value.toAddress();
  }
}

export class Airswap extends ethereum.SmartContract {
  static bind(address: Address): Airswap {
    return new Airswap("Airswap", address);
  }

  registry(): Address {
    let result = super.call("registry", "registry():(address)", []);

    return result[0].toAddress();
  }

  try_registry(): ethereum.CallResult<Address> {
    let result = super.tryCall("registry", "registry():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  senderAuthorizations(param0: Address, param1: Address): boolean {
    let result = super.call(
      "senderAuthorizations",
      "senderAuthorizations(address,address):(bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBoolean();
  }

  try_senderAuthorizations(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "senderAuthorizations",
      "senderAuthorizations(address,address):(bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  signerAuthorizations(param0: Address, param1: Address): boolean {
    let result = super.call(
      "signerAuthorizations",
      "signerAuthorizations(address,address):(bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBoolean();
  }

  try_signerAuthorizations(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "signerAuthorizations",
      "signerAuthorizations(address,address):(bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  signerMinimumNonce(param0: Address): BigInt {
    let result = super.call(
      "signerMinimumNonce",
      "signerMinimumNonce(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_signerMinimumNonce(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "signerMinimumNonce",
      "signerMinimumNonce(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  signerNonceStatus(param0: Address, param1: BigInt): Bytes {
    let result = super.call(
      "signerNonceStatus",
      "signerNonceStatus(address,uint256):(bytes1)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBytes();
  }

  try_signerNonceStatus(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "signerNonceStatus",
      "signerNonceStatus(address,uint256):(bytes1)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get swapRegistry(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AuthorizeSenderCall extends ethereum.Call {
  get inputs(): AuthorizeSenderCall__Inputs {
    return new AuthorizeSenderCall__Inputs(this);
  }

  get outputs(): AuthorizeSenderCall__Outputs {
    return new AuthorizeSenderCall__Outputs(this);
  }
}

export class AuthorizeSenderCall__Inputs {
  _call: AuthorizeSenderCall;

  constructor(call: AuthorizeSenderCall) {
    this._call = call;
  }

  get authorizedSender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AuthorizeSenderCall__Outputs {
  _call: AuthorizeSenderCall;

  constructor(call: AuthorizeSenderCall) {
    this._call = call;
  }
}

export class AuthorizeSignerCall extends ethereum.Call {
  get inputs(): AuthorizeSignerCall__Inputs {
    return new AuthorizeSignerCall__Inputs(this);
  }

  get outputs(): AuthorizeSignerCall__Outputs {
    return new AuthorizeSignerCall__Outputs(this);
  }
}

export class AuthorizeSignerCall__Inputs {
  _call: AuthorizeSignerCall;

  constructor(call: AuthorizeSignerCall) {
    this._call = call;
  }

  get authorizedSigner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AuthorizeSignerCall__Outputs {
  _call: AuthorizeSignerCall;

  constructor(call: AuthorizeSignerCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get nonces(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class CancelUpToCall extends ethereum.Call {
  get inputs(): CancelUpToCall__Inputs {
    return new CancelUpToCall__Inputs(this);
  }

  get outputs(): CancelUpToCall__Outputs {
    return new CancelUpToCall__Outputs(this);
  }
}

export class CancelUpToCall__Inputs {
  _call: CancelUpToCall;

  constructor(call: CancelUpToCall) {
    this._call = call;
  }

  get minimumNonce(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelUpToCall__Outputs {
  _call: CancelUpToCall;

  constructor(call: CancelUpToCall) {
    this._call = call;
  }
}

export class RevokeSenderCall extends ethereum.Call {
  get inputs(): RevokeSenderCall__Inputs {
    return new RevokeSenderCall__Inputs(this);
  }

  get outputs(): RevokeSenderCall__Outputs {
    return new RevokeSenderCall__Outputs(this);
  }
}

export class RevokeSenderCall__Inputs {
  _call: RevokeSenderCall;

  constructor(call: RevokeSenderCall) {
    this._call = call;
  }

  get authorizedSender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeSenderCall__Outputs {
  _call: RevokeSenderCall;

  constructor(call: RevokeSenderCall) {
    this._call = call;
  }
}

export class RevokeSignerCall extends ethereum.Call {
  get inputs(): RevokeSignerCall__Inputs {
    return new RevokeSignerCall__Inputs(this);
  }

  get outputs(): RevokeSignerCall__Outputs {
    return new RevokeSignerCall__Outputs(this);
  }
}

export class RevokeSignerCall__Inputs {
  _call: RevokeSignerCall;

  constructor(call: RevokeSignerCall) {
    this._call = call;
  }

  get authorizedSigner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeSignerCall__Outputs {
  _call: RevokeSignerCall;

  constructor(call: RevokeSignerCall) {
    this._call = call;
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get order(): SwapCallOrderStruct {
    return this._call.inputValues[0].value.toTuple() as SwapCallOrderStruct;
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }
}

export class SwapCallOrderStruct extends ethereum.Tuple {
  get nonce(): BigInt {
    return this[0].toBigInt();
  }

  get expiry(): BigInt {
    return this[1].toBigInt();
  }

  get signer(): SwapCallOrderSignerStruct {
    return this[2].toTuple() as SwapCallOrderSignerStruct;
  }

  get sender(): SwapCallOrderSenderStruct {
    return this[3].toTuple() as SwapCallOrderSenderStruct;
  }

  get affiliate(): SwapCallOrderAffiliateStruct {
    return this[4].toTuple() as SwapCallOrderAffiliateStruct;
  }

  get signature(): SwapCallOrderSignatureStruct {
    return this[5].toTuple() as SwapCallOrderSignatureStruct;
  }
}

export class SwapCallOrderSignerStruct extends ethereum.Tuple {
  get kind(): Bytes {
    return this[0].toBytes();
  }

  get wallet(): Address {
    return this[1].toAddress();
  }

  get token(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get id(): BigInt {
    return this[4].toBigInt();
  }
}

export class SwapCallOrderSenderStruct extends ethereum.Tuple {
  get kind(): Bytes {
    return this[0].toBytes();
  }

  get wallet(): Address {
    return this[1].toAddress();
  }

  get token(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get id(): BigInt {
    return this[4].toBigInt();
  }
}

export class SwapCallOrderAffiliateStruct extends ethereum.Tuple {
  get kind(): Bytes {
    return this[0].toBytes();
  }

  get wallet(): Address {
    return this[1].toAddress();
  }

  get token(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get id(): BigInt {
    return this[4].toBigInt();
  }
}

export class SwapCallOrderSignatureStruct extends ethereum.Tuple {
  get signatory(): Address {
    return this[0].toAddress();
  }

  get validator(): Address {
    return this[1].toAddress();
  }

  get version(): Bytes {
    return this[2].toBytes();
  }

  get v(): i32 {
    return this[3].toI32();
  }

  get r(): Bytes {
    return this[4].toBytes();
  }

  get s(): Bytes {
    return this[5].toBytes();
  }
}
