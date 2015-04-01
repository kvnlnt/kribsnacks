var JST = (function(jst){

    jst.domains = ''
    + '<ul class="domains">'
    + '<% for(var domain in this.domains) { %>'
    + '<li class="domain">'
        + '<a href="#/<% domain %>"><% this.domains[domain] %></a>'
    + '</li>'
    + '<% } %>'
    + '</ul>';

    return jst;

}(JST || {}));
