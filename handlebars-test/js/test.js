window.onload = function () {
    
    context = {
    teams: teams,
        team_name: ".team_name",
        //team_lead
            team_members: ".team_name.",
                member_name: ".team_name.member_name",
                full_time_weight: ".team_name.full_time_weight",
                ticket_count: ".team_name.ticket_count",
                load: ".team_name.load",
                    courses: ".team_name.",
                    course_name: ".team_name.course_name",
                    course_lead: ".team_name.course_lead",
                    section: ".team_name.section",
                    ticket: ".team_name.ticket",
                    department: ".team_name.department",
                    score: ".team_name.score",
                    group_name: ".team_name.group_name"
    }
    
    Handlebars.registerHelper('list', function (items, options) {
        var out = "<ul>";
        for (var item in items) {
            out = out + "<li>" + item + "</li>";
        }
        return out + "</ul>";
    });
    
    var teamsTemplate = $('#portfolio-display').html();
    
    var teamsScript = Handlebars.compile(teamsTemplate);
    var teamsHtml = teamsScript(context)
    
    $(document.body).append(teamsHtml);
    
}

