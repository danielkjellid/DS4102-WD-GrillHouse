<template>
  <div>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>Grillhouse Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" dark>
        <v-btn dark text>Front</v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  }),
}
</script>