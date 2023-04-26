const viewList = ["main-view", "about-view"];

document.getElementById("button").addEventListener("click", foo)

export default function foo(){
    for(let x in viewList){
        let element = document.getElementsByClassName(x);
        element.style.visibility = "hidden";
    }
    document.getElementById("body").style.backgroundColor = "green";
}