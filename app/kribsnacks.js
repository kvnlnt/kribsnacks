var kribsnacks;

$(document).ready(function(){

    kribsnacks = App.create('container');

    kribsnacks
    .addController('/', Main.dashboard)
    .addController('/programming', Main.programming)
    .init()
    
});
