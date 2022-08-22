[ctan - v0.1.0](../README.md) / ClientConfig

# Interface: ClientConfig

## Hierarchy

- <code>RequestInit</code>

  ↳ **`ClientConfig`**

## Table of Contents

### Properties

- [agent](ClientConfig.md#agent)
- [baseUrl](ClientConfig.md#baseurl)
- [body](ClientConfig.md#body)
- [compress](ClientConfig.md#compress)
- [counter](ClientConfig.md#counter)
- [follow](ClientConfig.md#follow)
- [headers](ClientConfig.md#headers)
- [highWaterMark](ClientConfig.md#highwatermark)
- [hostname](ClientConfig.md#hostname)
- [insecureHTTPParser](ClientConfig.md#insecurehttpparser)
- [method](ClientConfig.md#method)
- [port](ClientConfig.md#port)
- [protocol](ClientConfig.md#protocol)
- [redirect](ClientConfig.md#redirect)
- [referrer](ClientConfig.md#referrer)
- [referrerPolicy](ClientConfig.md#referrerpolicy)
- [signal](ClientConfig.md#signal)
- [size](ClientConfig.md#size)
- [validate](ClientConfig.md#validate)

## Properties

### agent

> <b>
>
> ```typescript
> agent?: boolean | Agent | (parsedUrl: URL) => undefined | boolean | Agent
> ```
>
> </b>
>
> **Inherited from:** RequestInit.agent
>

<dl>

</dl>

___

### baseUrl

> <b>
>
> ```typescript
> baseUrl?: string | URL
> ```
>
> </b>

<dl>
<dt> Default Value</dt>
<dd><p>

`'https://ctan.org'`

</p></dd>
</dl>

___

### body

> <b>
>
> ```typescript
> body?: null | BodyInit
> ```
>
> </b>
>
> **Inherited from:** RequestInit.body
>

A BodyInit object or null to set request's body.

<dl>

</dl>

___

### compress

> <b>
>
> ```typescript
> compress?: boolean
> ```
>
> </b>
>
> **Inherited from:** RequestInit.compress
>

<dl>

</dl>

___

### counter

> <b>
>
> ```typescript
> counter?: number
> ```
>
> </b>
>
> **Inherited from:** RequestInit.counter
>

<dl>

</dl>

___

### follow

> <b>
>
> ```typescript
> follow?: number
> ```
>
> </b>
>
> **Inherited from:** RequestInit.follow
>

<dl>

</dl>

___

### headers

> <b>
>
> ```typescript
> headers?: HeadersInit
> ```
>
> </b>
>
> **Inherited from:** RequestInit.headers
>

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

<dl>

</dl>

___

### highWaterMark

> <b>
>
> ```typescript
> highWaterMark?: number
> ```
>
> </b>
>
> **Inherited from:** RequestInit.highWaterMark
>

<dl>

</dl>

___

### hostname

> <b>
>
> ```typescript
> hostname?: string
> ```
>
> </b>
>
> **Inherited from:** RequestInit.hostname
>

<dl>

</dl>

___

### insecureHTTPParser

> <b>
>
> ```typescript
> insecureHTTPParser?: boolean
> ```
>
> </b>
>
> **Inherited from:** RequestInit.insecureHTTPParser
>

<dl>

</dl>

___

### method

> <b>
>
> ```typescript
> method?: string
> ```
>
> </b>
>
> **Inherited from:** RequestInit.method
>

A string to set request's method.

<dl>

</dl>

___

### port

> <b>
>
> ```typescript
> port?: number
> ```
>
> </b>
>
> **Inherited from:** RequestInit.port
>

<dl>

</dl>

___

### protocol

> <b>
>
> ```typescript
> protocol?: string
> ```
>
> </b>
>
> **Inherited from:** RequestInit.protocol
>

<dl>

</dl>

___

### redirect

> <b>
>
> ```typescript
> redirect?: RequestRedirect
> ```
>
> </b>
>
> **Inherited from:** RequestInit.redirect
>

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

<dl>

</dl>

___

### referrer

> <b>
>
> ```typescript
> referrer?: string
> ```
>
> </b>
>
> **Inherited from:** RequestInit.referrer
>

A string whose value is a same-origin URL, "about:client", or the empty string, to set request’s referrer.

<dl>

</dl>

___

### referrerPolicy

> <b>
>
> ```typescript
> referrerPolicy?: ReferrerPolicy
> ```
>
> </b>
>
> **Inherited from:** RequestInit.referrerPolicy
>

A referrer policy to set request’s referrerPolicy.

<dl>

</dl>

___

### signal

> <b>
>
> ```typescript
> signal?: null | AbortSignal
> ```
>
> </b>
>
> **Inherited from:** RequestInit.signal
>

An AbortSignal to set request's signal.

<dl>

</dl>

___

### size

> <b>
>
> ```typescript
> size?: number
> ```
>
> </b>
>
> **Inherited from:** RequestInit.size
>

<dl>

</dl>

___

### validate

> <b>
>
> ```typescript
> validate?: boolean
> ```
>
> </b>

<dl>
<dt> Default Value</dt>
<dd><p>

`true`

</p></dd>
</dl>
