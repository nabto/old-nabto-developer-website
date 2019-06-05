---
title: 'nabto_client_stream_open'
permalink: /developer/api-reference/plain-c-client-sdk/streaming/nabto_client_stream_open.html
position: 30
in_collapse: 'Plain C Client SDK'
in_subcollapse: 'Streaming'
---

# nabto_client_stream_open

{:#description}
## DESCRIPTION

This function initializes a newly created stream and does a three way handshake with the remote peer. Once the stream is opened, the stream read and write functions can be invoked. It is illegal to invoke `nabto_client_stream_open` on an already open stream (behavior undefined).

{:#declaration}
## DECLARATION

{:.bg-info}
```
NabtoClientFuture* nabto_client_stream_open(
  NabtoClientStream* stream,
  uint32_t contentType)
```

{:#parameters}
## PARAMETERS

<dl>
  <div>
    <dt><code>connection</code></dt>
    <dd>The connection to make the stream on, the connection needs to be kept alive until the stream has been freed.</dd>
    <dt><code>contentType</code></dt>
    <dd>A value passed on to the stream accept function on the target system. Note: As of Beta1, this is not implemented yet on the device.</dd>
  </div>
</dl>


{:#return-values}
## RETURN VALUES

Asynchronous function that returns a NabtoClientFuture. Once the future resolves, the stream is open or the stream handshake attempt failed.

{:#example}
## EXAMPLE

```
NabtoClientStream* stream = nabto_client_stream_new(connection);
NabtoClientFuture* streamOpenFuture = nabto_client_stream_open(stream, 0);
nabto_client_future_wait(streamOpenFuture);
nabto_client_future_free(streamOpenFuture);
```

For a truly asynchronous example (ie, without waiting synchronously for each future to complete), see the guides section (TODO).