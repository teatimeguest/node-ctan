[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v1\_0](../modules/json.v1_0.md) / Author

# Interface: Author

Information about an author.

## Hierarchy

- **`Author`**

  ↳ [json](../modules/json.md)**.**[v1_2](../modules/json.v1_2.md)**.**<code>[Author](json.v1_2.Author.md)</code>

## Table of Contents

### Properties

- [familyname](json.v1_0.Author.md#familyname)
- [givenname](json.v1_0.Author.md#givenname)
- [key](json.v1_0.Author.md#key)
- [pkgs](json.v1_0.Author.md#pkgs)

## Properties

### familyname

> <b>
>
> ```typescript
> familyname: string
> ```
>
> </b>

The family name of the author.

<dl>

</dl>

___

### givenname

> <b>
>
> ```typescript
> givenname: string
> ```
>
> </b>

The given name of the author.

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

The key of the author.

<dl>

</dl>

___

### pkgs

> <b>
>
> ```typescript
> pkgs?: string[]
> ```
>
> </b>

List of ids of packages mentioning the author.
This attribute is included
if the parameter [`ref`](json.v1_0.AuthorParameters.md#ref) is set to `true`.

<dl>

</dl>
