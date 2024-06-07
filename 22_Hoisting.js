function func1(){
    const user1 = 'A'

    function func2(){
        const website = 'youtube'
        console.log(user1);
    }
    console.log(website);  // RefError : website not defined

    func2()
}
func1()






