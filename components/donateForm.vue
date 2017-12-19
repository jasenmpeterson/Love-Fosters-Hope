<template>
  <div class="form__wrap margin__top__10 margin__bottom__10 text__align__center">
    <a class="btn --yellow">Donate</a>
  </div>
</template>
<script>
// TODO: - Form Validation.
// TODO: - Error Handing.
// TODO: - Progress Indicator w/ percentage.
// TODO: - potential (new) featured need component animation - https://codepen.io/koenigsegg1/pen/WrrXzz
import spirit from 'spiritjs';
import { TweenMax, TimelineMax } from 'gsap';
import paypalTokenRequest from '../paypal/tokenRequest';
import paypalPayment from '../paypal/payment';
export default {
	data() {
		return {
			key: null,
			description: this.donationDescription,
			title: this.donationTitle,
			amount: null
		};
	},
	props: ['donationTitle', 'donationDescription'],
	methods: {
		payPal: function() {
			spirit
				.setup({
					tween: TweenMax,
					timeline: TimelineMax
				})
				.then(() => {
					// load GSAP from CDN
					spirit.load('/animations/featured-need-modal/featured-need-modal.json').then(groups => {
						// load animation data
						groups
							.get('Featured Need Component')
							.construct()
							.play(); // construct group and play it
					});
				});
			return paypalTokenRequest
				.request()
				.then(result => {
					this.key = result.data.access_token;
					this.payPalCreatePayment(this.key, this.amount);
				})
				.catch(error => {
					console.log(error);
				});
		},
		payPalCreatePayment: function(key, amount) {
			return paypalPayment
				.post(key, amount, this.description, this.title)
				.then(result => {
					const approvalURL = result.data.links[1].href;
					window.location = approvalURL;
					console.log(result);
				})
				.catch(error => {
					console.log(error);
				});
		},
		donateSubmit() {
			this.payPal();
		}
	}
};
</script>