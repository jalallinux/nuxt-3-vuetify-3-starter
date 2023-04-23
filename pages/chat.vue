<template>
  <v-app id="chat">
<!--    <v-system-bar>-->
<!--      <v-spacer />-->
<!--      <v-icon>mdi-square</v-icon>-->
<!--      <v-icon>mdi-circle</v-icon>-->
<!--      <v-icon>mdi-triangle</v-icon>-->
<!--    </v-system-bar>-->

    <v-navigation-drawer absolute color="grey-lighten-3" rail>
      <v-avatar class="d-block text-center mx-auto mt-4" color="grey-lighten-1" size="48" image="https://avatars.githubusercontent.com/u/37062636?v=4"/>
      <v-divider class="mx-3 my-4" />
      <v-btn v-for="user in data.users" :key="user.id" :to="`#${user.username}`" :active="useRoute().hash === `#${user.username}`"
             size="42" icon class="d-block text-center mx-auto mb-5 overflow-hidden rounded-circle bg-transparent">
        <v-img :src="user.image" />
      </v-btn>
    </v-navigation-drawer>

    <v-navigation-drawer width="244">
      <v-sheet color="grey-lighten-5" height="128" width="100%"/>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" :title="`Item ${ n }`" link>
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
const { data: me } = await useFetch("https://dummyjson.com/users/100")
const { data } = await useFetch("https://dummyjson.com/users", { query: { limit: 8 } })

</script>

<style scoped>

</style>