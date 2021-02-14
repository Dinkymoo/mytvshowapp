<template>

<div class="content">
  <div v-if="isAuthenticated">
  Welcome {{username}}
  <button v-on:click="logOut()" class="button is-primary">
				Logout
			  </button>
</div>
<div v-else>
	<h2>Login</h2>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Username</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input  v-model="username" class="input" type="text"
			  placeholder="Your username">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Password</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input  v-model="password" class="input" type="password"
			  placeholder="Your password">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label">
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <button v-on:click="logIn()" class="button is-primary">
				Login
			  </button>
			</div>
		  </div>
		</div>
	</div>
  </div>
</div>
</template>
<script>
import appService from '../app.service'
export default {
data() {
  return {
    username: '',
    password: '',
    isAuthenticated: false
  }
},
methods: {
  logIn() {
    appService.logIn({username: this.username,password: this.password})
    .then((data) => {
      window.localStorage.setItem('token',data.token)
      window.localStorage.setItem('tokenExpiration',data.expiration)
      this.isAuthenticated = true
      this.password = ''
    })
    .catch(()=>
    window.alert('Failed to log in'))
  },
  logOut() {
      window.localStorage.setItem('token', null)
      window.localStorage.setItem('tokenExpiration', null)
      this.isAuthenticated = false;
      this.username = ''

  },
  created()  {
    let expiration = window.localStorage.getItem('tokenExpiration')
    let unixTimeStamp = new Date().getTime() /1000
    if(expiration == null && parseInt(expiration) - unixTimeStamp > 0) {
      this.isAuthenticated = true
    }
  }
}}
</script>
