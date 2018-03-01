$("#mapDiv").append(googleMap);

var bio = {
    "name": "Joshua Lawrence",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "845-239-7867",
        "email": "jlawrence124@gmail.com",
        "github": "jlawrence124",
        "linkedin": "Joshua Lawrence",
        "location": "Charlotte, North Carolina"
    },
    "welcomeMessage": "Energetic, enthusiastic, and disciplined front end developer looking to contribute " +
        "to a hardworking team.  Working every day to learn new concepts and stay current on all of the latest trends as an " +
        "active member of the front end community.",
    "skills": [
        "HTML 5", "CSS 3", "Grunt", "Adobe Creative Cloud Suite", "Responsive Web Design", "Performance Optimization", "Bootstrap", "MaterializeCSS", "Javascript", "jQuery", "MVC", "Jasmine", "React", "Python"
    ],
    "biopic": "images/me.jpg"
};


bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedNameRole = formattedName + formattedRole;

    $("#header").prepend(formattedNameRole);

    var contactStart = HTMLcontactGeneric;
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedContacts = formattedMobile + formattedEmail + formattedGit + formattedLocation + formattedLinkedIn;

    $("#topContacts, #footerContacts").append(formattedContacts);

    var biopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(biopic, formattedWelcome, HTMLskillsStart);

    bio.skills.forEach(function(skill) {

        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);

    });

};

bio.display();

var work = {
    "jobs": [{
        "employer": "Geek Squad",
        "title": "Consulation and Operations Agent",
        "dates": "March 2016 - Present",
        "location": "10221 Perimeter Pkwy, Charlotte, NC 28216",
        "url": "https://www.bestbuy.com/site/electronics/geek-squad/pcmcat138100050018.c?id=pcmcat138100050018",
        "description": "Received client devices, troubleshot software and hardware issues, " +
            "and shipped client devices in and out of the precinct. Required to maintain " +
            "a comprehensive knowledge of consumer electronic devices and provide the client with a complete and prompt solution."

    }, {
        "employer": "Lawrence Computers",
        "title": "Owner",
        "dates": "November 2014 - January 2016",
        "location": "1998 Route 112,  Selden, NY",
        "url": "#",
        "description": "Provided custom computing solutions for music professionals and the general public at a fair price. " +
            "Custom builds included both Windows and Windows/Mac OS hybrid configurations."
    }, {
        "employer": "SUNY Orange",
        "title": "Biological Sciences Tutor",
        "dates": "January 2011 - December 2011",
        "location": "115 South St, Middletown, NY 10940",
        "url": "https://www.sunyorange.edu/las/",
        "description": "Stayed current on university coursework " +
            "for multiple subjects and developed materials and lessons that helped students succeed."
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("that", job.url).replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedWork = formattedEmployer + formattedWorkTitle +
            formattedWorkDates + formattedWorkLocation + formattedWorkDescription;

        $(".work-entry:last").append(formattedWork);

    });
};
work.display();


var projects = {
    "projects": [{
        "title": "Animal Cards Markup",
        "dates": "May 2016",
        "description": "Created a CSS object to learn how to create a design based on a markup.",
        "images": ["https://i.imgur.com/B2Qt7ed.png"],
        "url": "animal/card.html"
    }, {
        "title": "Portfolio Project",
        "dates": "June-July 2016",
        "description": "Created a functional website from an image mockup.",
        "images": ["https://i.imgur.com/SL2X3RQ.png"],
        "url": "port/portfolio.html"
    }, {
        "title": "Resume Project",
        "dates": "August 2016",
        "description": "This resume is actually one of my projects!",
        "images": ["https://i.imgur.com/wOkzI8e.png"],
        "url": "#"
    }, {
        "title": "Beerger",
        "dates": "October 2016",
        "description": "Recreated the classic game Frogger using HTML canvas manipulation. Can you dodge the beer 10 times and get your work done? Use arrow keys for movement.",
        "images": ["images/beer.png"],
        "url": "arcade/index.html"
    },  {
        "title": "Neighborhood Map",
        "dates": "January-Februrary 2017",
        "description": "Utilized MVVM pattern with knockoutJS and worked extensively with the Google Maps and Yelp! API to create a local listings website.",
        "images": ["images/gmaps.png"],
        "url": "map/index.html"
    },  {
        "title": "Vurger",
        "dates": "January 2018",
        "description": "Currently designing the mobile and desktop experience for an upcoming vegan/vegetarian location finder app.",
        "images": ["images/vurger.png"],
        "url": "#projects"
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        {

            $("#projects").append(HTMLprojectStart);

            var formattedProjectContainer = HTMLprojectContainer;
            var formattedProjectTitle = HTMLprojectTitle.replace("url", project.url).replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            var formattedProjectClose = HTMLprojectClose;


            project.images.forEach(function(image) {

                var formattedProjectImage = HTMLprojectImage.replace("%link%", project.url).replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });


            var formattedProject = formattedProjectTitle + formattedProjectDates +
                formattedProjectDescription;

            $(".project-entry:last").prepend(formattedProject);

        }
    });
};

projects.display();

var education = {
    "schools": [{
        "name": "Stony Brook University",
        "location": "Stony Brook, NY",
        "degree": "-- BS: Biological Sciences - Cum Laude",
        "majors": ["Biological Sciences"],
        "dates": "Fall 2013 - Fall 2016",
        "url": "https://www.stonybrook.edu/"
    }, {
        "name": "University of Colorado at Boulder",
        "location": "Boulder, CO",
        "degree": "",
        "majors": ["Ecology and Evolutionary Biology"],
        "dates": "Fall 2012 - Spring 2013",
        "url": "https://www.colorado.edu/"
    }, {
        "name": "SUNY Orange",
        "location": "Middletown, NY",
        "degree": "",
        "majors": ["Ecology and Evolutionary Biology"],
        "dates": "Fall 2008, Spring 2011 - Spring 2012",
        "url": "https://www.sunyorange.edu/"
    }],
    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": "May 2016 - Present",
        "url": "https://www.udacity.com/nanodegree"
    }, {
        "title": "Python",
        "school": "Codecademy",
        "dates": "December 2015 - Februrary 2016",
        "url": "https://www.codecademy.com/learn/python"
    }]
};


education.display = function() {
    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("that", school.url);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedOnlineUrl = HTMLworkEmployer.replace("%data%", school.url).replace("that", school.url);

        var formattedSchool = formattedSchoolName + formattedSchoolLocation + formattedSchoolDegree +
            formattedSchoolDates + formattedSchoolMajor + formattedOnlineUrl;


        $(".education-entry:last").append(formattedSchool);
    });


    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {

        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("%data%", onlineCourse.url);
        var formattedOnline = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineUrl;

        $(".education-entry:last").append(formattedOnline);

    });
};

education.display();
