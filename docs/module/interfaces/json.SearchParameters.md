[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / SearchParameters

# Interface: SearchParameters

Query parameters for searching.

## Table of Contents

### Properties

- [AUTHORS](json.SearchParameters.md#authors)
- [FILES](json.SearchParameters.md#files)
- [PKG](json.SearchParameters.md#pkg)
- [PORTAL](json.SearchParameters.md#portal)
- [TOPICS](json.SearchParameters.md#topics)
- [ext](json.SearchParameters.md#ext)
- [max](json.SearchParameters.md#max)
- [offset](json.SearchParameters.md#offset)
- [phrase](json.SearchParameters.md#phrase)
- [wildcard](json.SearchParameters.md#wildcard)

## Properties

### AUTHORS

> <b>
>
> ```typescript
> AUTHORS?: boolean
> ```
>
> </b>

Whether the author section should be included into the search.
The author section contains the names of the contributors in the Catalogue.

<dl>
<dt> Default Value</dt>
<dd><p>

`false`

</p></dd>
</dl>

___

### FILES

> <b>
>
> ```typescript
> FILES?: boolean
> ```
>
> </b>

<dl>
<dt> Default Value</dt>
<dd><p>

`false`

</p></dd>
</dl>

___

### PKG

> <b>
>
> ```typescript
> PKG?: boolean
> ```
>
> </b>

Whether the package section should be included into the search.
The package section contains
the text fields of a package entry in the Catalogue.

<dl>
<dt> Default Value</dt>
<dd><p>

`false`

</p></dd>
</dl>

___

### PORTAL

> <b>
>
> ```typescript
> PORTAL?: boolean
> ```
>
> </b>

Whether the portal section should be included into the search.
The portal section contains the text of the portal pages.

<dl>
<dt> Default Value</dt>
<dd><p>

`false`

</p></dd>
</dl>

___

### TOPICS

> <b>
>
> ```typescript
> TOPICS?: boolean
> ```
>
> </b>

Whether the topics section should be included into the search.
The topics section contains the text fields of the topics in the Catalogue.

<dl>
<dt> Default Value</dt>
<dd><p>

`false`

</p></dd>
</dl>

___

### ext

> <b>
>
> ```typescript
> ext?: boolean
> ```
>
> </b>

Whether the sections are requested explicitly.
If the value is `false` then all default sections are searched.
Otherwise the sections to be searched
have to be specified with additional parameters.

<dl>
<dt> Default Value</dt>
<dd><p>

`false`

</p></dd>
<dt> See</dt>
<dd><p>

- [`SearchParameters#PKG`](json.SearchParameters.md#pkg)
- [`SearchParameters#AUTHORS`](json.SearchParameters.md#authors)
- [`SearchParameters#TOPICS`](json.SearchParameters.md#topics)
- [`SearchParameters#FILES`](json.SearchParameters.md#files)
- [`SearchParameters#PORTAL`](json.SearchParameters.md#portal)

</p></dd>
</dl>

___

### max

> <b>
>
> ```typescript
> max?: number
> ```
>
> </b>

The number of hits maximally returned.
Larger values will be reduced to `256`.
Lower values will be replaced by the default value.

<dl>
<dt> Default Value</dt>
<dd><p>

`16`

</p></dd>
</dl>

___

### offset

> <b>
>
> ```typescript
> offset?: number
> ```
>
> </b>

The offset for paging.
The accompanying parameter max contains the page size.
This parameter contains the first hit to be returned.
If a negative number is passed in then it is replaced by `0`.
If the offset is larger than the number of actual hits
then the list of hits will be empty.

<dl>
<dt> See</dt>
<dd><p>

[`SearchParameters#max`](json.SearchParameters.md#max)

</p></dd>
</dl>

___

### phrase

> <b>
>
> ```typescript
> phrase: string
> ```
>
> </b>

The words or search expressions to query for.

<dl>

</dl>

___

### wildcard

> <b>
>
> ```typescript
> wildcard?: boolean
> ```
>
> </b>

<dl>
<dt> Default Value</dt>
<dd><p>

`false`

</p></dd>
</dl>
