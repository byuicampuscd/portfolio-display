window.onload = function () {
    var template = $('#handlebars-demo').html();
    var context = {
        "name": {
            firstName: "Ben",
            lastName: "Harker"}
        , "occupation": "Front-End Web Developer"
        , "hobbies": [
            {activity: "Photography", location: 'Oregon'}, 
            {activity: 'Hiking', location: 'The Tetons'}, 
            {activity: 'Biking', location: 'Kansas'}
        ]
    };
    Handlebars.registerHelper('list', function (items, options) {
        var out = "<ul>";
        for (var i = 0, l = items.length; i < l; i++) {
            out += "<li>" + options.fn(items[i]) + "</li>";
        }
        return out + "</ul>";
    });
    Handlebars.registerHelper('fullname', function (name){
    return name.firstName + ' ' + name.lastName});
    
    var templateScript = Handlebars.compile(template);
    var html = templateScript(context);
    
    $(document.body).append(html);
    
}