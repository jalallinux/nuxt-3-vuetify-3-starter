<template>
  <v-container fluid class="fill-height">
    <v-row no-gutters align="center" justify="center" class="fill-height">
      <v-col cols="12" md="6" lg="5" sm="6">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" md="6">
            <h1>Register</h1>
            <p class="text-medium-emphasis">Enter your details to get started</p>

            <v-form @submit.prevent="submit" class="mt-7">
              <div>
                <label class="label text-grey-darken-2" for="name">Name</label>
                <v-text-field
                  :rules="[ruleRequired]"
                  v-model="name"
                  prepend-inner-icon="fluent:person-24-regular"
                  id="name"
                  name="name"
                />
              </div>
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="email">Email</label>
                <v-text-field
                  :rules="[ruleRequired, ruleEmail]"
                  v-model="email"
                  type="email"
                  prepend-inner-icon="fluent:mail-24-regular"
                  id="email"
                  name="email"
                />
              </div>
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="password">Password</label>
                <v-text-field
                  :rules="[ruleRequired, rulePassLen]"
                  type="password"
                  v-model="password"
                  prepend-inner-icon="fluent:password-20-regular"
                  id="password"
                  name="password"
                />
              </div>
              <div class="mt-5">
                <v-btn type="submit" block min-height="45" class="gradient primary"
                  >Create Account</v-btn
                >
              </div>
            </v-form>
            <p class="text-body-2 mt-10">
              <span
                >Already have an account?
                <nuxt-link to="/login" class="font-weight-bold text-primary">Login</nuxt-link></span
              >
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="hidden-md-and-down fill-height" md="6" lg="7">
        <v-img
          src="https://wallpaper.dog/large/5557744.jpg"
          cover
          class="h-100 rounded-xl d-flex align-center justify-center"
        >
          <div class="text-center w-50 text-white mx-auto">
            <h2 class="mb-4">Start your journey today</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore quia.
              Dolorum dolores ad ipsum voluptatum rem, hic placeat, odio, odit numquam quod
              veritatis accusantium assumenda! Sequi, provident in! Iure!
            </p>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const name = ref("");
const email = ref("");
const password = ref("");

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const submit = async () => {};
</script>
