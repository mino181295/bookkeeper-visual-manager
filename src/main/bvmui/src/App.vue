<template>
    <div id="app">
        <v-app id="inspire">
            <Drawer v-if="isLogged" />
            <Navbar v-if="isLogged" />
            <Page />
        </v-app>
    </div>
</template>
<script>
import auth from "./lib/auth";
export default {
    methods: {
        isLogged() {
            return auth.isLogged();
        }
    }
};
</script>
