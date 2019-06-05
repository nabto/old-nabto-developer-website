---
layout: documentation
title: 'nabto_client_connection_set_device_id'
permalink: /developer/api-reference/plain-c-client-sdk/context-and-connection/nabto_client_connection_set_device_id.html
position: 60
in_collapse: 'Plain C Client SDK'
in_subcollapse: 'Context and Connection'
---

# nabto_client_connection_set_device_id

{:#description}
## DESCRIPTION

Set the device id for the remote device to connect to later.

A product id and device id must always be set before it is possible to establish a
connection. The ids can be obtained trough local discovery or e.g. through the cloud management
API (or through the solution management portal).

The device id cannot be changed after a connection is made.

{:#declaration}
## DECLARATION

{:.bg-info}
```
NabtoClientConnection* nabto_client_connection_set_device_id(NabtoClientContext* context);
```

{:#parameters}
## PARAMETERS

<dl>
  <div>
    <dt><code>connection</code></dt>
    <dd>The connection object to configure.</dd>
    <dt><code>deviceId</code></dt>
    <dd>The device id aka the id for the specific group of devices.</dd>
  </div>
</dl>

{:#return-values}
## RETURN VALUES

Returns NABTO_CLIENT_OK if the id was set.

{:#example}
## EXAMPLE

```
NabtoClientContext* context = nabto_client_context_new();
NabtoClientConnection* connection = nabto_client_connection_new(context);
if (nabto_client_connection_set_product_id(connection, "pr-4taxzujc") != NABTO_CLIENT_OK) {
 // ...
}
if (nabto_client_connection_set_device_id(connection, "de-11xftr35") != NABTO_CLIENT_OK) {
 // ...
}
NabtoClientFuture* connectFuture = nabto_client_connection_connect(connection);
// ...
```