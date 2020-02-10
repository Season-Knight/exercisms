//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (sequence) => {
  let trans = '';
  for (let i =0; i < sequence.length; i++){
    switch(sequence[i]){
      case 'G':
        trans += 'C';
        break;
      case 'C':
        trans += 'G';
        break;
      case 'T':
        trans += 'A';
        break;
      case 'A':
        trans += 'U';
        break;
      default:
        return 'Invalid input';
          

    }
  }
  return trans;
};
