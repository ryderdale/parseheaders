# Parsing HTTP Headers

Here's the raw HTTP response when you `GET http://www.google.com/`:

```
HTTP/1.0 200 OK
Date: Mon, 30 Jul 2018 14:13:41 GMT
Expires: -1
Cache-Control: private, max-age=0
Content-Type: text/html; charset=ISO-8859-1
P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
Server: gws
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Set-Cookie: 1P_JAR=2018-07-30-14; expires=Wed, 29-Aug-2018 14:13:41 GMT; path=/; domain=.google.com
Set-Cookie: NID=135=L-fAEEQ8aLSweVUQhG11theKf4GTPldKLqfDigLVBJz63uIuMqLUx7_-ZjPPr1Ij9bHV8txS2jrJG-onsibYnn7ZjjiqwOWQaV-3CI_aOWStLWoa_Q27FdFdDOvZ1TFz; expires=Tue, 29-Jan-2019 14:13:41 GMT; path=/; domain=.google.com; HttpOnly
Accept-Ranges: none
Vary: Accept-Encoding

<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="en"><head><meta content="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for." name="description">
<!-- ALL THE REST OF THE HTML --></div></body></html>
```

Your task is to write a function named `parseHeaders` that takes that chunk of text and returns an object describing the headers and body of the HTTP response. The object should have a `obj.body` that contains the body text, and an `obj.headers` that contains all of the key/value pairs in the response header. The object should also have `obj.version` and `obj.code` that contain the HTTP version and response code, respectively.

Run the tests with `npm test`.