var JST = (function(jst){

    jst.deck = ''
    + '<ul class="cards">'
    + '<% for(var card in this.cards) { %>'
    + '<li class="card flipInX">'
        + '<div class="question"><span class="number"><% card %></span>  <% this.cards[card].question %></div>'
        + '<div class="answer hidden"><span class="number"><% card %></span>  <span class="answer-question"><% this.cards[card].question %></span><br/><% this.cards[card].answer %></div>'
        + '<button class="flip">flip</button>'
    + '</li>'
    + '<% } %>'
    + '</ul>';

    return jst;

}(JST || {}));
