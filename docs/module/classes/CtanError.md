[ctan - v0.1.0](../README.md) / CtanError

# Class: CtanError

## Hierarchy

- <code>Error</code>

  ↳ **`CtanError`**

  ↳↳ <code>[CtanRequestError](CtanRequestError.md)</code>

  ↳↳ <code>[CtanResponseError](CtanResponseError.md)</code>

## Table of Contents

### Constructors

- [constructor](CtanError.md#constructor)

### Properties

- [cause](CtanError.md#cause)
- [message](CtanError.md#message)
- [name](CtanError.md#name)
- [stack](CtanError.md#stack)
- [prepareStackTrace](CtanError.md#preparestacktrace)
- [stackTraceLimit](CtanError.md#stacktracelimit)

### Methods

- [captureStackTrace](CtanError.md#capturestacktrace)

## Constructors

### constructor

> <b>
>
> ```typescript
> new CtanError(message, options?)
> ```
>
> </b>
>
> **Overrides:** Error.constructor
>

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`message`|<code>string</code>|
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
> **Inherited from:** Error.message
>

<dl>

</dl>

___

### name

> <b>
>
> ```typescript
> name: string
> ```
>
> </b>
>
> **Inherited from:** Error.name
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
> **Inherited from:** Error.stack
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
> **Inherited from:** Error.prepareStackTrace
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
> **Inherited from:** Error.stackTraceLimit
>

<dl>

</dl>

## Methods

### captureStackTrace

> <b>
>
> ```typescript
> static captureStackTrace(targetObject, constructorOpt?): void
> ```
>
> </b>
>
> **Inherited from:** Error.captureStackTrace
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
