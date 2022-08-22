[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v2\_0](../modules/json.v2_0.md) / PackageDocumentation

# Interface: PackageDocumentation

## Table of Contents

### Properties

- [details](json.v2_0.PackageDocumentation.md#details)
- [href](json.v2_0.PackageDocumentation.md#href)
- [language](json.v2_0.PackageDocumentation.md#language)

## Properties

### details

> <b>
>
> ```typescript
> details?: string
> ```
>
> </b>

The (English) text describing the documentation item.

<dl>

</dl>

___

### href

> <b>
>
> ```typescript
> href?: string
> ```
>
> </b>

A reference to the documentation.
The prefix `ctan:` indicates a reference to a directory on CTAN.
If the parameter [`keep-url`](json.v2_0.PkgParameters.md#keep-url) is `true`
then this attribute contains always a valid URL without the `ctan:` prefix.

<dl>

</dl>

___

### language

> <b>
>
> ```typescript
> language?: null | string
> ```
>
> </b>

The ISO code for the language of the description.

<dl>

</dl>
