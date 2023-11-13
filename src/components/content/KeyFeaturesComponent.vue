<template>
    <div class="key-features">
        <div class="title">
            Key Features
        </div>
        <div class="header-row">
            <div
                v-for="(feature, index) in features"
                :key="`header-${index}`"
                class="header"
                :class="{ 'active': activeTab === index }"
                @click="selectTab(index)"
            >
                {{ feature.title }}
            </div>
        </div>
        <div class="tabs">
            <div
                v-for="(feature, index) in features"
                :key="`tab-content-${index}`"
                class="tab-content"
                :class="{ 'active': activeTab === index }"
            >
                <ul>
                    <li
                        class="list-item"
                        v-for="(item, itemIndex) in feature.content"
                        :key="`item-${index}-${itemIndex}`"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "KeyFeaturesComponent",
    data() {
        return {
            activeTab: 0,
            features: [
                { title: 'Full collateralization', content: ['100% collateralized with assets immediately convertible into USDC', '1:1 peg to USDC for USD+ for price stability', 'Profit (positive rebase) once collateral value grows above 100%, loss (negative rebase) in case collateral value below 100% '] },
                { title: 'Rebase', content: ['Generate passive yield effortlessly by simply holding your token+ in your wallet', 'Profit payouts occur through daily rebasing, providing transparent balance tracking and profit/loss visibility.'] },
                { title: 'Passive yield', content: ['Using propietary delta-neutral and other low risk strategies to generate yield. Offer yield options tailored for varying risk appetites, 5-12% APY on token+ and up to 25%+ APY on the insurance products.', 'High quality protocols, enabling Overnight generates real yield (sustainable yield without rewards) like Aave and Uni V3, prioritized', 'Yield is not guaranteed, varies daily depending on collateral performance, can be negative.'] },
                { title: 'Usability',  content: ['The products are highly liquid with easy minting/redemption', 'Swap, a feature that streamlines the process of converting various assets into Overnight tokens with ease and efficiency', 'Zap In feature offers users a seamless method to invest in a variety of pools in the DeFi, simultaneously saving time and effort'] },
                { title: 'Insured',  content: ['Insurance serves to protect our rebase tokens (USD+, DAI+, USDT+, not the ETSes) by absorbing the first loss in case of negative rebase with the project\'s native OVN token', 'With insurance, the protocol can invest into riskier yet more profitable strategies, ultimately increasing long-term profit for users'] }
            ]
        };
    },
    methods: {
        selectTab(index) {
            this.activeTab = index;
        }
    }
}
</script>

<style scoped>
.key-features {
    max-width: 1180px;
    margin: 0 auto 180px auto;
    padding: 0 15px;
    font-family: "Red Hat Display", sans-serif;
    height: 250px;
}

.title {
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 30px;
    padding-left: 15px;
}

.header-row {
    display: flex;

    border-radius: 20px 20px 0 0;
    background-color:  var(--ov-bg);
}

.header {
    flex-grow: 1;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    background-color: #FFFFFF;
    color: #848D9C;
    border: 2px solid #D1D5DB;
    border-bottom: none;
    transition: all 0.3s ease;

    font-family: "Red Hat Display", sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 22px;
}

.header {
    border-radius: 5px;
}

.header:first-child {
    border-top-left-radius: 5px;
}
.header:last-child {
    border-top-left-radius: 5px;
}

.header.active {
    color: #0F172A;
    border-color: #000000;
    border-bottom: 2px solid #FFFFFF;
    border-radius: 20px 20px 0 0;
    z-index: 1;
    margin-top: -10px;
    padding-top: 20px;
}

.header:first-child.active {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.header:not(.active) {
    border-bottom: 2px solid #FFFFFF;
    margin-top: 0;
    padding-top: 10px;
}

.tabs {
    border: 2px solid #000000;

    background-color: #FFFFFF;
    border-radius: 0 0 20px 20px;
    position: relative;
    z-index: 0;
    height: 225px;
}

.tab-content {
    display: none;
    padding: 10px 0 0 0;
    background-color: #FFFFFF;
    font-size: 16px;
    font-weight: 400;
    font-family: "Red Hat Display", sans-serif;
}

.tab-content.active {
    display: block;
}

.list-item {
    font-size: 16px;
    line-height: 30px;
    color: #0F172A;
    width: 700px;
}
</style>