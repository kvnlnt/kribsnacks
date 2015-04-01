var JST = (function(jst){

    jst.deck = ''
    + '<% for(var deck in this.decks) { %>'
    + '<h3><button class="deck"><% this.decks[deck].name %></button></h3>'
    + '<ul class="cards hidden">'
    + '<% for(var card in this.decks[deck].cards) { %>'
    + '<li class="card flipInX">'
        + '<div class="question"><button class="flip fa fa-undo"></button>  <% this.decks[deck].cards[card].question %></div>'
        + '<div class="answer hidden"><button class="flip fa fa-undo"></button> <span class="answer-question"><% this.decks[deck].cards[card].question %></span><br/><% this.decks[deck].cards[card].answer %></div>'
    + '</li>'
    + '<% } %>'
    + '</ul>'
    + '<% } %>';

    return jst;

}(JST || {}));
