
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

// Header
var bio = {}
	bio.name = "Aaron Squelch",
	bio.role = "Senior Business Analyst",
	bio.welcomeMsg = "Aaron is a passionate and design focused analyst with extensive experience in large transformational projects.",
	bio.contacts = {
		"email":"aaronsquelch@gmail.com",
		"twitter": "hcleuqs",
		"github" : "github.com/asquelch"
	},
	bio.biopic = "images/aaronsquelch.jpg"

displayBio()

function displayBio() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	//used [] in contacts and not sure about this...
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);


	$("#header").prepend(formattedName);
	$("#header").prepend(formattedRole);

	$("#topContacts").prepend(formattedEmail);
	$("#topContacts").prepend(formattedTwitter);
	$("#topContacts").prepend(formattedGithub);

	$("#header").append(formattedWelcomeMsg);
	$("#header").append(formattedBioPic);

}

// Work Experience
var work = {
	"jobs": [
	{
		"employer": "Monash University",
		"title": "Senior Business Analyst",
		"location": "Melbourne, Australia",
		"dates": "2013 - Current",
		"description": "Description" 
	},
	{
		"employer": "Australian Taxation Office",
		"title": "Business Analyst",
		"location": "Melbourne, Australia",
		"dates": "2009 - 2012",
		"description": "Description"
	}
	]
}

displayWork()

function displayWork() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorktitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkdates = HTMLworkDates.replace("%data%", work.jobs[job].location);
		var formattedWorklocation = HTMLworkLocation.replace("%data%", work.jobs[job].dates);
		var formattedWorkdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedWorkemployertitle = formattedWorkemployer + formattedWorktitle;

		$(".work-entry:last").append(formattedWorkemployertitle);
		$(".work-entry:last").append(formattedWorkdates);
		$(".work-entry:last").append(formattedWorklocation);
		$(".work-entry:last").append(formattedWorkdescription);
	}

}

// Projects
var projects = {
	"projects": [
	{
		"title": "Project 1",
		"dates": "2015",
		"description": "The project description goes here...",
		"image": [
			"https://static.pexels.com/photos/3510/hand-apple-iphone-smartphone.jpg",
		 	"https://static.pexels.com/photos/3510/hand-apple-iphone-smartphone.jpg"
		 ]
	},	
	{
		"title": "Project 2",
		"dates": "2014",
		"description": "The project description goes here...",
		"image": ["images/C.jpg"]
	}
	]
}

displayProjects()

function displayProjects() {

	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedProjecttitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjecttitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		for (image in projects.projects[project].image) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[image]);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
}

//Education
var education = {
	"schools": 
	[
	{
		"schoolname": "Monash University",
		"location": "Melbourne, AUSTRALIA",
		"degree": "B Business Information Systems",
		"majors": ["Analysis"],
		"dates": 2013,
	}
	],
	"onlineschools": 
	[
	{
		"schoolname": "Udacity",
		"title": "Front-end Developer Nanodegree",
		"dates": 2015,
		"onlineURL": "udacity.com"
	}
	]
}

displayeducation()

function displayeducation() {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolname = HTMLschoolName.replace("%data%", education.schools[school].schoolname);
		var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		
		var formattedSchoolnamedegree = formattedSchoolname + formattedSchooldegree;

		$(".education-entry:last").prepend(formattedSchoolnamedegree);
		$(".education-entry:last").append(formattedSchooldates);
		$(".education-entry:last").append(formattedSchoollocation);
		$(".education-entry:last").append(formattedSchoolmajor);

	}

	for (onlineschool in education.onlineschools) {
		
		var formattedOnlinetitle = HTMLonlineTitle.replace("%data%", education.onlineschools[onlineschool].schoolname);
		var formattedOnlineschool = HTMLonlineSchool.replace("%data%", education.onlineschools[onlineschool].title);
		var formattedOnlinedates = HTMLonlineDates.replace("%data%", education.onlineschools[onlineschool].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineschools[onlineschool].onlineURL);
		
		var formattedOnlinetitleschool = formattedOnlinetitle + formattedOnlineschool;

		$(".education-entry:last").append(HTMLonlineClasses);
		$(".education-entry:last").append(formattedOnlinetitleschool);
		$(".education-entry:last").append(formattedOnlinedates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
