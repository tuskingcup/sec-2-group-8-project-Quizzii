<script setup>
    import { ref, onBeforeMount} from 'vue'
import CartoonList from '../components/CartoonList.vue';
const cartoonList = ref([])
const httpCartoon = 'http://localhost:5000/cartoons'
const currentHover = ref('')
const checkHover = ref(false)
    
const getCartoonList = async () => {
    const resCartoon = await fetch(httpCartoon)
    if(resCartoon.status === 200){
        cartoonList.value = await resCartoon.json()
        console.log(cartoonList.value)
    }else{
        console.log(`error, cannot get cartoons`)
    }
}
onBeforeMount(async () => {
  await getCartoonList() //ต้อง async await เหมือนกัน
})
</script>
 
<template>
    <div>
        <h1>Cartoon List</h1>
    </div>
    <div>
        <CartoonList :cartoonList="cartoonList" :checkHover="checkHover" :currentHover="currentHover"></CartoonList>
    </div>
</template>
 
<style scoped>
</style>