
const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then((res) => res.json())
        .then((data) => showData(data.data))
    // .catch((err)=>{
    //     console.log(err)
    // })
}
number = 0

const showData = (data) => {
    // console.log(data.tools.slice(0,5))
    const cardContainer = document.getElementById('card-container')
    //   console.log(data.tools[0].image)
    number += 1
    data.tools.slice(0, 6).forEach(data => {
        console.log(data)
        const div = document.createElement('div')
        div.innerHTML = `
    <div class="card card-compact p-4 w-full h-full bg-base-100 shadow-2xl">
    <figure><img src="${data.image}" /></figure>
    <div class="card-body">
      <h2 class="card-title">Features</h2>
        <ol>
        <li>${'1'}${'.'} ${data.features[0]}</li>
        <li>${'2'}${'.'} ${data.features[1]}</li>
        <li>${'3'}${'.'} ${data.features[2]}</li>
        </ol>
        <hr>
      <div class="grid grid-cols-2 items-center space-x-24 ">
        <div >
            <h1 class="text-xl font-bold">${data.name}</h1>
            <p><i class="fa-regular fa-calendar-days"></i> ${data.published_in}</p>
        </div>
        <div class="text-red-400">
        <button><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  </div>
    `
        cardContainer.appendChild(div)
    });
}
loadData()
