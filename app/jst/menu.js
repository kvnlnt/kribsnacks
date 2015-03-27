var JST = (function(jst){

    jst.menu = ''
    + '<h1 class="logo">KRIBSNACKS</h1>'
    + '<div class="logo-mini">KB</div>'
    + '<h2>Topics</h2>'
    + '<ul class="topics">'
    + '<% for(var topic in this.topics) { %>'
    + '<li>'
        + '<a href="#<% this.topics[topic].path %>"><% this.topics[topic].name %></a>'
    + '</li>'
    + '<% } %>'
    + '</ul>';

    return jst;

}(JST || {}));
