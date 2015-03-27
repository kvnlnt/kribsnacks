var kribsnacks;

$(document).ready(function(){

    kribsnacks = App.create('container');

    kribsnacks
    .addPath('/', Main.dashboard)
    .addPath('/programming', Main.programming)
    .init()
    
});
