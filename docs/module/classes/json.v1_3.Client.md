[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / [v1\_3](../modules/json.v1_3.md) / Client

# Class: Client

Client for the CTAN JSON API v1.3.

## Hierarchy

- <code>ClientBase</code>

- <code>Searchable</code>

  ↳ **`Client`**

## Table of Contents

### Constructors

- [constructor](json.v1_3.Client.md#constructor)

### Accessors

- [defaults](json.v1_3.Client.md#defaults)

### Methods

- [author](json.v1_3.Client.md#author)
- [authors](json.v1_3.Client.md#authors)
- [licenses](json.v1_3.Client.md#licenses)
- [packages](json.v1_3.Client.md#packages)
- [pkg](json.v1_3.Client.md#pkg)
- [search](json.v1_3.Client.md#search)
- [topic](json.v1_3.Client.md#topic)
- [topics](json.v1_3.Client.md#topics)
- [version](json.v1_3.Client.md#version)

## Constructors

### constructor

> <b>
>
> ```typescript
> new Client(config?)
> ```
>
> </b>
>
> **Overrides:** ClientBase.constructor
>

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|The default configuration for this client instance.|

</p></dd>
</p></dd>

</dl>

## Accessors

### defaults

> <b>
>
> ```typescript
> get defaults(): ClientConfig
> ```
>
> </b>
>
> **Inherited from:** ClientBase.defaults
>

The default configuration for this client instance.

<dl>
<dt>Returns</dt>
<dd><p>

<code>[ClientConfig](../interfaces/ClientConfig.md)</code>

</p></dd>

</dl>

## Methods

### author

> <b>
>
> ```typescript
> author(key, params?, config?): Promise<Author | PseudonymousAuthor>
> ```
>
> </b>

Gets an author information via
[`GET /json/1.3/author/{key}`](../../../docs/api/json/1.3.md#author).

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`key`|<code>string</code>|The [key](../interfaces/json.v1_3.Author.md#key) of the author as used by CTAN.|
|`params?`|<code>Readonly<[AuthorParameters](../interfaces/json.v1_0.AuthorParameters.md)\></code>|Parameters for getting an author.|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|An optional configuration for this request.|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[Author](../interfaces/json.v1_3.Author.md) \| [PseudonymousAuthor](../interfaces/json.v1_3.PseudonymousAuthor.md)\></code>

If [`params.ref`](../interfaces/json.v1_3.AuthorParameters.md#ref) is set to `true`,
the [package list](../interfaces/json.v1_3.Author.md#pkgs) of the author
will be included in the response.

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

Gets a list of authors via
[`GET /json/1.3/authors`](../../../docs/api/json/1.3.md#list-of-authors).

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`params?`|<code>Readonly<[AuthorsParameters](../interfaces/json.v1_0.AuthorsParameters.md)\></code>|Parameters for listing authors.|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|An optional configuration for this request.|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<([Author](../interfaces/json.v1_3.Author.md) \| [PseudonymousAuthor](../interfaces/json.v1_3.PseudonymousAuthor.md))[]\></code>

If [`params.key`](../interfaces/json.v1_3.AuthorsParameters.md#key) is set,
only items with keys starting with the given string will be returned.

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

Lists licenses recognized by CTAN via
[`GET /json/1.3/licenses`](../../../docs/api/json/1.3.md#list-of-licenses).

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`params?`|<code>Readonly<[LicensesParameters](../interfaces/json.v1_1.LicensesParameters.md)\></code>|Parameters for listing licenses.|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|An optional configuration for this request.|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[License](../interfaces/json.v1_1.License.md)[]\></code>

If [`params.key`](../interfaces/json.v1_3.LicensesParameters.md#key) is set,
only items with keys starting with the given string will be returned.

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

Gets a list of packages via
[`GET /json/1.3/packages`](../../../docs/api/json/1.3.md#list-of-packages).

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`params?`|<code>Readonly<[PackagesParameters](../interfaces/json.v1_0.PackagesParameters.md)\></code>|Parameters for listing packages.|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|An optional configuration for this request.|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[PackageSummary](../interfaces/json.v1_0.PackageSummary.md)[]\></code>

If [`params.key`](../interfaces/json.v1_3.PackagesParameters.md#key) is set,
only items with keys starting with the given string will be returned.

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

Gets a package information via
[`GET /json/1.3/pkg/{key}`](../../../docs/api/json/1.3.md#package).

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`key`|<code>string</code>|The [key](../interfaces/json.v1_3.PackageSummary.md#key) of the package as used by CTAN.|
|`params?`|<code>Readonly<[PkgParameters](../interfaces/json.v1_0.PkgParameters.md)\></code>|Parameters for getting a package.|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|An optional configuration for this request.|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[Package](../interfaces/json.v1_2.Package.md)\></code>

- You can drop some of the [fields](../interfaces/json.v1_3.Package.md)
  by using [`params.drop`](../interfaces/json.v1_3.PkgParameters.md#drop).

- By default, the [`href`](../interfaces/json.v1_3.PackageDocumentation.md#href) field of
  [`Package#documentation[]`](../interfaces/json.v1_3.Package.md#documentation)
  is a URI string with `ctan` scheme,
  representing the file path of documentation on CTAN, for example:
  ```uri
  ctan:/systems/texlive/Images/README.md
  ```
  Setting [`params['keep-url']`](../interfaces/json.v1_3.PkgParameters.md#keep-url)
  to `true`, you can get normal URLs like:
  ```url
  http://mirrors.ctan.org/systems/texlive/Images/README.md
  ```

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

Finds items via [`GET /search/json`](../../../docs/api/json/2.0.md#searching).

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`params`|<code>string \| Readonly<[SearchParameters](../interfaces/json.SearchParameters.md)\></code>|Parameters for searching. If `params` is a string, it specifies the [search expression](../interfaces/json.SearchParameters.md#phrase).|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|An optional configuration for this request.|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[SearchPaginator](json.SearchPaginator.md)\></code>

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

Gets a topic information via
[`GET /json/1.3/topic/{key}`](../../../docs/api/json/1.3.md#topic).

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`key`|<code>string</code>|The [key](../interfaces/json.v1_3.Topic.md#key) of the topic as used by CTAN.|
|`params?`|<code>Readonly<[TopicParameters](../interfaces/json.v1_0.TopicParameters.md)\></code>|Parameters for getting a topic.|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|An optional configuration for this request.|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[Topic](../interfaces/json.v1_0.Topic.md)\></code>

If [`params.ref`](../interfaces/json.v1_3.TopicParameters.md#ref) is set to `true`,
the [package list](../interfaces/json.v1_3.Topic.md#packages) of the topic
will be included in the response.

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

Gets a list of topics via
[`GET /json/1.3/topics`](../../../docs/api/json/1.3.md#list-of-topics).

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`params?`|<code>Readonly<[TopicsParameters](../interfaces/json.v1_0.TopicsParameters.md)\></code>|Parameters for listing topics.|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|An optional configuration for this request.|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[Topic](../interfaces/json.v1_0.Topic.md)[]\></code>

If [`params.key`](../interfaces/json.v1_3.TopicsParameters.md#key) is set,
only items with keys starting with the given string will be returned.

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

Gets the CTAN JSON API version via
[`GET /json/1.3/version`](../../../docs/api/json/1.3.md#version).

<dl>
<dt>Parameters</dt><dd><p>

|Name|Type|Description|
|---|---|---|
|`config?`|<code>Readonly<[ClientConfig](../interfaces/ClientConfig.md)\></code>|An optional configuration for this request.|

</p></dd>
<dt>Returns</dt>
<dd><p>

<code>Promise<[ApiVersion](../interfaces/json.v1_3.ApiVersion.md)\></code>

</p></dd>

</dl>
