/* eslint-env browser, jquery*/
window.onload = function () {
    
    var test = $.ajax({
        type: "GET",
        url: "portfolio_display_files/portfolio-info.csv",
        dataType: "text",
        success: function(data){
            console.log(data);
            var portfolio = d3.csvParse(data);
            var context = buildTree(portfolio);
            var teamsTemplate = $('#portfolio-display').html();
            
            var teamsScript = Handlebars.compile(teamsTemplate);
            var teamsHtml = teamsScript(context);
            
            $(document.body).append(teamsHtml);
            $( "#accordion" ).accordion({heightStyle: "content", collapsible: true});
        },
        error : function(xhr,text, error){
            console.log("In error call back");         
            console.log(text);         
            console.error(error);         
        }
    });
    
}