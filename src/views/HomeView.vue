<template>
  <div class="home">
    <!-- Colar da linha 38 a 71 -->
    <div class="titulo">
        <h1>Sócios</h1>
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
                <td>
                  <router-link :to="`/socios/${socio.id}`">
                    {{ socio.nome }}
                  </router-link>
                </td>
                <td>{{ socio.plano }}</td>
                <td>{{ socio.telefone }}</td>
                <td>{{ socio.email }}</td>
                <td class="status">
                  <span :class="socio.status"></span> {{ socio.status }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    data(){
      return{
        socios: []
      }
    },
    components: {
    },
    mounted(){
      this.requisicao();
    },
    methods: {
      requisicao(){
        fetch('http://localhost:3000/socios/')
        .then(response => response.json())
        .then(data => this.socios = data)
        .catch(
          error => console.log('Deu erro na requisição', error)
        );
      }
    }
  }
</script>
