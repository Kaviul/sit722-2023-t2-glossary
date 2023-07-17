var express = require('express');
var router = express.Router();
//var fs = require('fs');

const topics = [
  {'id': "ID#", "Term": "Term", 'Description':'Description', 'Ref':'References'},
  {'id': 1, "Term": "DevOps", 'Description':'DevOps is a combination of software development (dev) and operations (ops). It is defined as a software engineering methodology which aims to integrate the work of development teams and operations teams by facilitating a culture of collaboration and shared responsibility.', 'Ref':'GitLab, “DevOps explained,” GitLab, May 23, 2022. https://about.gitlab.com/topics/devops/' },
  {'id': 2, "Term": "Agile Model", 'Description':'The Agile methodology is a project management approach that involves breaking the project into phases and emphasizes continuous collaboration and improvement. Teams follow a cycle of planning, executing, and evaluating.', 'Ref':'[28]Atlassian, “What is Agile?,” Atlassian. https://www.atlassian.com/agile#:~:text=The%20Agile%20methodology%20is%20a'},
  

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', myheading: 'Welcome to my page! This page contains a database of all the unclear topics I have come across in SIT722', detail: 'This page blah blah blah', topic:topics });
});

module.exports = router;
