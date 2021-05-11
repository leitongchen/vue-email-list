new Vue({
    el: "#app",
    data: {
        generatedMail: null,
        emailList: [],
    },
    methods: {
        onClickMail() {
            this.emailList = [];
            
            const getMailLoops = 10; 
            let arrayOfMail = []
            
            for (let i=0; i < getMailLoops; i++) {
                
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                    //console.log(resp)
    
                    this.generatedMail = resp.data.response

                    arrayOfMail.push(resp.data.response)
                    //console.log(arrayOfMail)

                    if (arrayOfMail.length === getMailLoops) {

                        this.emailList.push(...arrayOfMail);
                        console.log(`email list ${arrayOfMail}`)
                    }
                })
            }

        }
    }
})