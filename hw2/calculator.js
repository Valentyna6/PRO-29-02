
// -------------calculator------------ //


// let userfirstnumber = Number(prompt('Введіть число'));
// let useroperation = (prompt('Ведіть дію " + - * / "'));
// let usersecondnumber = Number(prompt('Введіть число'));


// function plus (userfirstnumber,usersecondnumber){
// alert(`${userfirstnumber} + ${usersecondnumber} = ${userfirstnumber+usersecondnumber}`);
// }

// function minus (userfirstnumber,usersecondnumber){
//     alert(`${userfirstnumber} - ${usersecondnumber} = ${userfirstnumber-usersecondnumber}`);
// }

// function divide (userfirstnumber,usersecondnumber){
//        if(usersecondnumber>0){
//             alert(`${userfirstnumber} / ${usersecondnumber} = ${userfirstnumber/usersecondnumber}`);
//         }
//     else{
//         alert('Ділити на 0 не можна');
//     }
//      }


// function multiply (userfirstnumber,usersecondnumber){
//     alert(`${userfirstnumber} * ${usersecondnumber} = ${userfirstnumber*usersecondnumber}`);
// }

 

// switch (useroperation) {
//     case '+':
//         plus(userfirstnumber,usersecondnumber);
//         break;
    
//     case '-':
//       minus(userfirstnumber,usersecondnumber);
//        break;

//        case '/':
//         divide(userfirstnumber,usersecondnumber);
//         break;

//         case '*':
//             multiply(userfirstnumber,usersecondnumber);
//             break;
//     default:
//         alert('no information');
//         break;
// }



// ----------------------------- Ex No 2 ----------------------------- //
// (- за допомогою циклу вивести в консоль всі парні значення числа 20)


// for(let i=0;i<20;i++){
//     if (i%2===0)
//  console.log(`${i}`);
//  }

// or

// for(let i=0;i<20;i++){
//    if (i%2!=0){
//    continue;
// }
// console.log(`${i}`);
// }



// ----------------------------- Ex No 3 ----------------------------- //
// (-  зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...))

// for(let i=10;i>=0;i--){
// console.log(`${i}`);
// }

// ----------------------------- Ex No 4 ----------------------------- //
// (- реалізуйте таблицю множення за допомогою циклу
//  для конкретного числа (наприклад, для числа 5) за допомогою циклу for:)

// let number =5;
// for(let i=1;i<=10;i++){
//     console.log(`${number} * ${i} = ${number*i}`);
// }



// ----------------------------- Ex No 5 ----------------------------- //
// (- реалізуйте функцію яка отримує число і виводить в консоль лог таблицю множення цього чила
// перевірте роботу функцію викликавши функцію з різними значеннями.)

// let number =Number(prompt('Введіть будь яке число'));
// for(let i=1;i<=10;i++){
//     console.log(`${number} * ${i} = ${number*i}`);
// }


// ----------------------------- Ex No 4 ----------------------------- //
// (- створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі)

let planet= prompt('назвіть планету')
switch (planet) {
    case 'Меркурій':
        console.log('ця планета 1 в сонячній системі');
        break;
        case 'Венера':
        console.log('ця планета 2 в сонячній системі');
        break;
        case 'Земля':
        console.log('ця планета 3 в сонячній системі');
        break;
        case 'Марс':
        console.log('ця планета 4 в сонячній системі');
        break;
        case 'Юпітер':
        console.log('ця планета 5 в сонячній системі');
        break;
        case 'Сатурн':
        console.log('ця планета 6 в сонячній системі');
        break;
        case 'Уран':
        console.log('ця планета 7 в сонячній системі');
        break;
        case 'Нептун':
        console.log('ця планета 8 в сонячній системі');
        break;

    default:
        console.log('такої планети нема в сонячній системі');
        break;
}


