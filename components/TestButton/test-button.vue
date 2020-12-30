<template>
    <div class="row">
        <button>{{buttonText}}</button>
    </div>
</template>

<script>

export default {
    name: 'TestButton', // 组件必须有name属性
    props: {
        buttonText: { type: String, default: 'testbuton' }
    },
    components: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {}
};
</script>

<style lang="scss" scoped>

</style>
