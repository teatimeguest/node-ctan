[ctan - v0.1.0](../README.md) / CtanResponseError

# Class: CtanResponseError

This exception is thrown when recieving an unexpected response.

## Hierarchy

- <code>[CtanError](CtanError.md)</code>

  ↳ **`CtanResponseError`**

## Table of Contents

### Constructors

- [constructor](CtanResponseError.md#constructor)

### Properties

- [cause](CtanResponseError.md#cause)
- [message](CtanResponseError.md#message)
- [stack](CtanResponseError.md#stack)
- [prepareStackTrace](CtanResponseError.md#preparestacktrace)
- [stackTraceLimit](CtanResponseError.md#stacktracelimit)

### Accessors

- [[toStringTag]](CtanResponseError.md#[tostringtag])
- [name](CtanResponseError.md#name)
- [request](CtanResponseError.md#request)
- [response](CtanResponseError.md#response)
- [status](CtanResponseError.md#status)

### Methods

- [toJSON](CtanResponseError.md#tojson)
- [captureStackTrace](CtanResponseError.md#capturestacktrace)

## Constructors

### constructor

> <b>
>
> ```typescript
> new CtanResponseError(message, request, response, options?)
> ```
>
> </b>
>
> **Overrides:** [CtanError](CtanError.md)**.**[constructor](CtanError.md#constructor)
>

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`message`|<code>string</code>|
|`request`|<code>Request</code>|
|`response`|<code>Response</code>|
|`options?`|<code>[ErrorOptions](../interfaces/ErrorOptions.md)</code>|

</p></dd>
</p></dd>

</dl>

## Properties

### cause

> <b>
>
> ```typescript
> cause?: Error
> ```
>
> </b>
>
> **Inherited from:** [CtanError](CtanError.md)**.**[cause](CtanError.md#cause)
>

<dl>

</dl>

___

### message

> <b>
>
> ```typescript
> message: string
> ```
>
> </b>
>
> **Inherited from:** [CtanError](CtanError.md)**.**[message](CtanError.md#message)
>

<dl>

</dl>

___

### stack

> <b>
>
> ```typescript
> stack?: string
> ```
>
> </b>
>
> **Inherited from:** [CtanError](CtanError.md)**.**[stack](CtanError.md#stack)
>

<dl>

</dl>

___

### prepareStackTrace

> <b>
>
> ```typescript
> static prepareStackTrace?: (err: Error, stackTraces: CallSite[]) => any
> ```
>
> </b>
>
> **Inherited from:** [CtanError](CtanError.md)**.**[prepareStackTrace](CtanError.md#preparestacktrace)
>

<dl>
<dt>Type Declaration</dt><dd><p>

> <b>
>
> ```typescript
> (err, stackTraces): any
> ```
>
> </b>

Optional override for formatting stack traces

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`err`|<code>Error</code>|
|`stackTraces`|<code>CallSite[]</code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>any</code>

</p></dd>
<dt> See</dt>
<dd><p>

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

</p></dd>
</dl>

</p></dd>

</dl>

___

### stackTraceLimit

> <b>
>
> ```typescript
> static stackTraceLimit: number
> ```
>
> </b>
>
> **Inherited from:** [CtanError](CtanError.md)**.**[stackTraceLimit](CtanError.md#stacktracelimit)
>

<dl>

</dl>

## Accessors

### [toStringTag]

> <b>
>
> ```typescript
> get [toStringTag](): "CtanResponseError"
> ```
>
> </b>

<dl>
<dt>Returns</dt>
<dd><p>

<code>"CtanResponseError"</code>

</p></dd>

</dl>

___

### name

> <b>
>
> ```typescript
> get name(): "CtanResponseError"
> ```
>
> </b>
>
> **Overrides:** CtanError.name
>

<dl>
<dt>Returns</dt>
<dd><p>

<code>"CtanResponseError"</code>

</p></dd>

</dl>

___

### request

> <b>
>
> ```typescript
> get request(): Request
> ```
>
> </b>

`node-fetch`'s request object.

<dl>
<dt>Returns</dt>
<dd><p>

<code>Request</code>

</p></dd>

</dl>

___

### response

> <b>
>
> ```typescript
> get response(): Response
> ```
>
> </b>

`node-fetch`'s response object.

<dl>
<dt>Returns</dt>
<dd><p>

<code>Response</code>

</p></dd>

</dl>

___

### status

> <b>
>
> ```typescript
> get status(): number
> ```
>
> </b>

The HTTP response status code.

<dl>
<dt>Returns</dt>
<dd><p>

<code>number</code>

</p></dd>

</dl>

## Methods

### toJSON

> <b>
>
> ```typescript
> toJSON(this): object
> ```
>
> </b>

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`this`|<code>void</code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>object</code>

</p></dd>

</dl>

___

### captureStackTrace

> <b>
>
> ```typescript
> static captureStackTrace(targetObject, constructorOpt?): void
> ```
>
> </b>
>
> **Inherited from:** [CtanError](CtanError.md)**.**[captureStackTrace](CtanError.md#capturestacktrace)
>

Create .stack property on a target object

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`targetObject`|<code>object</code>|
|`constructorOpt?`|<code>Function</code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>void</code>

</p></dd>

</dl>
