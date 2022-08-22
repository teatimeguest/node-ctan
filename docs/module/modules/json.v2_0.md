[ctan - v0.1.0](../README.md) / [json](json.md) / v2\_0

# Namespace: v2\_0

Submodule for the CTAN JSON API v2.0.

## Table of Contents

### References

- [ClientConfig](json.v2_0.md#clientconfig)
- [CtanError](json.v2_0.md#ctanerror)
- [CtanRequestError](json.v2_0.md#ctanrequesterror)
- [CtanResponseError](json.v2_0.md#ctanresponseerror)
- [ErrorOptions](json.v2_0.md#erroroptions)
- [SearchHit](json.v2_0.md#searchhit)
- [SearchPaginator](json.v2_0.md#searchpaginator)
- [SearchParameters](json.v2_0.md#searchparameters)
- [SearchResult](json.v2_0.md#searchresult)
- [default](json.v2_0.md#default)

### Classes

- [Client](../classes/json.v2_0.Client.md)

### Interfaces

- [ApiVersion](../interfaces/json.v2_0.ApiVersion.md)
- [Author](../interfaces/json.v2_0.Author.md)
- [AuthorParameters](../interfaces/json.v2_0.AuthorParameters.md)
- [AuthorsParameters](../interfaces/json.v2_0.AuthorsParameters.md)
- [Copyright](../interfaces/json.v2_0.Copyright.md)
- [License](../interfaces/json.v2_0.License.md)
- [LicensesParameters](../interfaces/json.v2_0.LicensesParameters.md)
- [Package](../interfaces/json.v2_0.Package.md)
- [PackageAlias](../interfaces/json.v2_0.PackageAlias.md)
- [PackageAuthor](../interfaces/json.v2_0.PackageAuthor.md)
- [PackageDescription](../interfaces/json.v2_0.PackageDescription.md)
- [PackageDocumentation](../interfaces/json.v2_0.PackageDocumentation.md)
- [PackageSummary](../interfaces/json.v2_0.PackageSummary.md)
- [PackageVersion](../interfaces/json.v2_0.PackageVersion.md)
- [PackagesParameters](../interfaces/json.v2_0.PackagesParameters.md)
- [PkgParameters](../interfaces/json.v2_0.PkgParameters.md)
- [PseudonymousAuthor](../interfaces/json.v2_0.PseudonymousAuthor.md)
- [Topic](../interfaces/json.v2_0.Topic.md)
- [TopicParameters](../interfaces/json.v2_0.TopicParameters.md)
- [TopicsParameters](../interfaces/json.v2_0.TopicsParameters.md)

### Functions

- [author](json.v2_0.md#author)
- [authors](json.v2_0.md#authors)
- [licenses](json.v2_0.md#licenses)
- [packages](json.v2_0.md#packages)
- [pkg](json.v2_0.md#pkg)
- [search](json.v2_0.md#search)
- [topic](json.v2_0.md#topic)
- [topics](json.v2_0.md#topics)
- [version](json.v2_0.md#version)

## References

### ClientConfig

> Re-exports [ClientConfig](../interfaces/ClientConfig.md)

___

### CtanError

> Re-exports [CtanError](../classes/CtanError.md)

___

### CtanRequestError

> Re-exports [CtanRequestError](../classes/CtanRequestError.md)

___

### CtanResponseError

> Re-exports [CtanResponseError](../classes/CtanResponseError.md)

___

### ErrorOptions

> Re-exports [ErrorOptions](../interfaces/ErrorOptions.md)

___

### SearchHit

> Re-exports [json](json.md)**.**[SearchHit](../interfaces/json.SearchHit.md)

___

### SearchPaginator

> Re-exports [json](json.md)**.**[SearchPaginator](../classes/json.SearchPaginator.md)

___

### SearchParameters

> Re-exports [json](json.md)**.**[SearchParameters](../interfaces/json.SearchParameters.md)

___

### SearchResult

> Re-exports [json](json.md)**.**[SearchResult](../interfaces/json.SearchResult.md)

___

### default

> Renames and re-exports [json](json.md)**.**[v2_0](json.v2_0.md)**.**[Client](../classes/json.v2_0.Client.md)

## Functions

### author

> <b>
>
> ```typescript
> author(key, params?, config?): Promise<Author | PseudonymousAuthor>
> ```
>
> </b>

Convenience function for one-off requests.

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`key`|<code>string</code>|
|`params?`|<code>Readonly<[AuthorParameters](../interfaces/json.v1_0.AuthorParameters.md)\></code>|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[Author](../interfaces/json.v1_3.Author.md) \| [PseudonymousAuthor](../interfaces/json.v1_3.PseudonymousAuthor.md)\></code>

</p></dd>
<dt> See</dt>
<dd><p>

[`Client#author`](../classes/json.v2_0.Client.md#author)

</p></dd>
</dl>

___

### authors

> <b>
>
> ```typescript
> authors(params?, config?): Promise<(Author | PseudonymousAuthor)[]>
> ```
>
> </b>

Convenience function for one-off requests.

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`params?`|<code>Readonly<[AuthorsParameters](../interfaces/json.v1_0.AuthorsParameters.md)\></code>|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<([Author](../interfaces/json.v1_3.Author.md) \| [PseudonymousAuthor](../interfaces/json.v1_3.PseudonymousAuthor.md))[]\></code>

</p></dd>
<dt> See</dt>
<dd><p>

[`Client#authors`](../classes/json.v2_0.Client.md#authors)

</p></dd>
</dl>

___

### licenses

> <b>
>
> ```typescript
> licenses(params?, config?): Promise<License[]>
> ```
>
> </b>

Convenience function for one-off requests.

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`params?`|<code>Readonly<[LicensesParameters](../interfaces/json.v1_1.LicensesParameters.md)\></code>|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[License](../interfaces/json.v1_1.License.md)[]\></code>

</p></dd>
<dt> See</dt>
<dd><p>

[`Client#licenses`](../classes/json.v2_0.Client.md#licenses)

</p></dd>
</dl>

___

### packages

> <b>
>
> ```typescript
> packages(params?, config?): Promise<PackageSummary[]>
> ```
>
> </b>

Convenience function for one-off requests.

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`params?`|<code>Readonly<[PackagesParameters](../interfaces/json.v1_0.PackagesParameters.md)\></code>|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[PackageSummary](../interfaces/json.v1_0.PackageSummary.md)[]\></code>

</p></dd>
<dt> See</dt>
<dd><p>

[`Client#packages`](../classes/json.v2_0.Client.md#packages)

</p></dd>
</dl>

___

### pkg

> <b>
>
> ```typescript
> pkg(key, params?, config?): Promise<Package>
> ```
>
> </b>

Convenience function for one-off requests.

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`key`|<code>string</code>|
|`params?`|<code>Readonly<[PkgParameters](../interfaces/json.v1_0.PkgParameters.md)\></code>|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[Package](../interfaces/json.v2_0.Package.md)\></code>

</p></dd>
<dt> See</dt>
<dd><p>

[`Client#pkg`](../classes/json.v2_0.Client.md#pkg)

</p></dd>
</dl>

___

### search

> <b>
>
> ```typescript
> search(params, config?): Promise<SearchPaginator>
> ```
>
> </b>

Convenience function for one-off requests.

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`params`|<code>string \| Readonly<[SearchParameters](../interfaces/json.SearchParameters.md)\></code>|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[SearchPaginator](../classes/json.SearchPaginator.md)\></code>

</p></dd>
<dt> See</dt>
<dd><p>

[`Client#search`](../classes/json.v2_0.Client.md#search)

</p></dd>
</dl>

___

### topic

> <b>
>
> ```typescript
> topic(key, params?, config?): Promise<Topic>
> ```
>
> </b>

Convenience function for one-off requests.

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`key`|<code>string</code>|
|`params?`|<code>Readonly<[TopicParameters](../interfaces/json.v1_0.TopicParameters.md)\></code>|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[Topic](../interfaces/json.v1_0.Topic.md)\></code>

</p></dd>
<dt> See</dt>
<dd><p>

[`Client#topic`](../classes/json.v2_0.Client.md#topic)

</p></dd>
</dl>

___

### topics

> <b>
>
> ```typescript
> topics(params?, config?): Promise<Topic[]>
> ```
>
> </b>

Convenience function for one-off requests.

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`params?`|<code>Readonly<[TopicsParameters](../interfaces/json.v1_0.TopicsParameters.md)\></code>|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[Topic](../interfaces/json.v1_0.Topic.md)[]\></code>

</p></dd>
<dt> See</dt>
<dd><p>

[`Client#topics`](../classes/json.v2_0.Client.md#topics)

</p></dd>
</dl>

___

### version

> <b>
>
> ```typescript
> version(config?): Promise<ApiVersion>
> ```
>
> </b>

Convenience function for one-off requests.

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|
|---|---|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[ApiVersion](../interfaces/json.v2_0.ApiVersion.md)\></code>

</p></dd>
<dt> See</dt>
<dd><p>

[`Client#version`](../classes/json.v2_0.Client.md#version)

</p></dd>
</dl>
