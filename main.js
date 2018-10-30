Vue.component('usuarios', {
    template: '#contenedor-usuarios',
    mounted(){
        axios.get('https://randomuser.me/api/?results=30')
        .then((datos) => {
            const listado = datos.data.results.map((user) => {
                return{
                    nombre: `${user.name.title} ${user.name.first} ${user.name.last}`,
                    email: user.email,
                    foto: user.picture.medium
                }
            })
            this.usuarios = listado
        })
    },
    data(){
        return{
            usuarios: [],
            busqueda: ''
        }
    },
    computed:{
        filtrarBusqueda(){
            return this.usuarios.filter((user) => {
                return user.nombre.includes(this.busqueda)
            })
        }
    }
});

Vue.component('one-user', {
    props: ['datos'],
    template: '#usuarios-individuales',
});


new Vue({
    el: 'main',
})