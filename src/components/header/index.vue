<template>
	<div class="header">
		<div class="nav">
			<div class="seacher" @click="search()">搜索</div>
			<div class="login" @click="login()">登录</div>
			<div class="li">{{shopList}}</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import {getUser} from '@/api'
	export default {
		data() {
			return {
				shopList : '123'
			}
		},
		created(){
			this.getData()
		},
		methods: {
			login() {
				//console.log(this, this.$axios)
				this.$axios.get(
						"http://localhost:8088/asd"
					)
					.then(function(res) {
						console.log(this,res.data)
						//this.shopList = res.data
					})
			},
			async getData(){
				this.shopList = await getUser()
			}
		}
	}
</script>

<style>
	.nav {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-content: center;
	}

	.nav div {
		cursor: pointer;
	}
</style>
