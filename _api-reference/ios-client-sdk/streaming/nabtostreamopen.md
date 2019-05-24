---
layout: documentation
title: 'nabtoStreamOpen'
permalink: /developer/api-reference/ios-client-sdk/streaming/nabtostreamopen.html
page_data_flag: api-reference
position: 1

# if post doesn't in collapse type "false"
in_collapse: 'iOS Client SDK'

# if post doesn't in subcollapse type "false"
in_subcollapse: 'Streaming'

# Smooth Scroll List
anchor-list:
  - title: 'Description'
    id: '#description'

  - title: 'Declaration'
    id: '#declaration'

  - title: 'Parameters'
    id: '#parameters'

  - title: 'Return values'
    id: '#return-values'

  - title: 'Example'
    id: '#example'
---


# nabtoStreamOpen

{:#description}
## DESCRIPTION

Opens a stream on an existing session to a Nabto enabled device. This function returns a stream handle that must be used in subsequent client API invocations. The caller must call nabtoStreamClose when the stream (handle) is no longer needed. An open session handle must have been created prior to calling this function.

{:#declaration}
## DECLARATION

{:.bg-info}
```
nabto_status_t nabtoStreamOpen(NabtoStreamHandle* handle, NabtoSessionsnabto_status_t nabtoStreamOpen(NabtoStreamHandle* handle, NabtoSession s
```

{:#parameters}
## PARAMETERS

<dl>
	<div>
		<dt><code class="bg-light">handle:</code></dt>
		<dd>the resulting handle, valid if return value is NABTO_OK</dd>
	</div>
	<div>
		<dt><code class="bg-light">session:</code></dt>
		<dd>a valid Nabto client session</dd>
	</div>
	<div>
		<dt><code class="bg-light">deviceId:</code></dt>
		<dd>Nabto device id of the target embedded device</dd>
	</div>
</dl>

{:#return-values}
## RETURN VALUES

<dl>
	<div>
		<dt><code class="bg-info">NABTO_OK</code></dt>
		<dd>if and only if a stream was successfully opend to the target device.</dd>
	</div>
	<div>
		<dt><code class="bg-info">NABTO_API_NOT_INITIALIZED</code></dt>
		<dd>if nabtoStartup was not invoked prior to invocation.</dd>
	</div>
	<div>
		<dt><code class="bg-info">NABTO_INVALID_SESSION</code></dt>
		<dd>if the session handle was invalid.></dd>
	</div>
	<div>
		<dt><code class="bg-info">NABTO_CONNECT_TO_HOST_FAILED</code></dt>
		<dd>if not possible to connect to specified host.</dd>
	</div>
	<div>
		<dt><code class="bg-info">NABTO_FAILE</code></dt>
		<dd>if an unspecified error occurred when creating the stream.</dd>
	</div>
</dl>

{:#example}
## EXAMPLE

```
void helloNabtoStream() {
	nabto_status_t st; // in all of the below: handle error and
	abort if st != NABTO_OK
	st = nabtoStartup(NULL);

	nabto_session_t session;
	nabto_status_t st = nabtoOpenSession(&session,
	“user@example.org”, “12345678”);

	nabto_stream_t stream;
	st = nabtoStreamOpen(&stream, session, query);

	const char* message = “Hello, world!”;
	st = nabtoStreamWrite(stream, message, strlen(message));

	char* response;
	size_t actual;
	st = nabtoStreamRead(stream, &response, &actual);

	nabtoFree(response);
	nabtoStreamClose(stream);
	nabtoCloseSession(session);
	nabtoShutdown();
}
```