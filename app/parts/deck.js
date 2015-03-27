var DeckPart = Object.create(Part);

DeckPart.registerEvents = function(){

    // elements
    var container      = this.getContainer();
    this.dom.flip      = '.flip';
    this.dom.deck      = '.deck';
   
    // element events
    container.on('click', this.dom.flip, this.flipCard);
    container.on('click', this.dom.deck, this.showHideDeck);

};

DeckPart.init = function(){
    Part.init(this);
};

DeckPart.flipCard = function(){
    $(this).siblings('.question, .answer').toggleClass('hidden');
    $(this).parent('.card')
    .addClass('animated')
    .delay(200)
    .queue(function(){
        $(this).removeClass("animated").dequeue();
    });
};

DeckPart.showHideDeck = function(){
    $(this).parent('h3').next('.cards').toggleClass('hidden');
};

