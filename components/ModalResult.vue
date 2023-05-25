<script setup>
const props = defineProps({
    gameResult: Object,
    show: Boolean,
});

const emits = defineEmits("close");
const closeModal = () => {
    emits("close");
};
</script>
<template>
    <div>
        <Modal :show="show">
            <div class="bg-gray-800 result">
                <div>
                    <div class="mb-4 text-3xl">
                        <h1 class="font-bold text-center">{{ gameResult.result }}!!</h1>
                    </div>
                    <div class="flex flex-row gap-1 justify-center mb-4 items-center">
                        <img src="/images/Erlking_1.gif" class="block icon" width="80" alt="魔王" />
                        <div class="p-1 rounded-md border-2 border-white bg-gray-900">
                            <span class="text-sm text-left"> {{ gameResult.erlkingMove }} </span>
                        </div>
                    </div>
                    <div class="p-2 rounded-md bg-gray-900">
                        <span class="text-sm text-left"> {{ gameResult.epilogue }} </span>
                    </div>
                    <div>
                        <div class="mt-4 text-left bg-gray-900 p-2 rounded-md">
                            <h3 class="font-sm font-bold">持っていったアイテム</h3>
                            <span class="text-sm"> {{ gameResult.item }} </span>
                        </div>
                        <div class="mt-4 text-left bg-gray-900 p-2 rounded-md">
                            <h3 class="font-sm font-bold">勇者の取った行動</h3>
                            <span class="text-sm"> {{ gameResult.move }} </span>
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex gap-2 justify-center">
                    <button class="text-center bg-slate-600 hover:bg-slate-700 text-xs text-white py-2 px-4 rounded"
                        @click="closeModal">X 閉じる</button>
                </div>
            </div>
        </Modal>
    </div>
</template>
<style scoped>
.result {
    max-width: 100%;
    width: 512px;
    padding: 16px;
}
</style>