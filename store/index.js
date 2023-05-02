// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         increment(state) {
//             state.count++;
//         }
//     }
// })


export const state = () => ({
    data: {}
  })

export const mutations = {
setData(payload) {
    console.log('payload', payload)
    state.data = payload
}
}



export const actions = {}

export const getters = {}

// store.commit('increment');
// console(store.state.count);

// new Vue({ 
//     el: '#app',
//     data: {
//         message: 'Hello world'
//     }
// });