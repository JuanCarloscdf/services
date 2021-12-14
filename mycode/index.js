function hello (){

    setTimeout(() => {
        console.log("heloolololo");
        hello();
    },1000)
}

hello();