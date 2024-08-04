<script setup>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';


const employee = ref({
    position: '',
    salary: 0,
    line_manager: '',
    birth_date: '',
    hired_date: '',
    is_manager: false,
})



</script>

<template>
    <div class="w-3/4 mx-auto my-6">
        <InputGroup>
            <InputText placeholder="Birth Date" />
        </InputGroup>
        <InputGroup>
            <InputText placeholder="Position" />
        </InputGroup>
        <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputNumber placeholder="Salary" />
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
        <InputGroup>
            <InputText placeholder="Hired Date" />
        </InputGroup>
    </div>
</template>