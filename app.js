// b1
// let a = parseInt(prompt("Nhập vào độ C"))
// b = a * 9/5 + 32
// alert(b)
// b2 Chuyển từ mét sang feet:
// let a = parseInt(prompt("nhập vào số mét"))
// ft =a * 3.2808;
// alert(ft)

// b3
// let a = parseInt(prompt("Nhập vào 1 cạnh hình vuông"))
// alert(`Diện tích hình vuông là ${a*a}`)

// b4 Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.
// let a = parseInt(prompt("Nhập vào cạnh a"))
// let b = parseInt(prompt("nhập vào cạnh b"))
// alert(`Diện tích hình chữ nhật là ${a*b}`)

// b5 Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
// let a = parseInt(prompt("Nhập vào cạnh a"))
// let b = parseInt(prompt("nhập vào cạnh b"))
// let c = (a*b)/2
// alert(`Diện tích tam giác vuông là ${c}`)

// b6
// let a = parseInt(prompt("Nhập vào a"))
// let b = parseInt(prompt("nhập vào b"))
// if(a==0){
//     if(b==0){
//         alert("phương trình vô số nghiệm")
//     }
//     else{
//         alert("Phương trình vô nghiệm")
//     }
// }
// else{
//     alert(`Phương trình có nghiệm là ${-b/a}`)
// }

// b7
// let a = parseInt(prompt("Nhập vào a"))
// let b = parseInt(prompt("nhập vào b"))
// let c = parseInt(prompt("nhập vào c"))
// delta = b*b - 4*a*c;
// if(delta < 0){
//     alert("Phương trình vô nghiệm")
// }
// else if(delta == 0){
//     alert(`Phương trình có nghiệm kép x1 = x2 = ${-b/(2*a)} `)
// }
// else{
//     alert(`Phương trình có hai nghiệm phân biệt x1 = ${(-b+Math.sqrt(delta))/(2*a)} và x2 = ${(-b-Math.sqrt(delta))/(2*a)} `)
// }

// b8
// let tuoi = parseInt(prompt("Nhập vào số tuổi"))
// if(tuoi < 0 && tuoi > 120){
//     alert("Không phải tuổi của con người")
// }
// else{
//     alert("Đúng là số tuổi của con người")
// }

// b9
// let a = parseInt(prompt("Nhập vào a"))
// let b = parseInt(prompt("nhập vào b"))
// let c = parseInt(prompt("nhập vào c"))
// if(a <= 0 || b <= 0 || c<=0){
//     alert("a,b,c không phải cạnh của hình vuông ")
// }
// else{
//     if(a+b > c){
//         alert("a,b,c là cạnh của hình vuông ")
//     }
//     else if(b + c > a){
//         alert("a,b,c là cạnh của hình vuông ")
//     }
//     else if(a + c > b){
//         alert("a,b,c là cạnh của hình vuông ")
//     }
// }

// b10
// let so = parseInt(prompt("Nhập vào số điện đã sử dụng"))
// let tien = 0;
// if(so<=100){
//     tien = so * 1000;
// }
// else if(so>100 && so <= 150){
//     tien = (so - 100)*2000 + 100*1000;
// }
// else if(so>150 && so <= 200){
//     tien = (so - 150)*2500 + 100*1000 + 50*2000
// }
// else{
//     tien = (so - 200)*3000 + 50*2500 + 100*1000 + 50*2000
// }
// alert(tien)

//b11
