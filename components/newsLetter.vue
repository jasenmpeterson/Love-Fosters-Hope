<template>
	<div class="component__wrap">
		<div class="content__wrap">
			<div class="cell">
				<article v-html="newsletter[0].acf.email_subscription_copy"></article>
				 <div class="form__wrap">
					<div class="form">
						<form>
							<input type="text" placeholder="Your e-mail address.">
							<a href="javascript:void(0)" class="btn red">Submit</a>
						</form>
					</div>
					<div class="modal">
						<svg data-spirit-id="modal-loader" version="1.1" class="svg-loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 80 80" xml:space="preserve">
							<path id="spinner" fill="#F35D54" d="M40,72C22.4,72,8,57.6,8,40C8,22.4,22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6,28,28,28c.1,0,2,0.9,2,2S41.1,72,40,72z">
								<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="0.6s" repeatCount="indefinite"/>
							</path>
						</svg>
					</div>
  			</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
		computed: {
      ...mapGetters({
        newsletter: 'pageOptions'
      })
    }
}
</script>
<style scoped>

	article >>> h1 {
		color: #FCCD00;
	}

	article >>> p {
		color: #6C6D71;
	}

	.form__wrap {
		margin-top: 2.5rem;
		text-align: center;
	}
	
	.btn {
    box-shadow: 0 0 0.625rem rgba(0,0,0,0.1);
	}
	
  .modal {
    background-color: #fff;
    box-shadow: 0 0 0.625rem rgba(0,0,0,0.1);
    height: 12.5rem;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
	}

</style>
