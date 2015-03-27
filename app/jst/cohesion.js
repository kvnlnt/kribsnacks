var JST = (function(jst){

    jst.cohesion = ''
    + '<ul>'
    + '<% for(var card in this.cards) { %>'
    + '<li>'
        + '<% this.cards[card].question %>:<% this.cards[card].answer %>'
    + '</li>'
    + '<% } %>'
    + '</ul>';

    return jst;

}(JST || {}));
