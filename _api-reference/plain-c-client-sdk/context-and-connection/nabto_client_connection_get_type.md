---
layout: documentation
title: 'nabto_client_connection_get_type'
permalink: /developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_connection_get_type.html
position: 150
in_collapse: 'Plain C Client SDK'
in_subcollapse: 'Context and Connection'
---

# nabto_client_connection_get_type

{:#description}
## DESCRIPTION

Get the connection type. Use this function to limit the amount of traffic sent over relay connections.

{:#declaration}
## DECLARATION

{:.bg-info}
```
NabtoClientError nabto_client_connection_get_type(
  NabtoClientConnection* connection,
  NabtoClientConnectionType* type);
```

{:#parameters}
## PARAMETERS

<dl>
  <div>
    <dt><code>connection</code></dt>
    <dd>A pointer to a connection structure for an established connection</dd>
    <dt><code>type</code></dt>
    <dd>Output parameter. The connection type.</dd>
  </div>
</dl>

{:#return-values}
## RETURN VALUES

Returns:

* NABTO_CLIENT_OK if the connection is connected
* NABTO_CLIENT_CONNECTION_CLOSED if the connection is closed or not opened yet.

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
   NabtoClientConnectionType type;
   if (nabto_client_connection_get_type(connection, &type) == NABTO_CLIENT_OK) {
      if (type == NABTO_CLIENT_CONNECTION_TYPE_DIRECT) {
        // ...
      }
   }
}
```