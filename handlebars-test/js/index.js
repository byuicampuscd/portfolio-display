window.onload = function () {
    $.ajax({
        type: "GET",
        url: "../portfolio.csv",
        dataType: "csv",
        success: function(data) {var data = $.csv.toObjects(csv);}
     });

    console.log(data)
    
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
    var teamsHtml = teamsScript(port)
    
    $(document.body).append(teamsHtml);
    
}

