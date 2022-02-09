// ./controllers/indexController.js

// 1. CONTROLLERS

exports.getHome = (req, res) => {

	res.render("index")

}

exports.getProfile = (req, res) => {

	// console.log(req.session.currentUser?.username)

	// // SOLUCIÓN 1
	// const username = req.session.currentUser?.username || ""
	// const email = req.session.currentUser?.email || ""
	// const msg = req.session.currentUser?.msg || "" 

	res.render("profile")

}