<template>
    <div>
        <section class="section part-1-section">
            <div class="container">
              <h1 class="title">Choose your outfit and calculate your water footprint.</h1>
              <p>Fast-fashion production requires <b> a huge amount of cotton and therefore water</b>,
              therefore the choice you make about buying an outfit has a <b>direct influence on the world</b>.
              </p>
              <p>
                Try our tool and see how much your outfit will cost in water!
              </p>
            </div>
          </section>
          <section class="section doll-wrapper">
            <div class="doll-body">
                <img src="../assets/doll.png" class="doll"/>
                <div class="selected-tshirts">
                    <img src="../assets/tshirt-generic.png" data-val="8662000" class="tshirt" id="selected-tshirt-0"/>
                    <img src="../assets/tshirt-generic.png" data-val="4914000" class="tshirt" id="selected-tshirt-1"/>
                    <img src="../assets/tshirt-generic.png" data-val="2018000" class="tshirt" id="selected-tshirt-2"/>
                    <img src="../assets/tshirt-generic.png" data-val="2249000" class="tshirt" id="selected-tshirt-3"/>
                </div>
                <div class="selected-jeans">
                    <img src="../assets/jeans-generic.png" data-val="8662000" class="jeans" id="selected-jeans-0"/>
                    <img src="../assets/jeans-generic.png" data-val="4914000" class="jeans" id="selected-jeans-1"/>
                    <img src="../assets/jeans-generic.png" data-val="2018000" class="jeans" id="selected-jeans-2"/>
                    <img src="../assets/jeans-generic.png" data-val="2249000" class="jeans" id="selected-jeans-3"/>
                </div>
            </div>
            <div class="clothes-wrapper">
                <div class="tshirts-wrapper">
                    <div data-id="0" class="card tshirt-card">
                      <div class="card-content">
                        <img src="../assets/tshirt-generic.png" class="tshirt tshirt-option"/>
                        <p><span class=" is-6">Source: </span><span class="p-country is-6 is-bold">India</span></p>
                        <p class="is-6">Water usage:</p>
                        <div class="drop-container">
                          <span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span>
                        </div>
                      </div>
                    </div>

                    <div data-id="1" class="card tshirt-card">
                      <div class="card-content">
                        <img src="../assets/tshirt-generic.png" class="tshirt tshirt-option"/>
                        <p><span class=" is-6">Source: </span><span class="p-country is-6 is-bold">Pakistan</span></p>
                        <p class="is-6">Water usage:</p>
                        <div class="drop-container">
                          <span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop-inactive"></span>
                        </div>
                      </div>
                    </div>
                    <div data-id="2" class="card tshirt-card">
                      <div class="card-content">
                        <img src="../assets/tshirt-generic.png" class="tshirt tshirt-option"/>
                        <p><span class=" is-6">Source: </span><span class="p-country is-6 is-bold">China</span></p>
                        <p class="is-6">Water usage:</p>
                        <div class="drop-container">
                          <span class="drop"></span><span class="drop-inactive"></span><span class="drop-inactive"></span><span class="drop-inactive"></span>
                        </div>
                      </div>
                    </div>
                    <div data-id="3" class="card tshirt-card">
                      <div class="card-content">
                        <img src="../assets/tshirt-generic.png" data-id="3" class="tshirt tshirt-option"/>
                        <p><span class=" is-6">Source: </span><span class="p-country is-6 is-bold">USA</span></p>
                        <p class="is-6">Water usage:</p>
                        <div class="drop-container">
                          <span class="drop"></span><span class="drop"></span><span class="drop-inactive"></span><span class="drop-inactive"></span>
                        </div>
                      </div>
                    </div>
                </div>

                <div class="jeans-wrapper">
                  <div data-id="0" class="card jeans-card">
                    <div class="card-content">
                      <img src="../assets/jeans-generic.png" class="jeans jeans-option"/>
                      <p><span class=" is-6">Source: </span><span class="p-country is-6 is-bold">India</span></p>
                      <p class="is-6">Water usage:</p>
                      <div class="drop-container">
                        <span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span>
                      </div>
                    </div>
                  </div>
                  <div data-id="1" class="card jeans-card">
                    <div class="card-content">
                      <img src="../assets/jeans-generic.png" class="jeans jeans-option"/>
                      <p><span class=" is-6">Source: </span><span class="p-country is-6 is-bold">Pakistan</span></p>
                      <p class="is-6">Water usage:</p>
                      <div class="drop-container">
                        <span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop-inactive"></span>
                      </div>
                    </div>
                  </div>
                  <div data-id="2" class="card jeans-card">
                    <div class="card-content">
                      <img src="../assets/jeans-generic.png" class="jeans jeans-option"/>
                      <p><span class=" is-6">Source: </span><span class="p-country is-6 is-bold">China</span></p>
                      <p class="is-6">Water usage:</p>
                      <div class="drop-container">
                        <span class="drop"></span><span class="drop-inactive"></span><span class="drop-inactive"></span><span class="drop-inactive"></span>
                      </div>
                    </div>
                  </div>
                  <div data-id="3" class="card jeans-card">
                    <div class="card-content">
                      <img src="../assets/jeans-generic.png" class="jeans jeans-option"/>
                      <p><span class=" is-6">Source: </span><span class="p-country is-6 is-bold">USA</span></p>
                      <p class="is-6">Water usage:</p>
                      <div class="drop-container">
                        <span class="drop"></span><span class="drop"></span><span class="drop-inactive"></span><span class="drop-inactive"></span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>
          <section class="cost-section">
            <div class="container">
                <h2 class="title">Your outfit costs*</h2>
                <h3 id="total-cost" data-val="0" class="subtitle is-impressive-headline">
                  0.00 litres
                </h3>
            </div>
          </section>
          <section class="cup-section">
            <div class="container">
              <h2 class="title">This is enough water for you to drink for**</h2>
              <h3 id="days" class="subtitle is-impressive-headline">
                0 days
              </h3>
              <p class="title">or</p>
              <h3 id="years" class="subtitle is-impressive-headline">
                0 years
              </h3>
              <div class="cup">
              </div>
            </div>
          </section>
          </div>
</template>

<script>

document.addEventListener('DOMContentLoaded', () => {

  const selectedTshirts = document.querySelector('.selected-tshirts')
  const selectedJeans = document.querySelector('.selected-jeans')
  const tshirtCards = document.querySelectorAll('.tshirt-card')
  const jeansCards = document.querySelectorAll('.jeans-card')

  const updateCost = () => {
    const activeJeans = selectedTshirts.querySelector('.active')
    const activeTshirt = selectedJeans.querySelector('.active')

    const jeansCost = activeJeans ? activeJeans.dataset.val * 0.00075 : 0
    const tshirtCost = activeTshirt ? activeTshirt.dataset.val * 0.00025 : 0
    const totalCost = parseFloat(jeansCost, 0) + parseFloat(tshirtCost, 0)

    document.querySelector('#total-cost').textContent = `${totalCost} litres`
    document.querySelector('#total-cost').dataset.val = totalCost

    const drinkingCostDays = drinkingWaterDays(totalCost)
    document.querySelector('#days').textContent = `${drinkingCostDays} days`

    const drinkingCostYears = drinkingWaterYears(totalCost)
    document.querySelector('#years').textContent = `${drinkingCostYears} years`

    pourWater()
  }

  const pourWater = () => {
    const cup = document.querySelector('.cup')

    if (cup.classList.contains('cup-pour')) {
      cup.classList.remove('cup-pour')
    }

    setTimeout(() => {
      cup.classList.add('cup-pour')
    }, 1000)
  }

  const selectOneItem = (arr, selectedEl) => {
    arr.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active')
      }
    })
    selectedEl.classList.add('active')
  }

  const selectTshirt = (event) => {
    const id = event.currentTarget.dataset.id
    const shirtToWear = selectedTshirts.querySelector(`#selected-tshirt-${id}`)

    selectOneItem(tshirtCards, event.currentTarget)
    selectOneItem(selectedTshirts.querySelectorAll('img'), shirtToWear)
    updateCost()
  }

  const selectJeans = (event) => {
    const id = event.currentTarget.dataset.id
    const jeansToWear = selectedJeans.querySelector(`#selected-jeans-${id}`)

    selectOneItem(jeansCards, event.currentTarget)
    selectOneItem(selectedJeans.querySelectorAll('img'), jeansToWear)
    updateCost()
  }

  const drinkingWaterDays = (litres) => {
    return parseFloat(litres / 1.2).toFixed(2)
  }

  const drinkingWaterYears = (litres) => {
    const daysVal = parseFloat((litres / 1.2));
    return (daysVal / 365).toFixed(2)
  }

  document.querySelectorAll('.tshirt-card').forEach((el) => {
    el.addEventListener('click', selectTshirt)
  })

  document.querySelectorAll('.jeans-card').forEach((el) => {
    el.addEventListener('click', selectJeans)
  })
})

export default {
  components: {
  },
  name: 'Paperdoll'
}

</script>

<style scoped>

</style>
