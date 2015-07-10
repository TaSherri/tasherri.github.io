$(document).on("ready", function(){
 var blogSource   = $("#blog-template").html();
 var blogTemplate = Handlebars.compile(blogSource);
     
    $.get("posts.json", function(data){
         var i = 0;
        while(i < data.length){
                data[i];
                $("#blog").prepend(blogTemplate(data[i]));
                 i = i +1;
        }
    });

$("form").on("submit", function(event){
    event.preventDefault();
    
    var newBlog = {
        title: $("input[name=title]").val(),
        body: $("textarea[name=body]").val(),
        
    };
    $("#blog").prepend(blogTemplate(newBlog));
    console.log(newBlog);
    $.post("posts",newBlog)
});
});