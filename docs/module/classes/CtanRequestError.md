[ctan - v0.1.0](../README.md) / CtanRequestError

# Class: CtanRequestError

This exception is thrown when a request fails.

## Hierarchy

- <code>[CtanError](CtanError.md)</code>

  ↳ **`CtanRequestError`**

## Table of Contents

### Constructors

- [constructor](CtanRequestError.md#constructor)

### Properties

- [cause](CtanRequestError.md#cause)
- [message](CtanRequestError.md#message)
- [stack](CtanRequestError.md#stack)
- [prepareStackTrace](CtanRequestError.md#preparestacktrace)
- [stackTraceLimit](CtanRequestError.md#stacktracelimit)

### Accessors

- [[toStringTag]](CtanRequestError.md#[tostringtag])
- [name](CtanRequestError.md#name)
- [request](CtanRequestError.md#request)

### Methods

- [toJSON](CtanRequestError.md#tojson)
- [captureStackTrace](CtanRequestError.md#capturestacktrace)

## Constructors

### constructor

> <b>
>
> ```typescript
> new CtanRequestError(message, request, options?)
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
> get [toStringTag](): "CtanRequestError"
> ```
>
> </b>

<dl>
<dt>Returns</dt>
<dd><p>

<code>"CtanRequestError"</code>

</p></dd>

</dl>

___

### name

> <b>
>
> ```typescript
> get name(): "CtanRequestError"
> ```
>
> </b>
>
> **Overrides:** CtanError.name
>

<dl>
<dt>Returns</dt>
<dd><p>

<code>"CtanRequestError"</code>

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
