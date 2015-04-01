var HomePage = Object.create(Page);


HomePage.registerEvents = function(){

    // elements
    var container = this.getContainer();
    this.dom.logo = '.logo';

};

HomePage.init = function(){

    Page.init(this);
    
};


