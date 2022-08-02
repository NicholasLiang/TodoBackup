import { supabase } from '@/lib/supabase'
import { ref } from 'vue'

const bingoState = ref('');

// async function fetchBingo() {
//     try {
//         const { data: bingo, error } = await supabase.from('bingo')
//             .select('state');


//         if (error) {
//             console.log('error', error);
//             return;
//         }

//         if (bingo.state === null) {
//             // create a new table
//             return
//         }

//         bingoState.value = bingo;
//         console.log('get bingos!', allBingos.value)
//     } catch (error) {
//         console.error('error', error)
//     }
// }

// async function addBingo(bingo: Bingo): Promise<null | Bingo> {
//     try {
//         const { data, error } = await supabase.from('bingo').insert(bingo).single()

//         if (error) {
//             alert(error.message)
//             console.error('There was an error inserting', error)
//             return null
//         }

//         console.log('created a new bingo')
//         return data
//     } catch (err) {
//         alert('Error')
//         console.error('Unknown problem inserting to db', err)
//         return null
//     }
// }



// async function showBingo() {
//     try {
//         const { data: bingo, error } = await supabase.from('bingo')
//             .select('*');

//         if (error) {
//             console.log('error', error);
//             return;
//         }

//         if (bingo === null) {
//             // create a new table
//             console.log('empty data')
//             return
//         }
        
//         console.log('get bingos!', bingo)
//     } catch (error) {
//         console.error('error', error)
//     }
// }

// export { allBingos, showBingo, fetchBingo, addBingo }