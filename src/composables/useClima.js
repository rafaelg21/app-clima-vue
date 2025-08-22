import { ref, computed } from 'vue';
import axios from 'axios';

  const clima = ref({});
  const cargando = ref(false);
  const error = ref('');

export default function useClima() {

  

    const obtenerClima = async ({ciudad, pais}) => {        
        //Importar el Api Key
        const key = import.meta.env.VITE_API_KEY;
        cargando.value = true;
        clima.value = {};
        error.value= '';
        try{
            //Obtener la lat y log 
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
            const { data } = await axios.get(url);
            const { lat, lon } = data[0];          
            
            //Obtener clima
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
            const { data: res } = await axios.get(urlClima);
            clima.value = res;            
           
        }catch{
            error.value= 'Ciudad no encontrada';
            console.log(error.value);
        }finally {
            
            cargando.value = false;
        }
    }

    const mostrarClima = computed(() =>{
        return Object.keys(clima.value).length > 0;
    });


    const formatearTemperatura =  temperatura => parseInt(temperatura - 273.15);
    return {
        obtenerClima,
        clima,
        mostrarClima,
        formatearTemperatura,
        cargando,
        error
    }
}