[ctan - v0.1.0](../README.md) / [json](../modules/json.md) / SearchResult

# Interface: SearchResult

Search result.

## Implemented by

- [SearchPaginator](../classes/json.SearchPaginator.md)

## Table of Contents

### Properties

- [hits](json.SearchResult.md#hits)
- [max](json.SearchResult.md#max)
- [numberOfHits](json.SearchResult.md#numberofhits)
- [offset](json.SearchResult.md#offset)
- [phrase](json.SearchResult.md#phrase)

## Properties

### hits

> <b>
>
> ```typescript
> hits: SearchHit[]
> ```
>
> </b>

The list of hits in this junk.

<dl>
<dt>Type References</dt>
<dd><p>

- [SearchHit](json.SearchHit.md)

</p></dd>

</dl>

___

### max

> <b>
>
> ```typescript
> max: number
> ```
>
> </b>

The maximal number of hits in this junk.
It is a repetition of the input argument `max`
which might have been adapted.

<dl>
<dt> See</dt>
<dd><p>

[`SearchParameters#max`](json.SearchParameters.md#max)

</p></dd>
</dl>

___

### numberOfHits

> <b>
>
> ```typescript
> numberOfHits: number
> ```
>
> </b>

The total number of hits found.

<dl>

</dl>

___

### offset

> <b>
>
> ```typescript
> offset: number
> ```
>
> </b>

The offset at which the hits start.
It is a repetition of the input argument `offset`
which might have been adapted.

<dl>
<dt> See</dt>
<dd><p>

[`SearchParameters#offset`](json.SearchParameters.md#offset)

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

The search phrase.
It is a repetition of the input argument `phrase`
which might have been adapted.

<dl>
<dt> See</dt>
<dd><p>

[`SearchParameters#phrase`](json.SearchParameters.md#phrase)

</p></dd>
</dl>
