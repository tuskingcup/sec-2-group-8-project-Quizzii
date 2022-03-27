<script setup>

</script>
 
<template>
this is creator.
<div class="flex m-20">
    <div>
    <span class="flex m-5">
        <form class="bg-cyan-300 hover:bg-gray-400 border-2 border-dashed border-gray-700 px-5 py-24" method="post" action="" enctype="multipart/form-data">
            <div>
                    <!-- <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple /> -->
                    <label for="file"><strong class="hover:text-blue-800">Choose a file</strong>
                    <span> or drag it here.</span>
                </label>
                <!-- <button class="box__button" type="submit">Upload</button> -->
            </div>
            <!-- <div class="box__uploading">Uploading…</div>
            <div class="box__success">Done!</div>
            <div class="box__error">Error! <span></span></div> -->
        </form>
    </span>
    </div>
    <div>
    <form class="m-10">
        <div class="flex my-5">
        <div class="">
            <p class="font-bold text-2xl">ประเภท 1</p><br>
            <select name="genre" class="p-2">
                <option value="romantic">โรแมนติก</option>
                <option value="drama">ดราม่า</option>
                <option value="fantasy">แฟนตาซี</option>
                <option value="comedy">ตลก</option>
            </select>
        </div>
        <div class="ml-10">
            <p class="font-bold text-2xl">ประเภท 2</p>
            <select name="genre" class="p-2">
                <option value="romantic">โรแมนติก</option>
                <option value="drama">ดราม่า</option>
                <option value="fantasy">แฟนตาซี</option>
                <option value="comedy">ตลก</option>
            </select>
        </div>
        </div>
        <p class="font-bold text-2xl">ชื่อซีรี่ส์</p>
        <input class="my-3 p-3" type="text" maxlength="50" placeholder="น้อยกว่า 50 ตัวอักษร">
        <p class="font-bold text-2xl">เรื่องย่อ</p>
        <textarea class="my-3" cols="50" rows="5" placeholder="น้อยกว่า 250 ตัวอักษร"></textarea>
    </form>
    <span class="rounded-3xl bg-lime-500 text-white font-bold border-solid border-2 border-white hover:bg-slate-800 mx-5 px-8 py-4">
        สร้างซีรี่ส์
    </span>

    </div>
</div>

</template>
 
<style>

</style>