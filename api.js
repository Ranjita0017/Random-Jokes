let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function getJoke(){
    try{
        let response = await axios.get(url);
        if(response.data.type == "twopart"){
            let arr= [];
            arr.push(response.data.setup);
            arr.push(response.data.delivery);
            return arr;
        }else{
            let arr= [];
            arr.push(response.data.joke);
            return arr;
        }
    }
    catch(e){
        console.log("error:", e);
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    let result = getJoke()
    .then((data)=>{
        if(data.length == 2){
            let para1 = document.querySelector(".para1");
            let para2 = document.querySelector(".para2");
            para1.innerText = data[0];
            para2.innerText = data[1];
        }else{
            let para1 = document.querySelector(".para1");
            let para2 = document.querySelector(".para2");
            para1.innerText = data[0];
            para2.innerText="";
        }
    })
    .catch((e)=>{
        console.log("error: ",e);
    })
})