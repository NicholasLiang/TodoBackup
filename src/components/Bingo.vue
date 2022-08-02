<template>
        <!-- class="flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer"
        :to="{ name: 'View-Workout', params: { workoutId: workout.id } }"
        v-for="(workout, index) in data"
        :key="index" -->

    <button class="btn-black" @click='toggleListening'>Toggle Listenimg</button>
    <div v-text="note"></div>
    
    <!-- <button class="btn-black" @click='voiceRegcognition()'>GetBingo</button> -->
    <button class="btn-black" @click='getState()'>GetBingo</button>
    <div> Game state: {{ gameState[0].state }}</div>

</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent, ref, computed, onMounted } from 'vue'
// import { allBingos, showBingo, fetchBingo, addBingo } from '@/vuetils/useBingo'
import { userSession } from '@/vuetils/useAuth'
import useSpeechRecognition from "@/vuetils/useVoiceRecognition";



import { supabase } from '@/lib/supabase'



// const transcript = ref('')
// const isRecording = ref(false)

// const Recognition = window.SpeechRecognition
// const sr = new Recognition()

export default defineComponent({
  name: 'Bingo',

  async setup() {

const { toggleListening, note, error } = useSpeechRecognition();

    const gameState = ref<Bingo[]>([{user_id:'', state: -1}])

    const transcript = ref('placeholder')


    function listen() {
      // recognition.start();
    }


    async function addState(bingo: Bingo): Promise<null | Bingo> {
      try {
        const { data, error } = await supabase.from('bingo').insert(bingo).single()
        if (error) throw error
        alert('adding data')
        console.log(data)
        return data
      } catch (error) {
        console.error('error', error)
        alert(error)
        return null
      }
    }

    async function initState(): Promise<null | Bingo> {
      if (userSession.value === null) {
        return null
      }
      
      return await addState({ user_id: userSession.value.user.id, state: 0})
    }


    async function getState() {
      try {
        const { data: bingo, error } = await supabase.from('bingo').select('*')
        
        // error handling
        if (error) {
          console.log('error', error)
          return
        }

        console.log(bingo)

        if (bingo === null)
        {
          return
        }

        // handle for when no todos are returned
        if (bingo.length === 0) {
          const tempState = await initState();
          if (tempState === null) {
            return
          }
          gameState.value = [tempState];
        } else {
          console.log(bingo)
          gameState.value = bingo
        }

        // console.log('get bingos!', gameState.value)
        // const { data: workouts, error } = await supabase.from("workouts").select("*")
        // if (error) throw error
        // data.value = workouts
        // dataLoaded.value = true
      } catch (error ) {
        console.error('error', error)
      }
    }

    

    return {
      gameState, getState, initState, listen, toggleListening, note, error
    }
  },
})
</script>