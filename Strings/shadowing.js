function func() {
    let a = 'Geeks';
    
    if (true) {
        let a = 'GeeksforGeeks';  // New value assigned --- shadowing
        //var a = "Greekforgeeks";  "Identifer 'a' has been already declared" --- illegal shadowing
        console.log(a); 
    }
    
    console.log(a); 
}
func();