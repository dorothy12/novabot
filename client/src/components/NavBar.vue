<template>
  <div class='navbar'>
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/">NovaBot</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="dashboard">Dashboard</b-nav-item>
          <b-nav-item to="commands">Commands</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="user">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              {{ user.displayName }}
            </template>
            <b-dropdown-item><router-link to="/logout">Signout</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item to="login" right>Login</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ['user'],
  name: 'navbar'
}
</script>
