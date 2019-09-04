<template>
  <div>
    <button class="button logout" v-on:click="logout">Logout</button>
    <article class="covers" v-for="(member, idx) in members" :key="idx">
      <div>
        <p >{{ member.name }}</p>
        <p>{{ member.mobile }}</p>
        <p>{{ member.email }}</p>
        <hr>
        <button class="button" @click="deleteMember(member.id)">
          Delete Member
        </button>
      </div>
    </article>

    <form @submit="addMember(name, mobile , email)">
      <h2>Add a New Member</h2>
      <input v-model="name" placeholder="Name Of Member" class="input" required><br>
      <input v-model="mobile" placeholder="Mobile" class="input" type="number" maxlength="12" minlength="9" required><br>
      <input v-model="email" placeholder="email" class="input" type="email" required><br>
      <button type="submit" class="button">Add New member</button>
    </form>
  </div>
</template>



<script>
import firebase from 'firebase'
import { db } from '../main'
export default {
  name: 'member',
  data () {
    return {
      members: [],
      name: '',
      email: '',
      mobile:''
    }
  },
  firestore () {
    return {
      members: db.collection('members').orderBy('createdAt')
    }
  },
  methods: {
    addMember (name, email , mobile) {
      const createdAt = new Date()
      db.collection('members').add({ name, email , mobile , createdAt })
      // Clear values
      this.name = ''
      this.email = ''
      this.mobile = ''
    },
    deleteMember (id) {
      db.collection('members').doc(id).delete()
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sign-up {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>