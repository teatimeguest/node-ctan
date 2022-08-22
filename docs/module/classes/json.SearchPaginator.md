[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / SearchPaginator

# Class: SearchPaginator

Paginator for searching.

## Implements

- [SearchResult](../interfaces/json.SearchResult.md)

## Table of Contents

### Accessors

- [[toStringTag]](json.SearchPaginator.md#[tostringtag])
- [hits](json.SearchPaginator.md#hits)
- [max](json.SearchPaginator.md#max)
- [numberOfHits](json.SearchPaginator.md#numberofhits)
- [offset](json.SearchPaginator.md#offset)
- [phrase](json.SearchPaginator.md#phrase)

### Methods

- [[asyncIterator]](json.SearchPaginator.md#[asynciterator])
- [done](json.SearchPaginator.md#done)
- [next](json.SearchPaginator.md#next)
- [toJSON](json.SearchPaginator.md#tojson)

## Accessors

### [toStringTag]

> <b>
>
> ```typescript
> get [toStringTag](): "SearchPaginator"
> ```
>
> </b>

<dl>
<dt>Returns</dt>
<dd><p>

<code>"SearchPaginator"</code>

</p></dd>

</dl>

___

### hits

> <b>
>
> ```typescript
> get hits(): SearchHit[]
> ```
>
> </b>
>
> **Implementation of:** [json](../modules/json.md)**.**[SearchResult](../interfaces/json.SearchResult.md)**.**[hits](../interfaces/json.SearchResult.md#hits)
>

The list of hits in this junk.

<dl>
<dt>Returns</dt>
<dd><p>

<code>[SearchHit](../interfaces/json.SearchHit.md)[]</code>

</p></dd>

</dl>

___

### max

> <b>
>
> ```typescript
> get max(): number
> ```
>
> </b>
>
> **Implementation of:** [json](../modules/json.md)**.**[SearchResult](../interfaces/json.SearchResult.md)**.**[max](../interfaces/json.SearchResult.md#max)
>

The maximal number of hits in this junk.
It is a repetition of the input argument `max`
which might have been adapted.

<dl>
<dt>Returns</dt>
<dd><p>

<code>number</code>

</p></dd>
<dt> See</dt>
<dd><p>

[`SearchParameters#max`](../interfaces/json.SearchParameters.md#max)

</p></dd>
</dl>

___

### numberOfHits

> <b>
>
> ```typescript
> get numberOfHits(): number
> ```
>
> </b>
>
> **Implementation of:** [json](../modules/json.md)**.**[SearchResult](../interfaces/json.SearchResult.md)**.**[numberOfHits](../interfaces/json.SearchResult.md#numberofhits)
>

The total number of hits found.

<dl>
<dt>Returns</dt>
<dd><p>

<code>number</code>

</p></dd>

</dl>

___

### offset

> <b>
>
> ```typescript
> get offset(): number
> ```
>
> </b>
>
> **Implementation of:** [json](../modules/json.md)**.**[SearchResult](../interfaces/json.SearchResult.md)**.**[offset](../interfaces/json.SearchResult.md#offset)
>

The offset at which the hits start.
It is a repetition of the input argument `offset`
which might have been adapted.

<dl>
<dt>Returns</dt>
<dd><p>

<code>number</code>

</p></dd>
<dt> See</dt>
<dd><p>

[`SearchParameters#offset`](../interfaces/json.SearchParameters.md#offset)

</p></dd>
</dl>

___

### phrase

> <b>
>
> ```typescript
> get phrase(): string
> ```
>
> </b>
>
> **Implementation of:** [json](../modules/json.md)**.**[SearchResult](../interfaces/json.SearchResult.md)**.**[phrase](../interfaces/json.SearchResult.md#phrase)
>

The search phrase.
It is a repetition of the input argument `phrase`
which might have been adapted.

<dl>
<dt>Returns</dt>
<dd><p>

<code>string</code>

</p></dd>
<dt> See</dt>
<dd><p>

[`SearchParameters#phrase`](../interfaces/json.SearchParameters.md#phrase)

</p></dd>
</dl>

## Methods

### [asyncIterator]

> <b>
>
> ```typescript
> [asyncIterator](): AsyncGenerator<Readonly<SearchHit>, void, undefined>
> ```
>
> </b>

<dl>
<dt>Returns</dt>
<dd><p>

<code>AsyncGenerator<Readonly<[SearchHit](../interfaces/json.SearchHit.md)\>, void, undefined\></code>

</p></dd>

</dl>

___

### done

> <b>
>
> ```typescript
> done(): boolean
> ```
>
> </b>

<dl>
<dt>Returns</dt>
<dd><p>

<code>boolean</code>

</p></dd>

</dl>

___

### next

> <b>
>
> ```typescript
> next(): Promise<SearchPaginator>
> ```
>
> </b>

<dl>
<dt>Returns</dt>
<dd><p>

<code>Promise<[SearchPaginator](json.SearchPaginator.md)\></code>

</p></dd>

</dl>

___

### toJSON

> <b>
>
> ```typescript
> toJSON(): Readonly<SearchResult>
> ```
>
> </b>

<dl>
<dt>Returns</dt>
<dd><p>

<code>Readonly<[SearchResult](../interfaces/json.SearchResult.md)\></code>

</p></dd>

</dl>
