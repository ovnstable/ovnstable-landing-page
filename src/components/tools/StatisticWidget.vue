<template>
    <div>
        <div>
            <div class="card card-round statistic-widget">
                <div v-if="loading || !data">
                   <div class="center-flex padding-top-four">
                       <FontAwesomeIcon
                           :icon="['fas', 'spinner']"
                           size="lg"
                           spin
                       ></FontAwesomeIcon>
                   </div>
                </div>

                <div v-else>
                   <div>
                       <div class="card-tab">
                         <div class="row">
                             <div class="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                 <div class="statistic-title">
                                     {{ formattedTotalValueLocked }}
                                 </div>
                             </div>

                             <div class="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                 <div>
                                     TOTAL VALUE LOCKED
                                 </div>
                             </div>
                         </div>
                       </div>
                   </div>

                    <div>
                        <div class="row">
                            <div class="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div class="center-margin">
                                  <div class="statistic-title">
                                      {{ formatNumberToFixed(data.usdPlusProduct.value) }}
                                  </div>
                                  <div class="statistic-subtitle">
                                      USD+ APY
                                  </div>
                              </div>
                            </div>
                            <div class="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                               <div class="center-margin">
                                   <div class="statistic-title">
                                       {{ formatNumberToFixed(data.ethPlusProduct.value) }}
                                   </div>
                                   <div class="statistic-subtitle">
                                       ETH+ APY
                                   </div>
                               </div>
                            </div>
                            <div class="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <div class="center-margin">
                                    <div class="statistic-subtitle">
                                        LAST PAYOUT
                                    </div>
                                    <div class="statistic-title">
                                        {{ timeFromPayout }}
                                    </div>
                                    <div class="statistic-subtitle">
                                        hours ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {statisticApiService} from "@/services/statistic-api-service";
import utils from "@/utils/utils";
import moment from "moment";

export default {
    name: "statistic-widget",
    data() {
        return {
            data: null,
            loading: true,
            ...utils
        }
    },
    mounted() {
        this.getData();
    },
    computed: {
        formattedTotalValueLocked() {
            if (!this.data) {
                return null;
            }

            return this.data.tvl.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
        },
        timeFromPayout() {
            if (!this.data) {
                return null;
            }

            let now = moment();
            let hours = now.diff(moment(this.data.lastPayoutDate), 'hours');
            let minutes = now.diff(moment(this.data.lastPayoutDate), 'minutes') - hours * 60;
            hours = hours < 10 ? `0${hours}` : hours;
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            return `${hours}:${minutes}`;
        }
    },
    methods: {
        getData() {
            this.loading = true;
            statisticApiService.getMainWidgetData()
                .then(data => {
                    this.data = data;
                    this.loading = false;
                }).catch(error => {
                console.log(error);
                this.loading = false;
            })
        }
    },
}
</script>


<style scoped>

.statistic-widget {
    min-height: 150px;
    max-width: 600px;
    width: 100%;
}

.statistic-title {

    font-style: normal;
    font-weight: 700;
    font-size: 25px;

    color: var(--ov-primary);

}

.statistic-subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: #687386;
}
</style>
