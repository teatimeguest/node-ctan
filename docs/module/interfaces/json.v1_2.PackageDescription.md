[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v1\_2](../modules/json.v1_2.md) / PackageDescription

# Interface: PackageDescription

## Table of Contents

### Properties

- [language](json.v1_2.PackageDescription.md#language)
- [text](json.v1_2.PackageDescription.md#text)

## Properties

### language

> <b>
>
> ```typescript
> language?: null | string
> ```
>
> </b>

The ISO code for the language of the description.
Alternately it may be null to indicate the default language, i.e. English.

<dl>

</dl>

___

### text

> <b>
>
> ```typescript
> text?: string
> ```
>
> </b>

The longer description of the package, which may include HTML markup.
An inner tag `<ref>` is used to reference a package with attribute `refid`.

<dl>
<dt> See</dt>
<dd><p>

[`PackageSummary#key`](json.v1_2.PackageSummary.md#key)

</p></dd>
</dl>
