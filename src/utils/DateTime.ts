import dayjs, { Dayjs, ConfigType, UnitTypeLong, QUnitType, OpUnitType } from 'dayjs'
import duration from 'dayjs/plugin/duration'
import minMax from 'dayjs/plugin/minMax'
import relativeTime from 'dayjs/plugin/relativeTime'
import isBetween from 'dayjs/plugin/isBetween'
import updateLocale from 'dayjs/plugin/updateLocale'

// components

dayjs.extend(duration)
dayjs.extend(minMax)
dayjs.extend(relativeTime)
dayjs.extend(isBetween)
dayjs.extend(updateLocale)

const now = dayjs()
const dateMock = '2000-06-06T12:35:00'

const DateTime = (value?: ConfigType, nullable?: boolean) => {
	if (value !== undefined && nullable) return dayjs(value)
	if (value) {
		const date = dayjs(value)

		return date
	}

	return now
}

DateTime.mock = dayjs(dateMock)

DateTime.week = (date: Dayjs = now) => {
	const monday = date.startOf('week').add(1, 'day')

	return new Array(7).fill(0).map((_, index) => {
		const day = index + 1

		return monday.day(day)
	})
}

DateTime.calendar = (date: Dayjs = now) => {
	date = date || now
	date = date.startOf('month')
	const daysInMonth = date.daysInMonth()
	const monthStartWeekDay = date.day()

	const days = 7
	const weeks = 6
	/* Grid */
	const calendarDays = weeks * days
	/*
    Days of prev month
    Sunday is 0, so if start day is Wed(3) - 1 will be offset from prev month
  */
	const prevMonthDaysOffset = monthStartWeekDay === 0 ? 6 : monthStartWeekDay - 1
	/* Days of next month */
	const nextMonthDaysOffset = calendarDays - prevMonthDaysOffset - daysInMonth

	/* Prev month days */
	const prevMonthDays = new Array(prevMonthDaysOffset)
		.fill(0)
		.map((_, index) => date.subtract(++index, 'day'))
		.reverse()

	/* Next month days */
	const nextMonthDays = new Array(nextMonthDaysOffset).fill(0).map((_, index) =>
		date
			.endOf('month')
			.startOf('day')
			.add(++index, 'day')
	)

	const currentMontDays = new Array(daysInMonth).fill(0).map((_, index) => date.date(++index))
	return [...prevMonthDays, ...currentMontDays, ...nextMonthDays]
}

DateTime.diff = (firstDate: Dayjs, secondDate: Dayjs, unit: QUnitType | OpUnitType = 'milliseconds') => {
	return firstDate.diff(secondDate, unit)
}

DateTime.isSameBy = (firstDate: Dayjs, secondDate: Dayjs, units: UnitTypeLong[] = ['millisecond']) => {
	return units.every(unit => firstDate[unit]() === secondDate[unit]())
}

DateTime.isSameDay = (firstDate: Dayjs, secondDate: Dayjs) => {
	return DateTime.isSameBy(firstDate, secondDate, ['date', 'month', 'year'])
}

DateTime.isSameMonth = (firstDate: Dayjs, secondDate: Dayjs) => {
	return DateTime.isSameBy(firstDate, secondDate, ['month', 'year'])
}

DateTime.isSameYear = (firstDate: Dayjs, secondDate: Dayjs) => {
	return DateTime.isSameBy(firstDate, secondDate, ['year'])
}

DateTime.isToday = (date: Dayjs) => {
	return DateTime.isSameDay(date, now)
}

export default DateTime
