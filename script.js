/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/


for (let i=1; i <= 100; i++) {
    // controllo se (i) sia divisibile sia per tre che per 5
 if (!(i % 3) && !(i % 5)) {
    // se la condizione viene verificata viene stampato (FizzBuzz)
    console.log("FizzBuzz");
 }  
    // controllo se (i) sia divisibile per 5
 else  if (!(i % 5)) {
    // se la condizione viene verificata viene stampato (Buzz)
    console.log("Buzz");
}
 else {
    console.log(i);
}
}
