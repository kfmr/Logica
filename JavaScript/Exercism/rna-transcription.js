//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/*
Primeiro declara a variavel rna transcript como uma string vazia que vai receber os valores do loop
o contador começa com 0 e vai até o tamanho da string inserida em nucleotide. nucleotide.length
O if verifica qual 
*/ 
export const toRna = (nucleotide) => {
  let rnaTranscripted = ''
  
  for(let i = 0; i < nucleotide.length; i++) {
    if(nucleotide[i] == 'G')
    {
     rnaTranscripted += 'C'
    } 
    else if (nucleotide[i] == 'C') 
    {
     rnaTranscripted += 'G'
    } 
    else if(nucleotide[i] == 'T')
    {
     rnaTranscripted += 'A'
    } 
    else if (nucleotide[i] == 'A')
    {
     rnaTranscripted += 'U'
    } 
  } 
 return rnaTranscripted

};
