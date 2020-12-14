<template>
    <button class="btn">
        <div v-if="icon && !iconAfter" :class="icon" class="icon-left"></div>
        <slot/>
        <div v-if="icon && iconAfter" :class="icon"></div>
    </button>
</template>
<script>
export default {
    props: {
        icon: {
            type: String
        },
        iconAfter: {
            type: [String, Boolean],
            default:  false
        }
    }
}
</script>
<style scoped>
.btn{
    display: flex;
    align-items: center;
    background: #55468c;
    border: #55468c;
    border-radius: 4px;
    padding: 4px 8px;
    color: white;
}
.icon-left{
    margin-right: 8px;
}
</style>