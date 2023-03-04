
const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then((res) => res.json())
        .then((data) => showData(data.data.tools.slice(0, 6)))
    // .catch((err)=>{
    //     console.log(err)
    // })
   
}


const showData = (data) => {
    // console.log(data.tools.slice(0,1))
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML=''
    //   console.log(data.tools[0].image)
    
    data.forEach(data => {
        // console.log(data)
        const div = document.createElement('div')
        div.innerHTML = `
    <div class="card card-compact p-4 w-full h-full bg-base-100 shadow-2xl">
    <figure><img src="${data.image}" /></figure>
    <div class="card-body">
      <h2 class="card-title">Features</h2>
        <ol>
        <li>${'1'}${'.'} ${data.features[0]}</li>
        <li>${'2'}${'.'} ${data.features[1]} </li>
         <li>${'3'}${'.'} ${data.features[2] ?data.features[2]:'feature not found'}</li>
        </ol>
        <hr>
      <div class="grid grid-cols-2 items-center space-x-24 ">
        <div >
            <h1 class="text-xl font-bold">${data.name}</h1>
            <p><i class="fa-regular fa-calendar-days"></i> ${data.published_in}</p>
        </div>
        <div class="text-red-400">
    
        <label  id="modal" onclick="loadModalData('${data.id}')" for="my-modal-3" ><i class="fa-solid fa-arrow-right"></i></label>
        </div>
      </div>
    </div>
  </div>
    `
        cardContainer.appendChild(div)
    });
}


loadData()
// see more data function
const showMoreData=()=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then((res) => res.json())
        .then((data) => showData(data.data.tools))
}






// modal data 
const loadModalData=(id)=>{
    const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then (data => showModalData(data.data))
}

const showModalData =(data)=>{
    console.log(data)
    const description =document.getElementById('description')
    description.innerHTML=`
    ${data.description}
    <div class="grid grid-cols-3"> 
        <h1>${data.pricing.forEach(price => {
            console.log(price)
        })}</h1>
    </div>
    `
    const pricing=document.getElementById('pricing')
    pricing.innerHTML=`
    <h1>${data.pricing[0].price} <br> ${data.pricing[0].plan}</h1>
    <h1>${data.pricing[1].price} <br> ${data.pricing[1].plan}</h1>
    <h1>${data.pricing[2].price} <br> ${data.pricing[2].plan}</h1>`
    const feature=document.getElementById('feature')
    console.log(data.features)
    feature.innerHTML=`
    <h2 class="card-title">Features</h2>
    <ol>
    <li>${'1'}${'.'} ${data.features.feature_name}</li>
    <li>${'2'}${'.'} ${data.features.feature_name} </li>
     <li>${'3'}${'.'} ${data.features.feature_name}</li>
    </ol>
    <hr>
    `
    }




// { data.features.forEach(feature =>{
//     console.log(feature)
//     })}
// }

