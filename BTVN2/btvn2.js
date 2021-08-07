 
 //1.ab in các số từ 0 tới n
 console.log("1.ab");
 let n = Number(prompt("Nhập số n:"));
 for (let index = 0; index < n; index++) {
     console.log(index);
 }
 console.log("1.c");
 //1.c in các sô từ 3 tới n
  n = Number(prompt("Nhập số n:"));
 for (let index = 3; index < n; index++) {
    console.log(index);
 }

 //1.d in ra các số trong đoạn first-end nhập từ bàn phím
 console.log("1.d");
 let first = Number(prompt("Nhập số first:"));
 let end = Number(prompt("Nhập số end:"));
 for (let index = first; index < end; index++) {
    console.log(index);
}


//1.e : in ra các số trong đoạn first-end nhập từ bàn phím với step là 3
console.log("1.e"); 
first = Number(prompt("Nhập số first:"));
  end = Number(prompt("Nhập số end:"));
 while(first <= end){
    console.log(first);
     first+=3;
 }
 //1.f : nhập 3 số: đầu, cuối, bước nhảy, in các sô trong đoạn đã nhập với sơ bước nhảy trên
 console.log("1.f");
 first = Number(prompt("Nhập số first:"));
  end = Number(prompt("Nhập số end:"));
  let step = Number(prompt("Nhập số step:"));
 while(first <= end){
    console.log(first);
     first+=step;
 }

 // bai 2: nhập vào 1 số n và tính giai thừa của số đó
 console.log("bai 2");
 let giaiThua = 1;
 n = Number(prompt("Nhập số n:"));
 while( n != 0){
     giaiThua = giaiThua*n;
     n--;
 }
console.log(`ket qua tinh giai thua la: ${giaiThua}`);
// bai 3:nhập tuổi và so sanh kiểm tra tuổi đó với số 14
console.log("bai 3");
let old = Number(prompt("Nhập số tuổi của bạn:"));
if(old < 14) console.log('sorry, you dont enough to go here');
else console.log('well, enjoyyy!!!');


//bai4 :nhạp vào 1 số n trong đoạn 0-9, so sánh số đó với 1 nửa của 9
console.log("bai 4");
let a = 9/2;
n = Number(prompt("Nhập số n:"));
if( n>=0 && n <= 9){
    if(n<a) alert('lower haft of 9');
    else if (n == a) alert('equal half of 9');
    else alert('higher haft of 9');
    break;
}
else alert('mời bạn nhập lại 1 số từ 0-9 thôi');

//bai 5: nhập vào 2 số n và a, so sánh giá tị của n với 1 nửa của a
console.log("bai 5");
a = Number(prompt("Nhập số a:"));
n = Number(prompt("Nhập số n:"));
let haftA = a/2;
if(n<a) console.log(` ${n} is in lower haft of ${a}`);
else console.log(` ${n} is in higher haft of ${a}`);

//bai 6: kiểm tra số chẵn lẻ
console.log("bai 6");
n  = Number(prompt("Nhập số n:"));
if(n%2 == 0)  console.log(` ${n} is an even number`);
else console.log(` ${n} is an odd number`);

//bai7a: đếm số lẻ, chẵn từ 1-6
console.log("bai 7.a");
let le = 0;
let chan = 0;
let i = 1;
while(i<=6){
    if(i%2 == 0) chan++;
    else le++;
    i++;
}
console.log(` ${le} L`);
console.log(` ${chan} H`);

//bai7b: nhập số n, tính số chẵn lẻ trong đoạn 1-n;
n = Number(prompt('Nhâp số n:'));
le = 0;
chan = 0;
i = 1;
while(i<=n){
    if(i%2 == 0) chan++;
    else le++;
    i++;
}
console.log(` ${le} L`);
console.log(` ${chan} H`);

//bai 7C:
let x = 8;
for(let j = 0;j < 8;j++){
    if(j %2 == 0) console.log(0);
    else console.log(1);
}
//bai 7d
n = Number(prompt('Nhâp số n:'));
for( j = 0;j < n;j++){
    if(j %2 == 0) console.log(0);
    else console.log(1);
}
//bai 8; tinh BMI
let kg = Number(prompt('Nhập cân nặng :'));
let h = Number(prompt('Nhập chiều cao:'));
let BMI = kg/(h*h);
if (BMI < 16) {
    alert('Thieu can nghiem trong');
} 
else if (BMI > 16 && BMI <= 18.5) {
    alert('Thieu can');
}
else if (BMI > 18.5 && BMI < 25) {
    alert('Binh thuong');
}
 else if (BMI > 25 && BMI <= 30) {
    alert('thua can');
}
else {
    alert('beo phi');
}
