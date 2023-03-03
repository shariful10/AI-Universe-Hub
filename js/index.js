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
                        <label for="my-modal" class="btn bg-white hover:bg-white border-none"><img src="../images/arrow-btn.png"  onclick="fetchModalDetails('01')"></label>
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
    console.log(data);
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
    <div class="p-[126px] grid md:grid-cols-2 gap-[20px]">
        <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2 bg-red hover:bg-red border-none">✕</label>
        <div>
            <div>
                <div class="card w-full bg-base-400 shadow-xl border-[1px] border-dark p-[25px]>           
                    <div class="avatar">
                        <div class="">
                            <img class="p-[25px] w-full rounded" src="${data.logo}" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card w-full bg-base-400 shadow-xl border-[1px] border-dark p-[25px]>           
                    <div class="avatar">
                        <div class="">
                            <img class="p-[25px] w-full rounded" src="${data.logo}" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

fetchUniverseHub();