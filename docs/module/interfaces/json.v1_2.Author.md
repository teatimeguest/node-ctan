[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v1\_2](../modules/json.v1_2.md) / Author

# Interface: Author

Information about an author.

## Hierarchy

- [json](../modules/json.md)**.**[v1_0](../modules/json.v1_0.md)**.**<code>[Author](json.v1_0.Author.md)</code>

  ↳ **`Author`**

  ↳↳ [json](../modules/json.md)**.**[v1_3](../modules/json.v1_3.md)**.**<code>[Author](json.v1_3.Author.md)</code>

  ↳↳ [json](../modules/json.md)**.**[v2_0](../modules/json.v2_0.md)**.**<code>[Author](json.v2_0.Author.md)</code>

## Table of Contents

### Properties

- [died](json.v1_2.Author.md#died)
- [familyname](json.v1_2.Author.md#familyname)
- [female](json.v1_2.Author.md#female)
- [givenname](json.v1_2.Author.md#givenname)
- [key](json.v1_2.Author.md#key)
- [pkgs](json.v1_2.Author.md#pkgs)

## Properties

### died

> <b>
>
> ```typescript
> died: boolean
> ```
>
> </b>

Whether the author is deceased.

<dl>

</dl>

___

### familyname

> <b>
>
> ```typescript
> familyname: string
> ```
>
> </b>
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Author](json.v1_0.Author.md)**.**[familyname](json.v1_0.Author.md#familyname)
>

The family name of the author.

<dl>

</dl>

___

### female

> <b>
>
> ```typescript
> female: boolean
> ```
>
> </b>

Whether the author is female.

<dl>
<dt> Default Value</dt>
<dd><p>

`true`

</p></dd>
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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Author](json.v1_0.Author.md)**.**[givenname](json.v1_0.Author.md#givenname)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Author](json.v1_0.Author.md)**.**[key](json.v1_0.Author.md#key)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Author](json.v1_0.Author.md)**.**[pkgs](json.v1_0.Author.md#pkgs)
>

List of ids of packages mentioning the author.
This attribute is included
if the parameter [`ref`](json.v1_2.AuthorParameters.md#ref) is set to `true`.

<dl>

</dl>
