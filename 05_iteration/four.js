const myObject ={
    js:"java script",
    rb:"rubey",
    cpp:"c++",
    shift:"shift by app"
}
for (const key in myObject) {
    console.log(myObject[key]);
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
}