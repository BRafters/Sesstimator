<script setup lang="ts"></script>

<template>
    <!--Prompts the user for a name and an avatar-->
    <div class="card card-side flex justify-center items-center bg-base-300 border-solid border-2 border-accent shadow-md">
        <div class="card-body">
            <h2 class="card-title text-primary">Please enter your name and pick an avatar</h2>
            <input type="text" class="input input-bordered input-primary" placeholder="Your name here" required/>
            <select class="select select-primary" required>
                <option disabled selected>Avatar</option>
                <option>🤠</option>
                <option>👽</option>
                <option>👾</option>
                <option>🤖</option>
                <option>👁️</option>
                <option>👻</option>
                <option>💀</option>
                <option>🍓</option>
                <option>🏎️</option>
                <option>💖</option>
                <option>🎮</option>
                <option>🎾</option>
            </select>

            <div class="card-actions justify-end">
                <button class="btn btn-success">Submit</button>
            </div>
        </div>
    </div>
</template>