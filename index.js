
const loadData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then((res) => res.json())
    .then((data) => showData(data.data))
    .catch((err)=>{
        console.log(err)
    })
}
const showData=(data)=>{
    // console.log(data.tools.slice(0,5))
    const cardContainer =document.getElementById('card-container')
    for (const singleData of data.tools.slice(0,1)) {
        console.log(singleData)
        const div= document.createElement('div')
        div.innerHTML=`
        <h1>${data.tools[0].features[0]}</h1>
        `
        console.log(data.tools[0].features[0])
    }
    cardContainer.appendChild(div)
}
loadData()
