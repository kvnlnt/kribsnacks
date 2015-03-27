var MenuPart = Object.create(Part);

MenuPart.init = function(){
    Part.init(this);
};

var menuPart = MenuPart.create({ 
    jst:        JST.menu, 
    record:     TopicsRecord.create()
});
