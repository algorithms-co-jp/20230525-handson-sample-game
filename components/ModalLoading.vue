<script setup>

const emits = defineEmits(["close"]);
const props = defineProps({
    show: Boolean,
});
import { ref, watch } from "vue";
const flavorText = ref("");
const flavorTextValueArr = ["勇者と魔王の間に緊張が走っている…▼", "お互いの出方をうかがっている…▼", "ジリジリと間合いをはかっている…▼"];
const playFlavorText = () => {
    const flavorTextValue = flavorTextValueArr[Math.floor(Math.random() * flavorTextValueArr.length)];
    function addChar(flavorTextValue) {
        flavorText.value += flavorTextValue.charAt(0);
        flavorTextValue = flavorTextValue.substring(1, flavorTextValue.length);
        if (flavorTextValue.length > 0) {
            timerId = setTimeout(() => {
                addChar(flavorTextValue);
            }, 200);
        }
    }
    setTimeout(() => {
        addChar(flavorTextValue);
    }, 200);
};

let timerId = 0;
timerId = setInterval(() => {
    flavorText.value = "";
    playFlavorText();
}, 7000);

onMounted(() => {
    playFlavorText();
})

// showの値の変更を監視
watch(() => props.show, (newValue) => {
    if (!newValue) {
        clearInterval(timerId);
        emits("close");
    }
});

</script>
<template>
    <div>
        <Modal :show="show">
            <div class="bg-gray-800 progress">
                <div class="flex gap-1 mb-1 item-align-center justify-center">
                    <img src="/images/Brave_2.gif" class="block" width="80" height="80" alt="勇者" />
                    <img src="/images/Erlking_2.gif" class="block" width="80" height="80" alt="魔王" />
                </div>
                <div class="p-1 rounded-md border-2 border-white text-center">
                    <span class="text-xs"> {{ flavorText }} </span>
                </div>
            </div>
        </Modal>
    </div>
</template>
<style scoped>
.progress {
    max-width: 100%;
    width: 300px;
    padding: 16px;
}
</style>