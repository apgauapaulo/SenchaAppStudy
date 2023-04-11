Ext.create('Ext.tab.Panel', {
    fullscreen: true,
    items: [{
            xtype: 'fieldset',
            title: 'Formulário',
            iconCls: 'compose',
            name: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Nome',
                    autoCapitalize: true,
                    clearIcon: false,
                    labelAlign: 'left',
                    maxLength: 10,
                    placeHolder: 'Preencha seu nome',
                    required: true
                }, 
                {
                    xtype: 'selectfield',
                    label: 'Gênero',
                    autoSelect: false,
                    placeHolder: 'Selecione o gênero',
                    options: [{
                            text: 'Feminino',
                            value: 'feminino'
                        }, {
                            text: 'Masculino',
                            value: 'masculino'
                        }, {
                            text: 'Outro',
                            value: 'outro'
                        }
                    ],
                    required: true
                }, 
                {
                    xtype: 'numberfield',
                    label: 'Idade',
                    minValue: 18,
                    maxValue: 150,
                    name: 'idade',
                    stepValue: 1,
                    required: true
                }, 
                {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email',
                    required: true
                }, 
                {
                    xtype: 'passwordfield',
                    name: 'pass',
                    label: 'Password',
                    hidden: false,
                    required: true
                }, 
                {
                    xtype: 'datepickerfield',
                    name: 'nascimento',
                    label: 'Data de nascimento',
                    value: new Date(),
                    dateFormat: 'd  F  Y h:i:s T'
                }, 
                {
                    xtype: 'textareafield',
                    label: 'Detalhes',
                    maxRows: 3,
                    name: 'detalhes',
                    maxLength: 1000
                }, 
                {
                    xtype: 'spinnerfield',
                    label: 'Anos de experiência',
                    minValue: 1,
                    maxValue: 50,
                    stepValue: 1,
                    cycle: false,
                    name: 'anos'
                }, 
                {
                    xtype: 'urlfield',
                    label: 'Site pessoal'
                },
                {
                    xtype: 'filefield',
                    label: 'Foto',
					name: 'foto',
					accept: 'image/jpeg, image/png',
					multiple: true
                }, 
                {
                    xtype: 'sliderfield',
                    label: 'Quão satisfeito com este form',
                    name: 'satisfeito',
                    value: [50],
                    minValue: 0,
                    maxValue: 100
                }, 
                {
                    xtype: 'togglefield',
                    name: 'promo',
                    label: 'Aceita receber nossas promoções?',
                    value: true
                }, 
                {
                    xtype: 'checkboxfield',
                    label: 'Aceita os termos do cadastro',
                    name: 'aceito',
                    checked: false
                }, 
                {
                    xtype: 'radiofield',
                    label: 'Cor favorita: Preto',
                    name: 'color',
                    value: 'preto',
                    checked: true
                }, 
                {
                    xtype: 'radiofield',
                    label: 'Cor favorita: Azul',
                    name: 'color',
                    value: 'azul',
                    checked: false
                }, 
				{
					xtype: 'container',
					layout: 'hbox',
					defaults: 
                    {
						margin: 5
					},
					items: 
                    [
						{
							xtype: 'button',
							text: 'Enviar',
							ui: 'confirm',
							handler: function () {
								alert('Enviar');
							}
						}, {
							xtype: 'button',
							text: 'Limpar',
							ui: 'action',
							handler: function () {
								alert('Limpar');
							}
						}
					]
				},
            ]
        }
    ]
});
