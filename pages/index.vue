<script setup >

const item = ref("")
const move = ref("")

const showLoadingModal = ref(false)
const showResultModal = ref(false)
const result = ref({})

const submit = async (event) => {
    event.preventDefault()
    // itemかmoveのどちらかは入力必須
    // if (!item.value && !move.value) {
    //     alert("アイテムか行動のどちらかは入力してください");
    //     return;
    // }

    showLoadingModal.value = true;
    try {
        await fetch("/api/game", {
            method: "POST",
            body: JSON.stringify({
                item: item.value,
                move: move.value,
            }),
        })
            .then(async (response) => {
                if (!response.ok) {
                    const error = await response.json();
                    alert((error.message));
                } else {
                    result.value = await response.json();
                    showResultModal.value = true;
                }
            })
            .catch((error) => {
                console.log(error);
                alert(unSanitize(error.message));
            });
    } catch (error) {
        console.log(error);
        alert(error.message);
    } finally {
        showLoadingModal.value = false;
    }
};

// サニタイズされた文字を戻す処理
function unSanitize(str) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec);
    });
}
</script>
<template>
    <main class="main">
        <div class="content">
            <img src="/images/Erlking_1.gif" class="block my-0 mx-auto" width="80" height="80" alt="魔王" />
            <h1 class="text-3xl mb-4 font-bold text-center">ラスダンクエスト</h1>
            <div class="mb-4">
                <p class="text-sm text-slate-300 text-center">
                    ついに勇者は魔王の城の最奥へたどり着いた。<br />
                    圧倒的な力を持つ魔王がこの先に待ち受けている。<br />
                    手元に残ったアイテムはたったひとつだけ…。<br />
                    戦うか、逃げるか、それとも…。<br />
                    勇者は どうする？
                </p>
            </div>
            <form @submit="submit" class="form">
                <div class="input-row">
                    <label for="item">持っているアイテム</label>
                    <div class="box">
                        <input id="item" v-model="item" maxlength="10" type="text" placeholder="アイテム名を入力(10文字まで)" />
                    </div>
                </div>
                <div class="input-row">
                    <label for="move">どうやって魔王に挑む？</label>
                    <div class="box">
                        <textarea rows="3" v-model="move" maxlength="100"
                            class="dark:text-white text-base resize-none block text-left text-slate-700 h-full min-h-6 outline-none px-3 py-3 rounded w-full"
                            placeholder="行動の内容を入力(100文字まで)"></textarea>
                    </div>
                </div>
                <div>
                    <button class="button-submit">
                        <div class="inline-flex gap-2 items-center justify-items-center">
                            <img src="/images/Brave_1.gif" class="block" width="80" height="80" alt="勇者" />
                            <span> 魔王に挑戦する！ </span>
                        </div>
                    </button>
                </div>
            </form>
        </div>
        <ModalLoading :show="showLoadingModal" @close="showLoadingModal = false" />
        <ModalResult :show="showResultModal" :game-result="result" @close="showResultModal = false" />
    </main>
</template>