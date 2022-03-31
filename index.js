export default function HttpError(statusCode, message) {
	if (new.target === HttpError) {
		let constructor = errorsByStatusCode[statusCode];
		if (constructor) {
			return new constructor(message);
		} else {
			throw new Error(
				`Unknown HTTP status code "${statusCode}". Call the HttpError constructor function without the "new" keyword to create custom HTTP errors with non-existing status codes.`,
			);
		}
	} else if (new.target) {
		Error.call(this, message);
		this.statusCode = statusCode;
	} else {
		let result = Object.create(HttpError.prototype);
		Error.call(result, message);
		result.statusCode = statusCode;
		return result;
	}
}

HttpError.prototype = Object.create(Error.prototype);
HttpError.prototype.constructor = HttpError;

export class BadRequestError extends HttpError {
	constructor(message) {
		super(400, message);
	}
}

export class UnauthorizedError extends HttpError {
	constructor(message) {
		super(401, message);
	}
}

export class PaymentRequiredError extends HttpError {
	constructor(message) {
		super(402, message);
	}
}

export class ForbiddenError extends HttpError {
	constructor(message) {
		super(403, message);
	}
}

export class NotFoundError extends HttpError {
	constructor(message) {
		super(404, message);
	}
}

export class MethodNotAllowedError extends HttpError {
	constructor(message) {
		super(405, message);
	}
}

export class NotAcceptableError extends HttpError {
	constructor(message) {
		super(406, message);
	}
}

export class ProxyAuthenticationRequiredError extends HttpError {
	constructor(message) {
		super(407, message);
	}
}

export class RequestTimeoutError extends HttpError {
	constructor(message) {
		super(408, message);
	}
}

export class ConflictError extends HttpError {
	constructor(message) {
		super(409, message);
	}
}

export class GoneError extends HttpError {
	constructor(message) {
		super(410, message);
	}
}

export class LengthRequiredError extends HttpError {
	constructor(message) {
		super(411, message);
	}
}

export class PreconditionFailedError extends HttpError {
	constructor(message) {
		super(412, message);
	}
}

export class PayloadTooLargeError extends HttpError {
	constructor(message) {
		super(413, message);
	}
}

export class URITooLongError extends HttpError {
	constructor(message) {
		super(414, message);
	}
}

export class UnsupportedMediaTypeError extends HttpError {
	constructor(message) {
		super(415, message);
	}
}

export class RangeNotSatisfiableError extends HttpError {
	constructor(message) {
		super(416, message);
	}
}

export class ExpectationFailedError extends HttpError {
	constructor(message) {
		super(417, message);
	}
}

export class ImATeapotError extends HttpError {
	constructor(message) {
		super(418, message);
	}
}

export class UnprocessableEntityError extends HttpError {
	constructor(message) {
		super(422, message);
	}
}

export class TooEarlyError extends HttpError {
	constructor(message) {
		super(425, message);
	}
}

export class UpgradeRequiredError extends HttpError {
	constructor(message) {
		super(426, message);
	}
}

export class PreconditionRequiredError extends HttpError {
	constructor(message) {
		super(428, message);
	}
}

export class TooManyRequestsError extends HttpError {
	constructor(message) {
		super(429, message);
	}
}

export class RequestHeaderFieldsTooLargeError extends HttpError {
	constructor(message) {
		super(431, message);
	}
}

export class UnavailableForLegalReasonsError extends HttpError {
	constructor(message) {
		super(451, message);
	}
}

export class InternalServerError extends HttpError {
	constructor(message) {
		super(500, message);
	}
}

export class NotImplementedError extends HttpError {
	constructor(message) {
		super(501, message);
	}
}

export class BadGatewayError extends HttpError {
	constructor(message) {
		super(502, message);
	}
}

export class ServiceUnavailableError extends HttpError {
	constructor(message) {
		super(503, message);
	}
}

export class GatewayTimeoutError extends HttpError {
	constructor(message) {
		super(504, message);
	}
}

export class HTTPVersionNotSupportedError extends HttpError {
	constructor(message) {
		super(505, message);
	}
}

export class VariantAlsoNegotiatesError extends HttpError {
	constructor(message) {
		super(506, message);
	}
}

export class InsufficientStorageError extends HttpError {
	constructor(message) {
		super(507, message);
	}
}

export class LoopDetectedError extends HttpError {
	constructor(message) {
		super(508, message);
	}
}

export class NotExtendedError extends HttpError {
	constructor(message) {
		super(510, message);
	}
}

export class NetworkAuthenticationRequiredError extends HttpError {
	constructor(message) {
		super(511, message);
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
