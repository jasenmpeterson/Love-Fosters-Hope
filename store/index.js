import Vuex from 'vuex';
import axios from 'axios';
const store = () => {
	return new Vuex.Store({
		state: {
			pageData: null,
			siteNavigation: null,
			pageOptions: null,
			posts: null,
			payPalPaymentConfirmation: null,
			wordpressAPI: 'http://lovefostershope.gearhostpreview.com/index.php/wp-json'
		},
		actions: {
			async nuxtServerInit({ commit, state }) {
				return axios
					.all([
						axios.get(`${state.wordpressAPI}/wp-api-menus/v2/menus/5`),
						axios.get(`${state.wordpressAPI}/acf/v3/options/options`)
					])
					.then(
						axios.spread(function(navigation, pageOptions) {
							const navigationData = [navigation.data.items];
							commit('setSiteNavigation', navigationData);
							const pageOptionsData = [pageOptions.data];
							commit('setPageOptions', pageOptionsData);
						})
					);
			}
		},
		mutations: {
			setSiteNavigation(state, data) {
				state.siteNavigation = data;
			},
			setPageOptions(state, data) {
				state.pageOptions = data;
			},
			setPageData(state, data) {
				state.pageData = data;
			},
			setPayPalConfirmationDetails(state, data) {
				state.payPalPaymentConfirmation = data;
			},
			setPosts(state, data) {
				state.posts = data;
			}
		},
		getters: {
			navigation: state => {
				return state.siteNavigation;
			},
			pageOptions: state => {
				return state.pageOptions;
			},
			pageData: state => {
				return state.pageData;
			},
			payPalConfirmationDetails: state => {
				return state.payPalPaymentConfirmation;
			},
			posts: state => {
				return state.posts;
			}
		}
	});
};

export default store;
