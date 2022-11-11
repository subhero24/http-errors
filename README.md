# HTTP Error classes

HTTP errors with status codes

## install

```
npm i https://github.com/subhero24/http-errors#v0.0.1
```

## usage

```javascript
import HttpError, { NotFoundError } from 'http-errors';

// These two are equivalent
let error = new HttpError(404, 'not found');
let error = new NotFoundError('not found');

// This will throw as status code 1000 is not a valid http status
let error = new HttpError(1000);

// If you _really_ need http errors with impossible status codes,
// call the HttpError constructor without new
let error = HttpError(1000);
```
