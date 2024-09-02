document.title = 'My Magical Home Page';

const louisa = {
  naam: 'Louisa',
  age: 25,
  pets: ['Toekan', 'Komodovaraan', 'Capybara'],
  getFullYear: function() {
    const date = new Date();
    const currentYear = date.getFullYear();
    console.log('Ik ben geboren in ' + (currentYear - this.age));
  },
  talk: function () {
    console.log('Hallo ik ben ' + this.naam);
    //console.log('Hallo ik ben ' + this.naam + ' ik ben geboren in ' + getFullYear);
  },

  listPets: function() {
    console.log('Ik heb de volgende huisdieren: ');
    for(let i = 0; i < this.pets.length; i++) {
      console.log('Een: ' + this.pets[i])
    }
  }
};



louisa.talk();
louisa.getFullYear();
louisa.listPets();