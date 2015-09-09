function portfolioBtn() {
	window.location.href = "#projectsContent";
}
$(document).ready( function() {
	
	var projects = function (title, desc, link, imageLink) {
		this.title = title;
		this.desc = desc;
		this.link = link;
		this.imageLink = imageLink;
	}

	var fizzbuzz = new projects ('FizzBuzz Project', 'This project exemplifies basic JavaScript functions to create a game called FizzBuzz. In addition, all of the HTML was generated dynamically using functions, apart from the body and one div tag.', '/rwilson/FizzBuzz/', 'images/fizzbuzz.png');
	var madlib = new projects ('MadLib Generator', 'The MadLib Generator project takes user input of nouns, adjectives, verbs and adverbs to generate a Mad Lib story. It is a good, albeit basic, example of collecting data and using it to manipulate the output.', '/rwilson/MadLib/', 'images/mad-lib.png');
	var tictactoe = new projects ('Tic Tac Toe', 'Here I recreated the classic game of Tic Tac Toe. Grab a friend and play to your hearts content.', '/rwilson/TicTacToe/', 'images/tictactoe.png');
	var drCrentist = new projects ('Dr Crentist - Mock Website', 'This is an example website built for a fictional Dr. Crentist. As part of a challenge with my employees at work, we created landing pages while using only HTML and CSS, (No Bootstrap, JavaScript, jQuery, etc allowed). Notable here is my use of CSS3 animation to create a functional a appealing slider.', '/rwilson/Crentist/', 'images/crentist.png');
	var gallery = new projects ('jQuery Photo Gallery', 'A fully functional jQuery photo gallery that allows the user to cycle through all images and even allows users to add their own images.', '/rwilson/Gallery/', 'images/gallery.png');

	var projectsArray = [fizzbuzz, madlib, tictactoe, drCrentist, gallery];

	function loopProjects(project) {

		var containDiv = document.createElement('div');
		containDiv.className = 'col-sm-6 col-xs-12';
		containDiv.id = project.title + ' containDiv';
		document.getElementById('projects-module').appendChild(containDiv);

		var innerDiv = document.createElement('div');
		innerDiv.className = 'project';
		innerDiv.id = project.title + ' project';
		document.getElementById(project.title + ' containDiv').appendChild(innerDiv);

		var projectImg = document.createElement('img');
		projectImg.className = 'project-img img-responsive';
		projectImg.setAttribute('src', project.imageLink);
		document.getElementById(project.title + ' project').appendChild(projectImg);

		var infoContain = document.createElement('div');
		infoContain.className = 'infoContain';
		infoContain.id = project.title + ' infoContain';
		document.getElementById(project.title + ' project').appendChild(infoContain);

		var projectTitle = document.createElement('div');
		projectTitle.className = 'title';
		projectTitle.id = project.title + ' title';
		projectTitle.innerHTML = project.title;
		document.getElementById(project.title + ' infoContain').appendChild(projectTitle);

		var projectDesc = document.createElement('div');
		projectDesc.className = 'project-desc';
		projectDesc.id = project.title + ' desc';
		projectDesc.innerHTML = project.desc;
		document.getElementById(project.title + ' infoContain').appendChild(projectDesc);

		var seeExample = document.createElement('div');
		seeExample.className = 'see-example'
		seeExample.id = 'see-example ' + project.title;
		document.getElementById(project.title + ' infoContain').appendChild(seeExample);

		var exampleAhref = document.createElement('a');
		exampleAhref.setAttribute('href', project.link);
		exampleAhref.id = project.title + ' example-link';
		exampleAhref.innerHTML = 'View Project';
		document.getElementById('see-example ' + project.title).appendChild(exampleAhref);

	}

	projectsArray.forEach(loopProjects);

});

