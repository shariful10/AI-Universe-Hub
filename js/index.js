const fetchUniverseHub = () => {
    const url = "https://openapi.programming-hero.com/api/ai/tools";
    fetch(url)
    .then(res => res.json())
    .then(data => showUniverseHub(data.data))
}

const showUniverseHub = (data) => {
    // console.log(data);
    const containerDetails = document.getElementById("card-container");
    data.tools.slice(0, 6).forEach(card => {
        containerDetails.innerHTML += `
        <div class="card w-full bg-base-400 shadow-xl border-[1px] border-dark p-[25px]>           
            <div class="avatar">
                <div class="">
                    <img class="p-[25px] w-full rounded" src="${card.image}" />
                </div>
                <div class="card-body">
                    <h3 class="card-title font-work font-semibold text-[25px] mb-4">Features</h3>
                    <p class="font-work text-darker">1. ${card.features[0] ? card.features[0] : 'Not Found'}</p>
                    <p class="font-work text-darker">2. ${card.features[1] ? card.features[1] : 'Not Found'}</p>
                    <p class="font-work text-darker">3. ${card.features[2] ? card.features[2] : 'Not Found'}</p>
                </div>
                <div class="px-[25px]">
                    <hr>
                </div>
                <div class="p-[25px] flex justify-between items-center">
                    <div>
                        <h3 class="card-title font-work font-semibold text-[25px] mb-4">${card.name}</h3>
                        <div class="flex  space-x-[8px]">
                            <img class="" src="../images/published_in.png" />
                            <p class="font-work text-darker">${card.published_in}</p>
                        </div>
                    </div>
                    <div>
                        <label for="my-modal" class="btn bg-white hover:bg-white border-none"><img src="../images/arrow-btn.png"  onclick="fetchModalDetails('${card.id}')"></label>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
}

const fetchModalDetails = id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showModalDetails(data.data))
}

const showModalDetails = data => {
    console.log(data.description);
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
    <div class="p-2 md:p-[70px] grid md:grid-cols-2 gap-[20px]">
        <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2 bg-red hover:bg-red border-none">✕</label>
        <div class="p-[20px]">
            <div class="card w-full bg-base-400 shadow-xl border-[1px] border-dark bg-lightred>           
                <div class="">
                    <h4 class="font-work font-semibold text-[20px] md:text-[25px] px-[10px] md:px-[25px] pt-[10px] md:pt-[25px]">${data.description}</h4>
                    <div class="grid grid-cols-3  px-[10px] md:px-[25px]">
                        <div class="px-[26] py-[22px] text-center">
                            <p>${data.pricing[0].plan}</p>
                            <p>${data.pricing[0].price}</p>
                        </div>
                        <div class="px-[26] py-[22px]"></div>
                        <div class="px-[26] py-[22px]"></div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card w-full bg-base-400 shadow-xl border-[1px] border-dark>           
                    <div class="">
                        <img class="w-full rounded p-[10px] md:p-[25px]" src="${data.image_link[0]}" />
                        <h4 class="font-work font-semibold text-[20px] md:text-[25px] md:text-center px-[10px] md:px-[25px]">${data.input_output_examples[0].input}</h4>
                        <h3 class="mb-4 font-work font-semibold text-[14px] md:text-[16px] text-darker md:text-center px-[10px] md:px-[25px]">${data.input_output_examples[0].output ? data.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

fetchUniverseHub();