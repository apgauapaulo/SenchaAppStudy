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

var countryStore = Ext.create('Ext.data.Store', {
    fields: 
    [
        { name: "name", type: "string" }, 
        { name: "capital", type: "string" }, 
        { name: "continent", type: "string" }
    ],
    data: countryData 
});

var filter = function(newValue){
    countryStore.clearFilter();

    return countryStore.filterBy(
        function(record, id){
            if ( (newValue.getValue() === 'al') || (record.get('continent') === newValue.getValue() )){
                return true;
            }
            else{
                return false;
            }
        }
    );
}

var countryTpl = new Ext.XTemplate('<div style="background: #aaddff;padding:10px;margin:1px;border-style:dotted"><b>{capital}</b> is a capital of <b>{name}</b>.</div>');

Ext.create('Ext.DataView', {
    fullscreen: true,
    store: countryStore,
    itemTpl: countryTpl,
    items: [{
        xtype: 'toolbar',
        height: 40,
        docked: 'top',
        items: [
            {
                xtype: 'selectfield',
                label: 'Continent',
                labelWidth: 80,
                width: 260,
                value: 'AL',
                options: [
                    { text: 'Asia', value: 'as' },
                    { text: 'Europe', value: 'eu' },
                    { text: 'South Africa', value: 'saf' },
                    { text: 'North Africa', value: 'naf' },
                    { text: 'Australia', value: 'au' },
                    { text: 'North America', value: 'na' },
                    { text: 'South America', value: 'sa' },
                    { text: 'Antartica', value: 'an' },
                    { text: 'All', value: 'al' },
                ],
                listeners: {
                    change: function(newValue, oldValue, eOpts){
                        filter(newValue);
                    }
                }
            },
            {
                xtype: 'spacer'
            },
            {
                xtype: 'button',
                text: 'Add',
                iconCls: 'add',
                handler: function(){
                    countryStore.add({
                        name: 'China', capital: 'Beijing', continent: 'as'
                    });
                }
            }
        ]
    }]
});