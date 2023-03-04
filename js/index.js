let startIndex = 0;
// ─── Fetch cards Details ─────────────────────────────────────────────────
const fetchUniverseHub = () => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
    .then(res => res.json())
    .then(data => showUniverseHub(data.data))
}

// ─── Display cards Details ─────────────────────────────────────────────────
const showUniverseHub = (data) => {
  const containerDetails = document.getElementById("card-container");
  const cards = data.tools;
  for (let i = startIndex; i < startIndex + 6; i++) {
    const card = cards[i];
    // ─── cards Details ─────────────────────────────────────────────────
    containerDetails.innerHTML += `
      <div class="card w-full bg-base-400 shadow-xl border-[1px] border-dark p-[25px]>
        <div class="avatar">
          <div class="">
            <img class="p-[25px] w-full rounded" src="${card.image}" />
          </div>
          <div class="card-body">
            <h3 class="card-title font-work font-semibold text-[25px] mb-4">Features</h3>
            <p class="font-work text-darker">1. ${card.features[0] ? card.features[0] : "Not Found"}</p>
            <p class="font-work text-darker">2. ${card.features[1] ? card.features[1] : "Not Found"}</p>
            <p class="font-work text-darker">3. ${card.features[2] ? card.features[2] : "Not Found"}</p>
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
              <label for="my-modal" class="btn bg-white hover:bg-white border-none">
                <img src="../images/arrow-btn.png" onclick="fetchModalDetails('${card.id}')"/>
              </label>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  // ─── Stop Spiner ─────────────
  toggleSpiner(false);
}

// ─── Fetch Modal Details ─────────────────────────────────────────────────
const fetchModalDetails = id => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => showModalDetails(data.data))
}

// ─── Display Modal Details ─────────────────────────────────────────────────
const showModalDetails = data => {
  console.log(data.accuracy.score);
  const modalBody = document.getElementById("modal-body");
  // ─── Modal Details ─────────────────────────────────────────────────
  modalBody.innerHTML = `
    <div class="grid md:grid-cols-2 gap-[20px]">
        <label for="my-modal" class="btn btn-sm btn-circle absolute right-0 top-0 bg-red hover:bg-red border-none">✕</label>
        <div class="card w-full bg-base-400 shadow-xl border-[1px] border-red bg-lightred">           
            <div class="">
                <h4 class="font-work font-semibold text-[20px] md:text-[25px] px-[10px] md:px-[15px] pt-[10px] md:pt-[25px]">${data.description}</h4>
                <div class="grid grid-cols-3  px-[10px] md:px-[25px] gap-4 items-center">
                    <div class="py-[22px] text-center bg-white rounded-lg my-[25px]">
                        <p class="text-green font-work font-bold text-xs md:text-base">${data.pricing[0].price ? data.pricing[0].price : 'Free of Cost/'}</p>
                        <p class="text-green font-work font-bold text-xs md:text-base">${data.pricing[0].plan}</p>
                    </div>
                    <div class="px-[26] py-[22px] text-center bg-white rounded-lg my-[25px]">
                        <p class="text-yellow font-work font-bold text-xs md:text-base">${data.pricing[1].price ? data.pricing[1].price : 'Free of Cost/'}</p>
                        <p class="text-yellow font-work font-bold text-xs md:text-base">${data.pricing[1].plan}</p>
                    </div>
                    <div class="px-[26] py-[22px] text-center bg-white rounded-lg my-[25px]">
                        <p class="text-red font-work font-bold text-xs md:text-base">${data.pricing[2].price ? data.pricing[2].price.slice(0, 11) : 'Free of Cost/'}</p>
                        <p class="text-red font-work font-bold text-xs md:text-base">${data.pricing[2].plan}</p>
                    </div>
                </div>
                <div class="grid md:grid-cols-5 px-[25px] pb-[20px] space-x-4">
                    <div class="col-span-3">
                        <h3 class="card-title font-work font-semibold text-[25px] mb-4">Features</h3>
                        <ul class="list-disc pl-[25px]">
                            <li class="font-work text-base">${data.features[1].feature_name ? data.features[1].feature_name : 'Not Found'}</li>
                            <li class="font-work text-base">${data.features[2].feature_name ? data.features[2].feature_name : 'Not Found'}</li>
                            <li class="font-work text-base">${data.features[3].feature_name ? data.features[3].feature_name : 'Not Found'}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="card-title font-work font-semibold text-[25px] mb-4 ml-[-15px]">Integrations</h3>
                        <ul class="list-disc">
                            <li class="font-work text-base whitespace-nowrap">${data.integrations[0] ? data.integrations[0] : 'Not Found'}</li>
                            <li class="font-work text-base whitespace-nowrap">${data.integrations[1] ? data.integrations[2] : 'Not Found'}</li>
                            <li class="font-work text-base whitespace-nowrap">${data.integrations[3] ? data.integrations[3] : 'Not Found'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="card w-full bg-base-400 shadow-xl border-[1px] border-dark>           
                <div class="">
                    <div class="relative">
                        <img class="w-full h-[375px] rounded p-[10px] md:p-[25px]" src="${data.image_link[0]}" />
                        <button id="accuracyBtn" class="btn btn-small bg-red hover:bg-red border-0 text-base font-normal px-[10px] py-[2px] absolute md:top-[34px] md:left-[315px] lowercase"><span>${data.accuracy.score * 100}</span>% accuracy</button>
                    </div>
                    <h4 class="font-work font-semibold text-[20px] md:text-[25px] md:text-center px-[10px] md:px-[25px]">${data.input_output_examples[0].input}</h4>
                    <h3 class="my-4 font-work font-semibold text-[14px] md:text-[16px] text-darker md:text-center px-[10px] md:px-[25px]">${data.input_output_examples[0].output ? data.input_output_examples[0].output.slice(0, 120) : 'No! Not Yet! Take a break!!!'}</h3>
                </div>
            </div>
        </div>
    </div>
  `;
  // ─── Accuracy Button Show or Hide ─────────────────────────────────────────────────
  const accuracyBtn = document.getElementById("accuracyBtn");
  if (!data.accuracy || !data.accuracy.score) {
    accuracyBtn.style.display = "none";
  } else {
    accuracyBtn.style.display = "block";
  }
}

// ─── See All Button ─────────────────────────────────────────────────
const seeAll = () => {
  // ─── Spiner Start ────────
  toggleSpiner(true);

  // ─── Update Startindex To Display The Next 6 Cards ─────────────
  startIndex += 6;

  // ─── Fetch The Next 6 Cards ────────────
  fetchUniverseHub(startIndex + 6);

  const spinerDiv = document.getElementById("seeMore");
  spinerDiv.classList.add ("hidden");
}

// ─── Spiner ────────────
const toggleSpiner = isLoading => {
  const spinerSection = document.getElementById("spiner");
  if (isLoading) {
    spinerSection.classList.remove("hidden");
  }
  else {
    spinerSection.classList.add("hidden");
  }
}

fetchUniverseHub(6);