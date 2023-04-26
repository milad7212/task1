<template>
  <div class=" p-4">
    <ejs-grid
      :dataSource="allData"
      :allowPaging="true"
      :allowSorting="true"
      :pageSettings="pageSettings"
    >
      <e-columns>
        <e-column
          field="OrderID"
          headerText="Order ID"
          textAlign="Right"
          width="90"
        ></e-column>
        <e-column
          field="CustomerID"
          headerText="Customer ID"
          width="90"
        ></e-column>
        <e-column
          field="Freight"
          headerText="Freight"
          textAlign="Right"
          format="C2"
          width="90"
        ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
  
</template>

<script>
import { Page, Sort ,Filter, Group} from "@syncfusion/ej2-vue-grids";
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      
      pageSettings: { pageSize: 5},
      provide: {
        grid: [Page, Sort, Filter, Group],
      },
      
    };
  },
  computed:{
    ...mapGetters(['allData'])
  }
};
</script>

<style scoped>

@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
