---
layout: documentation
title: 'nabto_client_stream_new'
permalink: /developer/api-reference/plain-c-client-sdk/streaming/nabto_client_stream_new.html
page_data_flag: api-reference
position: 10
in_collapse: 'Plain C Client SDK'
in_subcollapse: 'Streaming'
---

# nabto_client_stream_new

{:#description}
## DESCRIPTION

Creates a new stream on an open connection.

{:#declaration}
## DECLARATION

{:.bg-info}
```
NabtoClientStream* nabto_client_stream_new(NabtoClientConnection* connection);
```

{:#parameters}
## PARAMETERS

<dl>
  <div>
    <dt><code>connection</code></dt>
    <dd>The connection to make the stream on, the connection needs to be kept alive until the stream has been freed.</dd>
  </div>
</dl>


{:#return-values}
## RETURN VALUES

Returns the created stream. Must be freed with [nabto_client_stream_free](/developer/api-reference/plain-c-client-sdk/streaming/nabto_client_stream_free.html). Returns NULL if a new stream could not be created.

{:#example}
## EXAMPLE

```
NabtoClientStream* stream = nabto_client_stream_new(connection);
```