
<script setup>
import { ref, reactive } from 'vue';
import Alerta from './Alerta.vue';

const error = ref('');
const busqueda = reactive({
    ciudad: '',
    pais: ''
});

const emit = defineEmits(['obtener-clima']);

const paises = [
    { codigo: 'VE', nombre: 'Venezuela' },
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'CO', nombre: 'Colombia' },
    { codigo: 'CR', nombre: 'Costa Rica' },
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'PE', nombre: 'Perú', },
    { codigo: 'BR', nombre: 'Brasil' }
]


const consultarClima = () => {
    if (Object.values(busqueda).includes('')) {
        error.value = 'Por favor completa todos los campos';
        return;
    }
    error.value = '';
    // Lógica para consultar el clima
    emit('obtener-clima', busqueda);

};

</script>
<template>
        <form
        class="formulario"
        @submit.prevent="consultarClima"
        >
            <Alerta v-if="error">{{ error }}</Alerta>
            <div class="campo">
                <label for="ciudad">Ciudad:</label>
                <input 
                    type="text" 
                    id="ciudad" 
                    v-model="busqueda.ciudad" 
                    placeholder="Ciudad"                    
                />
            </div>

             <div class="campo">
                <label for="pais">Pais:</label>
                <select id="pais" v-model="busqueda.pais">
                    <option value="">-- Seleccione un país --</option>
                    <option 
                        v-for="pais in paises" 
                        :key="pais.codigo" 
                        :value="pais.codigo"
                    >
                        {{ pais.nombre }}
                    </option>
                </select>
            </div>
            <input 
                type="submit"                 
                value="Consultar Clima" />
        </form>
</template>



