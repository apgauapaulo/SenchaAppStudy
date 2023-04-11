var countryData = [
    { name: 'Marocco', capital: 'Rabat', continent: 'naf' },
    { name: 'India', capital: 'new Delhi', continent: 'as' },
    { name: 'Sri Lanka', capital: 'Colombo', continent: 'as' },
    { name: 'Japan', capital: 'Tokyo', continent: 'as' },
    { name: 'South Korea', capital: 'Seoul', continent: 'as' },
    { name: 'Australia', capital: 'Canberra', continent: 'au' },
    { name: 'Malaysia', capital: 'Kuala Lumpur', continent: 'as' },
    { name: 'USA', capital: 'Washington', continent: 'na' },
    { name: 'Canada', capital: 'Ottawa', continent: 'na' }
];

var map = Ext.create('Ext.util.HashMap');
map.add('as', 'Asia');
map.add('au', 'Australia');
map.add('na', 'North America');
map.add('eu', 'Europe');
map.add('sa', 'South America');
map.add('naf', 'North Africa');
map.add('saf', 'South Africa');

var countryStore = Ext.create('Ext.data.Store', {
    fields: 
    [
        { name: "name", type: "string" }, 
        { name: "capital", type: "string" }, 
        { name: "continent", type: "string" }
    ],
    data: countryData,
    sorters: 'name',
    grouper: {
        groupFn: function(record){
            var continentCode = record.get('continent');
            return map.get(continentCode);
        }
    }
});

var countryTpl = new Ext.XTemplate('<div style="margin:1px"><b>{capital}</b> is a capital of <b>{name}</b>.</div>');

Ext.create('Ext.List', {
    fullscreen: true,
    store: countryStore,
    itemTpl: countryTpl,
    emptyText: 'Oops, no country fot the selected continent!',
    grouped: true,
    onItemDisclosure: true,
    striped: true,
    indexBar: {
        letters: ['A', 'C', 'O', 'W']
    },
    plugins: [
        {
            xclass: 'Ext.plugin.PullRefresh',
            pullText: 'Pull down for latest feeds!'
        },
        {
            xclass: 'Ext.plugin.ListPaging',
            autoPaging: true,
            loadMoreText: 'Show me more ...',
            noMoreRecordsText: 'That is all we have to show!'
        }
    ],
    listeners: {
        disclose: function (scope, record, target, index, e, eOpts){
            Ext.Msg.alert('Disclosure details', 'You want to see details of: ' + record.get('name'), Ext.emptyFn);
        }
    }
});