<template>
    <div class="key-features">
        <div class="title">
            Key Features
        </div>
        <div class="header-row">
            <div v-for="(feature, index) in features" :key="`header-${index}`" class="header" :class="{ active: activeTab === index }" @click="selectTab(index)">
                {{ feature.title }}
            </div>
        </div>
        <div class="tabs">
            <div v-for="(feature, index) in features" :key="`tab-${index}`" class="tab" :class="{ active: activeTab === index }">
                <ul class="list-container" v-if="activeTab === index">
                    <li class="list-item" v-for="(item, itemIndex) in feature.content" :key="`item-${index}-${itemIndex}`">{{ item }}</li>
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
            activeTab: 0, // Default active tab index
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
    margin: auto;
    font-family: 'Arial', sans-serif;
    margin-bottom: 80px;
}

.title {
    margin-bottom: 30px;
    text-transform: uppercase;
}

.header-row {
    display: flex;
    justify-content: center;
    height: 64.88px;
}

.header {
    width: 236px;
    height: 64.88px;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-bottom: none;
    transition: transform 0.3s ease;

    font-family: "Red Hat Display", sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    text-transform: uppercase;

    position: relative;
    border-radius: 20px 20px 0 0;
}

.header.active {
    transform: translateY(-5px);
    border-radius: 30px 30px 0 0;
}

.tabs {
    display: flex;
    justify-content: center;
    border-radius: 0 0 30px 30px;
    margin-top: -10px;
}

.tab {
    width: 1180px;
    height: 200.12px;
    background-color: white;
    display: none;
    border: 2px solid black;
    border-radius: 0 0 30px 30px;
    border-top: none;
}

.tab.active {
    display: block;
}

.list-item {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    width: 762px;
}

.list-container {
    padding-top: 20px;
}
</style>