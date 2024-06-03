<!-- Compare between Session and Cookie -->

1. Storage Location:
   Session:
   Data is stored on the server.
   The client only stores a session identifier (session ID) in a cookie or via URL parameter.
   Cookie:
   Data is stored on the client's browser.
   The browser sends cookies to the server with each request to the same domain.
2. Capacity:
   Session:
   Can store larger amounts of data, limited only by server memory or storage.
   Cookie:
   Limited to about 4KB of data per cookie.
3. Security:
   Session:
   Generally more secure because data is stored on the server.
   Session data is not directly accessible by the client, reducing the risk of tampering.
   Still susceptible to session hijacking if the session ID is intercepted.
   Cookie:
   Less secure as data is stored on the client-side.
   Vulnerable to cross-site scripting (XSS) attacks if proper security measures are not taken.
   Can be secured using attributes like HttpOnly, Secure, SameSite.
4. Expiration:
   Session:
   Typically expires when the user closes the browser or after a set time period of inactivity.
   Can be configured to persist longer or shorter, depending on server settings.
   Cookie:
   Can be set to expire at a specific date and time, or after a certain period.
   Persistent cookies remain on the client until they expire or are deleted by the user.
   Session cookies expire when the browser is closed.
5. Use Cases:
   Session:
   Ideal for storing user-specific data during a browsing session, like login information, user preferences, shopping cart contents.
   Useful for sensitive data that should not be exposed to the client.
   Cookie:
   Used for storing less sensitive data that needs to persist across sessions, like user preferences, tracking user activity, remembering login states.
   Useful for implementing features like "remember me" functionality.
6. Performance:
   Session:
   Since data is stored on the server, it can potentially use more server resources, especially with many concurrent users.
   Can slow down server response time if not managed properly.
   Cookie:
   Minimal impact on server performance as the data is stored and managed on the client-side.
   Can slow down client-side performance if too many cookies are stored or if cookies are too large.
