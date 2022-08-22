[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v1\_3](../modules/json.v1_3.md) / Author

# Interface: Author

Information about an author.

## Hierarchy

- [json](../modules/json.md)**.**[v1_2](../modules/json.v1_2.md)**.**<code>[Author](json.v1_2.Author.md)</code>

  ↳ **`Author`**

## Table of Contents

### Properties

- [died](json.v1_3.Author.md#died)
- [familyname](json.v1_3.Author.md#familyname)
- [female](json.v1_3.Author.md#female)
- [givenname](json.v1_3.Author.md#givenname)
- [junior](json.v1_3.Author.md#junior)
- [key](json.v1_3.Author.md#key)
- [pkgs](json.v1_3.Author.md#pkgs)
- [title](json.v1_3.Author.md#title)
- [von](json.v1_3.Author.md#von)

## Properties

### died

> <b>
>
> ```typescript
> died: boolean
> ```
>
> </b>
>
> **Inherited from:** [v1_2](../modules/json.v1_2.md)**.**[Author](json.v1_2.Author.md)**.**[died](json.v1_2.Author.md#died)
>

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
> **Inherited from:** [v1_2](../modules/json.v1_2.md)**.**[Author](json.v1_2.Author.md)**.**[familyname](json.v1_2.Author.md#familyname)
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
>
> **Inherited from:** [v1_2](../modules/json.v1_2.md)**.**[Author](json.v1_2.Author.md)**.**[female](json.v1_2.Author.md#female)
>

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
> **Inherited from:** [v1_2](../modules/json.v1_2.md)**.**[Author](json.v1_2.Author.md)**.**[givenname](json.v1_2.Author.md#givenname)
>

The given name of the author.

<dl>

</dl>

___

### junior

> <b>
>
> ```typescript
> junior: string
> ```
>
> </b>

The junior part of the author's name.
It is usually an addition to the name like _jr._, _sr._,
or a numeral like _I_, _II_, _III_, _IV_.

<dl>
<dt> Default Value</dt>
<dd><p>

`""`

</p></dd>
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
> **Inherited from:** [v1_2](../modules/json.v1_2.md)**.**[Author](json.v1_2.Author.md)**.**[key](json.v1_2.Author.md#key)
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
> **Inherited from:** [v1_2](../modules/json.v1_2.md)**.**[Author](json.v1_2.Author.md)**.**[pkgs](json.v1_2.Author.md#pkgs)
>

List of ids of packages mentioning the author.
This attribute is included
if the parameter [`ref`](json.v1_3.AuthorParameters.md#ref) is set to `true`.

<dl>

</dl>

___

### title

> <b>
>
> ```typescript
> title?: string
> ```
>
> </b>

The title of the author.

<dl>
<dt> Remarks</dt>
<dd><p>

This attribute no longer seems to be available.

</p></dd>
</dl>

___

### von

> <b>
>
> ```typescript
> von: string
> ```
>
> </b>

The von part of the author's name.
It is usually in lower case and has values like _von_, _van_, or _de_.

<dl>
<dt> Default Value</dt>
<dd><p>

`""`

</p></dd>
</dl>
