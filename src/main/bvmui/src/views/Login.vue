<template>
    <v-card width="400" class="mx-auto mt-5">
        <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="username"
                    label="Username"
                    color="blue lighten-1 white--text"
                    prepend-icon="mdi-account-circle"
                />
                <v-text-field
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    color="blue lighten-1 white--text"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                />
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn color="blue lighten-1 white--text"
                @click="performLogin">Login</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import auth from "../lib/auth";
export default {
    data() {
        return {
            username: "admin",
            password: "admin",
            showPassword: false
        };
    },
    methods: {
        performLogin() {
            this.$request.post("api/auth/login",
                {username: this.username, password: this.password},
                res => {
                    if (res.ok) {
                        let token = res.token;
                        auth.createSession(token);
                        this.$router.push({ name: "bookies" });
                    } else {
                        this.password = "";
                        alert("bad username or password");
                    }
                },
                error => {
                    this.$router.push({ name: "bookies" });
                }
            );
        }
    }
};
</script>

