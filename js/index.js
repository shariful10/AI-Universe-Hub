const fetchUniverseHub = () => {
    const url = "https://openapi.programming-hero.com/api/ai/tools";
    fetch(url)
    .then(res => res.json())
    .then(data => showUniverseHub(data.data))
}

const showUniverseHub = (data) => {
    console.log(data);
    const containerDetails = document.getElementById("card-container");
    data.tools.forEach(card => {
        containerDetails.innerHTML += `
        <div class="card w-full bg-base-400 shadow-xl border-[1px] border-dark p-[25px]>           
            <div class="avatar">
                <div class="">
                    <img class="p-[25px] w-full rounded" src="${card.image}" />
                </div>
                <div class="card-body">
                    <h3 class="card-title font-work font-semibold text-[25px] mb-4">Features</h3>
                    <p class="font-work">1. ${card.features[0]}</p>
                    <p class="font-work">2. ${card.features[1]}</p>
                    <p class="font-work">3. ${card.features[2]}</p>
                </div>
                <div class="px-[25px]">
                    <hr>
                </div>
                <div class="p-[25px]">
                    <div>
                        <h3 class="card-title font-work font-semibold text-[25px] mb-4">${card.name}</h3>
                        <div class="flex  space-x-[8px]">
                            <img class="" src="../images/published_in.png" />
                            <p> ${card.published_in}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
}

fetchUniverseHub();