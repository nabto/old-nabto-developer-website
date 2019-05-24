---
layout: documentation
title: 'nabto_client_context_new'
permalink: /developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_context_new.html
position: 10
in_collapse: 'Plain C Client SDK'
in_subcollapse: 'Context and Connection'
---

# nabto_client_context_new

{:#description}
## DESCRIPTION

Creates a new context in which connections subsequently can be created.

{:#declaration}
## DECLARATION

{:.bg-info}
```
NabtoClientContext* nabto_client_context_new()
```

{:#parameters}
## PARAMETERS

None.

{:#return-values}
## RETURN VALUES

Returns the created context. Must be freed with [nabto_client_context_free](/developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_context_free.html). Returns NULL if a new context could not be created due to resource problems.

{:#example}
## EXAMPLE

```
NabtoClientContext* context = nabto_client_context_new();
```