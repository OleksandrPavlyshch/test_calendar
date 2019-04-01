<template>
	<div 
		@click="dropdawnDisplayChange"
		class="calendar border border-info rounded-pill d-inline-block my-4">

		<div class="calendar-day py-2 px-3 d-inline-block text-info">
			{{dayText}}
		</div>
		<div 
			class="calendar-button py-2 px-3 d-inline-block bg-info"
			:class="{ 'shadow-lg': isShowDropdawn }">
			<i class="far fa-calendar text-white"></i>
			<div 
				@click.stop
				v-if="isShowDropdawn"
				class="calendar-dropdawn p-3 shadow border"
				>
				<div class="calendar-header">
					<i 
						@click="prevMonth"
						class="calendar-month_change fas fa-caret-left"></i>
					<div class="calendar-header-title">
						{{currentMonthName}} {{currentYear}}
					</div>
					<i 
						@click="nextMonth"
						class="calendar-month_change fas fa-caret-right"></i>
				</div>
				<div class="calendar-week_days">
					<div 
						v-for="(day, i) in weekDays"
						:key="day+i"
						class="calendar-week_day">
						{{day}}
					</div>
				</div>
				<div class="calendar-dates">
					<div 
						v-if="startGap"
						:style="{
							'gridColumn': `1 / span ${startGap}`
						}"
						class="calendar-dates-gap">
						<!-- {{startGap}} -->
					</div>
					<div 
						v-for="(day, i) in daysAtMonth"
						:key="day+i"
						class="calendar-date"
						@click='dayClickHandler(day)'
						:class="{ 'is-current': isCurrentDay(day) }">
						{{day}}
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	const weekDaysNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];


export default {
	name: 'calendar',
	data: function() {
		return {
			dayText: 'today',
			diffMonth: 0,
			isShowDropdawn: false,
			currentMonth: new Date().getMonth(),
			currentYear: new Date().getFullYear(),
		}
	},
	props: {
		startMonday: {
			type: Boolean,
			default: false,
		}
	},
	methods: {
		nextMonth() {
			this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
			this.currentMonth = (this.currentMonth + 1) % 12;
		},
		prevMonth() {
			this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
			this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
		},
		isCurrentDay(day) {
			const now = new Date(),
				thisYear = now.getFullYear(),
				thisMonth = now.getMonth(),
				thisDay = now.getDate();

			return this.currentMonth === thisMonth && this.currentYear === thisYear && day === thisDay;
		},
		dropdawnDisplayChange() {
			this.isShowDropdawn = !this.isShowDropdawn
		},
		dayClickHandler(day){
			const dateText = `${day}.${this.currentMonth+1}.${this.currentYear}`;
			this.dayText = dateText;
			this.$emit('inputCalendar', dateText);
			this.isShowDropdawn = false;
		},
	},
	watch: {
		diffMonth: function (val) {
			console.log('===diffMonth====')
			console.log(val);
		},
		currentMonth: function (val) {
			console.log('===currentMonth====')
			console.log(val);
		},
	},
	computed: {
		currentMonthName() {
			return monthNames[this.currentMonth];
		},
		weekDays() {
			if(this.startMonday) {
				weekDaysNames.push(weekDaysNames.shift());
				return weekDaysNames;
			}
			return weekDaysNames;
		},
		daysAtMonth() {
			let now = new Date();
			return new Date(this.currentYear, this.currentMonth+1, 0).getDate();
		},
		startGap(){
			let compensation = this.startMonday ? 1 : 0;
			return new Date(this.currentYear, this.currentMonth, 1).getDay() - compensation;
		}
	}

}
</script>

<style scoped lang="scss">
	$cyan: #17a2b8;
	h2 {
		color: red;
	}
	.calendar {
		cursor: pointer;
		box-shadow: 0 .5rem 1rem rgba($cyan,.15);
		&-button {
			border-radius: 0 50rem 50rem 0;
			position: relative;
		}
		&-dropdawn {
			position: absolute;
			top: 100%;
			left: 0;
			background-color: #fff;
			cursor: default;
			font-size: .8em;
			z-index: 10;
		}
		&-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			&-title {
				font-weight: 700;
			}
		}
		&-week_days {
			display:grid;
			grid-template-columns: repeat(7, 1fr);
			margin-bottom: .5em;
		}
		&-week_day {
			min-width: 40px;
			text-align: center;
			padding: .4em;
		}
		&-month_change {
			width: 1.7em;
			height: 1.7em;
			border-radius: 50%;
			text-align: center;
			line-height: 1.7;
			cursor: pointer;
			&:hover {
				background-color: #ddd;
			}
		}
		&-dates {
			display:grid;
			grid-template-columns: repeat(7, 1fr);
			&-gap {
				grid-column: 1 / span 2;
				grid-row: 1 / 1;
			}
		}
		&-date {
			text-align: center;
			padding: .4em;
			display: inline-block;
			cursor: pointer;
			background-color: #eee;
			&:hover {
				background-color: #ddd;
			}
			&.is-current {
				color: white;
				font-weight: 700;
				background-color: $cyan;
			}
		}
	}
</style>