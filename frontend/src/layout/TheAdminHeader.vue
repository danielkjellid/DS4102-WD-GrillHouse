<!-- component for admin header shown in /admin -->
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
// App imports (components without logic and dependancy)
// -

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
// -

export default {
  name: 'TheAdminHeader',
}
</script>