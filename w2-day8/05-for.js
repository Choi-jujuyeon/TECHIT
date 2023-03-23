/*
    i++;
    i = i+1;
    i = i+1;
*/
// for (i = 0; i < 10; i++) {
//     console.log(i, "총 몇번실행 ?");
// }

for (let i = 0; i < 10; i++) {
    let star = "";
    for (let j = 0; j < 10; j++) {
        if (j < i) {
            star += "*";
        }
    }
    console.log(star);
}
