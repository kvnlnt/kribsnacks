var JST = (function(jst){

    jst.deck = ''
    + '<ul class="cards">'
    + '<% for(var card in this.cards) { %>'
    + '<li class="card flipInX">'
        + '<div class="question"><% this.cards[card].question %></div>'
        + '<div class="answer hidden"><% this.cards[card].answer %></div>'
        + '<button class="flip">flip</button>'
    + '</li>'
    + '<% } %>'
    + '</ul>';

    return jst;

}(JST || {}));
