# Web Basics

## What happens when you type in a URL in browser?

1. browser checks cache; if requested object is in cache and is fresh, skip to #9
2. browser asks OS for server's IP address
3. OS makes a DNS lookup and replies the IP address to the browser
4. browser opens a TCP connection to server (this step is much more complex with HTTPS)
5. browser sends the HTTP request through TCP connection
6. browser receives HTTP response and may close the TCP connection, or reuse it for another request
7. browser checks if the response is a redirect or a conditional response (3xx result status codes), authorization request (401), error (4xx and 5xx), etc.; these are handled differently from normal responses (2xx)
8. if cacheable, response is stored in cache
9. browser decodes response (e.g. if it's gzipped)
10. browser determines what to do with response (e.g. is it a HTML page, is it an image, is it a sound clip?)
11. browser renders response, or offers a download dialog for unrecognized types

## [TCP vs. UDP](https://support.holmsecurity.com/hc/en-us/articles/212963869-What-is-the-difference-between-TCP-and-UDP-):

TCP (Transmission Control Protocol) is more secure due to the ACK two way communication, it guarantees the recipient will receive the packets in order by numbering them. Prevent data loss.

UDP (User Datagram Protocol) doesn't have ACK, it doesn't do error checking, but it doesn't have many overhead, so it enables fast communication, it is usually used for live broadcasts and online games.

## Namespace:

A namespace is a global object that is used to hold methods, properties, and other objects in them.

It adds ease of use via modularity and scopes, thereby providing users with ability to reuse the code and avoid naming conflicts.&#x20;

e.g.

```
const car = {
  start: () => {
    console.log('start')
  },
  stop: () => {
    console.log('stop')
  }
}
```

## SVG vs. Canvas

![](<.gitbook/assets/Screen Shot 2022-02-27 at 2.38.31 PM.png>)

## How can page loading time be reduced

Main methods:

* Reduction in the image size
* Removal of unnecessary widgets
* HTTP compression
* Reduction in lookups
* Minimal redirection and caching

## Local storage vs. Session storage

![](<.gitbook/assets/Screen Shot 2022-02-27 at 2.47.05 PM.png>)

## Long polling

A development pattern that is used to emulate a data push operation from a server to a client machine.

When long polling is operational, the client sends in a request to the server, and the data is pushed.

The connection will timeout only when the data is sent to the client or after the timeout criteria is met.
