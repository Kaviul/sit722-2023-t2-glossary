var express = require('express');
var router = express.Router();
//var fs = require('fs');

const topics = [
  {'id': "ID#", "Term": "Term", 'Description':'Description', 'Ref':'References'},
  {'id': 1, "Term": "DevOps", 'Description':'DevOps is a combination of two important processes of software development cycle- development (dev) and operations (ops). It is defined as a software engineering methodology which aims to integrate the work of development teams and operations teams by facilitating a culture of collaboration and shared responsibility between these two teams.', 'Ref':'GitLab, “DevOps explained,” GitLab, May 23, 2022. https://about.gitlab.com/topics/devops/' },
  {'id': 2, "Term": "Agile Model", 'Description':'The Agile methodology is a project management approach that involves breaking the project into phases and emphasizes continuous collaboration and improvement. In agile, the customers are involved in the scrum meetings and they are always updated about the progress of the software.', 'Ref':'Atlassian, “What is Agile?,” Atlassian. https://www.atlassian.com/agile#:~:text=The%20Agile%20methodology%20is%20a'},
  {'id': 3, "Term": "Cloud Computing", 'Description':'In simple terms, cloud computing is a technology that allows users to host their application and data in third party hosted architecture where the customers only have to pay for the services they actually use.', 'Ref':'Oracle, “What is cloud computing?,” Oracle.com, 2020. https://www.oracle.com/au/cloud/what-is-cloud-computing/'},
  {'id': 4, "Term": "Waterfall Model", 'Description':'The waterfall model is a software development model used in the context of large, complex projects, typically in the field of information technology in which all the stages are tightly coupled to one another and there remains no option of reverting a stage back to correct any design problem.', 'Ref':'S. Kumar Pal, “Software Engineering | Classical Waterfall Model - GeeksforGeeks,” GeeksforGeeks, Feb. 04, 2019. https://www.geeksforgeeks.org/software-engineering-classical-waterfall-model/'},
  {'id': 5, "Term": "Spiral Model", 'Description':'The Spiral Model is a software development life cycle (SDLC) model that provides a systematic and iterative approach to software development. It is based on the idea of a spiral, with each iteration of the spiral representing a complete software development cycle, from requirements gathering and analysis to design, implementation, testing, and maintenance.', 'Ref':'S. Kumar Pal, “Software Engineering | Spiral Model - GeeksforGeeks,” GeeksforGeeks, May 28, 2018. https://www.geeksforgeeks.org/software-engineering-spiral-model/'},
  {'id': 6, "Term": "Wall of Confusion", 'Description':'The “Wall of Confusion” is a DevOps term popularized by Andrew Clay Schafer and Lee Thompson (Dev2Ops Interview). It refers to the scenerio where one group involved in the whole team depends on other groups for understanding the completed part so that they can continue their part without breaking the state-of-the-art product down.', 'Ref':'S. Kawaguchi, “The Wall of Confusion,” Medium, Feb. 12, 2022. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26'},
  {'id': 7, "Term": "Node.js", 'Description':'Node.js is a cross-platform, open-source, backend javascript runtime environment that can run on Windows, Linux, Unix, macOS, and more.', 'Ref':'“Node.js,” Wikipedia, Mar. 13, 2020. https://en.wikipedia.org/wiki/Node.js'},
  {'id': 8, "Term": "Express.js", 'Description':'Express.js is a back end web application framework for building RESTful APIs with Node.js. It is designed for building web applications and APIs.', 'Ref':'“Express.js,” Wikipedia, Mar. 07, 2020. https://en.wikipedia.org/wiki/Express.js'},
  {'id': 9, "Term": "React.js", 'Description':'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. ', 'Ref':'“React (software),” Wikipedia, Apr. 14, 2023. https://en.wikipedia.org/wiki/React_(software)'},
  {'id': 10, "Term": "Git", 'Description':'Git is a shared dustributed system that provides version control service to groups of collaborators who work on the same project. It tracks the changes in any set of computer files initially uploaded and updated over time. Its goals include speed, data integrity, and support for distributed, non-linear workflows.', 'Ref':'Wikipedia Contributors, “Git,” Wikipedia, May 12, 2019. https://en.wikipedia.org/wiki/Git'},

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', myheading: 'Welcome to my SIT722 Glossary page!', detail: 'This page contains a database of all the unclear topics I have come across in SIT722', topic:topics });
});

module.exports = router;
