num = 0
const loadData = async() => {
  const url=(`https://openapi.programming-hero.com/api/ai/tools`)
 const res= await fetch(url)
       const data =await res.json()
        showData(data.data.tools.slice(0, 6))
    // .catch((err)=>{
    //     console.log(err)
    // })

}


const showData = (data) => {
    // console.log(data.tools.slice(0,1))
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ''
    //   console.log(data.tools[0].image)
    
    data.forEach(data => {
     
        // console.log(data)
        const div = document.createElement('div')
        div.innerHTML = `
    <div class="card card-compact p-4 w-full h-full bg-base-100 shadow-2xl">
    <figure><img src="${data.image}" /></figure>
    <div class="card-body">
      <h2 class="card-title">Features</h2>
        <ol id="feature">


        <li>${'1'}${'.'} ${data.features[0]}</li>
        <li>${'2'}${'.'} ${data.features[1]} </li>
         <li>${'3'}${'.'} ${data.features[2] ? data.features[2] : ''}</li>
        </ol>
        <hr>
      <div class="grid grid-cols-2 items-center space-x-24 ">
        <div >
            <h1 class="text-xl font-bold">${data.name}</h1>
            <p id="date"><i class="fa-regular fa-calendar-days"></i> ${data.published_in}</p>
        </div>
        <div class="text-red-400">
    
        <label  id="modal" onclick="loadModalData('${data.id}')" for="my-modal-3" ><i class="fa-solid fa-arrow-right"></i></label>
        </div>
      </div>
    </div>
  </div>
    `
        cardContainer.appendChild(div)
    })


    // const featureContainer = document.getElementById('feature')
    // console.log(data)
    // data.data.features.forEach(feature => {
    //     console.log(feature)
    //     const li = document.getElementById('li')
    //     li.innerHTML = `
    //      <h1>${num} ${data.feature}</h1>
    //      `
    // })

    // featureContainer.appendChild(li)
    //     ;
}



loadData()
// see more data function
const showMoreData = () => {
     fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then((res) => res.json())
        .then((data) => showData(data.data.tools))
 

}






// modal data 
const loadModalData = (id) => {
  toggleLoader(true)
 
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showModalData(data.data))

}

const showModalData = (data) => {
  toggleLoader(false)
  // console.log(data)   
    const description = document.getElementById('description')
    description.innerHTML = `
    ${data.description}
   
    `
    // pricing modal
    const pricing = document.getElementById('pricing')
    pricing.innerHTML = ''
    data.pricing.forEach(price => {
        // console.log(price)
        const div = document.createElement('div')
        div.innerHTML = `
   <h1 class="mt-4 bg-base-200 px-3 py-2 rounded-xl">${price.price ?price.price : 'free of cost'}<br> 
   ${price.plan ? price.plan : 'free plan'}</h1>`
        pricing.appendChild(div)

        // picture of modal
        const picture = document.getElementById('picture')
        picture.innerHTML = `
        <p><img class=" relative" src="${data.image_link[0] }"> <button class="bg-orange-700 px-6 py-2 rounded-xl absolute  top-10 right-0">${data.accuracy.score*100 }% accuracy</button></p>
        <h1 class="text-2xl font-bold">${data.input_output_examples[0].input ?data.input_output_examples[0].input:'Can you give any example?'}</h1>
        <h1 class="mt-2">${data.input_output_examples[0].output ?data.input_output_examples[0].output:'No! Not Yet! Take a break!!!'}</h1>
        `


    })


    // pricing.innerHTML=`
    // <h1>${data.pricing[0].price ?data.pricing[0].price:'free of cost'} <br> ${data.pricing[0].plan}</h1>
    // <h1>${data.pricing[1].price} <br> ${data.pricing[1].plan}</h1>
    // <h1>${data.pricing[2].price} <br> ${data.pricing[2].plan}</h1>`

    // feature of modal
    const feature = document.getElementById('modal-feature')
    console.log(data)
    // console.log(data.features['1'].feature_name)

    feature.innerHTML = `
    
  <p>1.${data.features['1'].feature_name}<br> 2.${data.features['2'].feature_name}<br> 3.${data.features['3'].feature_name} </p>
    
    
    `


    const integrations =document.getElementById('integrations')
    integrations.innerHTML=''
    data.integrations.forEach(social =>{
      // console.log(social)
      const ol=document.createElement('ol')
      num+=1
      ol.innerHTML =`
      <li>${num}. ${social ?social:'no data found'}</li>
      `
  

      integrations.appendChild(ol)
      

    })

}

const toggleLoader =(isLoading)=>{
  const loader =document.getElementById('spin-loading')
  if (isLoading) {
    loader.classList.remove('hidden')
  }
  else{
    loader.classList.add('hidden')

  }
}

// {
//     data.features.forEach(feature => {
//         console.log(feature)
//     })
// }


