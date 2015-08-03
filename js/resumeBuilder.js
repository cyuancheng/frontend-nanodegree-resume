/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Chiyuan Cheng")
//var awesomeThoughts = "I am Chiyuan and I am AWESOME!"
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUM")
//console.log(awesomeThoughts)
//$("#main").append(funThoughts)

var name = "Chi-Yuan Cheng"
var role = "Data Scientist"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//var email = "cyuancheng@gmail.com";
//var newEmail =
//    email.replace("gmail", "test");

//console.log(email);
//console.log(newEmail);
var bio = {
  name : "Chi-Yuan Cheng",
  role : "data scientist",
  contacts : {
    mobile : "805 570 1431",
    email : "cyuancheng@gmail.com",
    github : "cyuancheng",
    twitter : "@cyuancheng",
    location : "Santa Barbara, CA"
    },
  welcome_message : "none",
  skills : ["data science", "machine learning",
  "data visualization", "statistical analysis"],
  picture_URL : "none"
}



var projects = {
    projects: [
        {
            title: "project 1",
            dates: "2012 - 2014",
            description: "Foo bar baz",
            images: [
                "http://placehold.it/100x100/e33",
                "http://placehold.it/100x100/000"
            ]
        },
        {
            title: "project 2",
            dates: "1991 - Present",
            description: "It's kind of a big deal.",
            images: [
                "http://placehold.it/100x100/0f0",
                "http://placehold.it/100x100/ff4"
            ]
        }
    ]
};

var work = {
  "jobs":  [
  {
    "title" : "Assistent Project Scientist",
    "employer" : "UC Santa Barbara",
    "location" : "Santa Barbara, CA",
    "dates" : "2013-current",
    "description" : " xxx "
  },
  {
    "title" : "Postdoctoral Scholar",
    "employer" : "UC Santa Barbara",
    "location" : "Santa Barbara, CA",
    "dates" : "2008-2013",
    "description" : " xxx "
  }
]
}

var education = {
    "school": [
        {
            "name": "University of Florida",
            "location": "Gainesville, FL",
            "degree" : "Ph.D",
            "major": "physical chemistry"
        },
        {
            "name": "National Taiwan University",
            "location": "Taipei, Taiwan",
            "degree" : "M.S.",
            "major": "Physical Chemistry"
        },
        {
            "name": "Taipei Medical University",
            "city": "Taipei, Taiwan",
            "degree" : "BS.",
            "major": "Pharmacy"
        }
    ],
    "OnlineCourses":[
      {"title" : "JavaScript",
      "School" : "Udacity",
      "year" : 2015,
      "url": " "}
    ]
}

var projects = {
  "projects" : [
    {"title" : " xxx",
    "date" : 2015,
    "description" : "xxx",
    "image" : "xxx"
  }
  ]
}

var c = "%contact%";
var d = "%data%";

//I like to use the $ at the start of any jQuery object for my own reference
var $main = $("#main");
var $header = $('#header');
var $contact = $('#topContacts');
var $work = $('#workExperience');
var $projects = $('#projects');
var $education = $('#education');
var $skills = $('#skillsChart');
var $map = $('mapDiv');

//add name and job

//var formattedName = HTMLheaderName.replace(d, bio.name);
//var formattedRole = HTMLheaderRole.replace(d, bio.role);
//$header.append(formattedName);
//$header.append(formattedRole);

//$("#main").append(bio["name"])
//$("#main").append(bio["skills"])
//$("#main").append(education.name)

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

//add skills


for ( job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmplyerTitle = formattedEmployer + formattedTitle
    $(".work-entry:last").append(formattedEmplyerTitle)

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function locationizer(work_obj){
  var locationArray = [];

  for (job in work_obj.jobs){
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}

//console.log(locationizer(work));

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase()+
        name[0].slice(1).toLowerCase();
  return name[0]+" "+name[1];
}
//$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);
projects.display = function(){
    for(p in projects.projects){
      $("#project").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p]).title;
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
      $(".project-entry:last").append(formattedDates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
      $(".project-entry:last").append(formattedDescription);

      if(projects.projects[p].images.length > 0 ){
        for (image in projects.projects[p].images){
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
}
