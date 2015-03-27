var UiPage = Object.create(Page);


UiPage.registerEvents = function(){

    // elements
    var container      = this.getContainer();
    this.dom.logo      = '.logo';
    this.dom.logoMini  = '.logo-mini';
   
    // element events
    container.on('click', this.dom.logo + ', ' + this.dom.logoMini, this.toggleMenu);

};

UiPage.init = function(){
    Page.init(this);
};

UiPage.toggleMenu = function(){

    $('#menu').toggleClass('collapsed');

};

