// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let randNum = Math.floor(Math.random() * 15);
      let randBase = this.dna[randNum];
      let newBase = returnRandBase();
      while (newBase === randBase) {
        newBase = returnRandBase();
      }
      this.dna[randNum] = newBase;
      return this.dna;
    }, 
    compareDNA(pAequorObj) {
      const dnaToCompare = pAequorObj.dna;
      let numCommonBases = 0;
      for (let i = 0; i < dnaToCompare.length; i++) {
        if (dnaToCompare[i] === this.dna[i]) {
          numCommonBases++;
        }
      }
      const percentCommonBases = ((numCommonBases / this.dna.length) * 100).toFixed(2);
      console.log(`Specimen ${this.specimenNum} and ${pAequorObj.specimenNum} have ${percentCommonBases}% DNA in common.`);
    }
  }
}

// const organism1 = pAequorFactory(1, mockUpStrand());
// const organism2 = pAequorFactory(2, mockUpStrand());
// console.log(organism1);
// console.log(organism2);

// organism1.compareDNA(organism2);

// organism1.mutate();
// organism2.mutate();

// organism1.compareDNA(organism2);
// organism2.compareDNA(organism1);





