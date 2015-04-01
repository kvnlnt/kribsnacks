var JST = (function(jst){

    jst.menu = ''
    + '<h1 class="logo">KRIBSNACKS <i class="fa fa-diamond"></i></h1>'
    + '<div class="logo-mini"><i class="fa fa-diamond"></i></div>'
    + '<ul class="topics">'
    + '<li><a href="#">Topics</a></li>'
    + '<% for(var topic in this.topics) { %>'
    + '<li class="topic">'
        + '<a href="#<% this.topics[topic].path %>"><% this.topics[topic].name %></a>'
    + '</li>'
    + '<% } %>'
    + '</ul>';

    return jst;

}(JST || {}));
