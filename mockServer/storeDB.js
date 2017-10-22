exports.degrees = [{
	id: 1,
	name: "Tecnicatura Universitaria en Programación Informática",
	subjects: [
		{id: 1, name: "Matemática"},
		{id: 2, name: "Introducción a la Programación"},
		{id: 3, name: "Organización de Computadoras"}
		],
	academicOffers: [
		{
			id: 1,
			courses: [
			{
				id: 1,
				professor: {id: 1, name: "p1"},
				subject: {id: 1, name: "Matemática"},
				timelines: [
					{id: 1, day: "Lunes", start: "18:00", end: "21:00"},
					{id: 2, day: "Miercoles", start: "18:00", end: "21:00"}
				]
			},
			{
				id: 2,
				professor: {id: 2, name: "p2"},
				subject: {id: 2, name: "Introducción a la Programación"},
				timelines: [
					{id: 3, day: "Martes", start: "18:00", end: "21:00"},
					{id: 4, day: "Jueves", start: "18:00", end: "21:00"}
				]
			},{
				id: 3,
				professor: {id: 3, name: "p3"},
				subject: {id: 3, name: "Organización de Computadoras"},
				timelines: [
					{id: 5, day: "Viernes", start: "16:00", end: "22:00"}
				]
			}],
			period: {id: 1, year: 2017, quarter: 1}
		},
		{
			id: 2,
			courses: [
			{
				id: 4,
				professor: {id: 1, name: "p1"},
				subject: {id: 1, name: "Matemática"},
				timelines: [
					{id: 6, day: "Lunes", start: "18:00", end: "21:00"},
					{id: 7, day: "Miercoles", start: "18:00", end: "21:00"}
				]
			},
			{
				id: 5,
				professor: {id: 2, name: "p2"},
				subject: {id: 2, name: "Introducción a la Programación"},
				timelines: [
					{id: 8, day: "Martes", start: "18:00", end: "21:00"},
					{id: 9, day: "Jueves", start: "18:00", end: "21:00"}
				]
			},{
				id: 6,
				professor: {id: 3, name: "p3"},
				subject: {id: 3, name: "Organización de Computadoras"},
				timelines: [
					{id: 10, day: "Viernes", start: "16:00", end: "22:00"}
				]
			}],
			period: {id: 2, year: 2017, quarter: 2}
		}
	]
}, {
	id: 2,
	name: "Licenciatura en Informática",
	subjects: [
		{id: 4, name: "Estructuras de Datos"},
		{id: 5, name: "Programación con Objetos I"},
		{id: 6, name: "Bases de Datos"}
		],
	academicOffers: [
		{
			id: 3,
			courses: [
			{
				id: 7,
				professor: {id: 4, name: "p4"},
				subject: {id: 4, name: "Estructuras de Datos"},
				timelines: [
					{id: 11, day: "Lunes", start: "18:00", end: "21:00"},
					{id: 12, day: "Miercoles", start: "18:00", end: "21:00"}
				]
			},
			{
				id: 8,
				professor: {id: 5, name: "p5"},
				subject: {id: 5, name: "Programación con Objetos I"},
				timelines: [
					{id: 13, day: "Martes", start: "18:00", end: "21:00"},
					{id: 14, day: "Jueves", start: "18:00", end: "21:00"}
				]
			},{
				id: 9,
				professor: {id: 6, name: "p6"},
				subject: {id: 6, name: "Bases de Datos"},
				timelines: [
					{id: 15, day: "Viernes", start: "16:00", end: "22:00"}
				]
			}],
			period: {id: 3, year: 2017, quarter: 1}
		},
		{
			id: 4,
			courses: [
			{
				id: 10,
				professor: {id: 4, name: "p4"},
				subject: {id: 4, name: "Estructuras de Datos"},
				timelines: [
					{id: 16, day: "Lunes", start: "18:00", end: "21:00"},
					{id: 17, day: "Miercoles", start: "18:00", end: "21:00"}
				]
			},{
				id: 11,
				professor: {id: 5, name: "p5"},
				subject: {id: 5, name: "Programación con Objetos I"},
				timelines: [
					{id: 18, day: "Martes", start: "18:00", end: "21:00"},
					{id: 19, day: "Jueves", start: "18:00", end: "21:00"}
				]
			},{
				id: 12,
				professor: {id: 6, name: "p6"},
				subject: {id: 6, name: "Bases de Datos"},
				timelines: [
					{id: 20, day: "Viernes", start: "16:00", end: "22:00"}
				]
			}],
			period: {id: 4, year: 2017, quarter: 2}
		}
	]
}];

exports.indexTimelines = 20,
exports.indexPeriod= 4,
exports.indexProfessor= 6,
exports.indexSubject= 6,
exports.indexCourses= 12,
exports.indexDegrees= 2
