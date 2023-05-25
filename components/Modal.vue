<!-- @format -->

<script setup>
import { ref } from "vue";
const props = defineProps({
    show: Boolean,
});
const emits = defineEmits("close");
const close = () => {
    emits("close");
};

</script>
<template>
    <div class="modal" v-if="show">

        <div class="modal-overlay"></div>
        <div class="modal-content">
            <slot @close="close"></slot>
        </div>
    </div>
</template>
<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    padding: 16px;
    z-index: 1;
}
</style>
