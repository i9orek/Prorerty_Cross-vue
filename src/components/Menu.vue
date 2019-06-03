<template>
    <div>
        <v-layout class="mt-2">
      <v-flex md10 xs10 lg10  >
        <v-btn icon @click="goBack">
          <v-icon large color="white">arrow_back</v-icon>
        </v-btn>
      </v-flex>
      <v-flex md12 xs12 lg12  class="my_home">
        <v-btn icon to="/">
          <v-icon large color="white">home</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    </div>
</template>

<script>
export default {
  methods:{
    goBack(){
      this.$router.go(-1);
    },
  },
}
</script>
