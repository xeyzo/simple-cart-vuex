<template>
    <div>
        	<span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Pakaian' }" v-on:click="setFilter('Pakaian')">Pakaian</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Elektronik' }" v-on:click="setFilter('Elektronik')">Elektronik</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Accecoris' }" v-on:click="setFilter('Accecoris')">Accecoris</span>
	</div>
</template>

<script>
export default {
name: 'navfilter',
methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
		}
	}
}
</script>