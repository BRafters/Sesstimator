<script setup lang="ts"></script>

<template>
    <!--Prompts the user for a name and an avatar-->
    <div class="card card-side bg-base-200 shadow-md w-1/2 h-1/2">
        <div class="card-body">
            <h2 class="card-title">Please enter your name and pick an avatar</h2>
            <input type="text" class="input input-bordered input-primary" placeholder="Your name here"/>
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            
            <div class="card-actions justify-end">
                <button class="btn btn-success">Submit</button>
            </div>
        </div>
    </div>
</template>