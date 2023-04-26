<template>
  <div class="">
    <div class="flex items-center gap-6 justify-center">
      <input
        type="text"
        class="outline-blue-700 p-2 rounded-lg"
        placeholder="نام"
        v-model.lazy="rowData.name"
      />
      <input
        type="text"
        class="outline-blue-700 p-2 rounded-lg"
        placeholder="نام خانوادگی"
        v-model.lazy="rowData.family"
      />
      <input
        type="text"
        class="outline-blue-700 p-2 rounded-lg"
        placeholder="کد کاربری"
        v-model.lazy="rowData.code"
      />
      <button
        @click="editData"
        v-if="isEdit"
        class="bg-blue-700 rounded-md text-white shadow-sm px-4 py-2 hover:scale-110 active:scale-95 transition-all duration-200 ease-out"
      >
        ویرایش
      </button>
      <button
        @click="sendData"
        v-else
        class="bg-blue-700 rounded-md text-white shadow-sm px-4 py-2 hover:scale-110 active:scale-95 transition-all duration-200 ease-out"
      >
        افزودن
      </button>
    </div>
    <div class="p-4">
      <ejs-grid
        :dataSource="allData"
        :allowPaging="true"
        :allowSorting="true"
        :pageSettings="pageSettings"
        @rowSelected="onRowSelected"
      >
        <e-columns>
          <e-column
            field="name"
            headerText="نام"
            textAlign="Right"
            width="90"
          ></e-column>
          <e-column
            field="family"
            headerText="نام خانوادگی"
            textAlign="Right"
            width="90"
          ></e-column>
          <e-column
            field="code"
            headerText="کدکاربری"
            textAlign="Right"
            width="90"
          ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script>
import { Page, Sort, Filter, Group } from "@syncfusion/ej2-vue-grids";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      rowData: {
        name: "",
        family: "",
        code: "",
      },
      pageSettings: { pageSize: 5 },
      provide: {
        grid: [Page, Sort, Filter, Group],
      },
      isEdit: false,
      indexEdit: "",
    };
  },
  computed: {
    ...mapGetters(["allData"]),
  },
  methods: {
    ...mapActions(["setDataTable", "setEditRow"]),
    sendData() {
      this.setDataTable(this.rowData);
      this.rowData = { name: "", family: "", code: "" };
    },
    onRowSelected(args) {
      const selectedData = args.data;
      this.rowData = selectedData;
      this.isEdit = true;
      this.indexEdit = args.rowIndex;
    },
    editData() {
      let data={index:this.indexEdit,data:this.rowData}
      this.setEditRow(data);
      this.rowData = { name: "", family: "", code: "" };
      this.isEdit = false;
      this.indexEdit=''
    },
  },
};
</script>

<style scoped>
@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
