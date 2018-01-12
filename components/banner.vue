<template>
    <div class="cta__banner">
        <div class="row">
            <div class="col col-6">
                <div class="cta__banner__wrap">
                    <slot name="header"></slot>
                    <slot name="paragraph"></slot>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {};
</script>
