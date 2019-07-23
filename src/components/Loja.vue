<template>
  <Painel titulo="Loja Virtual" verde>
    <v-container grid-list-xs>
      <div class="loja">
        <v-layout row wrap text-center>
          <v-flex xs12 sm3>
            <v-combobox
              id="refrigerante-combobox"
              v-model="select"
              :items="items"
              item-text="nome"
              label="Selecione um refrigerante"
            ></v-combobox>
          </v-flex>
          <v-flex xs12 sm1>
            <span>quantidade</span>
          </v-flex>
          <v-flex xs12 sm3>
            <input id="quantidade-itens" type="number" v-model.number="quantidade" />
          </v-flex>
          <v-flex xs12 sm1>
            <span>
              <strong>R$</strong>
            </span>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field type="number" disabled v-model.number="select.valor" />
            <button @click="adicionar">adicionar</button>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </Painel>
</template>

<script>
import { mapActions } from "vuex";
import request from "request";

export default {
  data() {
    return {
      items: [],
      select: {
        nome: "",
        quantidade: 0.0,
        valor: 0.0
      }
    };
  },
  computed: {
    quantidade: {
      get() {
        return this.$store.state.parametros.quantidade;
      },
      set(quantidade) {
        this.$store.commit("setQuantidade", quantidade);
      }
    },
    valor: {
      get() {
        return this.$store.state.parametros.valor;
      },
      set(valor) {
        this.$store.commit("setValor", valor);
      }
    }
  },
  methods: {
    ...mapActions("carrinho", ["adicionarProduto"]),
    adicionar() {
      console.log(this.quantidade, this.select.nome);
      if (this.quantidade <= 0 || this.select.nome === "") {
        alert("É necessario selecionar um refrigerante e a quantidade");
      } else {
        const produto = this.select;
        produto.quantidade = this.quantidade;
        this.adicionarProduto(produto);
        this.$store.commit("setValor", 0);
        this.$store.commit("setQuantidade", 0);
        this.select = {
          nome: "",
          valor: 0.0
        };
      }
    }
  },
  beforeCreate() {
    request.get(
      "https://api.adsim.co/crm/api/v1/refrigerante/listar",
      (error, response, body) => {
        this.$data.items = JSON.parse(body).map(item => {
          this.$store.commit("setValor", 0);
          this.$store.commit("setQuantidade", 0);
          let nome = item.marca;
          if (item.marca !== item.sabor) nome += ` ${item.sabor}`;
          item["nome"] = `${nome} - ${item.quantidade}`;
          return item;
        });
      }
    );
  }
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
