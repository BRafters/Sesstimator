<script lang="ts">
export default {
    data() {
        return { selectedOption: "", shouldBeVisible: false }
    },
    watch: {
        selectedOption(value) {
            this.shouldBeVisible = value === "join";
        }
    }
}
</script>

<template>
    <div class="flex justify-center items-center card card-side bg-base-300 w-1/3 h-1/3 border-solid border-2 border-accent shadow-md">
        <div class="card-body">
            <h2 class="card-title text-primary">Sessions</h2>
            <label class="label cursor-pointer">
                <span class="label-text text-primary">Host</span>
                <input id="ht" name="session-rd" type="radio" value="host" v-model="selectedOption" class="radio radio-primary"/>
            </label>
            <label class="label cursor-pointer">
                <span class="label-text text-primary">Join</span>
                <input id="jn" name="session-rd" type="radio" value="join" v-model="selectedOption" class="radio radio-primary"/>
            </label>

            <label v-if="shouldBeVisible" class="label cursor-pointer">
                <span class="label-text text-primary">Room Code</span>
                <input name="jn-room-code" type="text" placeholder="Room Code" class="input input-bordered input-primary"/>
            </label>

            <div class="card-actions justify-end">
                <button class="btn btn-success">Submit</button>
            </div>
        </div>
    </div>
</template>
