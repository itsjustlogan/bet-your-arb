//@ts-ignore
const app = Vue.createApp({
  data() {
    return {
      title: 'Bet Your Arb!',
    }
  },
})

app.component('calculator', {
  template: `
    <form @submit.prevent class="calculator">
      <input v-model="siteOne" id="site-one" type="number" min="0" max="100" step="any" placeholder="Site One" required/>
      <input v-model="siteTwo" id="site-two" type="number" min="0" max="100" step="any" placeholder="Site Two" required/>
      <input v-model="stake" id="stake" type="number" min="0" max="100000000" step=".01" placeholder="Stake" required>
      <br>
      <button @click="calculateArb" type="submit">Calculate</button>
      <button @click="reset" type="reset">Reset</button>
    </form>
    <div v-show="showResults" class="results fade--in">
      <h2>{{ title }}</h2>
      <p>Margin: {{ margin }}%</p>
      <p v-show="!isArb">There is no arbitrage opportunity here.</p>
      <div v-show="isArb">
        <p>Profit is approximately: {{ profitRate }}%</p>
        <p>Wager Site One <span>(unbiased)</span>:{{ siteOneWager }}</p>
        <p>Wager Site Two <span>(unbiased)</span>:{{ siteTwoWager }}</p>
        <p>Profit if selection one wins: \${{ siteOneProfitVal }} </p>
        <p>Profit if selection one wins: \${{ siteTwoProfitVal }} </p>
      </div>
    </div>
  `,
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
    getMargin() {
      this.margin = parseFloat( ( ( (1/this.siteOne) + (1/this.siteTwo) ) *100).toFixed(2) ) 
    },
    calcWager(siteOdds: number) {
      return parseFloat( ((( (1/siteOdds)*100) * this.stake)/this.margin).toFixed(2) )
    },
    getWager() {
      this.siteOneWager = this.calcWager(this.siteOne)
      this.siteTwoWager = this.calcWager(this.siteTwo)
    },
    calcProfitValue(siteWager: number, otherSiteWager: number, siteOdds: number) {
      return parseFloat((((siteWager * siteOdds)-siteWager)-otherSiteWager).toFixed(2))
    },
    getProfitValue() {
      this.siteOneProfitVal = this.calcProfitValue(this.siteOneWager, this.siteTwoWager, this.siteOne)
      this.siteTwoProfitVal = this.calcProfitValue(this.siteTwoWager, this.siteOneWager, this.siteTwo)
    },
    calcProfitRate(valueOne: number, valueTwo: number) {
      return parseFloat(((((valueOne + valueTwo)/2)/this.stake)*100).toFixed(2))
    },
    getProfitRate() {
      this.profitRate = this.calcProfitRate(this.siteOneProfitVal, this.siteTwoProfitVal)
    },
    checkArb() {
      this.margin < 100 ? this.isArb = true: this.isArb = false
    },
    isFilled() {
      this.showResults = true        
      if(this.stake === null || this.siteOne === null || this.siteTwo === null) {
        this.showResults = false
      }
    },
    calculateArb() {
      this.isFilled()
      this.getMargin()
      this.checkArb()
      this.getWager()
      this.getProfitValue()
      this.getProfitRate()
    },
  },
})

app.mount('#app')