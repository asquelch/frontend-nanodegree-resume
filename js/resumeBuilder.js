

// Header
var bio = {
	"name": "Aaron Squelch",
	"role": "Senior Business Analyst",
	"welcomeMsg": "Aaron is a passionate and design focused analyst with extensive experience in large transformational projects.",
	"contacts": {
		"mobile": "9999 999 999",
		"email": "aaronsquelch@gmail.com",
		"twitter": "hcleuqs",
		"github" : "github.com/asquelch",
		"location": "Melbourne"
	},
	"skills": ["JavaScript","Analysis","UX","Project Management"],
	"biopic": "images/aaronsquelch.jpg"
};



// THIS DOESN'T WORK DESPITE MIMICING CODE FROM TUTORIAL
//function inName(name) {
//  name = name.trim().spilt(" ");
//  console.log(name);
//  name[1] = name[1].toUpperCase();
//  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
//  return name[0]+" "+name[1];
//}
 
// $("#main").append(internationalizeButton);


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
		"employer": "Korea awesomeness",
		"title": "Business Analyst",
		"location": "Seoul, South Korea",
		"dates": "2009 - 2012",
		"description": "Being awesome in South Korea!"
	}
	]
};



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
};



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
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts,#footerContacts").prepend(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts,#footerContacts").prepend(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts,#footerContacts").prepend(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts,#footerContacts").prepend(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts,#footerContacts").prepend(formattedLocation);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").append(formattedWelcomeMsg);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	$("#header").append(HTMLskillsStart);
	
	for (skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills:last").append(formattedSkills);
	}
};

bio.display();

education.display = function() {

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

education.display();

projects.display = function() {

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

projects.display();

work.display = function() {

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

work.display();

$("#mapDiv").append(googleMap);