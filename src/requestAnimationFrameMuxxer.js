const handlers = []

function callHandlers () {
	for (const handler of handlers) {
		handler()
	}
	requestAnimationFrame(callHandlers)
}

callHandlers()

export function registerHandler (handler) {
	handlers.push(handler)
}
