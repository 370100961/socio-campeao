<template>
    <div class="">
        <div class="titulo">
            <h1>Sócios Plano {{ filtro }}</h1>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Plano</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="socio in socios" :key="socio.id">
                    <td>{{ socio.id }}</td>
                    <td>{{ socio.nome }}</td>
                    <td>{{ socio.plano }}</td>
                    <td>{{ socio.telefone }}</td>
                    <td>{{ socio.email }}</td>
                    <td class="status">
                    <span :class="socio.status"></span> Ativo</td>
                </tr>
            </tbody>
    </table>
    </div>
</template>

<script>
export default{
    name: 'FilterView',
    data(){
        return{
            socios: []
        }
    },
    props: {
        filtro: String,
    },
    updated(){
        this.requisicao();
    },
    mounted(){
        this.requisicao();
    },
    methods: {
        requisicao(){
            fetch('http://localhost:3000/socios/')
            //Transforma requisição em JSON
            .then( response => response.json() )
            //A resposta da promessa em data
            .then( data => {
                //Criar uma constante para receber os valores filtrados
                const sociosFiltrados = data.filter(
                    socio => {
                        return socio.plano === this.filtro;
                    }
                )
                //Atribui os valores filtrados a propriedade reativa.
                this.socios = sociosFiltrados;
            }
            )
            .catch( error =>  {
                console.log("Deu erro na requisição", error);
            })
        }
    }
}
</script>

<style></style>