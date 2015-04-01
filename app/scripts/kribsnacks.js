var kribsnacks;

$(document).ready(function(){

    kribsnacks = App.create('container');

    kribsnacks
    .addController('/', Main.home)
    .addController('/programming', Main.domain)
    .init()
    
});
