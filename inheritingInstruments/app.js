

class Instrument {
    constructor(loudness, family, playVerb) {
    this.loudness = loudness;
    this.family = family;
    this.playVerb = playVerb;
    }
    
    play() {
        console.log(this.family + ' ' + this.playVerb + " at " + this.loudness);
    }
  }

class Woodwind extends Instrument {
    constructor(loudness) {
        super(5, 'Woodwind', 'blown');
    }
}

class Percussion extends Instrument {
    constructor(loudness) {
        super(4, 'Percussion', 'played');
    }
}

class String extends Instrument {
    constructor(loudness) {
        super(2, 'String', 'fiddled');
    }
}

let instruments = [];
instruments[0] = new Woodwind();
instruments[1] = new Percussion();
instruments[2] = new String();
instruments.forEach((instrument)=>{
    instrument.play();
})

