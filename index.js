let getPrototypeOf = Object.getPrototypeOf ? Object.getPrototypeOf.bind(Object) : o => o.__proto__;
let setPrototypeOf = Object.setPrototypeOf
	? Object.setPrototypeOf.bind(Object)
	: (o, p) => {
			o.__proto__ = p;
			return o;
	  };

export default function HttpError(statusCode, ...args) {
	if (new.target === HttpError) {
		let constructor = errorsByStatusCode[statusCode];
		if (constructor) {
			return new constructor(...args);
		} else {
			throw new Error(`Unknown HTTP status code "${statusCode}".`);
		}
	} else {
		let error = new Error(...args);

		error.type = this.constructor.name;
		error.statusCode = statusCode;

		Object.defineProperty(error, 'message', { enumerable: true });

		setPrototypeOf(error, new.target ? getPrototypeOf(this) : HttpError.prototype);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(error, HttpError);
		}
		return error;
	}
}

HttpError.prototype = Object.create(Error.prototype, {
	constructor: {
		value: Error,
		enumerable: false,
		writable: true,
		configurable: true,
	},
});

setPrototypeOf(HttpError, Error);

export class BadRequestError extends HttpError {
	constructor(...args) {
		super(400, ...args);
	}
}

export class UnauthorizedError extends HttpError {
	constructor(...args) {
		super(401, ...args);
	}
}

export class PaymentRequiredError extends HttpError {
	constructor(...args) {
		super(402, ...args);
	}
}

export class ForbiddenError extends HttpError {
	constructor(...args) {
		super(403, ...args);
	}
}

export class NotFoundError extends HttpError {
	constructor(...args) {
		super(404, ...args);
	}
}

export class MethodNotAllowedError extends HttpError {
	constructor(...args) {
		super(405, ...args);
	}
}

export class NotAcceptableError extends HttpError {
	constructor(...args) {
		super(406, ...args);
	}
}

export class ProxyAuthenticationRequiredError extends HttpError {
	constructor(...args) {
		super(407, ...args);
	}
}

export class RequestTimeoutError extends HttpError {
	constructor(...args) {
		super(408, ...args);
	}
}

export class ConflictError extends HttpError {
	constructor(...args) {
		super(409, ...args);
	}
}

export class GoneError extends HttpError {
	constructor(...args) {
		super(410, ...args);
	}
}

export class LengthRequiredError extends HttpError {
	constructor(...args) {
		super(411, ...args);
	}
}

export class PreconditionFailedError extends HttpError {
	constructor(...args) {
		super(412, ...args);
	}
}

export class PayloadTooLargeError extends HttpError {
	constructor(...args) {
		super(413, ...args);
	}
}

export class URITooLongError extends HttpError {
	constructor(...args) {
		super(414, ...args);
	}
}

export class UnsupportedMediaTypeError extends HttpError {
	constructor(...args) {
		super(415, ...args);
	}
}

export class RangeNotSatisfiableError extends HttpError {
	constructor(...args) {
		super(416, ...args);
	}
}

export class ExpectationFailedError extends HttpError {
	constructor(...args) {
		super(417, ...args);
	}
}

export class ImATeapotError extends HttpError {
	constructor(...args) {
		super(418, ...args);
	}
}

export class UnprocessableEntityError extends HttpError {
	constructor(...args) {
		super(422, ...args);
	}
}

export class TooEarlyError extends HttpError {
	constructor(...args) {
		super(425, ...args);
	}
}

export class UpgradeRequiredError extends HttpError {
	constructor(...args) {
		super(426, ...args);
	}
}

export class PreconditionRequiredError extends HttpError {
	constructor(...args) {
		super(428, ...args);
	}
}

export class TooManyRequestsError extends HttpError {
	constructor(...args) {
		super(429, ...args);
	}
}

export class RequestHeaderFieldsTooLargeError extends HttpError {
	constructor(...args) {
		super(431, ...args);
	}
}

export class UnavailableForLegalReasonsError extends HttpError {
	constructor(...args) {
		super(451, ...args);
	}
}

export class InternalServerError extends HttpError {
	constructor(...args) {
		super(500, ...args);
	}
}

export class NotImplementedError extends HttpError {
	constructor(...args) {
		super(501, ...args);
	}
}

export class BadGatewayError extends HttpError {
	constructor(...args) {
		super(502, ...args);
	}
}

export class ServiceUnavailableError extends HttpError {
	constructor(...args) {
		super(503, ...args);
	}
}

export class GatewayTimeoutError extends HttpError {
	constructor(...args) {
		super(504, ...args);
	}
}

export class HTTPVersionNotSupportedError extends HttpError {
	constructor(...args) {
		super(505, ...args);
	}
}

export class VariantAlsoNegotiatesError extends HttpError {
	constructor(...args) {
		super(506, ...args);
	}
}

export class InsufficientStorageError extends HttpError {
	constructor(...args) {
		super(507, ...args);
	}
}

export class LoopDetectedError extends HttpError {
	constructor(...args) {
		super(508, ...args);
	}
}

export class NotExtendedError extends HttpError {
	constructor(...args) {
		super(510, ...args);
	}
}

export class NetworkAuthenticationRequiredError extends HttpError {
	constructor(...args) {
		super(511, ...args);
	}
}

let errorsByStatusCode = {
	400: BadRequestError,
	401: UnauthorizedError,
	402: PaymentRequiredError,
	403: ForbiddenError,
	404: NotFoundError,
	405: MethodNotAllowedError,
	406: NotAcceptableError,
	407: ProxyAuthenticationRequiredError,
	408: RequestTimeoutError,
	409: ConflictError,
	410: GoneError,
	411: LengthRequiredError,
	412: PreconditionFailedError,
	413: PayloadTooLargeError,
	414: URITooLongError,
	415: UnsupportedMediaTypeError,
	416: RangeNotSatisfiableError,
	417: ExpectationFailedError,
	418: ImATeapotError,
	422: UnprocessableEntityError,
	425: TooEarlyError,
	426: UpgradeRequiredError,
	428: PreconditionRequiredError,
	429: TooManyRequestsError,
	431: RequestHeaderFieldsTooLargeError,
	451: UnavailableForLegalReasonsError,
	500: InternalServerError,
	501: NotImplementedError,
	502: BadGatewayError,
	503: ServiceUnavailableError,
	504: GatewayTimeoutError,
	505: HTTPVersionNotSupportedError,
	506: VariantAlsoNegotiatesError,
	507: InsufficientStorageError,
	508: LoopDetectedError,
	510: NotExtendedError,
	511: NetworkAuthenticationRequiredError,
};
