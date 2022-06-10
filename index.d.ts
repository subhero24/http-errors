export default class HTTPError extends Error {
	statusCode: number;
}

export class BadRequestError extends HTTPError {}
export class UnauthorizedError extends HTTPError {}
export class PaymentRequiredError extends HTTPError {}
export class ForbiddenError extends HTTPError {}
export class NotFoundError extends HTTPError {}
export class MethodNotAllowedError extends HTTPError {}
export class NotAcceptableError extends HTTPError {}
export class ProxyAuthenticationRequiredError extends HTTPError {}
export class RequestTimeoutError extends HTTPError {}
export class ConflictError extends HTTPError {}
export class GoneError extends HTTPError {}
export class LengthRequiredError extends HTTPError {}
export class PreconditionFailedError extends HTTPError {}
export class PayloadTooLargeError extends HTTPError {}
export class URITooLongError extends HTTPError {}
export class UnsupportedMediaTypeError extends HTTPError {}
export class RangeNotSatisfiableError extends HTTPError {}
export class ExpectationFailedError extends HTTPError {}
export class ImATeapotError extends HTTPError {}
export class UnprocessableEntityError extends HTTPError {}
export class TooEarlyError extends HTTPError {}
export class UpgradeRequiredError extends HTTPError {}
export class PreconditionRequiredError extends HTTPError {}
export class TooManyRequestsError extends HTTPError {}
export class RequestHeaderFieldsTooLargeError extends HTTPError {}
export class UnavailableForLegalReasonsError extends HTTPError {}
export class InternalServerError extends HTTPError {}
export class NotImplementedError extends HTTPError {}
export class BadGatewayError extends HTTPError {}
export class ServiceUnavailableError extends HTTPError {}
export class GatewayTimeoutError extends HTTPError {}
export class HTTPVersionNotSupportedError extends HTTPError {}
export class VariantAlsoNegotiatesError extends HTTPError {}
export class InsufficientStorageError extends HTTPError {}
export class LoopDetectedError extends HTTPError {}
export class NotExtendedError extends HTTPError {}
export class NetworkAuthenticationRequiredError extends HTTPError {}
