function isWeekday(dayWeek){
	return (dayWeek.startsWith("M") ||dayWeek.startsWith("T") ||dayWeek.startsWith("W") ||dayWeek.startsWith("T") ||dayWeek.startsWith("F"));
}
console.log(isWeekday("Monday"))
console.log(isWeekday("Sunday"))