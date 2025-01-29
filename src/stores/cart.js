import { defineStore } from "pinia";
import { useQuasar } from "quasar";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    products: [],
    total: 0,
    loading: false
  }),
  persist: {
    // paths: ["products", "total"],
  },
  actions: {
    calculateTotal() {
      let total = 0
      for (const product of this.products) {
        console.log(product, "XDDDDD")
        total = total + product.prize
      }
      console.log(total, "AJA")
      this.total = +(total.toFixed(2))
      // console.log(this.total, "AAA")
    },
    addProduct(product) {
      this.loading = true
      const Product = Object.assign({}, product)
      const index = this.products.findIndex(item => product.name == item.name)
      console.log(index)
      if (index === -1) {
        this.products.push(Product)
      } else {
        this.products[index].amount++
        this.products[index].prize = +(this.products[index].prize + Product.prize).toFixed(2)
      }
      this.calculateTotal()
      this.loading = false
    },
    deleteProduct(product) {
      this.loading = true
      const Product = Object.assign({}, product)
      const index = this.products.findIndex(item => Product.name == item.name)
      if (this.products[index].amount === 1) {
        this.products.splice(index, 1)
      } else {
        this.products[index].amount--
        this.products[index].prize = +(this.products[index].prize - Product.prize).toFixed(2)
      }
      this.calculateTotal()
      this.loading = false
    },

    clear() {
      this.products = []
      this.total = 0
    }
  }
});
