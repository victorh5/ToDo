import { defineStore } from 'pinia'
import {ToDo} from '@/models'

export const useToDoStore = defineStore({
	id: 'todo-store',
	state: () => ({
		id: 0,
		list: [] as ToDo[]
	}),
	persist: true,
	actions: {
		increment(data: ToDo) {
			this.list.push(data)
			this.id++
		},
		check(id: number) {
			this.list.forEach(v => {
				if(v.id === id && v.check) v.check = false
				else if(v.id === id) v.check = true
			})
		},
		remove(id: number) {
			this.list = this.list.filter(v => v.id !== id)
		}
	}
})
