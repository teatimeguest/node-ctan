[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v2\_0](../modules/json.v2_0.md) / Topic

# Interface: Topic

Information about a topic.

## Table of Contents

### Properties

- [details](json.v2_0.Topic.md#details)
- [key](json.v2_0.Topic.md#key)
- [packages](json.v2_0.Topic.md#packages)

## Properties

### details

> <b>
>
> ```typescript
> details: string
> ```
>
> </b>

A short description text about the meaning of the topic.

<dl>

</dl>

___

### key

> <b>
>
> ```typescript
> key: string
> ```
>
> </b>

The key of the topic.

<dl>

</dl>

___

### packages

> <b>
>
> ```typescript
> packages?: string[]
> ```
>
> </b>

The list of ids of packages referring to the topic.
This attribute is included
if the parameter [`ref`](json.v2_0.TopicParameters.md#ref) is set to `true`.

<dl>

</dl>
