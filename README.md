# Unexpected Node.js Server Crash

This repository demonstrates a bug causing unexpected crashes in a Node.js HTTP server. The server appears to function normally for a period but then crashes without providing detailed error information.

## Bug Description

A simple Node.js HTTP server is created using the `http` module. Under normal circumstances, this server should run indefinitely. However, after handling a certain number of requests, the server crashes without any discernible error messages in the console log. This makes debugging extremely difficult. 

## Reproduction

1. Clone this repository.
2. Run `node server.js`.
3. Send multiple requests to the server using tools like `curl` or a web browser.
4. Observe that the server eventually crashes without any error messages.

## Solution

The provided solution addresses potential memory leaks and resource exhaustion issues that might contribute to this kind of crash. It is advisable to improve error handling in a production environment.