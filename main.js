document.title = 'My Magical Home Page';

const louisa = {
  naam: 'Louisa',
  age: 25,
  getFullYear: function() {
    const date = new Date();
    const currentYear = date.getFullYear();
    console.log('Ik ben geboren in ' + (currentYear - this.age));
  },
  talk: function () {
    console.log('Hallo ik ben ' + this.naam);
    //console.log('Hallo ik ben ' + this.naam + ' ik ben geboren in ' + getFullYear);
  },
};



louisa.talk();
louisa.getFullYear();