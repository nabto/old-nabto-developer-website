---
layout: documentation
title: 'Collapse Post'
permalink: /developer/api-reference/c-net-client-sdk/collapse-post.html
page_data_flag: api-reference
position: 1

# if post doesn't in collapse type "false"
in_collapse: 'C# / .NET Client SDK'

# if post doesn't in subcollapse type "false"
in_subcollapse: false

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


# Collapse Post

{:#description}
## DESCRIPTION

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eveniet beatae a natus excepturi nostrum autem, esse, sed expedita eum distinctio neque ipsam laborum magnam exercitationem animi pariatur quae, voluptate illo. Neque, cum, nesciunt. Eaque, aliquam. Nesciunt, nostrum maxime quasi. 

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
    <dt><code>Lorem:</code></dt>
    <dd>Lorem ipsum dolor sit amet.</dd>
  </div>
  <div>
    <dt><code>session:</code></dt>
    <dd>Lorem ipsum dolor sit amet.</dd>
  </div>
  <div>
    <dt><code>deviceId:</code></dt>
    <dd>Lorem ipsum dolor sit amet.</dd>
  </div>
</dl>

{:#return-values}
## RETURN VALUES

<dl>
  <div>
    <dt><code class="bg-info">Lorem:</code></dt>
    <dd>Lorem ipsum dolor sit amet.</dd>
  </div>
  <div>
    <dt><code class="bg-info">Lorem:</code></dt>
    <dd>Lorem ipsum dolor sit amet.</dd>
  </div>
  <div>
    <dt><code class="bg-info">Lorem:</code></dt>
    <dd>Lorem ipsum dolor sit amet.</dd>
  </div>
  <div>
    <dt><code class="bg-info">Lorem:</code></dt>
    <dd>Lorem ipsum dolor sit amet.</dd>
  </div>
  <div>
    <dt><code class="bg-info">Lorem:</code></dt>
    <dd>Lorem ipsum dolor sit amet.</dd>
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