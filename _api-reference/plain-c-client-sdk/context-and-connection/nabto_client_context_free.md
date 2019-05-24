---
layout: documentation
title: 'nabto_client_context_free'
permalink: /developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_context_free.html
position: 20
in_collapse: 'Plain C Client SDK'
in_subcollapse: 'Context and Connection'
---

# nabto_client_context_free

{:#description}
## DESCRIPTION

Frees a previously allocated context. Note that caller must ensure that all connections opened within a context are closed and freed prior to invoking. If not ensuring this, behavior is undefined.

{:#declaration}
## DECLARATION

{:.bg-info}
```
NabtoClientContext* nabto_client_context_free(NabtoClientContext* context)
```

{:#parameters}
## PARAMETERS

<dl>
  <div>
    <dt><code>context</code></dt>
    <dd>The context to free</dd>
  </div>
</dl>

{:#return-values}
## RETURN VALUES

None.

{:#example}
## EXAMPLE

```
// allocate context and open connection
// ...
// cleanup
NabtoClientFuture* future = nabto_client_connection_close(connection);
nabto_client_future_wait(future);
nabto_client_connection_free(connection);
nabto_client_context_free(context);
```