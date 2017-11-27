<template>
	<div class="component__wrap">
		<div class="content__wrap">
			<div class="cell">
				<article v-html="data[0].acf.email_subscription_copy"></article>
				 <div class="form__wrap">
					<div class="form">
						<form>
							<input type="text" placeholder="Your e-mail address.">
							<a href="javascript:void(0)" class="btn red">Submit</a>
						</form>
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
        data: 'pageOptions'
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
