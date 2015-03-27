var DeckPart = Object.create(Part);

DeckPart.registerEvents = function(){

    // elements
    var container      = this.getContainer();
    this.dom.flip      = '.flip';
    this.dom.$flip     = container.find(this.dom.flip);
   
    // element events
    container.on('click', this.dom.flip, this.flipCard);

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
