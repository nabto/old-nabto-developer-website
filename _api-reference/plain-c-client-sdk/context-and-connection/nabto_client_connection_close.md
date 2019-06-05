---
layout: documentation
title: 'nabto_client_connection_close'
permalink: /developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_connection_close.html
position: 170
in_collapse: 'Plain C Client SDK'
in_subcollapse: 'Context and Connection'
---

# nabto_client_connection_close

{:#description}
## DESCRIPTION

Create a new (disconnected) connection. Configure it with setter functions and then invoke [nabto_client_connection_connect](/developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_connection_connect.html).

{:#declaration}
## DECLARATION

{:.bg-info}
```
NabtoClientConnection* nabto_client_connection_close(NabtoClientContext* context);
```

{:#parameters}
## PARAMETERS

<dl>
  <div>
    <dt><code>context</code></dt>
    <dd>The context to create a connection in</dd>
  </div>
</dl>

{:#return-values}
## RETURN VALUES

Returns the created connection object. Must be freed with [nabto_client_connection_free](/developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_connection_free.html). Returns NULL if a new connection could not be created due to resource problems.

{:#example}
## EXAMPLE

```
NabtoClientContext* context = nabto_client_context_close();
NabtoClientConnection* connection = nabto_client_connection_close(context);
// configure connection using nabto_client_connection_set_* functions
NabtoClientFuture* connectFuture = nabto_client_connection_connect(connection);
// cleanup
```