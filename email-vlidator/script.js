console.log("this is my script")

let result = {
    "tag": "",
    "free": true, 
    "role": false,
    "user": "jcohan142",
    "email": "jcohan142@gmail.com",
    "score": 0.48,
    "state": "unknown",
    "domain": "gmail.com",
    "reason": "no_connect",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async(e) => {
    e.preventDefault()
    console.log("clicked")
    
    let key ="ema_live_DhlFyYmHvuebFyt774NxItuhg7R9UuxokmZbIPu7"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json() 

    let str = ``
    for (key of Object.keys(result)) {
        str = str + `<div> ${key}: ${result[key]} </div>`
    }
    console.log(str)

    resultCont.innerHTML = str

})



