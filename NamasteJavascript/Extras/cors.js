// CORS - Cross Origin Resource Sharing is a mechanism which uses additional http headers to tell the browser whether a specific web app can share resources with another which are on different origins (e.g google.com and youtube.com).

// Previously browser never used to allow resource sharing on different domains or sub-domains or different ports or different protocols (e.g http and https).

// Now because of CORS standardization resource sharing is possible.

// How it works -> When a site requests resource on another domain, first a CORS preflight mechanism is followed. CORS preflight options request is made to authorize using additional http headers if the site can request for resource to a particular server on different domain. Once authorized the server adds some other additional http headers to let the client know that this request is safe and then the actual call is made for resource sharing.

// Common http headers
// -> Accept-Control-Allow-Origin : * (set by server for allowing any domain, if added specific domains, then only those domain will be allowed for resource sharing)
// -> Accept-Control-Allow-Methods : * (set by server for allowing all methods like POST, GET, DELETE, UPDATE, PATCH, but if added only specific methods then only those methods will be allowed for resource sharing)

// All the requests does not require CORS preflight call.

// For some requests browsers flags it as simple request which does not require CORS preflight call but for others it is required.

// When we try to request for resource from another domain, we often get CORS error, which is not actually an error, instead it is a standard that browsers have for requests to be followed.

// It can be solved by adding headers to server or to our request or start chrome (browsers) with disable web security flag (not recommended) or by installing some plugins/extensions which disable the CORS check (also not recommended).

// Instead of bypassing CORS, we should follow the CORS standards to improve web security.

// Now a days all the modern web browsers have the support of CORS.
