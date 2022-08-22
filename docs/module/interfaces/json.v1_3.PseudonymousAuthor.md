[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v1\_3](../modules/json.v1_3.md) / PseudonymousAuthor

# Interface: PseudonymousAuthor

Information about a pseudonymous author.

## Table of Contents

### Properties

- [died](json.v1_3.PseudonymousAuthor.md#died)
- [key](json.v1_3.PseudonymousAuthor.md#key)
- [pkgs](json.v1_3.PseudonymousAuthor.md#pkgs)
- [pseudonym](json.v1_3.PseudonymousAuthor.md#pseudonym)

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
if the parameter [`ref`](json.v1_3.AuthorParameters.md#ref) is set to `true`.

<dl>

</dl>

___

### pseudonym

> <b>
>
> ```typescript
> pseudonym: string
> ```
>
> </b>

The alias name to protect the privacy of an author who requests it.

<dl>

</dl>
