
numberGrade = prompt("Digite sua nota: ")



function numberToGrade (numberGrade) {

const gradeA = numberGrade >= 90 && numberGrade <=100
const gradeB = numberGrade >= 80 && numberGrade <=89
const gradeC = numberGrade  >= 70 && numberGrade  <=79
const gradeD = numberGrade  >= 60 && numberGrade  <=69
const gradeF = numberGrade  < 60 && numberGrade >=1

if(nota >= 90) {
  grade = 'A'
  
  }
else if (nota >= 80 && nota <=89) {
    grade = 'B'
}

else if (nota >= 70 && nota <=79) {
  grade = 'C'
}

else if (nota >= 60 && nota <=69) {
  grade = 'D'
}

else if (nota < 60) {
  grade = 'F'
}

return grade
}

