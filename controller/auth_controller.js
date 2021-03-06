var exports = module.exports = {}
const path = require('path');

exports.projects = function(req,res){

	res.sendFile(path.join(__dirname, "../public/projects.html"));

}

exports.newProject = function(req,res){

    res.sendFile(path.join(__dirname, "../public/new-project.html"));

}

exports.signup = function(req,res){

	res.sendFile(path.join(__dirname, "../public/signup.html"));

}

exports.signin = function(req,res){

	res.sendFile(path.join(__dirname, '../public/signin.html'));

}

exports.dashboard = function(req,res){

	res.sendFile(path.join(__dirname, '../public/dashboard.html'));

}

exports.profile = function(req,res){

	res.sendFile(path.join(__dirname, '../public/profile.html'));

}

exports.userAdmin = function(req,res){

	res.sendFile(path.join(__dirname, '../public/user-admin.html'));

}

exports.edit = function(req,res){

	res.sendFile(path.join(__dirname, "../public/edit.html"));

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  	res.sendFile(path.join(__dirname, '../public/logout.html'));
  });

}