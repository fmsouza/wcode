import { action, computed, observable } from 'mobx';

/**
 * ViewStore is the Mobx global data storage for the view data.
 * @class ViewStore
 */
export class ViewStore {

    // {number} width - Screen width value
    @observable width = -1;

    // {number} height - Screen height value
    @observable height = -1;

    // {number} isDesktop - Tells wether the view size corresponds to Desktop or not.
    @computed get isDesktop() {
        return (this.width > 768);
    }

    // {number} isTablet - Tells wether the view size corresponds to Tablet or not.
    @computed get isTablet() {
        return (this.width > 544 && this.width <= 768);
    }

    // {number} isDesktop - Tells wether the view size corresponds to Mobile or not.
    @computed get isMobile() {
        return (this.width <= 544);
    }

    constructor() {
        this.updateDimensions();
    }

    /**
     * Update the current screen size informations
     * @return {void}
     */
    @action updateDimensions() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
}

export default new ViewStore();
