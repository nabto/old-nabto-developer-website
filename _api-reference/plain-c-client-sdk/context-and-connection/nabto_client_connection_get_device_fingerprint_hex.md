---
layout: documentation
title: 'nabto_client_connection_get_device_fingerprint_hex'
permalink: /developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_connection_get_device_fingerprint_hex.html
position: 140
in_collapse: 'Plain C Client SDK'
in_subcollapse: 'Context and Connection'
---

# nabto_client_connection_get_device_fingerprint_hex

{:#description}
## DESCRIPTION

Get the fingerprint of the remote device public key. The fingerprint is used to validate the identity of the remote device.

{:#declaration}
## DECLARATION

{:.bg-info}
```
NabtoClientConnection* nabto_client_connection_get_device_fingerprint_hex(NabtoClientConnection* connection, char* fingerprint);
```

{:#parameters}
## PARAMETERS

<dl>
  <div>
    <dt><code>connection</code></dt>
    <dd>Connection to the remote device for which the fingerprint should be retrieved</dd>
    <dt><code>fingerprint</code></dt>
    <dd>The output buffer to hold the fingerprint</dd>
  </div>
</dl>

{:#return-values}
## RETURN VALUES

NABTO_CLIENT_OK if the fingerprint was copied to the fingerprint parameter.


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
  char fingerprint[32];
  if (nabto_client_connection_get_device_fingerprint_hex(connection, fingerprint) == NABTO_CLIENT_OK) {
    // use fingerprint
  }
  // ...
}
```