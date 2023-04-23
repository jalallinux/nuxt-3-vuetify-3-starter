<template>
  <v-app id="chat">

    <v-navigation-drawer v-model="drawer" :rail="rail" permanent absolute @click="rail = false" color="grey-lighten-3">
      <v-list-item class="my-4" nav :prepend-avatar="me.avatar_url" :title="me.name" :subtitle="`From ${me.location}`">
        <template v-slot:append>
          <v-btn variant="plain" icon="mdi-chevron-left" @click.stop="rail = !rail" />
        </template>
      </v-list-item>

      <v-divider />

      <v-list density="compact" class="pa-0" nav>
        <v-list-item v-for="user in data.users" :key="user.id" :to="`#${user.username}`" :active="useRoute().hash === `#${user.username}`"
                     :title="`${user.firstName} ${user.lastName}`" :value="user.username">
          <template v-slot:prepend>
            <v-avatar size="42" :image="user.image" />
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="px-3" color="grey-lighten-4" flat height="72">
      <v-spacer />
      <v-responsive max-width="156">
        <v-text-field bg-color="grey-lighten-2" class="rounded-pill overflow-hidden" density="compact" hide-details variant="solo"/>
      </v-responsive>
    </v-app-bar>

    <v-main><!--  --></v-main>

    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item v-for="n in 5" :key="n" :title="`Item ${ n }`" link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer app height="72">
      <v-text-field bg-color="grey-lighten-1" class="rounded-pill overflow-hidden" density="compact" hide-details variant="solo"/>
    </v-footer>
  </v-app>
</template>

<script setup>
const { data: me } = await useFetch("https://api.github.com/users/jalallinux")
const { data } = await useFetch("https://dummyjson.com/users", { query: { limit: 8 } })

const drawer = ref(true)
const rail = ref(true)

</script>

<style scoped>

</style>