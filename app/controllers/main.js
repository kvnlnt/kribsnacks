/**
 * The Controller. Controller stores routes and notifies
 * observers about changes.
 */

var Main = {

    dashboard: function(container){

        // page
        var record = Record.create({ title: 'Dashboard' });
        var page   = Page.create({ jst: JST.ui, record: record, container: container });
        
        // add parts
        page.addPart('menu', menuPart, '#menu');

    },

    cohesion: function(container){

        // parts
        var deck = DeckPart.create({ 
            jst: JST.cohesion, 
            record: CohesionRecord.create()
        });

        // page
        var record = Record.create({ title: 'Cohesion' });
        var page   = Page.create({ jst: JST.ui, record: record, container: container });
        
        // add parts
        page
        .addPart('menu', menuPart, '#menu')
        .addPart('deck', deck, '#deck');

    },
    
};
