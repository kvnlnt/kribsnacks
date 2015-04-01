var JST = (function(jst){

    jst.topics = ''
    + '<h1 class="logo">KRIBSNACKS <i class="fa fa-diamond"></i></h1>'
    + '<ul class="topics">'
    + '<% for(var topic in this.topics) { %>'
    + '<li class="topic">'
        + '<a href="#<% this.topics[topic].path %>"><% this.topics[topic].name %></a>'
    + '</li>'
    + '<% } %>'
    + '</ul>';

    return jst;

}(JST || {}));
