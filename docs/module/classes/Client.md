[ctan - v0.1.0](../README.md) / Client

# Class: Client

Client for CTAN APIs.

## Hierarchy

- <code>ClientBase</code>

  ↳ **`Client`**

## Table of Contents

### Constructors

- [constructor](Client.md#constructor)

### Accessors

- [defaults](Client.md#defaults)
- [json](Client.md#json)

## Constructors

### constructor

> <b>
>
> ```typescript
> new Client(config?)
> ```
>
> </b>
>
> **Overrides:** ClientBase.constructor
>

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|Default configuration for this client instance.|

</p></dd>
</p></dd>

</dl>

## Accessors

### defaults

> <b>
>
> ```typescript
> get defaults(): ClientConfig
> ```
>
> </b>
>
> **Inherited from:** ClientBase.defaults
>

The default configuration for this client instance.

<dl>
<dt>Returns</dt>
<dd><p>

<code>[ClientConfig](../interfaces/ClientConfig.md)</code>

</p></dd>

</dl>

___

### json

> <b>
>
> ```typescript
> get json(): Client
> ```
>
> </b>

Subclient for the CTAN JSON API.

<dl>
<dt>Returns</dt>
<dd><p>

<code>[Client](json.Client.md)</code>

</p></dd>

</dl>
