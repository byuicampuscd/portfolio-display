//read in csv file and parse
//convert to structure we need
//make new csv file
var fs = require('fs')
var teams = require('./json.js')
var dsv = require('d3-dsv')
var courses = []
var team, person, cluster, course, courseName;
//make function to separate course name to 3 parts
function parseCode(course) {
    var codeArr = course.split(" - ")
    if (codeArr.length == 2) {
        var info = codeArr[1]
        if (info === 'Block 1' || info === 'Block 2') {
            codeArr[1] = true
            codeArr[2] = 'ONLN'
        }
        else {
            codeArr[1] = false
            codeArr[2] = 'PATH'
        }
    }
    else {
        codeArr[1] = false
        codeArr[2] = 'ONLN'
    }
    //codeArr = ['course code'],['isBlock'],['Domain']
    return codeArr;
}
for (teamKey in teams) {
    team = teams[teamKey]
    for (personKey in team) {
        person = team[personKey]
        
        if(person.courses){
            for (clusterKey in person.courses) {
            cluster = person.courses[clusterKey]
            for (courseKey in cluster) {
                course = cluster[courseKey]
                var parsed = parseCode(course.name)
                courses.push({
                    "Course Code": parsed[0]
                    , "Department": course.department
                    , "Cluster Name": clusterKey
                    , "Is Block": parsed[1]
                    , Domain: parsed[2]
                    , "Student Name": personKey
                    , "Work Hours MT": ""
                    , "Position": "Team Member"
                    , "Team Number": Number(teamKey.substr(-1))
                })
            }
        } 
        } else {
            courses.push({
                "Course Code": ""
                    , "Department": ""
                    , "Cluster Name": ""
                    , "Is Block": ""
                    , Domain: ""
                    , "Student Name": personKey
                    , "Work Hours MT": ""
                    , "Position": "Team Lead"
                    , "Team Number": Number(teamKey.substr(-1))
            })
        }
    }
}
var coursesCSV = (dsv.csvFormat(courses))
try{
fs.writeFileSync('Portfolio Export.csv', coursesCSV)
} catch(err){
    console.log(err)
}
