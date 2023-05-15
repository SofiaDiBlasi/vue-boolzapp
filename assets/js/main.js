const { 
    createApp 
} = Vue

  createApp({
    data() {
      return {

        counter:0,
        nuovoMessaggio:"",
        input:"",
        
        contacts: [
            {
                name: 'Sauron',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Il piano procede bene...',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: '...dopo devo incontrarmi con Gandalf',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Va bene, mi raccomando...fingiti interessato !',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Gandalf',
                avatar: './assets/img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Quando Arrivi?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Il cavallo sta finendo di bere al fiume, 5 minuti e dovrei esserci.',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Ok, ho preparato una sorpresa per te !',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Capo Uruk-hai',
                avatar: './assets/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'Abbiamo Merry e Pipino !',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Ottimo lavoro',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ora possiamo andare a fare merenda?',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Goblin',
                avatar: './assets/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Te lo avrà già chiesto il capo, ma possiamo andare a fare merenda?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Non ho il tuo numero salvato, chi sei?',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Barbalbero',
                avatar: './assets/img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Potrei aver accidentalmente devastato parte della foresta...',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non mi resta che vedermela con Isengard stanotte, con sassi e pietre.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Palantir',
                avatar: './assets/img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Palantir, che tempo fa a Barad-dûr?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'A Barad-dûr, Terra di Mezzo, il cielo sarà nuvoloso con umidità del 30%.',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Palantir, imposta una sveglia "chiamata giornaliera con Sauron" alle 17 del pomeriggio',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Radagast',
                avatar: './assets/img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ho visto delle aquile vicino la mia torre...ne sai qualcosa?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No...*bombastic side eye*',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Mamma',
                avatar: './assets/img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, hai mangiato oggi?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, sto ancora lavorando, lo faccio più tardi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    }
},
    methods: {
        changeChat(position){
            this.counter = position;
        },

        createNewMessage(){
            let nuovoMessaggio = {
                date: Date(),
                message: this.nuovoMessaggio,
                status: 'sent' 
            }

            this.contacts[this.counter].messages.push(nuovoMessaggio);

            this.nuovoMessaggio = "";

            setTimeout(() => {
                let nuovoMessaggioRisposta = {
                    date: Date(),
                    message: 'ok',
                    status: 'received' 
                }
                
                this.contacts[this.counter].messages.push(nuovoMessaggioRisposta);
              }, 1000);
        },
        filteredContact(){
            return this.contacts.filter(contact => 
                contact.name.toLowerCase().includes(this.input.toLowerCase())
            );
        }
    }
}).mount('#app')