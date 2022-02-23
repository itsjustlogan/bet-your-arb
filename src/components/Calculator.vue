<template>
  <main class="w-full d-flex flex-col align">
    <form @submit.prevent class="d-flex flex-col align w-60 sm:w-90">
      <input
        class="py-1 bg-black-50 text-white-100 border-0 font-lg sm:font-xl w-full"
        v-model="siteOne"
        id="site-one"
        type="number"
        min="0"
        max="100"
        step="any"
        placeholder="Site One"
        required
      />
      <input
        class="py-1 bg-black-50 text-white-100 border-0 font-lg sm:font-xl w-full"
        v-model="siteTwo"
        id="site-two"
        type="number"
        min="0"
        max="100"
        step="any"
        placeholder="Site Two"
        required
      />
      <input
        class="py-1 bg-black-50 text-white-100 border-0 font-lg sm:font-xl w-full text-center"
        v-model="stake"
        id="stake"
        type="number"
        min="0"
        max="100000000"
        step=".01"
        placeholder="Stake"
        required
      />
      <br />
      <button
        class="w-full py-2 sm:font-lg font-md br border-0 bg-black-100 text-white-50 transition-1 pointer"
        @click="calculateArb"
        type="submit"
      >
        Calculate
      </button>
      <button
        class="w-full py-2 sm:font-lg font-md br mt-1 border-0 bg-green-400 text-white-50 transition-1 pointer"
        @click="reset"
        type="reset"
      >
        Reset
      </button>
    </form>
    <div v-show="showResults" class="w-60 sm:w-90 fade-1 mb-2">
      <h2 class="text-center font-bld font-xl uppercase my-2">{{ title }}</h2>
      <p class="font-lg">
        Margin: <span class="font-bld">{{ margin }}%</span>
      </p>
      <p v-show="!isArb" class="font-lg fade-1">
        There is no arbitrage opportunity here.
      </p>
      <div v-show="isArb" class="font-lg fade-1">
        <p>
          Profit is approximately:
          <span class="font-bld">{{ profitRate }}%</span>
        </p>
        <p>
          Wager Site One <span>(unbiased)</span>:
          <span class="font-bld">${{ siteOneWager }}</span>
        </p>
        <p>
          Wager Site Two <span>(unbiased)</span>:
          <span class="font-bld">${{ siteTwoWager }}</span>
        </p>
        <p>
          Profit if selection one wins:
          <span class="font-bld">${{ siteOneProfitVal }}</span>
        </p>
        <p>
          Profit if selection one wins:
          <span class="font-bld">${{ siteTwoProfitVal }}</span>
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'Calculator',
  data() {
    return {
      siteOne: null as number,
      siteTwo: null as number,
      stake: null as number,
      margin: 0,
      title: 'Results',
      siteOneWager: null as number,
      siteTwoWager: 0,
      siteOneProfitVal: 0,
      siteTwoProfitVal: 0,
      profitRate: null as number,
      isArb: false,
      showResults: false,
    }
  },
  methods: {
    reset() {
      this.siteOne = null
      this.siteTwo = null
      this.stake = null
    },
    calculateArb() {
      this.isFilled()
      this.getMargin()
      this.checkArb()
      this.getWager()
      this.getProfitValue()
      this.getProfitRate()
    },
    isFilled() {
      this.showResults = true
      if (
        this.stake === null ||
        this.siteOne === null ||
        this.siteTwo === null
      ) {
        this.showResults = false
      }
    },
    getMargin() {
      this.margin = parseFloat(
        ((1 / this.siteOne + 1 / this.siteTwo) * 100).toFixed(2)
      )
    },
    checkArb() {
      this.margin < 100 ? (this.isArb = true) : (this.isArb = false)
    },
    getWager() {
      this.siteOneWager = this.calcWager(this.siteOne)
      this.siteTwoWager = this.calcWager(this.siteTwo)
    },
    calcWager(siteOdds: number): number {
      return parseFloat(
        (((1 / siteOdds) * 100 * this.stake) / this.margin).toFixed(2)
      )
    },
    getProfitValue() {
      this.siteOneProfitVal = this.calcProfitValue(
        this.siteOneWager,
        this.siteTwoWager,
        this.siteOne
      )
      this.siteTwoProfitVal = this.calcProfitValue(
        this.siteTwoWager,
        this.siteOneWager,
        this.siteTwo
      )
    },
    calcProfitValue(
      siteWager: number,
      otherSiteWager: number,
      siteOdds: number
    ): number {
      return parseFloat(
        (siteWager * siteOdds - siteWager - otherSiteWager).toFixed(2)
      )
    },
    getProfitRate() {
      this.profitRate = this.calcProfitRate(
        this.siteOneProfitVal,
        this.siteTwoProfitVal
      )
    },
    calcProfitRate(valueOne: number, valueTwo: number): number {
      return parseFloat(
        (((valueOne + valueTwo) / 2 / this.stake) * 100).toFixed(2)
      )
    },
  },
}
</script>
