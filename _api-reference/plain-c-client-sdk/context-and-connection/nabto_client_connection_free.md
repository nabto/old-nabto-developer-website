---
layout: documentation
title: 'nabto_client_connection_free'
permalink: /developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_connection_free.html
position: 40
in_collapse: 'Plain C Client SDK'
in_subcollapse: 'Context and Connection'
---

# nabto_client_connection_free

{:#description}
## DESCRIPTION

Frees a previously allocated connection. Note that caller must ensure that all streams opened on a connection are freed prior to invoking. If not ensuring this, behavior is undefined.

{:#declaration}
## DECLARATION

{:.bg-info}
```
void nabto_client_connection_free(NabtoClientConnection* connection);
```

{:#parameters}
## PARAMETERS

<dl>
  <div>
    <dt><code>connection</code></dt>
    <dd>The connection to free</dd>
  </div>
</dl>

{:#return-values}
## RETURN VALUES

None.

{:#example}
## EXAMPLE

```
NabtoClientFuture* future = nabto_client_connection_close(connection);
future.wait();
nabto_client_connection_free(connection);
```