# HTTP Error classes

HTTP errors with status codes

## install

```
npm i https://github.com/subhero24/http-errors.git
```

## usage

```javascript
import HttpError, { NotFoundError } from 'http-errors';

let error = new HttpError(404, 'not found');
let error = new NotFoundError('not found');

error instanceof NotFoundError;
```
