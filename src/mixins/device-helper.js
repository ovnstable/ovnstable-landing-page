import {mapActions} from "vuex";


export const deviceHelper = {
    data() {
        return {

        }
    },

    mounted() {
        this.reportScreenInfo();
        window.addEventListener('resize', this.reportScreenInfo);
    },
    methods: {
        ...mapActions('device', ['updateDeviceType', 'updateDeviceOrientation']),

        reportScreenInfo() {
            this.reportWindowSize();
            this.reportOrientation();
        },
        reportWindowSize() {
            this.currentWidth = window.innerWidth

            let tabMaxWidthConst = 1024
            if (this.currentWidth >= tabMaxWidthConst) {
                this.updateDeviceType('desktop');
                return;
            }

            let mobileMaxWidthConst = 768
            if (this.currentWidth < mobileMaxWidthConst) {
                this.updateDeviceType('mobile');
                return;
            }

            if (this.currentWidth < tabMaxWidthConst) {
                this.updateDeviceType('tablet');
            }
        },
        reportOrientation() {
            this.updateDeviceOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
        },
    },

}
