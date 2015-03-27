var DeckPart = Object.create(Part);

DeckPart.registerEvents = function(){

    // elements
    var container  = this.getContainer();
    this.dom.btn   = 'button';
    this.dom.$btn  = container.find(this.dom.btn);
   
    // element events
    container.on('click', this.dom.btn, this.flipCard);

};

DeckPart.init = function(){
    Part.init(this);
};

DeckPart.flipCard = function(){
    $(this).siblings('.question, .answer').toggleClass('hidden');
};
