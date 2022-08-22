[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v1\_0](../modules/json.v1_0.md) / Package

# Interface: Package

Information about a package.

## Hierarchy

- **`Package`**

  ↳ [json](../modules/json.md)**.**[v1_2](../modules/json.v1_2.md)**.**<code>[Package](json.v1_2.Package.md)</code>

  ↳ [json](../modules/json.md)**.**[v1_3](../modules/json.v1_3.md)**.**<code>[Package](json.v1_3.Package.md)</code>

## Table of Contents

### Properties

- [also](json.v1_0.Package.md#also)
- [authors](json.v1_0.Package.md#authors)
- [caption](json.v1_0.Package.md#caption)
- [copyright](json.v1_0.Package.md#copyright)
- [ctan](json.v1_0.Package.md#ctan)
- [descriptions](json.v1_0.Package.md#descriptions)
- [documentation](json.v1_0.Package.md#documentation)
- [home](json.v1_0.Package.md#home)
- [id](json.v1_0.Package.md#id)
- [index](json.v1_0.Package.md#index)
- [install](json.v1_0.Package.md#install)
- [license](json.v1_0.Package.md#license)
- [miktex](json.v1_0.Package.md#miktex)
- [name](json.v1_0.Package.md#name)
- [texlive](json.v1_0.Package.md#texlive)
- [topics](json.v1_0.Package.md#topics)
- [version](json.v1_0.Package.md#version)

## Properties

### also

> <b>
>
> ```typescript
> also?: string[]
> ```
>
> </b>

<dl>

</dl>

___

### authors

> <b>
>
> ```typescript
> authors: PackageAuthor[]
> ```
>
> </b>

The list of authors.

<dl>
<dt>Type References</dt>
<dd><p>

- [PackageAuthor](json.v1_0.PackageAuthor.md)

</p></dd>

</dl>

___

### caption

> <b>
>
> ```typescript
> caption: string
> ```
>
> </b>

A short description of the package.

<dl>

</dl>

___

### copyright

> <b>
>
> ```typescript
> copyright?: Copyright[]
> ```
>
> </b>

The information about the copyright.

<dl>
<dt>Type References</dt>
<dd><p>

- [Copyright](json.v1_0.Copyright.md)

</p></dd>

</dl>

___

### ctan

> <b>
>
> ```typescript
> ctan?: Object
> ```
>
> </b>

The location of the package in the CTAN tree.

<dl>
<dt>Type Declaration</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`file?`|<code>boolean</code>|The indicator that this package consists of a single file only.|
|`path`|<code>string</code>|The relative path of the package in the CTAN tree.|

</p></dd>

</dl>

___

### descriptions

> <b>
>
> ```typescript
> descriptions?: PackageDescription[]
> ```
>
> </b>

Long descriptions of the package.

<dl>
<dt>Type References</dt>
<dd><p>

- [PackageDescription](json.v1_0.PackageDescription.md)

</p></dd>

</dl>

___

### documentation

> <b>
>
> ```typescript
> documentation: PackageDocumentation[]
> ```
>
> </b>

List of references to documentation.

<dl>
<dt>Type References</dt>
<dd><p>

- [PackageDocumentation](json.v1_0.PackageDocumentation.md)

</p></dd>

</dl>

___

### home

> <b>
>
> ```typescript
> home?: string
> ```
>
> </b>

The URL of the home page of the package.

<dl>

</dl>

___

### id

> <b>
>
> ```typescript
> id: string
> ```
>
> </b>

The unique id of the package.

<dl>
<dt> See</dt>
<dd><p>

[`PackageSummary#key`](json.v1_0.PackageSummary.md#key)

</p></dd>
</dl>

___

### index

> <b>
>
> ```typescript
> index?: string[]
> ```
>
> </b>

List of extra terms to be indexed for the search.

<dl>

</dl>

___

### install

> <b>
>
> ```typescript
> install?: string
> ```
>
> </b>

The location of the package on CTAN
relative to the CTAN directory `/install`
in form of an installable TDS-compliant zip archive.

<dl>
<dt> Default Value</dt>
<dd><p>

`false`

</p></dd>
</dl>

___

### license

> <b>
>
> ```typescript
> license?: string | string[]
> ```
>
> </b>

The [keys](json.v1_1.License.md#key) of licenses.

<dl>

</dl>

___

### miktex

> <b>
>
> ```typescript
> miktex?: string
> ```
>
> </b>

The name of the package in MiKTeX.

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

The print representation of the package name.

<dl>

</dl>

___

### texlive

> <b>
>
> ```typescript
> texlive?: string
> ```
>
> </b>

The name of the package in TeX Live.

<dl>

</dl>

___

### topics

> <b>
>
> ```typescript
> topics?: string[]
> ```
>
> </b>

List of topics keys for this entry.

<dl>
<dt> See</dt>
<dd><p>

[`Topic#key`](json.v1_0.Topic.md#key)

</p></dd>
</dl>

___

### version

> <b>
>
> ```typescript
> version?: PackageVersion
> ```
>
> </b>

Information about the version of the package.

<dl>
<dt>Type References</dt>
<dd><p>

- [PackageVersion](json.v1_0.PackageVersion.md)

</p></dd>

</dl>
