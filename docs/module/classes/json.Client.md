[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / Client

# Class: Client

## Hierarchy

- <code>ClientBase</code>

- <code>Searchable</code>

  ↳ **`Client`**

## Table of Contents

### Constructors

- [constructor](json.Client.md#constructor)

### Accessors

- [defaults](json.Client.md#defaults)
- [v1\_0](json.Client.md#v1_0)
- [v1\_1](json.Client.md#v1_1)
- [v1\_2](json.Client.md#v1_2)
- [v1\_3](json.Client.md#v1_3)
- [v2\_0](json.Client.md#v2_0)

### Methods

- [search](json.Client.md#search)

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

### v1\_0

> <b>
>
> ```typescript
> get v1_0(): Client
> ```
>
> </b>

Subclient for the CTAN JSON API v1.0.

<dl>
<dt>Returns</dt>
<dd><p>

<code>[Client](json.v1_0.Client.md)</code>

</p></dd>

</dl>

___

### v1\_1

> <b>
>
> ```typescript
> get v1_1(): Client
> ```
>
> </b>

Subclient for the CTAN JSON API v1.1.

<dl>
<dt>Returns</dt>
<dd><p>

<code>[Client](json.v1_1.Client.md)</code>

</p></dd>

</dl>

___

### v1\_2

> <b>
>
> ```typescript
> get v1_2(): Client
> ```
>
> </b>

Subclient for the CTAN JSON API v1.2.

<dl>
<dt>Returns</dt>
<dd><p>

<code>[Client](json.v1_2.Client.md)</code>

</p></dd>

</dl>

___

### v1\_3

> <b>
>
> ```typescript
> get v1_3(): Client
> ```
>
> </b>

Subclient for the CTAN JSON API v1.3.

<dl>
<dt>Returns</dt>
<dd><p>

<code>[Client](json.v1_3.Client.md)</code>

</p></dd>

</dl>

___

### v2\_0

> <b>
>
> ```typescript
> get v2_0(): Client
> ```
>
> </b>

Subclient for the CTAN JSON API v2.0.

<dl>
<dt>Returns</dt>
<dd><p>

<code>[Client](json.v2_0.Client.md)</code>

</p></dd>

</dl>

## Methods

### search

> <b>
>
> ```typescript
> search(params, config?): Promise<SearchPaginator>
> ```
>
> </b>

Finds items via [`GET /search/json`](../../../docs/api/json/2.0.md#searching).

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`params`|<code>string \| Readonly<[SearchParameters](../interfaces/json.SearchParameters.md)\></code>|Parameters for searching. If `params` is a string, it specifies the [search expression](../interfaces/json.SearchParameters.md#phrase).|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|An optional configuration for this request.|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[SearchPaginator](json.SearchPaginator.md)\></code>

</p></dd>

</dl>
