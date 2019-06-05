---
layout: documentation
title: 'nabto_client_connection_connect'
permalink: /developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_connection_connect.html
position: 160
in_collapse: 'Plain C Client SDK'
in_subcollapse: 'Context and Connection'
---

# nabto_client_connection_connect

{:#description}
## DESCRIPTION

Connect to a remote device as per the configuration of the connection structure done with the nabto_client_connection_set functions. Once the connection is established, it can be used with RPC or streams.

Successfully opened connections must be closed and freed by caller.

{:#declaration}
## DECLARATION

{:.bg-info}
```
NabtoClientFuture* nabto_client_connection_connect(NabtoClientConnection* connection);
```

{:#parameters}
## PARAMETERS

<dl>
  <div>
    <dt><code>connection</code></dt>
    <dd>A pointer to an already allocated and configured connection structure</dd>
  </div>
</dl>

{:#return-values}
## RETURN VALUES

Asynchronous function that returns a NabtoClientFuture. Once the future resolves, the connection is open or the open attempt failed.

{:#example}
## EXAMPLE

```
NabtoClientContext* context = nabto_client_context_new();
NabtoClientConnection* connection = nabto_client_connection_new(context);

// configure connection using nabto_client_connection_set_* functions

NabtoClientFuture* connectFuture = nabto_client_connection_connect(connection);
nabto_client_future_wait(connectFuture);

NabtoClientError ec = nabto_client_future_error_code(connectFuture);
nabto_client_future_free(connectFuture);
if (ec == NABTO_CLIENT_OK) {
  // use connection
}

// cleanup
```