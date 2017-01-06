window.onload = function () {
    var context = {
        Teams: [
            {"Team Number": "Team 1",
            "Team Lead": "Zach Williams",
            "Assistant Lead": "Assistant Lead",
            "TeamMem": [
                {"Student Name": "Mattew Jones",
                "Cluster Name": "Accounting (A)",
                "Courses": [
                    {"Course Code": "ACCTG 180",
                    "Department": "Accounting"},
                    {"Course Code": "ACCTG 180",
                    "Department": "Accounting"}
                ]},
                {"Student Name": "Mattew Jones",
                "Cluster Name": "Accounting (A)",
                "Courses": [
                    {"Course Code": "ACCTG 180",
                    "Department": "Accounting"},
                    {"Course Code": "ACCTG 180",
                    "Department": "Accounting"}
                ]}
            ]},
            {"Team Number": "Team 2",
            "Team Lead": "Other Lead",
            "Assistant Lead": "Other Assistant",
            "TeamMem": [
                {"Student Name": "Mattew Jones",
                "Cluster Name": "Accounting (A)",
                "Courses": [
                    {"Course Code": "ACCTG 180",
                    "Department": "Accounting"},
                    {"Course Code": "ACCTG 180",
                    "Department": "Accounting"}
                ]},
                {"Student Name": "Mattew Jones",
                "Cluster Name": "Accounting (A)",
                "Courses": [
                    {"Course Code": "ACCTG 180",
                    "Department": "Accounting"},
                    {"Course Code": "ACCTG 180",
                    "Department": "Accounting"}
                ]}
            ]}
        ]
    }
    
    Handlebars.registerHelper('list', function (items, options) {
        var out = "<ul>";
        var inner = options.fn(this);
        for (var item in items) {
            out = out + "<li>" + item[0] + "</li>";
        }
        return out + "</ul>";
    });
    
    var teamsTemplate = $('#portfolio-display').html();
    
    var teamsScript = Handlebars.compile(teamsTemplate);
    var teamsHtml = teamsScript(context);
    
    $(document.body).append(teamsHtml);
    
    $( function() {
    $( "#accordion" ).accordion();
  } );
    
}