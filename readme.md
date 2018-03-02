# Transport API Client
This is a non-official client library providing some objects and functions for the 
[Opendata Transport API](https://transport.opendata.ch/). The API offers information about the public transport 
in Switzerland for free (there's still a request limit...). Read their docs and examples for more details about the API 
itself. The [API](https://github.com/OpendataCH/Transport) is open source, too.

## Getting Started
Just import the TransportApiClient class. It provides some methods for getting data from the API. 
requestSomething methods return a Request object, which provides methods for request parameterization. 
getSomething methods return the result of a predefined request. You always end up getting a promise after sending the request.
<br><br>
In the following NodeJS example, both requests respond the same result.

```javascript
const { TransportApiClient } = require('transport-api-client');
const tac = new TransportApiClient();

tac.getStationsIn('Basel')
    .then(response => console.log(response))
    .catch(error => console.error(error));

tac.requestLocationsByName('Basel')
    .send()
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

## Develop
Sources are written in TypeScript, Gulp is used as task runner and Mocha with Chai is used for unit testing.

### Build
`gulp build`

### Test
`npm test`
