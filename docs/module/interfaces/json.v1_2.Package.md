[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v1\_2](../modules/json.v1_2.md) / Package

# Interface: Package

Information about a package.

## Hierarchy

- [json](../modules/json.md)**.**[v1_0](../modules/json.v1_0.md)**.**<code>[Package](json.v1_0.Package.md)</code>

  ↳ **`Package`**

  ↳↳ [json](../modules/json.md)**.**[v2_0](../modules/json.v2_0.md)**.**<code>[Package](json.v2_0.Package.md)</code>

## Table of Contents

### Properties

- [also](json.v1_2.Package.md#also)
- [announce](json.v1_2.Package.md#announce)
- [authors](json.v1_2.Package.md#authors)
- [bugs](json.v1_2.Package.md#bugs)
- [caption](json.v1_2.Package.md#caption)
- [copyright](json.v1_2.Package.md#copyright)
- [ctan](json.v1_2.Package.md#ctan)
- [descriptions](json.v1_2.Package.md#descriptions)
- [development](json.v1_2.Package.md#development)
- [documentation](json.v1_2.Package.md#documentation)
- [home](json.v1_2.Package.md#home)
- [id](json.v1_2.Package.md#id)
- [index](json.v1_2.Package.md#index)
- [install](json.v1_2.Package.md#install)
- [license](json.v1_2.Package.md#license)
- [miktex](json.v1_2.Package.md#miktex)
- [name](json.v1_2.Package.md#name)
- [repository](json.v1_2.Package.md#repository)
- [support](json.v1_2.Package.md#support)
- [texlive](json.v1_2.Package.md#texlive)
- [topics](json.v1_2.Package.md#topics)
- [version](json.v1_2.Package.md#version)

## Properties

### also

> <b>
>
> ```typescript
> also?: string[]
> ```
>
> </b>
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[also](json.v1_0.Package.md#also)
>

<dl>

</dl>

___

### announce

> <b>
>
> ```typescript
> announce?: string
> ```
>
> </b>

The URL of the announcements for the package.

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[authors](json.v1_0.Package.md#authors)
>

The list of authors.

<dl>
<dt>Type References</dt>
<dd><p>

- [PackageAuthor](json.v1_0.PackageAuthor.md)

</p></dd>

</dl>

___

### bugs

> <b>
>
> ```typescript
> bugs?: string
> ```
>
> </b>

The URL of the bug tracker for the package.

<dl>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[caption](json.v1_0.Package.md#caption)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[copyright](json.v1_0.Package.md#copyright)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[ctan](json.v1_0.Package.md#ctan)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[descriptions](json.v1_0.Package.md#descriptions)
>

Long descriptions of the package.

<dl>
<dt>Type References</dt>
<dd><p>

- [PackageDescription](json.v1_0.PackageDescription.md)

</p></dd>

</dl>

___

### development

> <b>
>
> ```typescript
> development?: string
> ```
>
> </b>

The URL of the developer community for the package.

<dl>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[documentation](json.v1_0.Package.md#documentation)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[home](json.v1_0.Package.md#home)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[id](json.v1_0.Package.md#id)
>

The unique id of the package.

<dl>
<dt> See</dt>
<dd><p>

[`PackageSummary#key`](json.v1_2.PackageSummary.md#key)

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[index](json.v1_0.Package.md#index)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[install](json.v1_0.Package.md#install)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[license](json.v1_0.Package.md#license)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[miktex](json.v1_0.Package.md#miktex)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[name](json.v1_0.Package.md#name)
>

The print representation of the package name.

<dl>

</dl>

___

### repository

> <b>
>
> ```typescript
> repository?: string
> ```
>
> </b>

The URL of the source code repository for the package.

<dl>

</dl>

___

### support

> <b>
>
> ```typescript
> support?: string
> ```
>
> </b>

The URL of the support for the package.

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[texlive](json.v1_0.Package.md#texlive)
>

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[topics](json.v1_0.Package.md#topics)
>

List of topics keys for this entry.

<dl>
<dt> See</dt>
<dd><p>

[`Topic#key`](json.v1_2.Topic.md#key)

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
>
> **Inherited from:** [v1_0](../modules/json.v1_0.md)**.**[Package](json.v1_0.Package.md)**.**[version](json.v1_0.Package.md#version)
>

Information about the version of the package.

<dl>
<dt>Type References</dt>
<dd><p>

- [PackageVersion](json.v1_0.PackageVersion.md)

</p></dd>

</dl>
