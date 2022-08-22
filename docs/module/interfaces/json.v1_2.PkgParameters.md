[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v1\_2](../modules/json.v1_2.md) / PkgParameters

# Interface: PkgParameters

Parameters for getting a package.

## Table of Contents

### Properties

- [drop](json.v1_2.PkgParameters.md#drop)
- [keep-url](json.v1_2.PkgParameters.md#keep-url)

## Properties

### drop

> <b>
>
> ```typescript
> drop?: keyof Package[]
> ```
>
> </b>

List of field names to drop from the result.

<dl>
<dt>Type References</dt>
<dd><p>

- [Package](json.v1_0.Package.md)

</p></dd>

</dl>

___

### keep-url

> <b>
>
> ```typescript
> keep-url?: boolean
> ```
>
> </b>

Always keeps valid URLs as attributes, instead of `ctan:`-prefixed ones.

<dl>
<dt> Default Value</dt>
<dd><p>

`false`

</p></dd>
<dt> See</dt>
<dd><p>

[`Package#documentation`](json.v1_2.Package.md#documentation)

</p></dd>
</dl>
