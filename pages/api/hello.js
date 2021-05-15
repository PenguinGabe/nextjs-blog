export default function handler(req, res) {
	res.status(200).json({ text: 'Hello' })
}

// a good use case for API routes is handling form input
// create a form on our page, and send a `POST` request to our API route
// const email = req.body.email
// then do stuff..