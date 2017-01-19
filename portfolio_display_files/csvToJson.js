/* eslint-env browser, node*/
/* eslint no-console:0 */
//read in csv and parse
//convert to structure needed
//export JSON object
function buildTree(courses){

var jsonCourses = {
    Teams: []
}

// Separate students by role
var currTeam, leads = [], currAssis, assis = []
for (var i = 0; i < courses.length; i++) {
    if (courses[i]["Position"] == "Team Lead") {
        if(courses[i]["Team"] !== currTeam){
            leads.push( {
                "Team Number": courses[i]["Team"]
                , "Team Lead": courses[i]["Student Name"]
                , "Assistant Lead": ""
                , "Work Hours": courses[i]["Work Hours MT"]
                , "TeamMembers": []
            })
        }
        currTeam = courses[i]["Team"]
    }
    
    else if (courses[i]["Position"] == "Assistant Lead") {
        if(courses[i]["Student Name"] !== currAssis){
            assis.push({
                "Team Number": courses[i]["Team"]
                , "Assistant Lead": courses[i]["Student Name"]
            })
        }
        currAssis = courses[i]["Student Name"]
    }
    
}
// Merge Leads and Assistants
for(var l=0; l<leads.length; l++){
    jsonCourses.Teams[l] = Object.assign({},leads[l], assis[l])
}

//Find all students with courses
var students = {}, currStud
for (var p=0; p<courses.length; p++){
    if(courses[p]["Course Code"] !== ''){
        if(courses[p]["Student Name"] !== currStud){
            students[courses[p]["Student Name"]] = {
                "Team Number": courses[p]["Team"]
                , "Student Name": courses[p]["Student Name"]
                , "Courses": []
            }
        }
        currStud = courses[p]["Student Name"]
    }
}

//Assign courses to Students
var codeObj = {}
for (var o= 0; o<courses.length; o++){
    if(courses[o]["Course Code"] !== ''){
        codeObj = {
            "Course Code": courses[o]["Course Code"],
            "Department": courses[o]["Department"]
        }
        students[courses[o]["Student Name"]]["Courses"].push(codeObj)
    }
}

// Assign Team Members to Teams
var teamMem = {}
for(var student in students){
    teamMem = {
        "Student Name": students[student]["Student Name"],
        "Courses": students[student]["Courses"]        
    }
    if (students[student]["Team Number"] == "Team 1"){
        jsonCourses.Teams[0].TeamMembers.push(teamMem)
    } else if(students[student]["Team Number"] == "Team 2"){
        jsonCourses.Teams[1].TeamMembers.push(teamMem)
    } else if(students[student]["Team Number"] == "Team 3"){
        jsonCourses.Teams[2].TeamMembers.push(teamMem)
    } else if(students[student]["Team Number"] == "Team 4"){
        jsonCourses.Teams[3].TeamMembers.push(teamMem)
    } else if(students[student]["Team Number"] == "Full-Time Team"){
        jsonCourses.Teams[4].TeamMembers.push(teamMem)
    }
}
    return jsonCourses
}