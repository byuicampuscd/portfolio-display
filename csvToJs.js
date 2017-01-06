//read in csv file and parse
//convert to structure we need
//make new csv file

var fs =require('fs')
var teams = require('./json.js')
var dsv = require('d3-dsv')
var courses = []
var team,person, cluster, course, courseName;
//make function to separate course name to 3 parts

for(teamKey in teams){
    team = teams[teamKey]
    for(personKey in team){
        person = team[personKey]
        for(clusterKey in person.courses){
            cluster = person.courses[clusterKey]
            for(courseKey in cluster){
                course = cluster[courseKey]
                courseName = ""
                courses.push({
                    "Course Code": course.name,
                    "Department": course.department,
                    "Cluster Name": clusterKey,
                    "Is Block": "",
                    Domain: "",
                    "Student Name": personKey,
                    "Work Hours MT": "",
                    "Position": false,
                    "Team Number": Number(teamKey.substr(-1))
                })
            }
        }
    }
}

var coursesCSV = (dsv.csvFormat(courses))
fs.writeFileSync('Portfolio Export.csv', coursesCSV)
/*
function readCSV(filename){
    var fileText
    try{
        fileText = fs.readFileSync(filename, 'utf8')
        console.log(fileText)
    } catch(err){
        console.log(err)
    }
}
readCSV('portfolio.csv')*/
